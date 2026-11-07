// Site-wide content and contact data. Page-specific texts live in the pages themselves;
// the product pages share one template and are described in src/data/produtos.mjs.

const ORIGINAL = 'https://hsconsorcios.com.br';

// The blog was not rebuilt here and stays on WordPress
export const BLOG = `${ORIGINAL}/blog/`;

const WHATSAPP = '555135648400';

// WhatsApp link, optionally with a message already typed for the visitor
export const whatsapp = (mensagem) => `https://wa.me/${WHATSAPP}${mensagem ? `?text=${encodeURIComponent(mensagem)}` : ''}`;

export const SITE = {
  nome: 'HS Consórcios',
  titulo: 'HS Consórcios – Consórcio de imóveis, veículos e investimentos',
  descricao:
    'Desde 1993 no mercado, a HS Consórcios é a maior administradora do Brasil no setor imobiliário. Consórcio de imóveis, veículos e investimentos sem juros e sem entrada. Simule agora.',
  idioma: 'pt-BR',
};

export const REDES = [
  { nome: 'Facebook', icone: 'facebook', href: 'https://www.facebook.com/HSConsorcios' },
  { nome: 'Instagram', icone: 'instagram', href: 'https://www.instagram.com/hsconsorciosoficial/' },
  { nome: 'LinkedIn', icone: 'linkedin', href: 'https://www.linkedin.com/company/hs-cons%C3%B3rcios-oficial/' },
  { nome: 'WhatsApp', icone: 'whatsapp', href: whatsapp('Olá, gostaria de obter mais informações sobre a simulação/contratação de consórcio') },
  { nome: 'YouTube', icone: 'youtube', href: 'https://www.youtube.com/c/hsconsorciosoficial' },
];

export const CONTATO = {
  razaoSocial: 'HS Administradora de Consórcios S.A.',
  cnpj: '73.516.106/0001-16',
  endereco: ['Rodovia BR 116, Km 224, 7.070', 'Portal da Serra, Dois Irmãos – RS', 'CEP 93950-000'],
  telefones: [
    { titulo: 'Ligue-nos', numero: '(51) 3564 8400', tel: '+555135648400' },
    { titulo: 'Central de Vendas', numero: '0800 644 9007', tel: '08006449007' },
    { titulo: 'Ouvidoria', numero: '0800 648 1213', tel: '08006481213' },
  ],
  whatsapp: whatsapp('Olá, gostaria de obter mais informações sobre a simulação/contratação de consórcio'),
};

// External systems. The client area link had a stale Google `_gl` parameter pasted into it; it was dropped.
export const SISTEMAS = {
  areaCliente: 'https://autoatendimento.hsconsorcios.com.br/',
  valoresReceber: 'https://hsc-autoatendimento.hsconsorcios.com.br/',
  appStore: 'https://apps.apple.com/br/app/hs-consorcios/id1567388780',
  googlePlay: 'https://play.google.com/store/apps/details?id=com.autoatendimento.hsconsorcios',
  bancoCentral: 'https://www.bcb.gov.br/',
  abac: 'https://abac.org.br/',
};

// PDFs copied from the WordPress uploads into public/documentos/
export const DOCUMENTOS = {
  requisitosCredito: '/documentos/requisitos-liberacao-credito.pdf',
  regulamentoGeral: '/documentos/regulamento-geral.pdf',
  avisoPrivacidade: '/documentos/aviso-de-privacidade.pdf',
  politicaCookies: '/documentos/politica-de-cookies.pdf',
  educacaoFinanceira: '/documentos/educacao-financeira.pdf',
  codigoEtica: '/documentos/codigo-de-etica.pdf',
  segurancaCibernetica: '/documentos/politica-seguranca-cibernetica.pdf',
};

// Top bar, above the red menu
export const ATALHOS = [
  { titulo: 'Onde encontrar', href: '/onde-encontrar/' },
  { titulo: 'Contato', href: '/contato/' },
  { titulo: 'Área do Cliente', href: SISTEMAS.areaCliente },
  { titulo: 'Valores a Receber', href: SISTEMAS.valoresReceber },
];

