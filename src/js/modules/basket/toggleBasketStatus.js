export const toggleBasketStatus = () => {
    const basketList = basket.querySelector('.basket__list');
    const basketEmptyBage = basket.querySelector('.basket__empty');
    const basketInfo = basket.querySelector('.basket__info');
    const headerBasketCounter = document.querySelector('.header-basket__counter');
    const giftInput = document.querySelector('.gift')
    if (basketList.children.length > 0) {
      basketEmptyBage.classList.add('none');
      basketInfo.classList.remove('none');
      if (headerBasketCounter) {
        headerBasketCounter.classList.remove('none');
        headerBasketCounter.innerText = basketList.children.length;
      }
      
    } else {
      basketEmptyBage.classList.remove('none');
      basketInfo.classList.add('none');
      const totalPriceValue = document.querySelector('.total-price__value');
      totalPriceValue.innerText = '0$';
      if (headerBasketCounter) {
        headerBasketCounter.classList.add('none');
      }
      if(giftInput){
        giftInput.classList.add('none')
      }
    }
  };