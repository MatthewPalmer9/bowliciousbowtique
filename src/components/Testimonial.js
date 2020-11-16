import React from 'react';
import { connect } from 'react-redux';

export function Testimonial(state){
        const {name, comment} = state.comment
        console.log(state)
        return (
        <>
            <div className="row">
                    <div className="col-8">
                        <div className="card card-white post">
                            <div className="post-heading">
                                <div className="float-left image">
                                    <img src="img/anonymous.jpg" className="img-circle avatar" alt="anonymous-pic"/>
                                </div>
                                <div className="float-left meta">
                                    <div className="title h5">
                                        <a href="#0">{name} </a>
                                        says
                                    </div>
                                </div>
                            </div> 
                            <div className="post-description"> 
                                <p>{comment}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

const mapStateToProps = ({ comments }) => {
    return {
        comments
    }
}

export default connect(mapStateToProps)(Testimonial)

