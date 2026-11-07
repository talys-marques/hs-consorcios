// Product pages: the three groups (/imoveis/, /veiculos/, /investimentos/) and their subpages,
// all drawn by src/pages/[...produto].astro. Texts come from the WordPress pages.
// `hero` and `destaque` are banners in src/assets/img/ (with a `-mobile` version when there is one).

const BENEFICIOS_IMOVEIS = [
  { icone: 'calendario', texto: 'Planos que se encaixam no seu orçamento.' },
  { icone: 'calendario-ok', texto: 'Grupos com prazos de até 240 meses.' },
  { icone: 'email', texto: 'Cartas de Crédito de 100 mil a 2 milhões de reais.' },
  { icone: 'cifrao', texto: 'Você não paga juros nem entrada.' },
  { icone: 'carteira', texto: 'Possibilidade de utilizar o FGTS: como lance ou para amortizar parcela.' },
  { icone: 'cartao', texto: 'Créditos para pessoa física e jurídica.' },
];

const PRAZO_IMOVEIS =
  'Escolha a melhor opção para o seu orçamento entre grupos de até 240 meses, podendo ofertar lances para aumentar suas chances de contemplação. Ao ser contemplado, você tem o poder de compra pelo valor à vista do imóvel e pode escolher onde e com quem irá comprá-lo.';

const BASE_VEICULOS = [
  { icone: 'calendario', texto: 'Planos que se encaixam no seu orçamento.' },
  { icone: 'calendario-ok', texto: 'Grupos com prazos de até 140 meses.' },
  { icone: 'email', texto: 'Cartas de Crédito de 20 mil a 800 mil reais.' },
  { icone: 'cifrao', texto: 'Você não paga juros nem entrada.' },
];
const SUPORTE = { icone: 'conversa', texto: 'Equipe de vendas preparada para dar suporte e tirar todas as suas dúvidas.' };
const MEIA_PARCELA = { icone: 'tesoura', texto: 'Meia parcela até a contemplação.' };
const LIBERDADE = { icone: 'carteira', texto: 'Liberdade de escolher onde e com quem quer comprar o seu veículo.' };

const beneficiosVeiculos = (usado, bem = 'veículo') => [
  ...BASE_VEICULOS,
  { icone: usado, texto: 'Seu veículo usado vale como lance.' },
  MEIA_PARCELA,
  SUPORTE,
  LIBERDADE,
  { icone: 'dinheiro', texto: `Você negocia a compra do seu ${bem} novo pelo valor à vista.` },
];

const LANCE_VEICULOS =
  'Existem diversos grupos com prazos de até 140 meses, para que você escolha o prazo e a prestação que se adapte melhor ao seu orçamento.';

const BENEFICIOS_INVESTIMENTOS = [
  { icone: 'calendario', texto: 'Planos que se encaixam no seu orçamento.' },
  { icone: 'cofrinho', texto: 'Poupança Programada.' },
  { icone: 'calendario-ok', texto: 'Grupos com prazos de até 240 meses.' },
  { icone: 'email', texto: 'Cartas de Crédito de 20 mil a 2 milhões de reais.' },
  { icone: 'cifrao', texto: 'Aquisição de bem sem pagar juros nem entrada.' },
  { icone: 'cartao', texto: 'Crédito para pessoa física e jurídica.' },
  MEIA_PARCELA,
  SUPORTE,
];

const PATRIMONIO = {
  icone: 'ico-grafico',
  titulo: 'Aumentar o patrimônio',
  texto:
    'O consórcio é uma forma de aumentar seu patrimônio, o consorciado pode adquirir uma ou mais cartas de crédito para comprar bens. Com o consórcio o cliente não precisa esperar juntar o dinheiro para realizar a compra, visto que pode ser contemplado antes do prazo, assim poderá realizar a aquisição após a contemplação. Com planejamento o consorciado pode garantir o aumento do seu patrimônio, pagando pouco por mês, sem descapitalizar, com segurança e tranquilidade.',
};
const APOSENTADORIA = {
  icone: 'ico-escudo',
  titulo: 'Reforçar a aposentadoria',
  texto:
    'Nunca é cedo para pensar no futuro! O investimento em consórcio pode ser o mesmo capital investido na previdência privada. No consórcio, o dinheiro rende muito mais! Para o reforço da aposentadoria, o consorciado pode adquirir imóveis e viver com renda de aluguéis, garantindo, assim, o seu futuro e da sua família.',
};

