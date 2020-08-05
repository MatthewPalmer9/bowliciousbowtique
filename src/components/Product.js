import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Product extends Component {
    render() {
        const { id, title, img, price, category, inCart } = this.props.product;

        return (
            <>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <Link to="/details" className="block relative h-48 rounded overflow-hidden">
                        <img alt="bow" className="object-cover object-center w-full h-full block" src={img}></img>
                    </Link>

                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category.toUpperCase()}</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                        <p className="mt-1">{`$` + price + `.00`}</p>
                        
                        <button 

                        className="btn btn-outline-warning" 
                        disabled={inCart ? true : false}
                        onClick={() => {console.log('added to the cart')}}

                    ><i class="fas fa-cart-plus"></i> Add to Cart</button>
                    </div>
                </div>
            </>
        )
    }
}
