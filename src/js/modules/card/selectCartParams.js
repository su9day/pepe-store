
export const selectCartParams = (currentCart) => {
    let currentSizeInput = currentCart.querySelector('.size__input:checked');
    let currentColorInput = currentCart.querySelector('.color__input:checked');
    const editColor = () => {
      const mainCartColor = currentCart.querySelector('.product-cart__color');
      const curentColorLable = currentColorInput.nextElementSibling;
  
      const colorClass = curentColorLable.classList[0];
  
      mainCartColor.classList.remove(
        'color__blue',
        'color__red',
        'color__green',
        'color__white'
      );
      mainCartColor.classList.add(colorClass);
    };
    const editSize = () => {
      const cartSize = currentCart.querySelector('.product-cart__size');
      cartSize.textContent = currentSizeInput.nextElementSibling.textContent;
    };
  
    if (currentColorInput && currentSizeInput) {
      editColor();
      editSize();
    } else if (currentColorInput) {
      editColor();
    } else if (currentSizeInput) {
      editSize();
    }
  };