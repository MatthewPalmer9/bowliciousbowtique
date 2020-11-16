import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postComments } from '../actions/postComments';

export class TestimonialComments extends Component {

    state = {
        name: '',
        comment: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.postComments(this.state)
        this.setState({
            name: '',
            comment: ''
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <section className="text-gray-700 body-font relative">
                        <div className="commentLeave container px-5 py-24 mx-auto">
                            <div className="flex flex-col text-center w-full mb-12">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Leave a Comment</h1>
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Even if you just want to say hello! &#9829;</p>
                            </div>
                            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-full">
                                        <input onChange={this.handleChange} name="name" value={this.state.name} className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Name" type="text" required/>
                                    </div>
                                    <div className="p-2 w-full">
                                        <textarea onChange={this.handleChange} name="comment" value={this.state.comment} className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block" type="text" placeholder="Comment" required></textarea>
                                    </div>
                                    <div className="p-2 w-full">
                                        <input type="submit" value="Comment" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </form>
            </>
        )
    }
}

export default connect(null, {postComments})(TestimonialComments)
