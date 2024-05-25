import { filterSwiper } from './swiper-filter.js';
import { ItemSwiper, NewsSwiper } from '../main';

window.addEventListener('click', (e) => {
  const spoiler = e.target.closest('[data-spoiler]');
  const spoilerItem = e.target.closest('.spoiler-item');
  let spoilerBody;
  let spoilerHeader;
  if (spoiler) {
    spoilerBody = spoiler.querySelector('.spoiler__body');
    spoilerHeader = spoiler.querySelector('.spoiler__header');
    spoilerBody.classList.toggle('spoiler__body-active');
    spoilerHeader.classList.toggle('spoiler__header-active');
  }
  if (spoilerItem) {
    const itemCategory = spoilerItem.getAttribute('data-category');
    const newsContainer = e.target.closest('.news__container');
    if (newsContainer) {
      filterSwiper(NewsSwiper, itemCategory);
    } else {
      filterSwiper(ItemSwiper, itemCategory);
    }
    if (e.target.closest('.swiper')) {
      spoilerHeader.querySelector('p').innerText = e.target.innerText;
    }
    
  }
});
