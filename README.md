# HS Consórcios

Versão estática do site da [HS Consórcios](https://hsconsorcios.com.br), uma empresa do Grupo Herval, feita em [Astro](https://astro.build) para substituir o WordPress + Elementor. Não há banco de dados nem painel: cada alteração no repositório gera o site de novo.

**Estado atual:** todas as páginas do menu e do rodapé estão prontas (24 no total): home, Sobre nós, Governança, Entenda + sobre consórcio, Onde encontrar, Contato, Canal de Denúncias, LGPD, Simulador, as 3 páginas de produto com as 11 subpáginas e a 404. O **blog** não foi migrado e continua no WordPress (o link "Blog" do menu e do rodapé leva para lá). Veja abaixo o que ainda falta para publicar.

## Rodar no computador

Requer Node.js 22.23 ou mais novo.

```bash
npm install
npm run dev        # site em http://localhost:4321, atualiza ao salvar
npm run build      # gera o site final em dist/
npm run preview    # serve o dist/ para conferir antes de publicar
npm run verificar  # depois do build: procura links internos quebrados
npm run unidades   # baixa de novo a lista do "Onde encontrar" da API do WordPress
npm run icones     # só se o ícone ou o logo mudarem: refaz favicons e og.jpg
```

## Onde fica cada coisa

| Arquivo | O que tem |
|---|---|
| `src/config.mjs` | Contatos, redes, sistemas externos, documentos, menu, rodapé, banners da home, vídeos, números, perguntas frequentes curtas e faixas do simulador |
| `src/data/produtos.mjs` | Conteúdo das 14 páginas de produto (Imóveis, Veículos, Investimentos e subpáginas) e as abas de cada grupo |
| `src/data/unidades.json` | Parceiros do "Onde encontrar" por estado e cidade, gerado por `npm run unidades` |
| `src/pages/` | Uma página por arquivo; `[...produto].astro` desenha todas as páginas de produto |
| `src/components/` | Cabeçalho, rodapé, simulador, carrosséis (banners, vídeos, linha do tempo), perguntas frequentes, canais de atendimento |
| `src/assets/img/` | Logos, ícones, banners e fotos baixados do WordPress. São convertidos para WebP no build |
| `public/documentos/` | PDFs (demonstrações financeiras, relatórios da Ouvidoria, políticas, regulamento), copiados do WordPress com nomes limpos |

Para publicar uma nova demonstração financeira ou relatório da Ouvidoria: coloque o PDF em `public/documentos/` e acrescente a linha correspondente em `DEMONSTRACOES` ou `OUVIDORIA` no topo de `src/pages/sobre-nos.astro`.

## Publicação

`.github/workflows/deploy-pages.yml` publica no GitHub Pages a cada push na `main`. Em **Settings > Pages**, a fonte precisa estar em **GitHub Actions**. Sem domínio próprio o site fica em `talys-marques.github.io/hs-consorcios/`; com um domínio configurado ali, ele passa a rodar na raiz, sem mudar nada no código.

Enquanto o endereço for `*.github.io`, o site é tratado como prévia: todas as páginas levam `<meta name="robots" content="noindex, nofollow">` e o `robots.txt` bloqueia tudo, para o Google não indexar esta cópia junto com o site oficial. Quando o build for feito para o domínio final (`SITE_URL` de outro domínio), isso sai sozinho e o `robots.txt` passa a apontar o sitemap (`previa` em `src/lib/site.mjs`).

Para gerar localmente como no GitHub Pages:

```bash
SITE_URL=https://talys-marques.github.io BASE_PATH=/hs-consorcios npm run build
BASE_PATH=/hs-consorcios npm run verificar
```

No Git Bash do Windows, coloque `MSYS_NO_PATHCONV=1` antes dos comandos; sem isso ele troca `/hs-consorcios` por `C:/Program Files/Git/hs-consorcios`.

## O que ainda falta para publicar

- **Formulários sem backend:** o **Simulador**, o **Canal de Denúncias** e os **dois formulários da LGPD** funcionam na tela, mas não enviam nada; mostram um aviso de prévia. No WordPress eles eram enviados pelo `admin-ajax.php`. É preciso definir para onde vão (função serverless ou sistema da HS). O Canal de Denúncias precisa de sigilo e registro.
- **Contato:** este formulário **já envia de verdade**, direto para a Emarsys (`link.hsconsorcios.com.br`), com os mesmos campos do WordPress. As opções "Cliente HS Consórcios? Sim/Não" estão sem valor, igual ao original; vale conferir na Emarsys qual valor ela espera.
- **Blog e páginas de campanha:** continuam no WordPress (blog, "Seja nosso corretor" por estado, workshops, convenção, Centuriões). Se o WordPress for desligado, precisam de outro destino.
- **Rastreamento:** GTM, GA4, Google Ads, Clarity e Emarsys não foram incluídos. Entram junto com um aviso de cookies na versão final.
- **Onde encontrar:** a lista é uma cópia da API do WordPress em novembro de 2026. Enquanto o WordPress existir, `npm run unidades` atualiza; depois, a lista precisa de outra fonte.

## O que mudou em relação ao WordPress

- **Visual modernizado, mesma identidade:** cores, fonte, logo e banners são os originais. Mudaram os acabamentos: títulos maiores com um rótulo vermelho acima, botões arredondados, cartões, faixas e formulários no mesmo estilo em todas as páginas.
- **Ícones:** os de categorias, benefícios e valores eram Font Awesome e SVGs do Elementor; aqui são ícones de linha (Lucide). Os ícones de "Nossos números" e "Por que um consórcio" são os originais.
- **Títulos:** o WordPress não tinha nenhum H1. Cada página ganhou um H1 (na home ele fica oculto, porque o título já está na imagem do banner), além de meta description e Open Graph.
- **Documentos:** os 27 PDFs passaram a ser servidos pelo próprio site. A Governança mostra também o Aviso de Privacidade e a Política de Cookies, que antes só estavam no rodapé.
- **Entenda + sobre consórcio:** a seção "Como fazer um consórcio? Entenda passo a passo" só tinha o título no WordPress. Ganhou 4 passos escritos a partir das respostas das perguntas frequentes; **o texto precisa de revisão da HS**.
- **Sobre nós:** os destaques ao lado do texto (1993, 900 parceiros, limites de crédito) foram tirados do próprio texto da página. A linha do tempo continua com as imagens originais (o texto está nas imagens).
- **Contato:** o link do Canal de Denúncias apontava para `demo.happ.com.br`, um endereço de demonstração de outro sistema; aqui leva à página do próprio site. Também foram corrigidos erros de digitação nas respostas (ex.: "defini", "valos", "Fundo de Garantia Social").
- **LGPD:** o e-mail publicado é `lgpd@hsconsorcio.com.br` (sem o "s" do domínio do site). Foi mantido como está, mas vale confirmar se está certo.
- **Vídeos:** o player do YouTube (versão sem cookies) só carrega quando o visitante clica.
- **Menu:** o item "30 Anos" levava a uma página não publicada (404) e foi retirado. O link da Área do Cliente perdeu o parâmetro `_gl` antigo que estava colado nele.
- **Banner de Investimentos no celular:** o WordPress mostrava a imagem de "Salas comerciais" por engano; aqui é usada a versão desktop.
- **Simulador:** a página `/simulador/` aceita `?categoria=imoveis|veiculos|investimentos`, usado pela aba lateral "Simule" e pelos botões das páginas de produto.
