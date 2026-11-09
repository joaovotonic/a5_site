/**
 * Catálogo completo multimarcas da A5 Tecnologia:
 * - Toledo do Brasil (Linha Prix Comercial, Bancada, Precisão e Balanças de Piso 2180 / 2124)
 * - Balmak (Automação Comercial, Balcão, Checkout, Industrial e Hospitalar/Farma)
 * - Marte Científica (Balanças Analíticas, Semianalíticas e de Precisão Homologadas Inmetro)
 * - Skymsen (Linha exclusiva de Fatiadores de Frios e Carnes NR-12 / Inox)
 */

export type ProductBrand = "Toledo do Brasil" | "Balmak" | "Marte Científica" | "Skymsen";

export type ProductCategory =
  | "Comercial & Etiquetadoras"
  | "Piso & Industriais"
  | "Bancada & Check-out"
  | "Precisão & Farmácia"
  | "Fatiadores de Frios";

export type ProductLine =
  | "Prix 3"
  | "Prix 4"
  | "Prix 5 · 6 · 7"
  | "Checkout & Especial"
  | "Bancada"
  | "Toledo Piso"
  | "Balmak Automação"
  | "Balmak Comercial"
  | "Balmak Industrial"
  | "Balmak Farma"
  | "Marte Analítica"
  | "Marte Precisão"
  | "Skymsen Semiautomático"
  | "Skymsen Automático";

export interface Product {
  slug: string;
  name: string;
  brand: ProductBrand;
  category: ProductCategory;
  line: ProductLine;
  tagline: string;
  idealFor: string[];
  highlight?: string;
  featured?: boolean;
  ambientBg: string;
  certification?: string;
  specs: {
    capacity: string;
    connectivity: string;
    printer: string;
  };
  features: string[];
}

export const PRODUCT_BRANDS: ProductBrand[] = [
  "Toledo do Brasil",
  "Balmak",
  "Marte Científica",
  "Skymsen",
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Comercial & Etiquetadoras",
  "Piso & Industriais",
  "Bancada & Check-out",
  "Precisão & Farmácia",
  "Fatiadores de Frios",
];

export const PRODUCT_LINES: ProductLine[] = [
  "Prix 3",
  "Prix 4",
  "Prix 5 · 6 · 7",
  "Checkout & Especial",
  "Bancada",
  "Toledo Piso",
  "Balmak Automação",
  "Balmak Comercial",
  "Balmak Industrial",
  "Balmak Farma",
  "Marte Analítica",
  "Marte Precisão",
  "Skymsen Semiautomático",
  "Skymsen Automático",
];

