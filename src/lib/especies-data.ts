// Tipos e dados das espécies animais

export type CategoriaAnimal = 'terrestre' | 'aquatico' | 'aereo' | 'extinto';

export interface EspecieAnimal {
  id: string;
  nome: string;
  nomeCientifico: string;
  categoria: CategoriaAnimal;
  genero: string;
  familia: string;
  ordem: string;
  classe: string;
  pesoMedio: string;
  alturaComprimento: string;
  expectativaVida: string;
  descricao: string;
  curiosidades: string[];
  habitat: string;
  dieta: string;
  statusConservacao: string;
  imagemUrl: string;
  videoUrl?: string;
  audioUrl?: string;
  somEmitido: string;
  desbloqueada: boolean;
}

export const especiesDatabase: EspecieAnimal[] = [
  // TERRESTRES
  {
    id: 'leao',
    nome: 'Leão',
    nomeCientifico: 'Panthera leo',
    categoria: 'terrestre',
    genero: 'Panthera',
    familia: 'Felidae',
    ordem: 'Carnivora',
    classe: 'Mammalia',
    pesoMedio: '190 kg (macho), 130 kg (fêmea)',
    alturaComprimento: '1,2m altura / 2,5m comprimento',
    expectativaVida: '10-14 anos (selvagem), até 20 anos (cativeiro)',
    descricao: 'O leão é conhecido como o "rei da selva" e vive em grupos sociais chamados alcateias. Os machos possuem juba característica.',
    curiosidades: [
      'Apenas os machos possuem juba',
      'Podem dormir até 20 horas por dia',
      'O rugido pode ser ouvido a 8km de distância',
      'As fêmeas fazem a maior parte da caça'
    ],
    habitat: 'Savanas e pradarias da África',
    dieta: 'Carnívoro - zebras, gnus, búfalos',
    statusConservacao: 'Vulnerável',
    imagemUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&h=600&fit=crop',
    somEmitido: 'Rugido potente e grave',
    desbloqueada: false
  },
  {
    id: 'elefante-africano',
    nome: 'Elefante Africano',
    nomeCientifico: 'Loxodonta africana',
    categoria: 'terrestre',
    genero: 'Loxodonta',
    familia: 'Elephantidae',
    ordem: 'Proboscidea',
    classe: 'Mammalia',
    pesoMedio: '6.000 kg (macho), 3.000 kg (fêmea)',
    alturaComprimento: '3-4m de altura',
    expectativaVida: '60-70 anos',
    descricao: 'O maior animal terrestre do planeta, conhecido por sua inteligência, memória excepcional e estrutura social complexa.',
    curiosidades: [
      'Possuem memória excepcional',
      'Podem consumir 150kg de vegetação por dia',
      'Usam a tromba para beber, comer e se comunicar',
      'Demonstram luto pelos mortos'
    ],
    habitat: 'Savanas, florestas e desertos da África',
    dieta: 'Herbívoro - gramíneas, folhas, cascas',
    statusConservacao: 'Em perigo',
    imagemUrl: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop',
    somEmitido: 'Barrito (trombeta)',
    desbloqueada: false
  },
  {
    id: 'cachorro',
    nome: 'Cachorro Doméstico',
    nomeCientifico: 'Canis lupus familiaris',
    categoria: 'terrestre',
    genero: 'Canis',
    familia: 'Canidae',
    ordem: 'Carnivora',
    classe: 'Mammalia',
    pesoMedio: '5-90 kg (varia por raça)',
    alturaComprimento: '15-110cm (varia por raça)',
    expectativaVida: '10-13 anos (média)',
    descricao: 'O melhor amigo do homem, domesticado há milhares de anos. Existem mais de 300 raças diferentes.',
    curiosidades: [
      'Podem entender até 250 palavras',
      'Olfato 100.000x mais sensível que humanos',
      'Sonham como os humanos',
      'Cada focinho é único como impressão digital'
    ],
    habitat: 'Doméstico - vive com humanos',
    dieta: 'Onívoro - ração, carne, vegetais',
    statusConservacao: 'Domesticado',
    imagemUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop',
    somEmitido: 'Latido, uivo, rosnado',
    desbloqueada: false
  },
  {
    id: 'gato',
    nome: 'Gato Doméstico',
    nomeCientifico: 'Felis catus',
    categoria: 'terrestre',
    genero: 'Felis',
    familia: 'Felidae',
    ordem: 'Carnivora',
    classe: 'Mammalia',
    pesoMedio: '3,5-5 kg',
    alturaComprimento: '23-25cm altura / 46cm comprimento',
    expectativaVida: '12-18 anos',
    descricao: 'Felino domesticado há cerca de 10.000 anos, conhecido por sua independência e agilidade.',
    curiosidades: [
      'Passam 70% da vida dormindo',
      'Podem girar as orelhas 180 graus',
      'Ronronam a 26 vibrações por segundo',
      'Não conseguem sentir sabor doce'
    ],
    habitat: 'Doméstico - vive com humanos',
    dieta: 'Carnívoro - ração, carne, peixe',
    statusConservacao: 'Domesticado',
    imagemUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=600&fit=crop',
    somEmitido: 'Miado, ronronar, rosnado',
    desbloqueada: false
  },

  // AQUÁTICOS
  {
    id: 'baleia-azul',
    nome: 'Baleia Azul',
    nomeCientifico: 'Balaenoptera musculus',
    categoria: 'aquatico',
    genero: 'Balaenoptera',
    familia: 'Balaenopteridae',
    ordem: 'Cetacea',
    classe: 'Mammalia',
    pesoMedio: '150.000 kg',
    alturaComprimento: 'até 30m de comprimento',
    expectativaVida: '80-90 anos',
    descricao: 'O maior animal que já existiu no planeta Terra, maior até que os dinossauros. Seu coração pesa cerca de 180kg.',
    curiosidades: [
      'Maior animal que já existiu',
      'Coração do tamanho de um carro pequeno',
      'Pode consumir 4 toneladas de krill por dia',
      'Seu canto pode viajar por milhares de km'
    ],
    habitat: 'Oceanos de todo o mundo',
    dieta: 'Carnívoro - principalmente krill',
    statusConservacao: 'Em perigo',
    imagemUrl: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e?w=800&h=600&fit=crop',
    somEmitido: 'Canto de baixa frequência',
    desbloqueada: false
  },
  {
    id: 'tubarao-branco',
    nome: 'Tubarão Branco',
    nomeCientifico: 'Carcharodon carcharias',
    categoria: 'aquatico',
    genero: 'Carcharodon',
    familia: 'Lamnidae',
    ordem: 'Lamniformes',
    classe: 'Chondrichthyes',
    pesoMedio: '1.500-2.000 kg',
    alturaComprimento: '4-6m de comprimento',
    expectativaVida: '70 anos',
    descricao: 'Predador apex dos oceanos, conhecido por sua força e sentidos aguçados. Possui até 300 dentes serrilhados.',
    curiosidades: [
      'Podem detectar uma gota de sangue em 100 litros de água',
      'Possuem até 300 dentes em várias fileiras',
      'Podem nadar a 56 km/h',
      'Existem há 400 milhões de anos'
    ],
    habitat: 'Águas costeiras temperadas',
    dieta: 'Carnívoro - focas, leões-marinhos, peixes',
    statusConservacao: 'Vulnerável',
    imagemUrl: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=800&h=600&fit=crop',
    somEmitido: 'Não emite sons audíveis',
    desbloqueada: false
  },
  {
    id: 'golfinho',
    nome: 'Golfinho Nariz-de-garrafa',
    nomeCientifico: 'Tursiops truncatus',
    categoria: 'aquatico',
    genero: 'Tursiops',
    familia: 'Delphinidae',
    ordem: 'Cetacea',
    classe: 'Mammalia',
    pesoMedio: '150-650 kg',
    alturaComprimento: '2-4m de comprimento',
    expectativaVida: '40-50 anos',
    descricao: 'Mamífero marinho altamente inteligente, conhecido por sua sociabilidade e capacidade de comunicação complexa.',
    curiosidades: [
      'Dormem com metade do cérebro de cada vez',
      'Usam ecolocalização para navegar',
      'Podem reconhecer-se no espelho',
      'Têm nomes individuais (assobios únicos)'
    ],
    habitat: 'Oceanos temperados e tropicais',
    dieta: 'Carnívoro - peixes, lulas',
    statusConservacao: 'Pouco preocupante',
    imagemUrl: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=800&h=600&fit=crop',
    somEmitido: 'Cliques, assobios, estalos',
    desbloqueada: false
  },

  // AÉREOS
  {
    id: 'aguia-careca',
    nome: 'Águia-de-cabeça-branca',
    nomeCientifico: 'Haliaeetus leucocephalus',
    categoria: 'aereo',
    genero: 'Haliaeetus',
    familia: 'Accipitridae',
    ordem: 'Accipitriformes',
    classe: 'Aves',
    pesoMedio: '3-6,3 kg',
    alturaComprimento: '70-102cm altura / 2,5m envergadura',
    expectativaVida: '20-30 anos (selvagem)',
    descricao: 'Símbolo nacional dos Estados Unidos, ave de rapina poderosa com visão excepcional.',
    curiosidades: [
      'Visão 8x mais aguçada que humanos',
      'Podem mergulhar a 160 km/h',
      'Constroem os maiores ninhos de aves',
      'Acasalam para a vida toda'
    ],
    habitat: 'América do Norte - próximo a corpos d\'água',
    dieta: 'Carnívoro - peixes, aves aquáticas',
    statusConservacao: 'Pouco preocupante',
    imagemUrl: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=800&h=600&fit=crop',
    somEmitido: 'Grito agudo e estridente',
    desbloqueada: false
  },
  {
    id: 'beija-flor',
    nome: 'Beija-flor',
    nomeCientifico: 'Trochilidae (família)',
    categoria: 'aereo',
    genero: 'Vários',
    familia: 'Trochilidae',
    ordem: 'Apodiformes',
    classe: 'Aves',
    pesoMedio: '2-20g',
    alturaComprimento: '5-13cm',
    expectativaVida: '3-5 anos',
    descricao: 'Menor ave do mundo, capaz de voar em todas as direções incluindo de ré. Bate as asas até 80 vezes por segundo.',
    curiosidades: [
      'Único pássaro que voa de ré',
      'Coração bate 1.200 vezes por minuto',
      'Visitam até 2.000 flores por dia',
      'Metabolismo mais rápido de todos os animais'
    ],
    habitat: 'Américas - florestas e jardins',
    dieta: 'Nectarívoro - néctar e pequenos insetos',
    statusConservacao: 'Varia por espécie',
    imagemUrl: 'https://images.unsplash.com/photo-1570900808791-d7e0c0f0a4e4?w=800&h=600&fit=crop',
    somEmitido: 'Zumbido das asas',
    desbloqueada: false
  },
  {
    id: 'papagaio-arara',
    nome: 'Arara-azul',
    nomeCientifico: 'Anodorhynchus hyacinthinus',
    categoria: 'aereo',
    genero: 'Anodorhynchus',
    familia: 'Psittacidae',
    ordem: 'Psittaciformes',
    classe: 'Aves',
    pesoMedio: '1,2-1,7 kg',
    alturaComprimento: '1m de comprimento',
    expectativaVida: '50-60 anos',
    descricao: 'Maior psitacídeo do mundo, com plumagem azul vibrante. Espécie ameaçada endêmica do Brasil.',
    curiosidades: [
      'Maior papagaio do mundo',
      'Bico pode quebrar cocos',
      'Acasalam para a vida toda',
      'Podem imitar sons humanos'
    ],
    habitat: 'Pantanal e Cerrado brasileiro',
    dieta: 'Herbívoro - nozes, sementes, frutas',
    statusConservacao: 'Vulnerável',
    imagemUrl: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800&h=600&fit=crop',
    somEmitido: 'Grasnado alto e estridente',
    desbloqueada: false
  },

  // EXTINTOS
  {
    id: 'tiranossauro-rex',
    nome: 'Tiranossauro Rex',
    nomeCientifico: 'Tyrannosaurus rex',
    categoria: 'extinto',
    genero: 'Tyrannosaurus',
    familia: 'Tyrannosauridae',
    ordem: 'Saurischia',
    classe: 'Reptilia',
    pesoMedio: '8.000-14.000 kg',
    alturaComprimento: '4m altura / 12m comprimento',
    expectativaVida: '28-30 anos (estimado)',
    descricao: 'Um dos maiores predadores terrestres que já existiu. Viveu há 68-66 milhões de anos no período Cretáceo.',
    curiosidades: [
      'Mordida mais forte de todos os animais terrestres',
      'Dentes de até 30cm de comprimento',
      'Podia correr a 27 km/h',
      'Tinha visão binocular como humanos'
    ],
    habitat: 'América do Norte - Cretáceo Superior',
    dieta: 'Carnívoro - grandes dinossauros herbívoros',
    statusConservacao: 'Extinto há 66 milhões de anos',
    imagemUrl: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=800&h=600&fit=crop',
    somEmitido: 'Rugido grave (especulação)',
    desbloqueada: false
  },
  {
    id: 'mamute',
    nome: 'Mamute Lanoso',
    nomeCientifico: 'Mammuthus primigenius',
    categoria: 'extinto',
    genero: 'Mammuthus',
    familia: 'Elephantidae',
    ordem: 'Proboscidea',
    classe: 'Mammalia',
    pesoMedio: '6.000 kg',
    alturaComprimento: '3-3,5m de altura',
    expectativaVida: '60 anos (estimado)',
    descricao: 'Parente extinto do elefante moderno, adaptado ao frio extremo com pelagem espessa. Extinto há cerca de 4.000 anos.',
    curiosidades: [
      'Presas podiam chegar a 5m de comprimento',
      'Pelagem de até 90cm de comprimento',
      'Conviveram com humanos primitivos',
      'Alguns foram encontrados congelados preservados'
    ],
    habitat: 'Tundra da Era do Gelo - Hemisfério Norte',
    dieta: 'Herbívoro - gramíneas, musgos, líquens',
    statusConservacao: 'Extinto há 4.000 anos',
    imagemUrl: 'https://images.unsplash.com/photo-1597166763537-34c97b6b91e3?w=800&h=600&fit=crop',
    somEmitido: 'Barrito grave (especulação)',
    desbloqueada: false
  },
  {
    id: 'dodô',
    nome: 'Dodô',
    nomeCientifico: 'Raphus cucullatus',
    categoria: 'extinto',
    genero: 'Raphus',
    familia: 'Columbidae',
    ordem: 'Columbiformes',
    classe: 'Aves',
    pesoMedio: '10-18 kg',
    alturaComprimento: '1m de altura',
    expectativaVida: 'Desconhecido',
    descricao: 'Ave não voadora endêmica da Ilha Maurício. Extinta no século XVII devido à caça e predação por animais introduzidos.',
    curiosidades: [
      'Não tinha predadores naturais',
      'Perdeu a capacidade de voar',
      'Extinto menos de 100 anos após descoberta',
      'Símbolo da extinção causada por humanos'
    ],
    habitat: 'Ilha Maurício - Oceano Índico',
    dieta: 'Herbívoro - frutas, sementes, folhas',
    statusConservacao: 'Extinto desde 1662',
    imagemUrl: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&h=600&fit=crop',
    somEmitido: 'Desconhecido',
    desbloqueada: false
  }
];

// Função para obter espécies por categoria
export function getEspeciesPorCategoria(categoria: CategoriaAnimal): EspecieAnimal[] {
  return especiesDatabase.filter(e => e.categoria === categoria);
}

// Função para obter espécie por ID
export function getEspeciePorId(id: string): EspecieAnimal | undefined {
  return especiesDatabase.find(e => e.id === id);
}

// Função para obter estatísticas do álbum
export function getEstatisticasAlbum() {
  const total = especiesDatabase.length;
  const desbloqueadas = especiesDatabase.filter(e => e.desbloqueada).length;
  const porCategoria = {
    terrestre: especiesDatabase.filter(e => e.categoria === 'terrestre').length,
    aquatico: especiesDatabase.filter(e => e.categoria === 'aquatico').length,
    aereo: especiesDatabase.filter(e => e.categoria === 'aereo').length,
    extinto: especiesDatabase.filter(e => e.categoria === 'extinto').length,
  };
  
  return {
    total,
    desbloqueadas,
    percentual: Math.round((desbloqueadas / total) * 100),
    porCategoria
  };
}
