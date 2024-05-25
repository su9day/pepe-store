import BaseHelpers from './helpers/base-helpers';
import './modules/form-scripts.js';
import './modules/basket/basketActions.js';
import './modules/card/addUniqueIds';
import './modules/card/cartActions';
import './modules/timer.js'
import './modules/copy.js'
BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();
BaseHelpers.headerFixed();
