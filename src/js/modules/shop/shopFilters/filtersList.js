import { filterProducts, checkedInputsArr } from './filterProducts';
export const filterList = document.getElementById('filter-list-wrapper');
export const addFiltersList = () => {
  filterList.innerHTML = '';
  checkedInputsArr.forEach((item) => {
    const filterListElem = `
      <li class="filter-list__item" id="filter-list-size">
                    ${item}
                    <button class="filter-list__item-delete">
                        <svg class="svg-close-dims">
                            <use xlink:href="images/sprite.svg#close"></use>
                        </svg>
                    </button>
                </li>
      `;
    filterList.insertAdjacentHTML('beforeend', filterListElem);

    const filterListItems = filterList.querySelectorAll('.filter-list__item ');
    filterListItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target.closest('.filter-list__item-delete')) {
          const listItem = e.target.closest('.filter-list__item');
          const itemParam = listItem.innerText.toLowerCase();
          const filterBox = document.getElementById('filter-box');
          filterBox.querySelector(
            `input[value = ${itemParam}]:checked`
          ).checked = false;
          let index = checkedInputsArr.indexOf(itemParam);
          if (index !== -1) {
            checkedInputsArr.splice(index, 1);
          }
          filterProducts();
          listItem.remove();
        }
      });
    });
  });
};
