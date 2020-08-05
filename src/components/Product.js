import React, { Component } from 'react';


export default class Product extends Component {
    render() {
        return (
            <>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a href="/false" className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={this.props.product.img}></img>
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{this.props.product.category.toUpperCase()}</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">{this.props.product.title}</h2>
                        <p className="mt-1">{`$` + this.props.product.price + `.00`}</p>
                    </div>
                </div>
            </>
        )
    }
}
