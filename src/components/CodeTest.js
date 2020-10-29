import React, { Component } from 'react'

export default class CodeTest extends Component {

    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }

    handleButtonClick = (e) => {
        
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        console.log('a');

        fetch('http://localhost:3000/products')
            .then(resp => resp.json())
            .then(data => console.log('c', data))
            .catch(errors => console.log('d', errors))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick} name="button" value="0">Click Me</button>
                <br></br>
                {this.state.counter}
            </div>
        )
    }
}
