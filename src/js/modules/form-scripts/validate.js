const formBtnNext = document.querySelector('.form-btn-next');
export const validateInputs = document.querySelectorAll('[data-validate]');
export const validateForm = (input) => {
  const inputsFiled = Array.from(validateInputs).every(
    (item) => item.value.trim() !== ''
  );
  if (inputsFiled) {
    formBtnNext.removeAttribute('disabled');
  } else {
    formBtnNext.setAttribute('disabled', true);
  }
};