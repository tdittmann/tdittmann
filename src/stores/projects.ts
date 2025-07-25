export interface Project {
  id: number
  title: string
  link: string
  technologies: Technology[]
  year: number
  images: string[]
}

type Technology = 'HTML' | 'CSS' | 'Joomla!' | 'Ionic' | 'Vue' | 'PHP' | 'jQuery' | 'Angular'

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'SC Dahenfeld 1946 e.V.',
    link: 'https://sc-dahenfeld.de',
    year: 2011,
    images: ['/img/projects/sc-dahenfeld.png'],
    technologies: ['HTML', 'CSS', 'Joomla!', 'PHP', 'jQuery', 'Ionic', 'Angular'],
  },
  {
    id: 2,
    title: 'Ilona Roth Immobilien',
    link: 'https://ilonaroth-immobilien.de',
    year: 2013,
    images: ['/img/projects/ilonaroth-immobilien.png'],
    technologies: ['HTML', 'CSS', 'Joomla!', 'PHP'],
  },
  {
    id: 3,
    title: 'Zum Guten Trunk',
    link: 'https://weik-erlenbach.de',
    year: 2014,
    images: ['/img/projects/zum-guten-trunk.png'],
    technologies: ['HTML', 'CSS', 'Joomla!'],
  },
  {
    id: 3,
    title: 'Naturheilpraxis Spielhaupter',
    link: '',
    year: 2015,
    images: ['/img/projects/naturheilpraxis-spielhaupter.png'],
    technologies: ['HTML', 'CSS', 'Joomla!'],
  },
  {
    id: 4,
    title: 'Metallbau Forny',
    link: 'http://metallbau-forny.de',
    year: 2016,
    images: ['/img/projects/metallbau-forny.png'],
    technologies: ['HTML', 'CSS', 'Joomla!'],
  },
  {
    id: 5,
    title: 'HSG Stein Kochertürn',
    link: 'https://hsg-ks.de',
    year: 2016,
    images: ['/img/projects/hsg-stein-kochertuern.png'],
    technologies: ['HTML', 'CSS', 'Joomla!'],
  },
  {
    id: 6,
    title: 'Sportgaststätte am Mönchswald',
    link: 'https://sportheim-dahenfeld.de',
    year: 2020,
    images: ['/img/projects/sportheim-dahenfeld.png'],
    technologies: ['HTML', 'CSS', 'Joomla!'],
  },
  {
    id: 7,
    title: 'Dr. Siegle Sachverständigenbüro',
    link: 'https://drsiegle.eu',
    year: 2020,
    images: ['/img/projects/siegle-sachverstaendigenbuero.png'],
    technologies: ['HTML', 'CSS', 'jQuery'],
  },
  {
    id: 8,
    title: 'Charles Barker',
    link: 'https://charles-barker.com',
    year: 2020,
    images: ['/img/projects/charles-barker.png'],
    technologies: ['HTML', 'CSS', 'jQuery'],
  },
  {
    id: 9,
    title: 'Lovy',
    link: 'https://lovy.timo-dittmann.de',
    year: 2025,
    images: ['/img/projects/lovy.png'],
    technologies: ['HTML', 'CSS', 'Ionic', 'Vue'],
  },
]
