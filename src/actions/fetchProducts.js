export function fetchProducts(){
    const loader = () => {
        const loaderSpan = document.querySelector("div#loader");
        loaderSpan.innerHTML = "FETCHING PRODUCTS . . .";
    }

    const unloader = () => {
        setTimeout(() => {
            const loaderSpan = document.querySelector("#loader");
            loaderSpan.innerHTML = ""
        }, 0);
    }

    return (dispatch) => {
        loader()
        fetch('https://still-refuge-44546.herokuapp.com/products')
        .then(resp => resp.json())
        .then(products => dispatch({ 
            type: 'RENDER_PRODUCTS', 
            payload: products
        }))
        .then(unloader()) 
    }
}   