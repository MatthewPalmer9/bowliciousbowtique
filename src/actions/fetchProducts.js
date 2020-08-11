export function fetchProducts(){
    return (dispatch) => {
        fetch('http://localhost:3000/products')
        .then(resp => resp.json())
        .then(products => dispatch({ 
            type: 'RENDER_PRODUCTS', 
            payload: products
        }))
    }
}   