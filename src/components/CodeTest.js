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

        fetch('http://localhost:3000/productsjklfdsjlfjds')
            .then(resp => {
                if(resp.status !== 200) {
                    throw new Error(resp.statusText);
                }
                console.log('b');
                return resp.json();
            })
            .then(data => console.log('c', data))
            .catch(errors => console.log('d', errors))

        console.log('e');


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