// The "30 Anos" item of the WordPress menu pointed to an unpublished page (404) and was left out
export const NAVEGACAO = [
  { titulo: 'Home', href: '/' },
  { titulo: 'Sobre nós', href: '/sobre-nos/' },
  { titulo: 'Imóveis', href: '/imoveis/' },
  { titulo: 'Veículos', href: '/veiculos/' },
  { titulo: 'Investimentos', href: '/investimentos/' },
  { titulo: 'Entenda + sobre consórcio', href: '/entenda-mais-sobre-consorcio/' },
  { titulo: 'Blog', href: BLOG },
];

export const RODAPE = [
  {
    titulo: 'Sobre Nós',
    links: [
      { titulo: 'História e Valores', href: '/sobre-nos/#historia-valores' },
      { titulo: 'Demonstrações Financeiras', href: '/sobre-nos/#demonstracoes' },
      { titulo: 'Governança', href: '/governanca/' },
      { titulo: 'Trabalhe Conosco', href: '/sobre-nos/#trabalheconosco' },
      { titulo: 'LGPD', href: '/lgpd/' },
      { titulo: 'Aviso de Privacidade', href: DOCUMENTOS.avisoPrivacidade },
      { titulo: 'Política de Cookies', href: DOCUMENTOS.politicaCookies },
    ],
  },
  {
    titulo: 'Tipos de Consórcios',
    links: [
      { titulo: 'Imóveis', href: '/imoveis/' },
      { titulo: 'Veículos', href: '/veiculos/' },
      { titulo: 'Investimentos', href: '/investimentos/' },
      { titulo: 'Simulador', href: '/simulador/' },
    ],
  },
  {
    titulo: 'Entenda+',
    links: [
      { titulo: 'Como fazer um consórcio?', href: '/entenda-mais-sobre-consorcio/#como-funciona' },
      { titulo: 'Lance', href: '/entenda-mais-sobre-consorcio/#lance' },
      { titulo: 'Meia Parcela', href: '/entenda-mais-sobre-consorcio/#meia-parcela' },
      { titulo: 'Regulamento Geral', href: '/entenda-mais-sobre-consorcio/#regulamento' },
      { titulo: 'Educação Financeira', href: DOCUMENTOS.educacaoFinanceira },
    ],
  },
  {
    titulo: 'Acesso rápido',
    links: [
      { titulo: 'Onde Encontrar', href: '/onde-encontrar/' },
      { titulo: 'Blog', href: BLOG },
      { titulo: 'Área do Cliente', href: SISTEMAS.areaCliente },
      { titulo: 'Valores a Receber', href: SISTEMAS.valoresReceber },
    ],
  },
  {
    titulo: 'Contato',
    links: [
      { titulo: 'Fale Conosco', href: '/contato/' },
      { titulo: 'Canal de Denúncias', href: '/canal-de-denuncias/' },
      { titulo: 'Relatórios da Ouvidoria', href: '/sobre-nos/#ouvidoria' },
      { titulo: 'Perguntas Frequentes', href: '/contato/#perguntas-frequentes' },
    ],
  },
];

// Home carousel. The texts are part of the images, so `alt` repeats them.
export const BANNERS = [
  {
    imagem: 'banner-milhao',
    href: '/simulador/',
    alt: 'Seu próximo grande passo começa aqui. Invista junto de pessoas com objetivos ambiciosos como os seus, com segurança e rentabilidade. Simule agora!',
  },
  {
    imagem: 'banner-golpe',
    alt: 'Atenção! A HS Consórcios alerta sobre a existência de páginas falsas e contatos fraudulentos que utilizam indevidamente a marca. O site oficial é www.hsconsorcios.com.br; em caso de dúvida, ligue (51) 3564 8400.',
  },
  { imagem: 'banner-futuro', href: '/investimentos/', alt: 'Juntos para investir nas suas conquistas. Conte com a HS Consórcios para o seu próximo investimento.' },
  { imagem: 'banner-simulacao', href: '/simulador/', alt: 'Simule seu investimento com a HS Consórcios.' },
  { imagem: 'banner-investidores', href: '/investimentos/', alt: 'Grupo para investidores da HS Consórcios.' },
  { imagem: 'banner-redes', href: 'https://www.instagram.com/hsconsorciosoficial', alt: 'Siga a HS Consórcios nas redes sociais.' },
];

