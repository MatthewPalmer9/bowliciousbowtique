import React from 'react';
import Testimonial from './Testimonial';
import { connect } from 'react-redux';

export function Testimonials(state){ 
        const comments = state.comments
        return(
            <>
                {comments.map((comment, index) => {
                    return <Testimonial key={index} comment={comment}/>
                })}
            </>
        )
    }

    const mapStateToProps = ({ comments }) => {
        return {
            comments
        }
    }

    export default connect(mapStateToProps)(Testimonials)