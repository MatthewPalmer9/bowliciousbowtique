import React, { Component } from 'react'

export default class Test extends Component {

    componentDidMount(){
        fetch("http://localhost:3000/users")
        .then(resp => resp.json())
        .then(resp => console.log(resp))
    }

    render() {
        return (
            <div>
                Check console
            </div>
        )
    }
}

