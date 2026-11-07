#!/usr/bin/env node
// Downloads the "Onde encontrar" units from the WordPress API into src/data/unidades.json:
// states -> cities -> units (partners with name, phone, e-mail and address).
// Run it again whenever the list changes on the WordPress side: `npm run unidades`.

import { writeFileSync } from 'node:fs';

const API = 'https://hsconsorcios.com.br/wp-admin/admin-ajax.php?action=';
const SAIDA = 'src/data/unidades.json';
const SIMULTANEAS = 4;

const chamar = async (acao, campos) => {
  const corpo = campos && new FormData();
  for (const [k, v] of Object.entries(campos ?? {})) corpo.append(k, v);
  for (let tentativa = 1; ; tentativa++) {
    try {
      const resposta = await fetch(API + acao, { method: campos ? 'POST' : 'GET', body: corpo });
      if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);
      return await resposta.json();
    } catch (erro) {
      if (tentativa === 3) throw new Error(`${acao} ${JSON.stringify(campos)}: ${erro.message}`);
      await new Promise((r) => setTimeout(r, 1500 * tentativa));
    }
  }
};

// Runs `tarefa` over `itens` with a few requests at a time, keeping the order
const emLotes = async (itens, tarefa) => {
  const resultado = new Array(itens.length);
  let proximo = 0;
  const trabalhador = async () => {
    while (proximo < itens.length) {
      const i = proximo++;
      resultado[i] = await tarefa(itens[i]);
    }
  };
  await Promise.all(Array.from({ length: SIMULTANEAS }, trabalhador));
  return resultado;
};

// The API returns some names with HTML entities (e.g. "&amp;")
const ENTIDADES = { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', nbsp: ' ' };
const limparTexto = (valor) =>
  (valor ?? '')
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&([a-z]+);/gi, (m, n) => ENTIDADES[n.toLowerCase()] ?? m)
    .trim();

const titulo = (texto) => texto.toLowerCase().replace(/(^|[\s'-])(\p{L})/gu, (_, sep, letra) => sep + letra.toUpperCase()).replace(/\b(De|Da|Do|Das|Dos|E)\b/g, (p) => p.toLowerCase());

const estados = await chamar('api_ondeencontrar_estados');
const dados = [];
let totalUnidades = 0;

for (const estado of estados) {
  const cidades = (await chamar('api_ondeencontrar_cidades', { uf: estado.id })) || [];
  const comUnidades = await emLotes(cidades, async (cidade) => {
    const unidades = (await chamar('api_ondeencontrar_search', { estado_id: estado.id, cidade_id: cidade.id })) || [];
    return {
      nome: titulo(cidade.label),
      unidades: unidades.map((u) => ({ nome: limparTexto(u.nome), telefone: limparTexto(u.telefone), email: limparTexto(u.email).toLowerCase(), endereco: limparTexto(u.endereco) })),
    };
  });
  const validas = comUnidades.filter((c) => c.unidades.length).sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
  totalUnidades += validas.reduce((n, c) => n + c.unidades.length, 0);
  dados.push({ uf: estado.label, cidades: validas });
  console.log(`${estado.label}: ${validas.length} cidades`);
}

writeFileSync(SAIDA, JSON.stringify(dados, null, 1) + '\n');
console.log(`${dados.length} estados, ${totalUnidades} unidades em ${SAIDA}`);
