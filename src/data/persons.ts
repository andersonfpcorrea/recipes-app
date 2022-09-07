import Art from '../assets/faces/art-hauntington-jzY0KRJopEI-unsplash.jpg';
import Erik from '../assets/faces/erik-lucatero-d2MSDujJl2g-unsplash.jpg';
import Houcine from '../assets/faces/houcine-ncib-B4TjXnI0Y2c-unsplash.jpg';
import Jake from '../assets/faces/jake-nackos-IF9TK5Uy-KI-unsplash.jpg';
import James from '../assets/faces/james-eggleton-RknsWEMVpIA-unsplash.jpg';
import Radu from '../assets/faces/radu-florin-JyVcAIUAcPM-unsplash.jpg';
import Taylor from '../assets/faces/taylor-vatem-MzgfIaCW73w-unsplash.jpg';
import Tessa from '../assets/faces/tessa-wilson-1KuiLuha2aU-unsplash.jpg';

export const persons = [
  {
    photoUrl: Art,
    name: 'Art Hauntington',
    place: 'Bogota, Colombia',
  },
  {
    photoUrl: Erik,
    name: 'Erik Lucatero',
    place: 'Paris, France',
  },
  {
    photoUrl: Houcine,
    name: 'Houcine Houssain',
    place: 'Lisbon, Portugal',
  },
  {
    photoUrl: Jake,
    name: 'Jake Nackros',
    place: 'Rome, Italy',
  },
  {
    photoUrl: James,
    name: 'James Eggleton',
    place: 'Singapore',
  },
  {
    photoUrl: Radu,
    name: 'Radu Florin',
    place: 'Rio de Janeiro, Brazil',
  },
  {
    photoUrl: Taylor,
    name: 'Taylor Vatem',
    place: 'Buenos Aires, Argentina',
  },
  {
    photoUrl: Tessa,
    name: 'Tessa Wilson',
    place: 'Moscow, Russia',
  },
];

export const getRandomPerson = () => {
  const random = Math.floor(Math.random() * persons.length);
  return persons[random];
};
