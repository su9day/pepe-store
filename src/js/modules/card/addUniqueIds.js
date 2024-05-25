const addUniqueIds = (groupSelector, idPrefix) => {
    const groups = document.querySelectorAll(groupSelector);
    groups.forEach(function (item, index) {
      const inputs = item.querySelectorAll('input[type="radio"]');
  
      inputs.forEach(function (item) {
        const inputId = `${idPrefix}-${item.value}-${index}`;
        item.id = inputId;
        item.nextElementSibling.setAttribute('for', inputId);
      });
    });
  };
addUniqueIds('.color__wrapper', 'color');
addUniqueIds('.size__wrapper', 'size');