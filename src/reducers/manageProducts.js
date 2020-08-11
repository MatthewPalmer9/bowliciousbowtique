export default function manageProducts( state={ products: [], requesting: false }, action) {
    switch (action.type) {
        
        case 'FETCH_PRODUCTS':
            return {
                products: action.payload
            }
        case 'RENDER_PRODUCTS':
            return {
                ...state, products: action.products,
                requesting: false
            }
        default:
            return state
    }
};

//synchronous action creators
export const setAllProducts = products => {
    return {
        type: 'RENDER_PRODUCTS',
        products
    }
}