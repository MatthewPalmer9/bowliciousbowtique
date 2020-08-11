import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';

export function Products(state){ 
        const products = state.products
        return(
            <>
                {products.map((product, index) => {
                    return <Product key={index} product={product}/>
                })}
            </>
        )
    }

    const mapStateToProps = ({ products }) => {
        return {
            products
        }
    }

    export default connect(mapStateToProps)(Products)
    


