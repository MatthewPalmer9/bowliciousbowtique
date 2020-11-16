import React, { Component } from 'react';
import Products from './Products';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/fetchProducts';

export class ProductContainer extends Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div id="loader"></div>
                            
                            <Products state={this.props.products}/>


                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, {fetchProducts})(ProductContainer)

