import { addDataToStorage,addProductsToStorage } from "../storage";
const formBtnNext = document.querySelector('.form-btn-next');
const formBtnPrev = document.querySelectorAll('[data-form-btn-prev]');
const roadItems = document.querySelectorAll('.road__item');
const thisPage = window.location.pathname.split('/').pop();
const pages = ['form-information.html', 'form-spawn.html', 'form-payment.html'];
export const formNavigation = () => {
  const currentPage = pages.indexOf(thisPage);
    roadItems.forEach((item) => {
      item.classList.remove('road__item-active');
    });
    if (currentPage !== -1) {
      for (let i = 0; i < currentPage; i++) {
        document
          .querySelector(`[href="${pages[i]}"]`)
          .closest('.road__item')
          .classList.add('road__item-completed');
      }
      document
        .querySelector(`[href="${pages[currentPage]}"]`)
        .closest('.road__item')
        .classList.add('road__item-active');
    }
  };
export const formNavigationBtns = () => {
    if (formBtnNext) {
        formBtnNext.addEventListener('click', (e) => {
          e.preventDefault();
          const currentPage = window.location.pathname.split('/').pop();
          const nextPageUrl = pages.indexOf(currentPage) + 1;
          if (nextPageUrl) {
            window.location.href = pages[nextPageUrl];
          } else {
            console.error('Next page not found for:', currentPage);
          }
          addDataToStorage();
          addProductsToStorage();
        });
      }
      if (formBtnPrev) {
        formBtnPrev.forEach((item) => {
          item.addEventListener('click', () => {
            window.history.back();
            addProductsToStorage();
          });
        });
      }
}