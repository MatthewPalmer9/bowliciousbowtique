export function fetchProducts(){
    return (dispatch) => {
        fetch('https://still-refuge-44546.herokuapp.com/products')
        .then(resp => resp.json())
        .then(products => dispatch({ 
            type: 'RENDER_PRODUCTS', 
            payload: products
        }))
    }
}   