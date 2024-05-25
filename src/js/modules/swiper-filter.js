export function filterSwiper(swiper, category) {
  const slides = swiper.slides;
  slides.forEach(function (item) {
    const productCard = item.querySelector('.product-cart');
    if (productCard.dataset.category === category || category === 'all') {
      item.classList.remove('hidden-slide');
    } else {
      item.classList.add('hidden-slide');
    }
    swiper.update();
  });
}

