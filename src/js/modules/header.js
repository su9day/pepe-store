const header = document.querySelector('.header');
console.log(window.location.pathname)
header.querySelectorAll('.menu__item').forEach(item => {
  const itemHref = item.querySelector('a').getAttribute('href');
  if(itemHref === window.location.pathname){
    item.classList.add('menu__item-active')
  }
})
header.addEventListener('click', (e) => {
  const searchBtn = e.target.closest('.search__button');
  const basketBtn = e.target.closest('#header-basket');
  const basketFade = document.getElementById('basket');
  if (searchBtn) {
    const searchInput = header.querySelector('#search-input');
    const searchSubmitBtn = header.querySelector('#search-submit');
    search.classList.toggle('search-active');
    searchInput.classList.toggle('search__input-active');
    searchSubmitBtn.classList.toggle('search__submit-active');
  }
  if (basketBtn) {
    basketFade.classList.add('basket-fade-active'); 
    document.body.style.overflow = 'hidden';
  }
});
