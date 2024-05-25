export let calcBasketPrice = () => {
    const basketItems = basket.querySelectorAll('.basket-item');
    let totalPrice = 0;
  
    basketItems.forEach((item) => {
      const itemCounter = item.querySelector('[data-counter]');
      const itemPrice = item.querySelector('.basket-item__price');
      const currentPriceItem =
        parseInt(itemCounter.textContent) * parseInt(itemPrice.textContent);
      const itemDiscount = document.querySelector('.discount__value');
      const totalBasketPrice = document.querySelector('.total-price__value');
  
      const deliveryPrice = document.getElementById('basket-shipping-price');
      let deliveryPriceValue = 0;
      if (deliveryPrice && document.querySelector('.radio-input:checked')){
        deliveryPriceValue = parseInt(deliveryPrice.textContent);
      }
      totalBasketPrice.innerText =
        (totalPrice += currentPriceItem) -
        parseInt(itemDiscount.textContent) +
        deliveryPriceValue +
        '$';
    });
  };