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
  filo: string;
  reino: string;
  pesoMedio: string;
  alturaMedia: string;
  expectativaVida: string;
  habitat: string;
  dieta: string;
  descricao: string;
  curiosidades: string[];
  statusConservacao: string;
  imagemUrl: string;
  videoUrl?: string;
  audioUrl?: string;
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
    filo: 'Chordata',
    reino: 'Animalia',
    pesoMedio: '190 kg (macho), 130 kg (fêmea)',
    alturaMedia: '1,2 m (altura do ombro)',
    expectativaVida: '10-14 anos (selvagem), até 20 anos (cativeiro)',
    habitat: 'Savanas, pradarias e florestas abertas da África',
    dieta: 'Carnívoro - zebras, gnus, búfalos, girafas',
    descricao: 'O leão é conhecido como o "rei da selva" e é o segundo maior felino do mundo. Os machos são facilmente reconhecíveis pela juba característica.',
    curiosidades: [
      'Leões são os únicos felinos que vivem em grupos sociais chamados alcateias',
      'As fêmeas fazem a maior parte da caça',
      'O rugido de um leão pode ser ouvido a até 8 km de distância',
      'Leões dormem cerca de 20 horas por dia'
    ],
    statusConservacao: 'Vulnerável',
    imagemUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&h=800&fit=crop',
    videoUrl: 'https://example.com/leao-video.mp4',
    audioUrl: 'https://example.com/leao-rugido.mp3'
  },
  {
    id: 'elefante',
    nome: 'Elefante Africano',
    nomeCientifico: 'Loxodonta africana',
    categoria: 'terrestre',
    genero: 'Loxodonta',
    familia: 'Elephantidae',
    ordem: 'Proboscidea',
    classe: 'Mammalia',
    filo: 'Chordata',
    reino: 'Animalia',
    pesoMedio: '6.000 kg (macho), 3.000 kg (fêmea)',
    alturaMedia: '3-4 m (altura do ombro)',
    expectativaVida: '60-70 anos',
    habitat: 'Savanas, florestas e desertos da África',
    dieta: 'Herbívoro - gramíneas, folhas, cascas, frutas',
    descricao: 'O maior animal terrestre do planeta, conhecido por sua inteligência, memória excepcional e estrutura social complexa.',
    curiosidades: [
      'Elefantes podem reconhecer-se no espelho',
      'Usam a tromba para respirar, cheirar, beber e pegar objetos',
      'Têm excelente memória e podem lembrar de outros elefantes por décadas',
      'Comunicam-se através de sons infrasonoros que humanos não conseguem ouvir'
    ],
    statusConservacao: 'Em Perigo',
    imagemUrl: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=800&fit=crop'
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
    filo: 'Chordata',
    reino: 'Animalia',
    pesoMedio: '2-90 kg (varia por raça)',
    alturaMedia: '15-110 cm (varia por raça)',
    expectativaVida: '10-13 anos (média)',
    habitat: 'Doméstico - vive com humanos em todo o mundo',
    dieta: 'Onívoro - ração, carne, vegetais',
    descricao: 'O melhor amigo do homem, domesticado há mais de 15.000 anos. Existem mais de 300 raças reconhecidas.',
    curiosidades: [
      'Cães têm olfato 40 vezes mais potente que humanos',
      'Podem entender até 250 palavras e gestos',
      'O nariz de cada cão é único, como impressões digitais',
      'Sonham como humanos durante o sono REM'
    ],
    statusConservacao: 'Domesticado',
    imagemUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=800&fit=crop'
  },

  // AQUÁTICOS
  {
    id: 'baleia-azul',
    nome: 'Baleia Azul',
    nomeCientifico: 'Balaenoptera musculus',
    categoria: 'aquatico',
    genero: 'Balaenoptera',
    familia: 'Balaenopteridae',
    ordem: 'Artiodactyla',
    classe: 'Mammalia',
    filo: 'Chordata',
    reino: 'Animalia',
    pesoMedio: '100.000-200.000 kg',
    alturaMedia: '25-30 m de comprimento',
    expectativaVida: '80-90 anos',
    habitat: 'Oceanos de todo o mundo',
    dieta: 'Carnívoro - krill (pequenos crustáceos)',
    descricao: 'O maior animal que já existiu no planeta Terra, maior até que os dinossauros. Pode pesar tanto quanto 30 elefantes.',
    curiosidades: [
      'Seu coração pesa cerca de 180 kg',
      'A língua pode pesar tanto quanto um elefante',
      'Pode consumir até 4 toneladas de krill por dia',
      'Seu canto pode ser ouvido a centenas de quilômetros de distância'
    ],
    statusConservacao: 'Em Perigo',
    imagemUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=800&fit=crop'
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
    filo: 'Chordata',
    reino: 'Animalia',
    pesoMedio: '680-1.100 kg',
    alturaMedia: '4-6 m de comprimento',
    expectativaVida: '70 anos ou mais',
    habitat: 'Águas costeiras temperadas de todos os oceanos',
    dieta: 'Carnívoro - peixes, focas, leões-marinhos',
    descricao: 'O maior peixe predador do mundo, conhecido por sua força, velocidade e dentes afiados.',
    curiosidades: [
      'Pode detectar uma gota de sangue em 100 litros de água',
      'Tem cerca de 300 dentes serrilhados',
      'Pode nadar a velocidades de até 56 km/h',
      'Existem há mais de 400 milhões de anos'
    ],
    statusConservacao: 'Vulnerável',
    imagemUrl: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=800&h=800&fit=crop'
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
    filo: 'Chordata',
    reino: 'Animalia',
    pesoMedio: '3-6,3 kg',
    alturaMedia: '70-102 cm, envergadura de 1,8-2,3 m',
    expectativaVida: '20-30 anos (selvagem)',
    habitat: 'Próximo a grandes corpos de água na América do Norte',
    dieta: 'Carnívoro - peixes, aves aquáticas, pequenos mamíferos',
    descricao: 'Símbolo nacional dos Estados Unidos, conhecida por sua cabeça branca característica e visão aguçada.',
    curiosidades: [
      'Pode enxergar 4-7 vezes melhor que humanos',
      'Mergulha a velocidades de até 160 km/h para capturar peixes',
      'Constrói os maiores ninhos de qualquer ave na América do Norte',
      'Forma pares monogâmicos que duram toda a vida'
    ],
    statusConservacao: 'Pouco Preocupante',
    imagemUrl: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=800&h=800&fit=crop'
  },
  {
    id: 'beija-flor',
    nome: 'Beija-flor',
    nomeCientifico: 'Trochilidae',
    categoria: 'aereo',
    genero: 'Vários',
    familia: 'Trochilidae',
    ordem: 'Apodiformes',
    classe: 'Aves',
    filo: 'Chordata',
    reino: 'Animalia',
    pesoMedio: '2-20 g',
    alturaMedia: '5-13 cm',
    expectativaVida: '3-5 anos',
    habitat: 'Américas, do Alasca à Terra do Fogo',
    dieta: 'Néctar de flores, pequenos insetos',
    descricao: 'As menores aves do mundo, conhecidas por seu voo único que permite pairar no ar e voar para trás.',
    curiosidades: [
      'Batem as asas até 80 vezes por segundo',
      'Coração bate até 1.200 vezes por minuto',
      'Podem voar para frente, trás, cima, baixo e de lado',
      'Visitam até 2.000 flores por dia'
    ],
    statusConservacao: 'Varia por espécie',
    imagemUrl: 'https://images.unsplash.com/photo-1570358934836-6802981e481e?w=800&h=800&fit=crop'
  },

  // EXTINTOS
  {
    id: 'tiranossauro',
    nome: 'Tiranossauro Rex',
    nomeCientifico: 'Tyrannosaurus rex',
    categoria: 'extinto',
    genero: 'Tyrannosaurus',
    familia: 'Tyrannosauridae',
    ordem: 'Saurischia',
    classe: 'Reptilia',
    filo: 'Chordata',
    reino: 'Animalia',
    pesoMedio: '8.000-14.000 kg',
    alturaMedia: '4 m de altura, 12 m de comprimento',
    expectativaVida: '28-30 anos (estimado)',
    habitat: 'América do Norte (Cretáceo Superior, 68-66 milhões de anos atrás)',
    dieta: 'Carnívoro - grandes dinossauros herbívoros',
    descricao: 'Um dos maiores predadores terrestres que já existiu, com mandíbulas poderosas e dentes de até 30 cm.',
    curiosidades: [
      'Tinha a mordida mais forte de qualquer animal terrestre',
      'Podia comer até 230 kg de carne em uma mordida',
      'Braços eram curtos mas muito fortes',
      'Tinha excelente visão e olfato'
    ],
    statusConservacao: 'Extinto',
    imagemUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop'
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
    filo: 'Chordata',
    reino: 'Animalia',
    pesoMedio: '6.000 kg',
    alturaMedia: '3-3,5 m de altura',
    expectativaVida: '60 anos (estimado)',
    habitat: 'Tundras da Europa, Ásia e América do Norte (Era do Gelo)',
    dieta: 'Herbívoro - gramíneas, arbustos, musgos',
    descricao: 'Parente extinto dos elefantes modernos, adaptado ao frio extremo com pelagem espessa e presas curvas.',
    curiosidades: [
      'Tinha pelagem de até 90 cm de comprimento',
      'Presas podiam chegar a 5 metros de comprimento',
      'Extintos há cerca de 4.000 anos',
      'Cientistas estudam possibilidade de "ressuscitá-los" com DNA preservado'
    ],
    statusConservacao: 'Extinto',
    imagemUrl: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&h=800&fit=crop'
  }
];

export function getEspeciesPorCategoria(categoria: CategoriaAnimal): EspecieAnimal[] {
  return especiesDatabase.filter(especie => especie.categoria === categoria);
}

export function getEspeciePorId(id: string): EspecieAnimal | undefined {
  return especiesDatabase.find(especie => especie.id === id);
}
