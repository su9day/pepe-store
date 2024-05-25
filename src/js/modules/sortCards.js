export let sortedProductsObj;
export const sortDowner = (key, obj) => {
  const sortedProductsArr = Object.values(obj).toSorted(
    (a, b) => a[key] - b[key]
  );
  sortedProductsObj = {};
  //Преобразование массива в объект
  for (let i = 0; i < sortedProductsArr.length; i++) {
    const item = sortedProductsArr[i];
    sortedProductsObj[item.name] = item;
  }
};
export const sortUpper = (key, obj) => {
  const sortedProductsArr = Object.values(obj).toSorted(
    (a, b) => b[key] - a[key]
  );
  sortedProductsObj = {};
  //Преобразование массива в объект
  for (let i = 0; i < sortedProductsArr.length; i++) {
    const item = sortedProductsArr[i];
    sortedProductsObj[item.name] = item;
  }
};
