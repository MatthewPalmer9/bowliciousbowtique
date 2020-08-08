import {storeProducts, detailProduct} from '../data.js';

export default function manageProducts( state={products: storeProducts, details: detailProduct}, action) {
    switch (action.type) {
        
        case 'ADD_PRODUCT':
            return {
                ...state, products: [...state.products, action.product]
            }
        case 'UPDATE_DETAILS':
            return {
                ...state, details: [action.productDetails]
            }
        default:
            return state
    }
};