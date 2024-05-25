
import { deliveryChoice, deliveryInput } from './form-scripts/deliveryСhoice';
import {
  getDataFromStorage,
  getProductsFromStorage,
  restoreInputsValue,
} from './storage';
import { formNavigation,formNavigationBtns } from './form-scripts/navigation';
import { validateForm,validateInputs } from './form-scripts/validate';
const userData = document.getElementById('user-data');

document.addEventListener('DOMContentLoaded', () => {
  validateInputs.forEach((item) => {
    item.addEventListener('input', () => validateForm(item));
  });
  if (userData) {
    getDataFromStorage();
  }
  if(deliveryInput){
    deliveryChoice();
  }
  formNavigation();
  formNavigationBtns();
  restoreInputsValue();
  getProductsFromStorage();
});


