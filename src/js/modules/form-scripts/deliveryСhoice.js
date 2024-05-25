import { calcBasketPrice } from "../basket/calcBasketPrice";
export const deliveryInput = document.querySelectorAll('.radio-input');
const basketDeliveryPrice = document.getElementById('basket-shipping-price');
export function deliveryChoice(){
        deliveryInput.forEach((item) => {
            item.addEventListener('change',function(){
                const deliveryPriceValue = item.value;
                basketDeliveryPrice.innerText = deliveryPriceValue;
                const deliveryLabel = this.closest('.delivery-lable');
                const deliveryName = deliveryLabel.querySelector(
                  '.delivery-lable__name'
                ).innerText;
                const deliveryPrice = deliveryLabel.querySelector(
                  '.delivery-lable__price'
                ).innerText;
                const deliveryInfo = `${deliveryName} · ${deliveryPrice}`;
                localStorage.setItem('userDelivery', deliveryInfo);
                calcBasketPrice();
            });
          });
    
}