const MOTIVOS_IMOVEIS = { titulo: 'Por que um consórcio de imóvel?', itens: [PATRIMONIO, APOSENTADORIA] };

const MOTIVOS_INVESTIMENTOS = {
  titulo: 'Investindo em consórcio, você pode:',
  itens: [
    {
      icone: 'ico-grafico',
      titulo: 'Aumentar o patrimônio',
      texto:
        'O consórcio permite que o cliente adquira uma ou mais cartas de crédito para comprar bens, sem juros, sem entrada e com parcelas flexíveis. Com planejamento, o consorciado pode garantir o aumento do seu patrimônio, pagando pouco por mês, sem descapitalizar, com segurança e tranquilidade.',
    },
    {
      icone: 'ico-escudo',
      titulo: 'Reforçar a aposentadoria',
      texto:
        'Nunca é cedo demais para pensar no futuro! O investimento em consórcio pode ser o mesmo capital investido na previdência privada, porém, com uma rentabilidade muito maior. Para o reforço da aposentadoria, o consorciado pode adquirir imóveis e viver com a renda passiva de aluguéis.',
    },
    {
      icone: 'ico-poupanca',
      titulo: 'Poupar',
      texto:
        'O consórcio também é conhecido como “poupança forçada” ou “poupança programada”, ideal para pessoas que muitas vezes tropeçam na determinação de guardar dinheiro. É possível escolher planos com parcelas que não comprometem o orçamento e, ainda, o consorciado pode ser sorteado antes de juntar o montante e adquirir o bem. Educadores financeiros afirmam: a vantagem do consórcio é fazer com que pessoas que não conseguem poupar possam acumular as reservas necessárias para a realização de uma conquista.',
    },
  ],
};

// Investor group banner, shown on every investment page
const GRUPO_INVESTIDORES = { id: 'grupo-para-investidores', imagem: 'hero-investidores', alt: 'Grupo para investidores da HS Consórcios: cotas únicas de 2 milhões com meia parcela até a contemplação.' };

// Row of tabs at the top of each group's pages
export const CATEGORIAS = {
  imoveis: [
    { titulo: 'Casa ou Apartamento', icone: 'casa', href: '/imoveis/' },
    { titulo: 'Construir ou Reformar', icone: 'martelo', href: '/imoveis/reformar/' },
    { titulo: 'Salas Comerciais', icone: 'predio', href: '/imoveis/salas-comerciais/' },
    { titulo: 'Terrenos', icone: 'mapa', href: '/imoveis/terrenos/' },
  ],
  veiculos: [
    { titulo: 'Automóveis', icone: 'carro', href: '/veiculos/' },
    { titulo: 'Caminhões', icone: 'caminhao', href: '/veiculos/caminhoes/' },
    { titulo: 'Utilitários', icone: 'onibus', href: '/veiculos/utilitarios/' },
    { titulo: 'Agrícola', icone: 'trator', href: '/veiculos/agricola/' },
    { titulo: 'Náutico', icone: 'barco', href: '/veiculos/nautico/' },
    { titulo: 'Energia Solar', icone: 'sol', href: '/veiculos/energia-solar/' },
  ],
  investimentos: [
    { titulo: 'Bens', icone: 'diamante', href: '/investimentos/' },
    { titulo: 'Reforço Aposentadoria', icone: 'guarda-chuva', href: '/investimentos/reforco-aposentadoria/' },
    { titulo: 'Poupança', icone: 'cofrinho', href: '/investimentos/poupanca/' },
    { titulo: 'Renda Extra', icone: 'tendencia', href: '/investimentos/renda-extra/' },
    { titulo: 'Grupo para Investidores', icone: 'usuarios', href: '#grupo-para-investidores' },
  ],
};

