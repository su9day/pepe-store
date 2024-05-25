import BaseHelpers from './helpers/base-helpers';
import PopupManager from './modules/popup-manager';
import BurgerMenu from './modules/burger-menu';

import './modules/header.js';
import './modules/basket/basketActions.js';
import './modules/loadCards.js';
import './modules/sortCards.js'
import './modules/card/addUniqueIds';
import './modules/card/cartActions';
import './modules/shop/shop-nav.js';
import './modules/shop/shopFilters/filterProducts';
import './modules/shop/shopFilters/filtersList';
import './modules/shop/shopFilters/filterActions';
import './modules/categories';
import './modules/searchProducts'

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

new PopupManager();
new BurgerMenu().init();