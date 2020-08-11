export default function manageProducts( state={ products: [], comments: [], requesting: false }, action) {
    switch (action.type) {
        case 'RENDER_PRODUCTS':
            return {
                ...state, products: action.payload,
                requesting: false
            }
        case 'FETCH_COMMENTS':
            return {
                ...state, comments: action.payload,
                requesting: false
            }
        case 'ADD_COMMENT':
            return {
                ...state, comments: [...state.comments, action.payload]
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