import React, { Component } from 'react';
import Product from './Product';
import { storeProducts } from '../data.js';

export default class ProductList extends Component {

    state = { 
        products: storeProducts
    }

    render() {
        return (
            <div>
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                        
                        {this.state.products.map((product, index) => {
                            return <Product key={index} product={product} />
                        })}

                        </div>
                    </div>
                </section>
                
            </div>
        )
    }
};
