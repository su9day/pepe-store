const categoriesBox = document.querySelector('.categories');
console.log('categories.js');
const page = window.location.pathname.split('/').pop();
import {
  checkedInputsArr,
  filterProducts,
} from './shop/shopFilters/filterProducts';
document.addEventListener('DOMContentLoaded', () => {
  if (page == 'index.html') {
    const categoriesBoxes = document.querySelectorAll('.categories__cart');
    categoriesBoxes.forEach((element) => {
      element
        .querySelector('a')
        .setAttribute('href', `shop.html?category=${element.dataset.category}`);
    });
  }
  if (page == 'shop.html') {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    checkedInputsArr.push(category);
    document
      .querySelector(`input[value = ${category}]`)
      .setAttribute('checked', '');
    filterProducts();
  }
});
