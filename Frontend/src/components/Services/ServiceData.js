// src/serviceData.js
import weddingImg from '../../assets/wedding.png'
// '../assets/wedding.png';
import preWeddingImg from '../../assets/prewedding.png';
import anniversaryImg from '../../assets/anniversary.png';
import birthdayImg from '../../assets/birthday.png';
import funeralImg from '../../assets/funeral.png';
import babyShowerImg from '../../assets/babyshower.png';
import corporateImg from '../../assets/corporate.jpg';

// Add more as needed...

export const services = [
  {
    name: 'Wedding',
    image: weddingImg,
    route: '/wedding'
  },
  {
    name: 'Pre-Wedding Shoot',
    image: preWeddingImg,
    route: '/pre-wedding-shoot'
  },
  {
    name: 'Wedding Anniversary',
    image: anniversaryImg,
    route: '/anniversary'
  },
  {
    name: 'Birthday Party',
    image: birthdayImg,
    route: '/birthday'
  },
  {
    name: 'Funeral/Cremation',
    image: funeralImg,
    route: '/funeral'
  },
  {
    name: 'Baby Shower (Godh Bharai)',
    image: babyShowerImg,
    route: '/baby-shower'
  },
  {
    name: 'Corporate Events',
    image: corporateImg,
    route: '/corporate'
  }
  // Add more services here
];
