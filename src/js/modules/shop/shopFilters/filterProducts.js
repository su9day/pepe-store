import { addFiltersList } from './filtersList';
import { products, checkAvailableColorAndSize } from '../../loadCards';
import { createElements } from '../../createElements';
export const shopList = document.getElementById('shop-list');
export const checkedInputsArr = [];
export let filterProductsObj;
//Две функции для изменения filterProductsObj в других файлах
export function setFilterProductsObj(obj) {
  filterProductsObj = obj;
}
export function getFilterProductsObj() {
  return filterProductsObj;
}
export const filterProducts = () => {
  const addFilterProducts = () => {
    filterProductsObj = {};
    for (let key in products) {
      const product = products[key];
      const productColor = product['color'];
      const productSize = product['size'];
      const productCategory = product['category'];
      const productParamsArr = [productCategory];
      productColor.forEach((str) => {
        productParamsArr.push(str);
      });
      productSize.forEach((str) => {
        productParamsArr.push(str);
      });
      const isChecked = checkedInputsArr.every((item) => {
        return productParamsArr.includes(item);
      });
      if (isChecked) {
        filterProductsObj[key] = products[key];
      }
    }
  };

  addFilterProducts();
  addFiltersList();
  shopList.innerHTML = '';
  createElements(filterProductsObj, shopList);
  checkAvailableColorAndSize('color', filterProductsObj);
  checkAvailableColorAndSize('size', filterProductsObj);
};
