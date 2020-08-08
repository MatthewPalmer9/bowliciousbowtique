import React, { Component } from 'react';
import { updateDetails } from '../actions/updateDetails';
import { connect } from 'react-redux';


export class Product extends Component {
    
    render() {
        const { id, title, img, price, category, inCart } = this.props.product;
        return(
            
            <>
                <div onClick={this.handleSetDetails} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <div className="block relative h-48 rounded overflow-hidden">
                        <img alt="bow" className="object-cover object-center w-full h-full block" src={img}></img>
                    </div>
                    

                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                        <p className="mt-1">{`$` + price + `.00`}</p>
                        
                        <button 

                        className="btn btn-outline-warning" 
                        disabled={inCart ? true : false}
                        // onClick={}

                        >{inCart? (
                            <p className="text-capitalize mb-0" disabled>
                                {" "}
                                In Cart
                            </p>
                        ) : (
                            <p>
                                <i className="fas fa-cart-plus"></i> Add to Cart
                            </p>
                        )}</button>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = ( { details } ) => {
    return {
        details
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateDetails: (details) => dispatch(updateDetails(details))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
