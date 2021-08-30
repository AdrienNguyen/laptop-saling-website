import { combineReducers } from 'redux';
import laptopReducer from './laptopReducer';
import accoutReducer from './accountReducer';
import testLaptopReducer from './testLaptopReducer';
import commentReducer from './commentReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
    laptop : laptopReducer,
    account : accoutReducer,
    testLaptop : testLaptopReducer,
    comment : commentReducer,
    cart : cartReducer,
    order : orderReducer
});

export default rootReducer;