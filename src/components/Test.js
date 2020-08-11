import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Test extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {`${this.props.products[0].category}`}
            </div>
        )
    }
}

const mapStateToProps = ( {products} ) => {
    return {
        products
    }
}

export default connect(mapStateToProps)(Test)
