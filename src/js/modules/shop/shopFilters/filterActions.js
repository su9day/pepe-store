import { products } from '../../loadCards';
import {
  filterProducts,
  filterProductsObj,
  checkedInputsArr,
  shopList,
  setFilterProductsObj,
  getFilterProductsObj,
} from './filterProducts';
import { filterList } from './filtersList';
import { createElements } from '../../createElements';
import {
  getSearchProductsObj,
  setSearchProductsObj,
} from '../../searchProducts';
const shopNavItems = document.querySelectorAll('.shop-nav__item');
const applyBtn = document.getElementById('apply-btn');
const clearBtns = document.querySelectorAll('[data-filter-clear]');
const searchInputs = document.querySelectorAll('.search__input');
const filterBox = document.getElementById('filter-box');
const clearFilters = () => {
  setFilterProductsObj(null);
  getFilterProductsObj();
  setSearchProductsObj(null);
  getSearchProductsObj();

  shopList.innerHTML = '';
  filterList.innerHTML = '';
  createElements(products, shopList);
  filterBox
    .querySelectorAll('input[type="checkbox"]:checked')
    .forEach((input) => {
      input.checked = false;
    });
  shopNavItems.forEach((item) => {
    item.classList.remove('shop-nav__item--active');
    item.querySelector('svg').classList.add('none');
  });
  searchInputs.forEach((input) => {
    input.value = '';
  });
};
applyBtn.addEventListener('click', () => {
  setSearchProductsObj(null);
  getSearchProductsObj();
  const checkedInputs = filterBox.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  checkedInputsArr.length = 0;
  checkedInputs.forEach((checkedInput) => {
    checkedInputsArr.push(checkedInput.value);
  });
  filterProducts();
});

clearBtns.forEach((btn) => {
  btn.addEventListener('click', clearFilters);
});