export const PRODUTOS = [
  // ---------- Imóveis ----------
  {
    caminho: 'imoveis',
    grupo: 'imoveis',
    titulo: 'Consórcio de Imóveis',
    descricao: 'Consórcio para casa ou apartamento sem juros e sem entrada, com cartas de crédito de 100 mil a 2 milhões de reais e grupos de até 240 meses.',
    hero: { imagem: 'hero-imoveis', alt: 'Seu próximo lar começa com planejamento. Consórcio para imóveis, sem juros e sem entrada. Invista agora.' },
    beneficios: BENEFICIOS_IMOVEIS,
    resumo: ['Seja para adquirir a casa própria, o lar dos sonhos ou o apartamento com a melhor vista, nosso Consórcio Imobiliário ajuda você a realizar.', PRAZO_IMOVEIS],
    possibilidades: {
      titulo: 'Com o Consórcio para Casa ou Apartamento, você pode:',
      itens: ['Sair do aluguel.', 'Conquistar seu imóvel na praia, serra ou campo.', 'Aumentar seu patrimônio.', 'Ter o poder de compra pelo valor à vista do imóvel.'],
    },
    motivos: MOTIVOS_IMOVEIS,
  },
  {
    caminho: 'imoveis/reformar',
    grupo: 'imoveis',
    titulo: 'Consórcio para Construir ou Reformar',
    descricao: 'Consórcio imobiliário para construir ou reformar sem juros e sem entrada, com cartas de crédito de 100 mil a 2 milhões de reais.',
    hero: { imagem: 'hero-reformar', alt: 'Consórcio para reforma ou construção da HS Consórcios.' },
    beneficios: BENEFICIOS_IMOVEIS,
    resumo: [
      'Nosso Consórcio Imobiliário possibilita que aquela tão esperada reforma da sua casa finalmente saia do papel. Além disso, você também pode adquirir crédito para construir o lar dos seus sonhos, onde você quiser.',
      PRAZO_IMOVEIS,
    ],
    possibilidades: {
      titulo: 'Com o Consórcio para Reformas ou Construções, você pode:',
      itens: ['Planejar e construir a casa dos seus sonhos.', 'Tirar do papel a reforma que estava planejando.', 'Reformar o prédio comercial da sua empresa.'],
    },
    motivos: MOTIVOS_IMOVEIS,
  },
  {
    caminho: 'imoveis/salas-comerciais',
    grupo: 'imoveis',
    titulo: 'Consórcio para Salas Comerciais',
    descricao: 'Consórcio imobiliário para salas, pontos e prédios comerciais, sem juros e sem entrada, com grupos de até 240 meses.',
    hero: { imagem: 'hero-salas-comerciais', alt: 'Consórcio para salas comerciais da HS Consórcios.' },
    beneficios: BENEFICIOS_IMOVEIS,
    resumo: [
      'Invista no crescimento da sua empresa com o nosso Consórcio Imobiliário. Aqui você encontra o plano ideal para adquirir uma sala maior, um ponto comercial melhor ou ainda seu próprio imóvel empresarial.',
      PRAZO_IMOVEIS,
    ],
    possibilidades: {
      titulo: 'Com o Consórcio para Imóveis Comerciais, você pode:',
      itens: ['Sair do aluguel e conquistar o imóvel próprio da sua empresa.', 'Adquirir uma sala ou prédio comercial maior.', 'Ter o poder de compra pelo valor à vista do imóvel.'],
    },
    motivos: MOTIVOS_IMOVEIS,
  },
  {
    caminho: 'imoveis/terrenos',
    grupo: 'imoveis',
    titulo: 'Consórcio para Terrenos',
    descricao: 'Consórcio imobiliário para comprar terrenos na cidade, no campo, na serra ou na praia, sem juros e sem entrada.',
    hero: { imagem: 'hero-terrenos', alt: 'Consórcio para terrenos da HS Consórcios.' },
    beneficios: BENEFICIOS_IMOVEIS,
    resumo: [
      'Na cidade, no campo, na serra ou na praia. Nosso Consórcio Imobiliário oferece crédito para a compra de terrenos, com a liberdade de escolher o lugar ideal para você.',
      PRAZO_IMOVEIS,
    ],
    possibilidades: {
      titulo: 'Com o Consórcio para Terrenos, você pode:',
      itens: [
        'Adquirir seu próprio terreno na cidade, no campo, na praia ou na serra.',
        'Conquistar o espaço para ter o seu próprio sítio ou chácara.',
        'Ter o poder de compra pelo valor à vista do terreno.',
      ],
    },
    motivos: MOTIVOS_IMOVEIS,
  },

  // ---------- Veículos ----------
  {
    caminho: 'veiculos',
    grupo: 'veiculos',
    titulo: 'Consórcio de Veículos',
    descricao: 'Consórcio de automóveis sem juros e sem entrada, com cartas de crédito de 20 mil a 800 mil reais e grupos de até 140 meses.',
    hero: { imagem: 'hero-veiculos', alt: 'Do primeiro carro à troca do seu veículo. Planos flexíveis que cabem no seu orçamento. Invista agora.' },
    beneficios: beneficiosVeiculos('carro', 'automóvel'),
    resumo: [
      `Nosso Consórcio de Veículos é a sua oportunidade para conquistar o primeiro carro ou renovar para o modelo que sempre sonhou. ${LANCE_VEICULOS}`,
      'Na maioria dos grupos, você pode usar parte do seu crédito ou até mesmo ofertar o valor de venda do seu carro usado, como lance, aumentando suas chances de ser contemplado.',
    ],
    possibilidades: {
      titulo: 'Com o Consórcio de Veículos, você pode:',
      itens: [
        'Conquistar o primeiro veículo.',
        'Experimentar a liberdade de ter o carro próprio, não dependendo mais de carona ou de transporte público.',
        'Ter o poder de compra pelo valor à vista do veículo.',
      ],
    },
  },
  {
    caminho: 'veiculos/caminhoes',
    grupo: 'veiculos',
    titulo: 'Consórcio de Caminhões',
    descricao: 'Consórcio de caminhões para renovar o veículo pesado ou aumentar a frota, sem juros e sem entrada, com grupos de até 140 meses.',
    hero: { imagem: 'hero-caminhoes', alt: 'Consórcio de caminhões da HS Consórcios.' },
    beneficios: beneficiosVeiculos('caminhao'),
    resumo: [
      `Renove seu veículo pesado ou aumente a frota da sua empresa com o nosso Consórcio de Veículos. ${LANCE_VEICULOS}`,
      'Na maioria dos grupos, você pode usar parte do seu crédito ou até mesmo ofertar o valor de venda do seu carro usado, como lance, aumentando suas chances de ser contemplado.',
    ],
    possibilidades: {
      titulo: 'Com o Consórcio de Caminhões, você pode:',
      itens: ['Conquistar o primeiro veículo.', 'Aumentar ou renovar a frota da sua empresa.', 'Ter o poder de compra pelo valor à vista do veículo.'],
    },
  },
  {
    caminho: 'veiculos/utilitarios',
    grupo: 'veiculos',
    titulo: 'Consórcio de Utilitários',
    descricao: 'Consórcio de veículos utilitários para renovar ou aumentar a frota do seu negócio, sem juros e sem entrada.',
    hero: { imagem: 'hero-utilitarios', alt: 'Consórcio de utilitários da HS Consórcios.' },
    beneficios: beneficiosVeiculos('caminhao'),
    resumo: [
      `Invista no seu negócio com o nosso Consórcio de Veículos. Aqui você encontra o plano ideal para renovar ou aumentar sua frota de veículos utilitários. ${LANCE_VEICULOS}`,
      'Na maioria dos grupos, você pode usar parte do seu crédito ou até mesmo ofertar seu veículo usado como lance, aumentando as suas chances de ser contemplado.',
    ],
    possibilidades: {
      titulo: 'Com o Consórcio de Utilitários, você pode:',
      itens: ['Conquistar o primeiro veículo.', 'Aumentar ou renovar a frota da sua empresa.', 'Ter o poder de compra pelo valor à vista do veículo.'],
    },
  },
  {
    caminho: 'veiculos/agricola',
    grupo: 'veiculos',
    titulo: 'Consórcio de Maquinário Agrícola',
    descricao: 'Consórcio de máquinas e equipamentos agrícolas para expandir o seu negócio rural, sem juros e sem entrada.',
    hero: { imagem: 'hero-agricola', alt: 'Consórcio de maquinário agrícola da HS Consórcios.' },
    beneficios: [
      ...BASE_VEICULOS,
      { icone: 'joinha', texto: 'Maquinários com até 5 anos de uso e registro no RENAGRO.' },
      MEIA_PARCELA,
      { icone: 'chave', texto: 'A garantia é o próprio bem.' },
      { icone: 'tendencia', texto: 'Somente grupos com INPC e IPCA como indexador de reajuste.' },
      SUPORTE,
      LIBERDADE,
      { icone: 'dinheiro', texto: 'Você negocia a compra do seu veículo novo pelo valor à vista.' },
    ],
    resumo: [
      'Nosso Consórcio de Maquinário Agrícola possibilita que você renove suas máquinas e equipamentos ou expanda a capacidade produtiva do seu negócio rural, trazendo mais tecnologia para o seu trabalho com parcelas que se adaptam ao seu orçamento.',
    ],
    possibilidades: {
      titulo: 'Com o Consórcio para Maquinário Agrícola, você pode:',
      itens: ['Expandir o seu negócio rural.', 'Trazer mais tecnologia para o campo.', 'Ter o poder de compra pelo valor à vista do maquinário.'],
    },
  },
  {
    caminho: 'veiculos/nautico',
    grupo: 'veiculos',
    titulo: 'Consórcio Náutico',
    descricao: 'Consórcio náutico para jet ski, veleiro ou lancha com até 5 anos de fabricação, sem juros e sem entrada.',
    hero: { imagem: 'hero-nautico', alt: 'Consórcio náutico da HS Consórcios.' },
    beneficios: [
      { icone: 'joinha', texto: 'Crédito para motos e veículos aquáticos.' },
      ...BASE_VEICULOS,
      MEIA_PARCELA,
      { icone: 'bandeira', texto: 'Registro na Capitania dos Portos.' },
      { icone: 'chave', texto: 'A garantia é o próprio bem.' },
      { icone: 'tendencia', texto: 'Somente grupos com INPC e IPCA como indexador de reajuste.' },
      SUPORTE,
      { icone: 'dinheiro', texto: 'Você negocia a compra do seu veículo novo pelo valor à vista.' },
    ],
    resumo: [
      'Descubra novos mares na sua própria embarcação. O Consórcio Náutico permite a aquisição de motos e veículos aquáticos, com até 5 anos de fabricação e registro na capitania dos portos.',
    ],
    possibilidades: {
      titulo: 'Com o Consórcio Náutico, você pode:',
      itens: [
        'Conquistar seu próprio jet ski, veleiro ou lancha.',
        'Trazer um novo tipo de lazer para a família.',
        'Renovar a sua embarcação de trabalho.',
        'Ter o poder de compra pelo valor à vista do veículo ou moto aquática.',
      ],
    },
  },
  {
    caminho: 'veiculos/energia-solar',
    grupo: 'veiculos',
    titulo: 'Consórcio para Energia Solar',
    descricao: 'Consórcio para placas solares com meia parcela até a contemplação: reduza em até 95% a sua conta de luz.',
    hero: { imagem: 'hero-energia-solar', alt: 'Consórcio para energia solar da HS Consórcios.' },
    beneficios: [
      { icone: 'cartao', texto: 'Crédito para placas solares.' },
      ...BASE_VEICULOS,
      MEIA_PARCELA,
      { icone: 'chave', texto: 'Veículo como garantia.' },
      { icone: 'documento', texto: 'Apresentação obrigatória da nota fiscal das placas e do inversor.' },
      SUPORTE,
      { icone: 'carteira', texto: 'Você negocia a compra das placas solares pelo valor à vista.' },
    ],
    resumo: [
      'Nessa modalidade de consórcio, você adquire crédito para placas solares pagando apenas metade da parcela até a contemplação, podendo reduzir em até 95% a sua conta de luz após a instalação. Assim, você contribui para o meio ambiente trazendo mais sustentabilidade para sua casa ou para a sua empresa.',
    ],
    possibilidades: {
      titulo: 'Com o Consórcio para Energia Solar, você pode:',
      itens: [
        'Tornar sua casa ou sua empresa mais sustentável.',
        'Ajudar o meio ambiente, com o uso de uma energia limpa e renovável.',
        'Economizar até 95% na conta de luz após a instalação.',
        'Ter o poder de compra pelo valor à vista das placas solares.',
      ],
    },
    motivos: {
      titulo: 'Por que um consórcio?',
      itens: [
        PATRIMONIO,
        APOSENTADORIA,
        {
          icone: 'ico-poupanca',
          titulo: 'Poupar',
          texto:
            'O consórcio, também conhecido como Poupança Forçada ou Programada, é ideal para pessoas que muitas vezes tropeçam na determinação de guardar dinheiro. O consórcio se torna a melhor opção, pois são parcelas que não comprometem o orçamento, e ainda o consorciado pode ser sorteado antes de juntar o montante e adquirir o bem. Educadores financeiros afirmam que a vantagem do consórcio é forçar as pessoas que não conseguem poupar a acumular as reservas necessárias para a realização de um sonho.',
        },
      ],
    },
  },

  // ---------- Investimentos ----------
  {
    caminho: 'investimentos',
    grupo: 'investimentos',
    titulo: 'Consórcio como Investimento',
    descricao: 'Invista em consórcio: construa patrimônio, reforce a aposentadoria e poupe com planos de 20 mil a 2 milhões de reais, sem juros e sem entrada.',
    // The WordPress mobile version of this banner shows the "Salas comerciais" image by mistake, so the desktop one is used on every screen
    hero: { imagem: 'hero-investimentos', alt: 'Consórcio de bens como investimento na HS Consórcios.' },
    beneficios: BENEFICIOS_INVESTIMENTOS,
    resumo: [
      'Do mil aos dois milhões, temos o plano certo para todo o tipo de investidor. O consórcio permite que você construa seu patrimônio com a aquisição de bens, garantindo um futuro confortável para você e sua família.',
    ],
    destaque: GRUPO_INVESTIDORES,
    motivos: MOTIVOS_INVESTIMENTOS,
  },
  {
    caminho: 'investimentos/reforco-aposentadoria',
    grupo: 'investimentos',
    titulo: 'Consórcio para Reforço da Aposentadoria',
    descricao: 'Previdência imobiliária: use o consórcio para comprar imóveis e ter renda de aluguéis na aposentadoria.',
    hero: { imagem: 'hero-reforco-aposentadoria', alt: 'Consórcio para reforço da aposentadoria da HS Consórcios.' },
    beneficios: BENEFICIOS_INVESTIMENTOS,
    resumo: [
      'Você sabia que pode utilizar o consórcio como uma forma de reforçar a sua aposentadoria? A chamada “previdência imobiliária” consiste em direcionar para a compra de cartas de crédito o capital que seria investido na previdência privada.',
      'Assim, você pode adquirir imóveis e receber uma renda extra com aluguéis, investindo no mercado imobiliário e obtendo excelentes retornos.',
    ],
    destaque: GRUPO_INVESTIDORES,
    motivos: MOTIVOS_INVESTIMENTOS,
  },
  {
    caminho: 'investimentos/poupanca',
    grupo: 'investimentos',
    titulo: 'Consórcio como Poupança',
    descricao: 'Poupança programada sem juros: parcelas que se ajustam ao seu orçamento para construir patrimônio com o consórcio.',
    hero: { imagem: 'hero-poupanca', alt: 'Consórcio como poupança na HS Consórcios.' },
    beneficios: BENEFICIOS_INVESTIMENTOS,
    resumo: [
      'Invista no seu futuro com o consórcio. O crédito pode ser considerado uma forma de “poupança programada”, com parcelas que se ajustam ao seu orçamento e sem o acréscimo de juros. Você constrói o seu patrimônio com praticidade e economia.',
    ],
    destaque: GRUPO_INVESTIDORES,
    motivos: MOTIVOS_INVESTIMENTOS,
  },
  {
    caminho: 'investimentos/renda-extra',
    grupo: 'investimentos',
    titulo: 'Consórcio para Renda Extra',
    descricao: 'Adquira cartas de crédito para investir no mercado imobiliário e tenha renda extra com aluguéis.',
    hero: { imagem: 'hero-renda-extra', alt: 'Consórcio para renda extra da HS Consórcios.' },
    beneficios: BENEFICIOS_INVESTIMENTOS,
    resumo: [
      'O consórcio não é apenas uma forma de se disciplinar financeiramente, mas também é uma opção de investimento segura e com bons retornos.',
      'O consorciado pode adquirir diversas cartas de crédito para investir no mercado imobiliário. Após ser contemplado, esses imóveis podem ser alugados e o valor pago pelo inquilino é usado como pagamento das parcelas restantes, garantindo uma renda extra ao investidor.',
    ],
    destaque: GRUPO_INVESTIDORES,
    motivos: MOTIVOS_INVESTIMENTOS,
  },
];
