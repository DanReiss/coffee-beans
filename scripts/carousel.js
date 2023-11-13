import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

// import Swiper styles
import 'swiper/swiper.min.css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  speed: 700,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
