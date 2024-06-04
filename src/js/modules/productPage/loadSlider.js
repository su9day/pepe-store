import { products } from '../loadCards';
import { sortUpper,sortedProductsObj} from '../sortCards';
import { createElements } from '../createElements';

const pageSlider = document.getElementById('swiper-wrapper_also-like')
console.log(pageSlider)
document.addEventListener('DOMContentLoaded',() => {
    sortUpper('likes',products)
    createElements(sortedProductsObj,pageSlider);
})