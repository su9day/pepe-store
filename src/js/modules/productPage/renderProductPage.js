import { products ,checkAvailableColorAndSize} from "../loadCards";
const page = window.location.pathname.split('/').pop();
const miniSlider = document.getElementById('product-mini-slider')
const mainSlider = document.getElementById('main-slider')
document.body.addEventListener('click',(e) => {
    if(e.target.tagName.toLowerCase() === 'img'){
        const clickedCart = e.target.closest('.product-cart');
        if(clickedCart){ 
            let clickedCartObj = null;
            const clickedCartName = clickedCart.querySelector('.product-cart__title').innerText
            for(let obj in products){
                if(products[obj].name === clickedCartName.toLowerCase()){
                    clickedCartObj = products[obj]
                    break
                }
                
            }
            if(clickedCartObj){
                
                const productPageParams = new URLSearchParams()
                productPageParams.set('img',JSON.stringify(clickedCartObj.img))
                productPageParams.set('name',clickedCartObj.name)
                productPageParams.set('price',clickedCartObj.price)
                productPageParams.set('addedDate',clickedCartObj.addedDate.toISOString())
                productPageParams.set('color',JSON.stringify(clickedCartObj.color))
                productPageParams.set('size',JSON.stringify(clickedCartObj.size))
                productPageParams.set('likes',clickedCartObj.likes)
                productPageParams.set('totalQuantity',clickedCartObj.quantity.total)
                productPageParams.set('restQuantity',clickedCartObj.quantity.rest)
                const productPageUrl = 'product.html?' + productPageParams.toString()
                window.location.href = productPageUrl

            }
        }
    }

})
const checkSizeColor = (parameter,obj) => {
    const itemParametersInputs = document.querySelectorAll(
        `.${parameter}__input`
      );
      let someChecked = false
      itemParametersInputs.forEach((parameterInput) => {
        parameterInput.setAttribute('disabled', '');
        parameterInput.nextElementSibling.classList.add(`${parameter}__disabled`);
        obj[parameter].forEach((parameterValue) => {
          if (parameterInput.value === parameterValue) {
            if(!someChecked){
                parameterInput.setAttribute('checked','')
                someChecked = true
            }
            parameterInput.removeAttribute('disabled');
            parameterInput.nextElementSibling.classList.remove(
              `${parameter}__disabled`
            );
            return;
          }
        });
      });
}
if(page === 'product.html'){
    
    const productName = document.getElementById('product-name')
    const productPrice = document.getElementById('product-price')
    const productMenuWrapper = document.querySelector('.product-menu__wrapper')
    const  totalQuantity = document.getElementById('total')
    const  restQuantity = document.getElementById('rest')
    document.addEventListener('DOMContentLoaded',() => {
        const productUrlParams = new URLSearchParams(window.location.search);
        const productObj = {
            img:JSON.parse(productUrlParams.get('img')),
            name:productUrlParams.get('name'),
            price:Number(productUrlParams.get('price')),
            addedDate: new Date(productUrlParams.get('addedDate')),
            color: JSON.parse(productUrlParams.get('color')),
            size: JSON.parse(productUrlParams.get('size')),
            likes: Number(productUrlParams.get('likes')),
            totalQuantity: productUrlParams.get('totalQuantity'),
            restQuantity: productUrlParams.get('restQuantity'),
            
        }
        
        for(let i = 0;i < productObj.img.length;i++){
            const mainSlide = `
            <div class="product-slider__slide product-slide swiper-slide">
                                <div class="product-slide__wrapper">
                                    
                                    <div class="product-slide__image">
                                        <img src="${productObj.img[i]}" alt="slide">
                                    </div>
                                </div>
                    
                            </div>
            `
            const miniSlide = `
        <div class="product-slider-mini__slide swiper-slide">
            <div class="product-slider-mini__image">
                <img src="${productObj.img[i]}" alt="mini-slide">
            </div>
        </div>`
        miniSlider.insertAdjacentHTML('beforeend', miniSlide);
        mainSlider.insertAdjacentHTML('beforeend', mainSlide);
        }
        productMenuWrapper.dataset.name = productObj.name
        productName.innerText = productObj.name
        totalQuantity.innerText = productObj.totalQuantity
        restQuantity.innerText = productObj.restQuantity
        productPrice.innerText = `${productObj.price}$`
        checkSizeColor('color',productObj)
        checkSizeColor('size',productObj)
        
    })
}

