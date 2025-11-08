export interface Player {
  id: number;
  nombre: string;
  apellidos: string;
  posicion: string;
  edad: number;
  altura: number;      // en cm
  videoUrl: string;
  photoUrl: string;    // <-- NUEVO
}



export const PLAYERS: Player[] = [
  {
    id: 1,
    nombre: 'Juan',
    apellidos: 'Pérez',
    posicion: 'Base',
    edad: 25,
    altura: 183,
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1',
    photoUrl: 'https://images.pexels.com/photos/1103829/pexels-photo-1103829.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    nombre: 'Carlos',
    apellidos: 'López',
    posicion: 'Escolta',
    edad: 27,
    altura: 189,
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2',
    photoUrl: 'https://images.pexels.com/photos/1103832/pexels-photo-1103832.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    nombre: 'Miguel',
    apellidos: 'García',
    posicion: 'Alero',
    edad: 24,
    altura: 195,
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
    photoUrl: 'https://images.pexels.com/photos/974501/pexels-photo-974501.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 4,
    nombre: 'Diego',
    apellidos: 'Rodríguez',
    posicion: 'Ala-Pívot',
    edad: 29,
    altura: 201,
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_4',
    photoUrl: 'https://images.pexels.com/photos/1103833/pexels-photo-1103833.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 5,
    nombre: 'Sergio',
    apellidos: 'Martínez',
    posicion: 'Pívot',
    edad: 30,
    altura: 208,
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_5',
    photoUrl: 'https://images.pexels.com/photos/159905/basketball-dunk-basket-slam-dunk-159905.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];