export const PRODUCTS: Product[] = [
  // ============================================================================
  // TOLEDO DO BRASIL — LINHA COMERCIAL PRIX, BANCADA E BALANÇAS DE PISO (2180)
  // ============================================================================
  {
    slug: "prix-4-due",
    name: "Prix 4 Due",
    brand: "Toledo do Brasil",
    category: "Comercial & Etiquetadoras",
    line: "Prix 4",
    tagline:
      "Etiquetadora completa com tabela nutricional, rastreabilidade e recursos avançados para açougues e padarias.",
    idealFor: ["Açougues", "Casas de Carne", "Padarias", "Supermercados"],
    highlight: "Favorita para Açougue",
    featured: true,
    ambientBg: "/images/ambientes/acougue-balcao.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 32 kg (Tripla escala homologada)",
      connectivity: "Wi-Fi / Ethernet · Toledo MGV 7",
      printer: "Etiquetas de 30 mm até 150 mm (RDC 429)",
    },
    features: [
      "Atende à rotulagem nutricional frontal (RDC 429 Anvisa)",
      "Imprime lote, fornecedor, glaciamento e conservação",
      "Troca lateral rápida de bobina térmica sem ferramentas",
    ],
  },
  {
    slug: "prix-5w-plus",
    name: "Prix 5 W Plus",
    brand: "Toledo do Brasil",
    category: "Comercial & Etiquetadoras",
    line: "Prix 5 · 6 · 7",
    tagline:
      "Toda a robustez da consagrada Prix 5 Plus com comunicação Wi-Fi de fábrica para balcões sem cabeamento.",
    idealFor: ["Açougues", "Supermercados", "Padarias", "Redes de lojas"],
    highlight: "Wi-Fi de Fábrica",
    ambientBg: "/images/ambientes/acougue-vitrine.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 32 kg (Tripla escala de precisão)",
      connectivity: "Wi-Fi WPA2 + Ethernet · MGV 7",
      printer: "Impressão contínua de etiquetas térmicas",
    },
    features: [
      "Atualização instantânea de preços direto do ERP via Wi-Fi",
      "Elimina passagem de cabos de rede em balcões refrigerados",
      "Memória expandida para textos extras, receitas e conservação",
    ],
  },
  {
    slug: "prix-6",
    name: "Prix 6 Touch",
    brand: "Toledo do Brasil",
    category: "Comercial & Etiquetadoras",
    line: "Prix 5 · 6 · 7",
    tagline:
      "Balança computadorizada com tela touchscreen para o operador e display gráfico colorido para o consumidor.",
    idealFor: ["Açougues Gourmet", "Supermercados", "Padarias", "Autoatendimento"],
    highlight: "Display Colorido",
    featured: true,
    ambientBg: "/images/ambientes/prix6-carnes.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 32 kg (Alta performance em rede)",
      connectivity: "Wi-Fi e Gigabit Ethernet · MGV 7",
      printer: "Impressora de alta velocidade com guilhotina/peeler",
    },
    features: [
      "Exibe fotos de cortes de carnes e promoções no visor do cliente",
      "Interface touch intuitiva que reduz erros de código no balcão",
      "Suporte completo a mídias promocionais e autoatendimento",
    ],
  },
  {
    slug: "toledo-2180",
    name: "Toledo 2180 Piso",
    brand: "Toledo do Brasil",
    category: "Piso & Industriais",
    line: "Toledo Piso",
    tagline:
      "Balança de piso industrial de alta resistência em aço carbono ou inox para recebimento pesado, frigoríficos e expedição.",
    idealFor: ["Frigoríficos", "Recebimento de Cargas", "Atacarejos", "Indústrias"],
    highlight: "Piso Industrial 2180",
    featured: true,
    ambientBg: "/images/ambientes/acougue-gancheira.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "500 kg até 5.000 kg (Sobrepiso ou Embutida)",
      connectivity: "Terminais TI400 / TI310 · Ethernet / Serial",
      printer: "Células de carga digitais à prova de umidade (IP68/IP69K)",
    },
    features: [
      "Plataforma reforçada para trânsito de paleteiras e carrinhos",
      "Pode ser instalada em fosso (embutida) ou sobrepiso com rampas",
      "Sistema de oscilação com esferas que absorve impactos laterais",
    ],
  },
  {
    slug: "toledo-2180-inox",
    name: "Toledo 2180 Lava-Rápido",
    brand: "Toledo do Brasil",
    category: "Piso & Industriais",
    line: "Toledo Piso",
    tagline:
      "Versão sanitária da Toledo 2180 com tampa basculante para higienização profunda em frigoríficos, laticínios e pescados.",
    idealFor: ["Frigoríficos", "Abatedouros", "Pescados", "Salas de Desossa"],
    highlight: "100% Higienizável",
    ambientBg: "/images/ambientes/acougue-gancheira.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "500 kg a 2.500 kg (Aço Inox AISI 304)",
      connectivity: "Indicador Inox IP69K · Saída para ERP",
      printer: "Tampa articulada com pistões a gás para lavagem interna",
    },
    features: [
      "Evita acúmulo de resíduos orgânicos sob a plataforma no frigorífico",
      "Resistente a lavagens com jatos de alta pressão e sanitizantes",
      "Células de carga herméticas em aço inoxidável com proteção IP69K",
    ],
  },
  {
    slug: "toledo-2124",
    name: "Toledo 2124 Piso Móvel",
    brand: "Toledo do Brasil",
    category: "Piso & Industriais",
    line: "Toledo Piso",
    tagline:
      "Balança de plataforma de piso com coluna e rodízios opcionais para conferência de mercadorias, sacarias e caixas.",
    idealFor: ["Depósitos", "Supermercados", "Açougues", "Distribuidoras"],
    highlight: "Plataforma 500 kg / 1000 kg",
    ambientBg: "/images/ambientes/estoque-prix.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "250 kg, 500 kg ou 1.000 kg",
      connectivity: "Indicador TI200 ou 9098C · Bateria interna",
      printer: "Pesagem rápida de fardos, caixas e meias-carcaças",
    },
    features: [
      "Disponível em aço carbono ou plataforma em aço inoxidável",
      "Coluna integrada com visor iluminado de fácil visualização",
      "Ideal para conferência de recebimento na doca do supermercado",
    ],
  },
  {
    slug: "prix-3-fit",
    name: "Prix 3 Fit",
    brand: "Toledo do Brasil",
    category: "Comercial & Etiquetadoras",
    line: "Prix 3",
    tagline:
      "Balança computadora compacta com bateria interna de longa duração para atendimento rápido no balcão.",
    idealFor: ["Açougues", "Hortifrúti", "Feiras", "Mercearias"],
    highlight: "Bateria até 160h",
    ambientBg: "/images/ambientes/hortifruti.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 32 kg (Tripla escala 2g/5g/10g)",
      connectivity: "Saída Serial RS-232 para PDV",
      printer: "Pesagem direta e cálculo de preço",
    },
    features: [
      "Prato em aço inoxidável com centro rebaixado",
      "Função tara sucessiva e preço fixo",
      "Proteção contra interferências e sobrecarga",
    ],
  },
  {
    slug: "prix-3-plus",
    name: "Prix 3 Plus",
    brand: "Toledo do Brasil",
    category: "Comercial & Etiquetadoras",
    line: "Prix 3",
    tagline:
      "A evolução da linha Prix 3 com design de perfil baixo e visor de alto contraste para operador e cliente.",
    idealFor: ["Açougues", "Mercearias", "Padarias", "Balcões"],
    highlight: "Mais vendida Balcão",
    ambientBg: "/images/ambientes/acougue-balcao.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 30 kg / 32 kg (Tripla escala)",
      connectivity: "Serial RS-232 · Integração Caixa",
      printer: "Compatível com impressora externa",
    },
    features: [
      "Acumulador diário de vendas e controle de código",
      "Bateria interna recarregável para quedas de energia",
      "Gabinete em ABS injetado de alta resistência",
    ],
  },
  {
    slug: "prix-4-uno",
    name: "Prix 4 Uno",
    brand: "Toledo do Brasil",
    category: "Comercial & Etiquetadoras",
    line: "Prix 4",
    tagline:
      "Balança etiquetadora versátil que une pesagem, cálculo e impressão térmica no mesmo equipamento.",
    idealFor: ["Açougues", "Padarias", "Casas de Carne", "Frios"],
    highlight: "Etiquetadora Compacta",
    ambientBg: "/images/ambientes/casa-de-carnes.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 32 kg (Divisão 2g/5g/10g)",
      connectivity: "Ethernet ou Wi-Fi · Software MGV",
      printer: "Impressora térmica integrada (40 e 60 mm)",
    },
    features: [
      "Cadastro local ou em rede para cortes de carne e frios",
      "Imprime código de barras EAN-13, data e validade",
      "Teclas rápidas para os itens de maior giro no balcão",
    ],
  },
  {
    slug: "prix-4-trend",
    name: "Prix 4 Trend",
    brand: "Toledo do Brasil",
    category: "Comercial & Etiquetadoras",
    line: "Prix 4",
    tagline:
      "Nova geração da linha Prix 4 com arquitetura moderna, alta velocidade de impressão e conectividade em rede.",
    idealFor: ["Açougues", "Padarias", "Supermercados", "Empórios"],
    highlight: "Nova Geração",
    ambientBg: "/images/ambientes/padaria.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 32 kg (2g até 6kg / 5g até 15kg / 10g até 32kg)",
      connectivity: "Ethernet e Wi-Fi nativos · MGV 7",
      printer: "Cabeça térmica de alta definição e velocidade",
    },
    features: [
      "Teclado alfanumérico selado resistente à rotina úmida",
      "Ampla memória para milhares de produtos e receitas",
      "Baixo consumo de energia e manutenção simplificada",
    ],
  },
  {
    slug: "prix-5",
    name: "Prix 5 Plus",
    brand: "Toledo do Brasil",
    category: "Comercial & Etiquetadoras",
    line: "Prix 5 · 6 · 7",
    tagline:
      "Referência nacional em supermercados e grandes açougues, projetada para operação intensa e carga pesada de dados.",
    idealFor: ["Açougues", "Supermercados", "Frigoríficos", "Atacarejos"],
    highlight: "Integração MGV",
    ambientBg: "/images/ambientes/casa-de-carnes.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 30 kg / 32 kg (Com ou sem coluna)",
      connectivity: "Ethernet TCP/IP · Integração MGV 7",
      printer: "Mecanismo robusto para alto volume de etiquetas",
    },
    features: [
      "Suporta milhares de PLUs com tabela nutricional e ingredientes",
      "Visor alfanumérico luminoso de fácil leitura no balcão",
      "Ideal para baterias de balanças em setores de carnes e frios",
    ],
  },
  {
    slug: "prix-7",
    name: "Prix 7T",
    brand: "Toledo do Brasil",
    category: "Comercial & Etiquetadoras",
    line: "Prix 5 · 6 · 7",
    tagline:
      "A mais tecnológica da família Prix: tela touch panorâmica, recursos multimídia e reconhecimento visual por IA.",
    idealFor: ["Supermercados", "Empórios Premium", "Alto Fluxo"],
    highlight: "Topo de Linha",
    ambientBg: "/images/ambientes/supermercado.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 32 kg (Design suspenso ou bancada)",
      connectivity: "Wi-Fi Dual Band + Ethernet · MGV Cloud/7",
      printer: "Impressão frontal rápida sem perda de etiquetas",
    },
    features: [
      "Prato de pesagem livre de obstáculos para visualização total",
      "Reconhecimento inteligente de itens para autoatendimento",
      "Painel de mídia em alta definição voltado ao consumidor",
    ],
  },
  {
    slug: "prix-7e",
    name: "Prix 7E",
    brand: "Toledo do Brasil",
    category: "Comercial & Etiquetadoras",
    line: "Prix 5 · 6 · 7",
    tagline:
      "Etiquetadora de alta capacidade com coluna elevada, display gráfico para o cliente e integração total com retaguarda.",
    idealFor: ["Supermercados", "Açougues", "Hortifrútis", "Pré-embalagem"],
    highlight: "Alto Giro",
    ambientBg: "/images/ambientes/hortifruti.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 32 kg (Tripla faixa de pesagem)",
      connectivity: "Rede Ethernet / Wi-Fi · MGV 7",
      printer: "Alta cadência para pré-embalagem e balcão",
    },
    features: [
      "Perfeita para centrais de pré-pesagem de carnes, frios e bandejas",
      "Teclado de resposta rápida e display de alta visibilidade",
      "Gestão remota de status e cabeça térmica via software MGV",
    ],
  },
  {
    slug: "prix-checkout",
    name: "Prix Self-Checkout 8217",
    brand: "Toledo do Brasil",
    category: "Bancada & Check-out",
    line: "Checkout & Especial",
    tagline:
      "Balança de embutir ou sobrepor para frentes de caixa (PDV), checkouts de supermercado e totens de autoatendimento.",
    idealFor: ["Frentes de Caixa", "Supermercados", "Hortifrúti", "Atacarejos"],
    highlight: "Frente de Caixa PDV",
    ambientBg: "/images/ambientes/supermercado.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 30 kg / 32 kg (Pesagem no caixa)",
      connectivity: "Serial RS-232 e USB para sistemas de PDV",
      printer: "Envia o peso direto para o cupom fiscal do caixa",
    },
    features: [
      "Compatível com os principais leitores ópticos e softwares de frente de caixa",
      "Prato em aço inox de fácil higienização no checkout",
      "Elimina filas de pesagem prévia no hortifrúti e açougue",
    ],
  },
  {
    slug: "prix-splash",
    name: "Prix Splash BP201W",
    brand: "Toledo do Brasil",
    category: "Bancada & Check-out",
    line: "Checkout & Especial",
    tagline:
      "Balança impermeável e lavável com proteção IP65 contra jatos d'água, umidade severa, salmoura e câmaras frias.",
    idealFor: ["Açougues (Desossa)", "Peixarias", "Frigoríficos", "Cozinhas"],
    highlight: "Impermeável IP65",
    ambientBg: "/images/ambientes/acougue-gancheira.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 30 kg (Estrutura 100% lavável)",
      connectivity: "Bateria interna recarregável de longa duração",
      printer: "Conferência rápida de porções e desossa",
    },
    features: [
      "Projetada para ambientes úmidos de manipulação de carnes e pescados",
      "Prato e proteção em aço inoxidável resistente à corrosão",
      "Displays de LED brilhante para leitura mesmo em câmaras frias",
    ],
  },
  {
    slug: "prix-lab",
    name: "Prix Lab LT",
    brand: "Toledo do Brasil",
    category: "Precisão & Farmácia",
    line: "Checkout & Especial",
    tagline:
      "Balança de precisão analítica e semianalítica com câmara protetora contra correntes de ar e homologação Inmetro.",
    idealFor: ["Farmácias de Manipulação", "Laboratórios", "Controle de Qualidade"],
    highlight: "Alta Precisão",
    ambientBg: "/images/ambientes/farmacia.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Divisão de miligrama (0,001 g a 0,01 g)",
      connectivity: "Saída Serial para impressora e sistemas",
      printer: "Rigor metrológico Classe I / II Inmetro",
    },
    features: [
      "Capela de vidro com portas deslizantes para pesagem sem interferência",
      "Funções de contagem de peças, porcentagem e pesagem de fórmulas",
      "Acompanha suporte técnico e calibração especializada A5",
    ],
  },
  {
    slug: "9094",
    name: "Toledo 9094 Plus",
    brand: "Toledo do Brasil",
    category: "Bancada & Check-out",
    line: "Bancada",
    tagline:
      "Clássica balança eletrônica de bancada Toledo para pesagem rápida de balcão, conferência e atendimento comercial.",
    idealFor: ["Açougues", "Padarias", "Balcões", "Conferência"],
    highlight: "Clássica de Balcão",
    ambientBg: "/images/ambientes/padaria.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 15 kg ou 30 kg",
      connectivity: "Operação direta ou saída serial opcional",
      printer: "Pesagem pura de alta velocidade",
    },
    features: [
      "Estabilização quase instantânea do peso no mostrador",
      "Baixíssimo índice de manutenção e alta durabilidade",
      "Excelente custo-benefício para conferência e porcionamento",
    ],
  },
  {
    slug: "2099",
    name: "Toledo 2099 Inox",
    brand: "Toledo do Brasil",
    category: "Piso & Industriais",
    line: "Bancada",
    tagline:
      "Balança de bancada e piso compacto com plataforma em aço inox de alta resistência para caixas, peças de carne e estoque.",
    idealFor: ["Recebimento de Carnes", "Açougues", "Supermercados", "Estoque"],
    highlight: "Recebimento & Estoque",
    ambientBg: "/images/ambientes/acougue-gancheira.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "60 kg a 300 kg (Plataforma Inox)",
      connectivity: "Indicador digital com coluna ou remoto",
      printer: "Conferência de nota fiscal no recebimento",
    },
    features: [
      "Evita prejuízos conferindo o peso real das peças e caixas na chegada",
      "Estrutura robusta para ambientes de retaguarda de açougue e mercado",
      "Coluna articulada ou indicador de parede para fácil leitura",
    ],
  },

  // ============================================================================
  // BALMAK — LINHA COMERCIAL, AUTOMAÇÃO, INDUSTRIAL E HOSPITALAR/FARMA
  // ============================================================================
  {
    slug: "balmak-edge",
    name: "Balmak EDGE Touch",
    brand: "Balmak",
    category: "Comercial & Etiquetadoras",
    line: "Balmak Automação",
    tagline:
      "Balança computadora etiquetadora com tela touchscreen capacitiva, impressão térmica veloz e gestão de mídias no balcão.",
    idealFor: ["Supermercados", "Açougues", "Padarias", "Empórios"],
    highlight: "Touchscreen em Rede",
    featured: true,
    ambientBg: "/images/ambientes/supermercado.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 35 kg (Tripla escala 2g/5g/10g)",
      connectivity: "Wi-Fi + Ethernet TCP/IP · Software de Gestão",
      printer: "Impressora térmica integrada de alta velocidade",
    },
    features: [
      "Interface gráfica intuitiva para operador e tela secundária para cliente",
      "Atende integralmente à RDC 429 Anvisa de rotulagem nutricional",
      "Troca rápida de bobina térmica e alto desempenho em horários de pico",
    ],
  },
  {
    slug: "balmak-edge-mini",
    name: "Balmak EDGE Mini",
    brand: "Balmak",
    category: "Comercial & Etiquetadoras",
    line: "Balmak Automação",
    tagline:
      "Etiquetadora compacta de última geração com tecnologia touch, ideal para balcões otimizados de açougue, frios e panificação.",
    idealFor: ["Açougues", "Frios e Laticínios", "Padarias", "Mercearias"],
    highlight: "Compacta Touch",
    ambientBg: "/images/ambientes/padaria.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 30 kg / 35 kg (Tripla escala)",
      connectivity: "Wi-Fi e Ethernet integrados",
      printer: "Impressão térmica de etiquetas adesivas e contínuas",
    },
    features: [
      "Design compacto que ocupa mínimo espaço sobre vitrines refrigeradas",
      "Cadastro amplo de produtos, tabelas nutricionais, receitas e tara",
      "Prato em aço inoxidável de fácil higienização diária",
    ],
  },
  {
    slug: "balmak-orion-5",
    name: "Balmak Órion 5",
    brand: "Balmak",
    category: "Comercial & Etiquetadoras",
    line: "Balmak Automação",
    tagline:
      "Balança etiquetadora de automação comercial projetada para operação intensa em redes de supermercados e casas de carnes.",
    idealFor: ["Supermercados", "Açougues", "Hortifrúti", "Atacarejos"],
    highlight: "Automação Comercial",
    ambientBg: "/images/ambientes/casa-de-carnes.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 30 kg (Tripla faixa de pesagem)",
      connectivity: "Ethernet / Wi-Fi para retaguarda comercial",
      printer: "Mecanismo impressor térmico robusto integrado",
    },
    features: [
      "Impressão de código de barras EAN-13, validade, lote e ingredientes",
      "Teclado de acesso direto com teclas de atalho configuráveis",
      "Alta durabilidade para pesagem contínua de carnes e bandejas",
    ],
  },
  {
    slug: "balmak-orion-2",
    name: "Balmak Órion 2",
    brand: "Balmak",
    category: "Comercial & Etiquetadoras",
    line: "Balmak Automação",
    tagline:
      "Solução prática de pesagem com impressão de etiquetas para comércios que buscam automação com excelente custo-benefício.",
    idealFor: ["Padarias", "Açougues", "Mercearias", "Sacolões"],
    highlight: "Custo-Benefício",
    ambientBg: "/images/ambientes/hortifruti.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 30 kg (Divisão 2g/5g/10g)",
      connectivity: "Comunicação em rede e Serial RS-232",
      printer: "Impressora térmica embutida para códigos de barras",
    },
    features: [
      "Fácil programação de preços, produtos e datas de validade",
      "Visor duplo luminoso para operador e consumidor",
      "Gabinete em ABS de alta resistência contra impactos",
    ],
  },
  {
    slug: "balmak-quick",
    name: "Balmak Quick",
    brand: "Balmak",
    category: "Bancada & Check-out",
    line: "Balmak Comercial",
    tagline:
      "Balança computadora comercial ágil com bateria de longa autonomia para atendimento direto em balcões, feiras e mercados.",
    idealFor: ["Hortifrúti", "Feiras", "Açougues", "Padarias"],
    highlight: "Rápida de Balcão",
    ambientBg: "/images/ambientes/hortifruti.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 30 kg / 35 kg (Tripla escala)",
      connectivity: "Bateria interna recarregável + Serial opcional",
      printer: "Cálculo imediato de peso, preço/kg e total a pagar",
    },
    features: [
      "Displays de LED vermelho de alto brilho para qualquer iluminação",
      "Teclado de membrana selado à prova de respingos e poeira",
      "Funções de tara sucessiva, zero automático e economia de bateria",
    ],
  },
  {
    slug: "balmak-one",
    name: "Balmak ONE Computadora",
    brand: "Balmak",
    category: "Bancada & Check-out",
    line: "Balmak Comercial",
    tagline:
      "Balança computadora de preços versátil e compacta para pesagem comercial no balcão ou integrada ao caixa.",
    idealFor: ["Mercearias", "Padarias", "Restaurantes por Quilo", "Hortifrúti"],
    highlight: "Linha Comercial ONE",
    ambientBg: "/images/ambientes/padaria.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 30 kg (Tripla escala 2g/5g/10g)",
      connectivity: "Saída Serial RS-232 para PDV e automação",
      printer: "Pesagem comercial com cálculo automático de preço",
    },
    features: [
      "Ampla bandeja em aço inoxidável espelhado higiênico",
      "Design de perfil baixo que facilita o manuseio pelo operador",
      "Homologada pelo Inmetro para transações comerciais diretas",
    ],
  },
  {
    slug: "balmak-bck30",
    name: "Balmak BCK-30 Checkout",
    brand: "Balmak",
    category: "Bancada & Check-out",
    line: "Balmak Automação",
    tagline:
      "Balança de checkout desenvolvida especificamente para embutir em frentes de caixa (PDV) de supermercados e hortifrútis.",
    idealFor: ["Frentes de Caixa (PDV)", "Supermercados", "Atacarejos", "Sacolões"],
    highlight: "Checkout PDV",
    ambientBg: "/images/ambientes/supermercado.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 30 kg (Tripla escala 2g/5g/10g)",
      connectivity: "Serial RS-232 / USB com protocolo padrão de PDV",
      printer: "Transmissão direta do peso para o sistema de caixa",
    },
    features: [
      "Fácil encaixe nos balcões de checkout padrão do mercado brasileiro",
      "Prato em aço inox 304 escovado com proteção contra líquidos",
      "Display remoto em torre para acompanhamento pelo operador e cliente",
    ],
  },
  {
    slug: "balmak-bk300t",
    name: "Balmak BK-300T Plataforma",
    brand: "Balmak",
    category: "Piso & Industriais",
    line: "Balmak Industrial",
    tagline:
      "Balança plataforma industrial de piso com coluna para pesagem de caixas, sacarias, carcaças e conferência de estoque.",
    idealFor: ["Estoque e Doca", "Açougues", "Distribuidoras", "Indústrias"],
    highlight: "Plataforma 300 kg",
    ambientBg: "/images/ambientes/estoque-prix.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "150 kg ou 300 kg (Plataforma 40x50 cm / 50x50 cm)",
      connectivity: "Indicador digital BK com bateria interna e RS-232",
      printer: "Pesagem industrial de recebimento e expedição",
    },
    features: [
      "Estrutura tubular reforçada com pintura epóxi ou tampa em aço inox",
      "Pés niveladores antiderrapantes de borracha de alta absorção",
      "Fácil deslocamento entre o caminhão e a área de armazenamento",
    ],
  },
  {
    slug: "balmak-bkp",
    name: "Balmak BK-P Piso Pesado",
    brand: "Balmak",
    category: "Piso & Industriais",
    line: "Balmak Industrial",
    tagline:
      "Linha de balanças de piso de alta capacidade para pesagem de cargas pesadas, paletes, tambores e big-bags.",
    idealFor: ["Indústrias", "Frigoríficos", "Logística", "Atacarejos"],
    highlight: "Até 3.000 kg",
    ambientBg: "/images/ambientes/acougue-gancheira.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "500 kg, 1.000 kg, 2.000 kg e 3.000 kg",
      connectivity: "4 células de carga IP67 + Indicador digital remoto",
      printer: "Conferência pesada de cargas e matéria-prima",
    },
    features: [
      "Chapa xadrez antiderrapante de alta espessura para cargas severas",
      "Caixa de junção selada e cabo blindado de 5 metros para o painel",
      "Rampas de acesso opcionais para entrada de paleteiras hidráulicas",
    ],
  },
  {
    slug: "balmak-bkf",
    name: "Balmak Premium BK-F/FA",
    brand: "Balmak",
    category: "Precisão & Farmácia",
    line: "Balmak Farma",
    tagline:
      "Balança antropométrica digital para farmácias, drogarias, clínicas médicas, hospitais e academias.",
    idealFor: ["Farmácias e Drogarias", "Clínicas", "Hospitais", "Academias"],
    highlight: "Antropométrica Farma",
    ambientBg: "/images/ambientes/farmacia.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "Até 200 kg ou 300 kg (Divisão 50g / 100g)",
      connectivity: "Bivolt automático · Régua antropométrica até 2,00 m",
      printer: "Medição precisa de peso corporal e estatura",
    },
    features: [
      "Tapete antiderrapante e coluna elevada com display de LED brilhante",
      "Homologada pelo Inmetro e aferida para uso médico-farmacêutico",
      "Estrutura em aço carbono com tratamento anticorrosivo durável",
    ],
  },

  // ============================================================================
  // MARTE CIENTÍFICA — BALANÇAS ANALÍTICAS, SEMIANALÍTICAS E DE PRECISÃO
  // ============================================================================
  {
    slug: "marte-ad500",
    name: "Marte AD500-CAL",
    brand: "Marte Científica",
    category: "Precisão & Farmácia",
    line: "Marte Analítica",
    tagline:
      "Balança semianalítica de 3 casas decimais (0,001 g) com calibração interna automática e capela protetora homologada Inmetro.",
    idealFor: ["Farmácias de Manipulação", "Laboratórios", "Controle de Qualidade", "Joalherias"],
    highlight: "Calibração Interna 0,001g",
    featured: true,
    ambientBg: "/images/ambientes/farmacia.jpg",
    certification: "INMETRO Classe II",
    specs: {
      capacity: "510 g × 0,001 g (3 casas decimais)",
      connectivity: "Saída Serial RS-232 + Função Windows Direct",
      printer: "Calibração automática motorizada com peso interno",
    },
    features: [
      "9 funções: pesagem, contagem, porcentagem, densidade, estatística e mais",
      "Capela em acrílico transparente contra correntes de ar no laboratório",
      "Aprovada pela Portaria Inmetro/Dimel para manipulação de fórmulas",
    ],
  },
  {
    slug: "marte-atx224",
    name: "Marte Shimadzu ATX224R",
    brand: "Marte Científica",
    category: "Precisão & Farmácia",
    line: "Marte Analítica",
    tagline:
      "Balança analítica de 4 casas decimais (0,0001 g / 0,1 mg) com sensor UniBloc e calibração interna automática.",
    idealFor: ["Laboratórios Analíticos", "Indústria Farmacêutica", "Universidades", "Química Fina"],
    highlight: "Analítica 4 Casas 0,1mg",
    ambientBg: "/images/ambientes/farmacia.jpg",
    certification: "INMETRO Classe I",
    specs: {
      capacity: "220 g × 0,0001 g (4 casas decimais)",
      connectivity: "RS-232C e USB integrados · WindowsDirect",
      printer: "Tecnologia de bloco único UniBloc de altíssima estabilidade",
    },
    features: [
      "Calibração interna totalmente automática acionada por variação térmica",
      "Câmara analítica com portas de vidro deslizantes suaves",
      "Rigor metrológico máximo Classe I Inmetro para análises críticas",
    ],
  },
  {
    slug: "marte-ad3300",
    name: "Marte AD3300-CAL",
    brand: "Marte Científica",
    category: "Precisão & Farmácia",
    line: "Marte Precisão",
    tagline:
      "Balança eletrônica de precisão de 2 casas decimais (0,01 g) até 3.300 g com calibração interna automática.",
    idealFor: ["Farmácias de Manipulação", "Cosméticos", "Indústria Alimentícia", "Laboratórios"],
    highlight: "Precisão 3,3 kg × 0,01g",
    ambientBg: "/images/ambientes/farmacia.jpg",
    certification: "INMETRO Classe II",
    specs: {
      capacity: "3.300 g × 0,01 g (2 casas decimais)",
      connectivity: "Saída RS-232 programável + Relógio interno",
      printer: "Calibração automática com peso interno embutido",
    },
    features: [
      "Ampla capacidade de 3,3 kg mantendo sensibilidade fina de 0,01 g",
      "Ideal para bases galênicas, cremes, xampus e matérias-primas",
      "Display LCD de 8 dígitos com barra gráfica de capacidade utilizada",
    ],
  },
  {
    slug: "marte-ad5002",
    name: "Marte AD5002-CAL",
    brand: "Marte Científica",
    category: "Precisão & Farmácia",
    line: "Marte Precisão",
    tagline:
      "Balança de precisão de 5 kg com resolução de 0,01 g e calibração interna motorizada para laboratórios e manipulação.",
    idealFor: ["Farmácias de Manipulação", "Controle de Qualidade", "Indústria Química"],
    highlight: "5 kg × 0,01g Cal. Interna",
    ambientBg: "/images/ambientes/farmacia.jpg",
    certification: "INMETRO Classe II",
    specs: {
      capacity: "5.010 g × 0,01 g (Tara em toda a escala)",
      connectivity: "RS-232 e comunicação direta com planilhas/ERP",
      printer: "Pesagem, contagem de peças, porcentagem e densidade",
    },
    features: [
      "Dispensa peso-padrão externo graças à calibração interna automática",
      "Prato de pesagem em aço inoxidável de alta resistência química",
      "Identificação numérica de 6 dígitos para rastreabilidade GLP/GMP",
    ],
  },
  {
    slug: "marte-ls5",
    name: "Marte LS5 Precisão",
    brand: "Marte Científica",
    category: "Precisão & Farmácia",
    line: "Marte Precisão",
    tagline:
      "Balança de precisão prática e robusta de 5 kg × 1 g para conferência técnica, expedição, porcionamento e laboratório.",
    idealFor: ["Laboratórios", "Cozinhas Industriais", "Padarias", "Controle de Estoque"],
    highlight: "Compacta Inmetro",
    ambientBg: "/images/ambientes/padaria.jpg",
    certification: "INMETRO Classe III",
    specs: {
      capacity: "5.100 g × 1 g",
      connectivity: "Bivolt automático · Saída Serial RS-232",
      printer: "Tempo de estabilização rápido de apenas 3 segundos",
    },
    features: [
      "Excelente estabilidade para pesagem de insumos, receitas e pacotes",
      "Plataforma superior em aço inox fácil de limpar",
      "Homologada pelo Inmetro com assistência e calibração A5 Tecnologia",
    ],
  },
  {
    slug: "marte-ad50k",
    name: "Marte AD50K Alta Precisão",
    brand: "Marte Científica",
    category: "Precisão & Farmácia",
    line: "Marte Precisão",
    tagline:
      "Balança industrial de alta precisão capaz de pesar até 51 kg com divisão de apenas 1 grama.",
    idealFor: ["Indústria Farmacêutica", "Indústria Química", "Formulação Industrial"],
    highlight: "51 kg com divisão de 1g",
    ambientBg: "/images/ambientes/estoque-prix.jpg",
    certification: "INMETRO Classe II",
    specs: {
      capacity: "51 kg × 1 g (51.000 divisões de resolução)",
      connectivity: "Saída Serial RS-232 para impressora e sistemas",
      printer: "Pesagem pesada com precisão fina de laboratório",
    },
    features: [
      "Permite fracionar grandes lotes de matéria-prima com exatidão de 1 grama",
      "Funções de contagem de micropeças, verificação de peso e estatística",
      "Construção robusta para bancadas industriais e centrais de pesagem",
    ],
  },
  {
    slug: "marte-ls50",
    name: "Marte LS50 Inox Coluna",
    brand: "Marte Científica",
    category: "Piso & Industriais",
    line: "Marte Precisão",
    tagline:
      "Balança de plataforma 50×50 cm em aço inox com coluna e indicador digital homologado pelo Inmetro.",
    idealFor: ["Indústria Alimentícia", "Farmácias Centrais", "Recebimento", "Laboratórios"],
    highlight: "Plataforma Inox 50×50",
    ambientBg: "/images/ambientes/estoque-prix.jpg",
    certification: "INMETRO",
    specs: {
      capacity: "51 kg × 10 g (Plataforma 500 × 500 mm Inox)",
      connectivity: "Saída RS-232 para computador ou impressora",
      printer: "Conferência sanitária de barricas, caixas e insumos",
    },
    features: [
      "Plataforma ampla em aço inoxidável ideal para ambientes limpos",
      "Coluna elevada com painel LCD de fácil leitura pelo operador",
      "Tara subtrativa em toda a escala e indicador de estabilidade",
    ],
  },

  // ============================================================================
  // SKYMSEN — FATIADORES DE FRIOS E CARNES (SOMENTE LINHA DE FATIADORES)
  // ============================================================================
  {
    slug: "skymsen-fa300-dual",
    name: "Skymsen FA-300 Dual Inox",
    brand: "Skymsen",
    category: "Fatiadores de Frios",
    line: "Skymsen Automático",
    tagline:
      "Cortador de frios 2 em 1 em aço inox com lâmina de 300 mm: opera tanto no modo automático quanto no semiautomático.",
    idealFor: ["Supermercados", "Padarias", "Empórios", "Laticínios e Frios"],
    highlight: "Automático + Semiautomático",
    featured: true,
    ambientBg: "/images/ambientes/padaria.jpg",
    certification: "NR-12 & INMETRO",
    specs: {
      capacity: "Lâmina de 300 mm (Até 46 fatias por minuto)",
      connectivity: "2 Motores independentes · 220V Monofásico",
      printer: "Construção em Aço Inox · Duplo modo de operação",
    },
    features: [
      "Chave seletora que alterna entre fatiamento automático contínuo e manual",
      "Ideal para fatiar muçarela, presunto, mortadela e embutidos sem esforço",
      "Totalmente adequado à norma de segurança NR-12 e certificado Inmetro",
    ],
  },
  {
    slug: "skymsen-ca350l",
    name: "Skymsen CA-350L Heavy Duty",
    brand: "Skymsen",
    category: "Fatiadores de Frios",
    line: "Skymsen Automático",
    tagline:
      "Cortador de frios automático Heavy Duty em aço inox com lâmina de 350 mm e transmissão por engrenagens para alto volume.",
    idealFor: ["Supermercados", "Atacarejos", "Centrais de Fatiamento", "Cozinhas Industriais"],
    highlight: "Heavy Duty Lâmina 350mm",
    ambientBg: "/images/ambientes/supermercado.jpg",
    certification: "NR-12 & INMETRO",
    specs: {
      capacity: "Lâmina 350 mm (2 motores de 0,5 CV cada)",
      connectivity: "Transmissão por engrenagens de alto torque",
      printer: "Regulagem milimétrica de espessura de corte até 14 mm",
    },
    features: [
      "Projetado para trabalhar horas seguidas fatiando queijos pesados sem perda de força",
      "Afiador incorporado e sensores magnéticos de segurança NR-12",
      "Corpo em aço inoxidável de altíssima durabilidade e higiene sanitária",
    ],
  },
  {
    slug: "skymsen-fa300",
    name: "Skymsen FA-300 Automático Inox",
    brand: "Skymsen",
    category: "Fatiadores de Frios",
    line: "Skymsen Automático",
    tagline:
      "Cortador de frios automático em aço inox com lâmina de 300 mm para produção padronizada em padarias e supermercados.",
    idealFor: ["Padarias", "Supermercados", "Delicatessens", "Hotéis"],
    highlight: "100% Aço Inox",
    ambientBg: "/images/ambientes/padaria.jpg",
    certification: "NR-12 & INMETRO",
    specs: {
      capacity: "Lâmina de 300 mm (Espessura de corte até 14 mm)",
      connectivity: "2 Motores independentes (Lâmina + Carro)",
      printer: "Operação automática contínua com segurança NR-12",
    },
    features: [
      "Padroniza a gramatura das bandejas de frios fatiados para pesagem na Prix",
      "Carro porta-frios removível para higienização rápida no fim do turno",
      "Afiador integrado na parte superior para manter o fio perfeito da lâmina",
    ],
  },
  {
    slug: "skymsen-fa300l",
    name: "Skymsen FA-300L Automático",
    brand: "Skymsen",
    category: "Fatiadores de Frios",
    line: "Skymsen Automático",
    tagline:
      "Fatiador de frios automático de 300 mm em alumínio anodizado, combinando alta produtividade no balcão com ótimo investimento.",
    idealFor: ["Padarias", "Mercados de Bairro", "Lanchonetes", "Pizzarias"],
    highlight: "Alta Produtividade",
    ambientBg: "/images/ambientes/padaria.jpg",
    certification: "NR-12 & INMETRO",
    specs: {
      capacity: "Lâmina 300 mm · Espessura de corte de 0 a 14 mm",
      connectivity: "Acionamento automático motorizado Bivolt/220V",
      printer: "Estrutura em alumínio anodizado de fácil limpeza",
    },
    features: [
      "Libera o operador enquanto fatia peças inteiras de queijo e presunto",
      "Sistema de fixação firme da peça para aproveitamento até o final",
      "Proteção integral do anel da lâmina conforme exigências da NR-12",
    ],
  },
  {
    slug: "skymsen-fatiato-300",
    name: "Skymsen Fatiato 300",
    brand: "Skymsen",
    category: "Fatiadores de Frios",
    line: "Skymsen Semiautomático",
    tagline:
      "Fatiador de frios semiautomático por gravidade com lâmina de 300 mm e deslizamento ultra macio para atendimento de balcão.",
    idealFor: ["Padarias", "Empórios", "Frios e Laticínios", "Restaurantes"],
    highlight: "Lâmina 300 mm",
    ambientBg: "/images/ambientes/padaria.jpg",
    certification: "NR-12 & INMETRO",
    specs: {
      capacity: "Disco de corte de 300 mm em aço temperado",
      connectivity: "Motor silencioso de uso comercial contínuo",
      printer: "Corte preciso de frios, queijos, defumados e legumes",
    },
    features: [
      "Plano inclinado a 45° que utiliza a gravidade para facilitar o corte",
      "Ranhuras no carro e defletor que reduzem o atrito com o queijo muçarela",
      "Chave geral com botão de emergência e proteção elétrica NR-12",
    ],
  },
  {
    slug: "skymsen-fatiato-250",
    name: "Skymsen Fatiato 250",
    brand: "Skymsen",
    category: "Fatiadores de Frios",
    line: "Skymsen Semiautomático",
    tagline:
      "Fatiador de frios semiautomático de 250 mm compacto, ideal para balcões de atendimento rápido, padarias e conveniências.",
    idealFor: ["Padarias", "Cafeterias", "Mercearias", "Cozinhas"],
    highlight: "Compacto 250 mm",
    ambientBg: "/images/ambientes/padaria.jpg",
    certification: "NR-12 & INMETRO",
    specs: {
      capacity: "Lâmina de 250 mm · Corte de até 14 mm",
      connectivity: "Bivolt seletivo ou 220V · Baixo ruído",
      printer: "Fatiamento na hora na frente do cliente",
    },
    features: [
      "Tamanho reduzido que se adapta a qualquer bancada de frios",
      "Afiador acoplado de fácil utilização para cortes sempre finos",
      "Acabamento sanitário anodizado resistente à oxidação",
    ],
  },
  {
    slug: "skymsen-fatiato-220",
    name: "Skymsen Fatiato 220",
    brand: "Skymsen",
    category: "Fatiadores de Frios",
    line: "Skymsen Semiautomático",
    tagline:
      "O fatiador profissional mais compacto da linha Fatiato (220 mm), perfeito para porcionamento sob demanda em espaços enxutos.",
    idealFor: ["Bistrôs", "Lanchonetes", "Padarias Compactas", "Empórios"],
    highlight: "Super Compacto 220 mm",
    ambientBg: "/images/ambientes/padaria.jpg",
    certification: "NR-12 & INMETRO",
    specs: {
      capacity: "Lâmina de 220 mm · Ajuste fino de espessura",
      connectivity: "Operação semiautomática leve e segura",
      printer: "Cortes precisos de frios, salames, carpaccio e queijos",
    },
    features: [
      "Ocupa pouquíssimo espaço no balcão mantendo padrão profissional Skymsen",
      "Desmontagem rápida para higienização diária completa",
      "Conformidade total com normas de segurança do trabalho e Inmetro",
    ],
  },
  {
    slug: "skymsen-fc350n",
    name: "Skymsen FC-350-N Carnes Inox",
    brand: "Skymsen",
    category: "Fatiadores de Frios",
    line: "Skymsen Automático",
    tagline:
      "Fatiador profissional em aço inox com lâmina de 350 mm desenvolvido especialmente para fatiar carnes bovinas, suínas, bacon e frios.",
    idealFor: ["Açougues", "Casas de Carnes", "Supermercados", "Frigoríficos"],
    highlight: "Fatiador de Carnes 350mm",
    ambientBg: "/images/ambientes/acougue-balcao.jpg",
    certification: "NR-12 & INMETRO",
    specs: {
      capacity: "Lâmina 350 mm · Peças de carne sem osso e bacon",
      connectivity: "220V · Alta força de corte e tração",
      printer: "Padronização de bifes, picanha fatiada, carpaccio e bacon",
    },
    features: [
      "Garras especiais para fixação firme de peças de carne fresca ou resfriada",
      "Aumenta a margem do açougue com bandejas de cortes fatiados padronizados",
      "100% em aço inoxidável com proteção NR-12 para operação em casa de carnes",
    ],
  },
];
