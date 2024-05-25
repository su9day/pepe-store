export const addProductsToStorage = () => {
  const basketList = document.getElementById('basket-list');
  const basketElems = basketList.querySelectorAll('.basket__item');
  const basketArr = Array.from(basketElems).map((element) => element.outerHTML);
  localStorage.setItem('basketStorageElems', JSON.stringify(basketArr));
  const basketPrice = document.getElementById('basket-total-price').innerText
  localStorage.setItem('basketPrice',basketPrice)
};
export const getProductsFromStorage = () => {
  const basketList = document.getElementById('basket-list');
  const storedElemsArr = JSON.parse(localStorage.getItem('basketStorageElems'));
  const restoredElems = storedElemsArr.map((ElementString) => {
    const div = document.createElement('div');
    div.innerHTML = ElementString;
    return div.firstChild;
  });
  restoredElems.forEach((elem) => {
    basketList.insertAdjacentHTML('beforeend', elem.outerHTML);
  });
  const basketPrice =  localStorage.getItem('basketPrice')
  document.getElementById('basket-total-price').innerText = basketPrice 
};
const formInputs = document.querySelectorAll('.form-input')
export const addDataToStorage = () => {
  const inputEmail = document.getElementById('input-email');
  const email = inputEmail.value;
  const address = document.getElementById('input-address').value;
  const appartment = document.getElementById('input-appartment').value;
  const postcode = document.getElementById('input-postcode').value;
  const city = document.getElementById('input-city').value;
  const country = document.getElementById('input-country').value;
  const userAddress = `${address} ${appartment}, ${postcode} ${city}, ${country}`;

  localStorage.setItem('userEmail', email);
  localStorage.setItem('userAddress', userAddress);
  if(formInputs){
    formInputs.forEach((item) => {
      localStorage.setItem(item.name,item.value)
    })
  }
};
export const getDataFromStorage = () => {
  const userData = document.getElementById('user-data');
  const userEmailBox = userData.querySelector('[data-user="email"]');
  const userAdressBox = userData.querySelector('[data-user="address"]');
  const userDeliveryBox = document.querySelector('[data-user="deliveryMethod"]')
  const userEmail = localStorage.getItem('userEmail');
  const userAddress = localStorage.getItem('userAddress');
  const userDeliveryMethod = localStorage.getItem('userDelivery')
  if(userDeliveryBox){
    userDeliveryBox.innerText = userDeliveryMethod
  }
  userEmailBox.innerText = userEmail;
  userAdressBox.innerText = userAddress;
};
export const restoreInputsValue = () => {
  if(formInputs){
    formInputs.forEach(item => {
      const storedValue = localStorage.getItem(item.name)
      if(storedValue){
        item.value = storedValue
      }
    })
  }
}