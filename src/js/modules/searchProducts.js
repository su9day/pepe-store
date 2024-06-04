import { products } from './loadCards';
import { shopList } from './shop/shopFilters/filterProducts';
import { createElements } from './createElements';
const searchInput = document.getElementById('search-input');
const searchInputShop = document.getElementById('shop-search-input');
const searchsubmitBtn = document.getElementById('search-submit');
let searchParamsArr;
export let searchProductsObj;
export function setSearchProductsObj(obj) {
  searchProductsObj = obj;
}
export function getSearchProductsObj() {
  return searchProductsObj;
}
searchsubmitBtn.addEventListener('click', (e) => {
  const searchBox = e.target.closest('#search');
  const searchParamsValue = searchBox.querySelector('.search__input').value;
  const searchUrl = new URLSearchParams(window.location.search);
  searchUrl.set('search', searchParamsValue);
  const shopSearchUrl = 'shop.html?' + searchUrl.toString();
  window.location.href = shopSearchUrl;
});
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname === '/pepe-store/shop.html') {
    const searchUrl = new URLSearchParams(window.location.search);
    if (searchUrl.get('search')) {
      searchParamsArr = searchUrl.get('search').split(' ');
      searchProductsObj = {};
      for (let key in products) {
        const product = products[key];
        const productName = product['name'];
        const productColor = product['color'];
        const productCategory = product['category'];
        const productParamsArr = [productCategory];
        productName.split(' ').forEach((str) => {
          productParamsArr.push(str);
        });
        productColor.forEach((str) => {
          productParamsArr.push(str);
        });
        const isSearch = searchParamsArr.every((item) => {
          return productParamsArr.includes(item);
        });
        if (isSearch) {
          searchProductsObj[key] = products[key];
        }
      }
      searchInput.value = searchUrl.get('search');
      searchInputShop.value = searchUrl.get('search');
      shopList.innerHTML = '';
      createElements(searchProductsObj, shopList);
    }
  }
});