export const VIDEOS = [
  { id: 'AfjnxCIL1EM', imagem: 'video-3', titulo: 'Um milhão de motivos' },
  { id: 'dZgJe5R1WRk', imagem: 'video-4', titulo: 'Seus projetos são ambiciosos?' },
  { id: 'f948koZ42ts', imagem: 'video-5', titulo: 'Invista com segurança' },
  { id: 'znga3mfxD2A', imagem: 'video-1', titulo: 'HS Consórcios – vídeo 4' },
  { id: 'wj-BVPFoMJk', imagem: 'video-2', titulo: 'HS Consórcios – vídeo 5' },
];

export const NUMEROS = [
  { icone: 'ico-premio', texto: 'Maior Administradora do Brasil no setor imobiliário' },
  { icone: 'ico-chave', prefixo: '+ de', valor: '3 bilhões', texto: 'em bens entregues no ano de 2025' },
  { icone: 'ico-estrelas', prefixo: '+ de', valor: '2.600', texto: 'contemplações mensais' },
  { icone: 'ico-acordo', prefixo: '+ de', valor: '1.400', texto: 'corretores' },
  { icone: 'ico-investimento', prefixo: '+ de', valor: '410 mil', texto: 'cotas ativas' },
];

export const FAQ = [
  {
    pergunta: 'O que é carta de crédito?',
    resposta: 'Carta de crédito é o valor disponível para a aquisição do bem de acordo com contrato realizado com a administradora.',
  },
  {
    pergunta: 'O que é um grupo?',
    resposta:
      'Grupo é uma sociedade de fato constituída por consorciados reunidos pela administradora para os fins estabelecidos pelo consórcio, qual seja, o da aquisição de bens móveis ou imóveis, por meio de autofinanciamento, com prazo de duração previamente estabelecido, cujo encerramento ocorrerá quando plenamente forem atendidos os seus objetivos.',
  },
  {
    pergunta: 'O que é lance?',
    resposta:
      'Lance é um valor ofertado pelo cliente com o intuito de antecipar a sua contemplação. Todos os consorciados em dia com a parcela mensal podem efetuar lances, de acordo com as características do grupo ao qual participam. Os lances estão divididos nas modalidades Livre, Limitado, Retido, Fixo e Fidelidade.',
  },
  { pergunta: 'O que significa uma cota?', resposta: 'Cota é o número de identificação de cada consorciado participante no Grupo.' },
  {
    pergunta: 'Quais bens posso adquirir através do consórcio?',
    resposta:
      'É possível a aquisição de praticamente qualquer bem, seja ele de fabricação nacional ou estrangeira, pois a HS Consórcios disponibiliza cartas de créditos dos mais variados valores para a aquisição de Automóveis, Motocicletas, Imóveis e Caminhões, Maquinário Agrícola, Náutico ou Placas de Energia Solar.',
  },
];

// Credit range offered by the simulator for each category, in reais
export const SIMULADOR = [
  { id: 'imoveis', titulo: 'Imóveis', icone: 'casa', minimo: 100_000, maximo: 2_000_000 },
  { id: 'veiculos', titulo: 'Veículos', icone: 'carro', minimo: 20_000, maximo: 800_000 },
  { id: 'investimentos', titulo: 'Investimentos', icone: 'moedas', minimo: 20_000, maximo: 2_000_000 },
];
