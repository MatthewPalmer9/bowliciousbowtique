import React, { Component } from 'react';
import Testimonials from './Testimonials';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/fetchComments';
import TestimonialComments from './TestimonialComments';

export class TestimonialsContainer extends Component {

    componentDidMount(){
        this.props.fetchComments()
    }

    render() {
        return (
            <div>
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Testimonials</h1>
                    <span className="form inline-block h-1 w-50 rounded pink mt-8 mb-6"></span>
                </div>

                <TestimonialComments />

                <div className="comments container">
                    <Testimonials state={this.props.comments}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps, {fetchComments})(TestimonialsContainer)
