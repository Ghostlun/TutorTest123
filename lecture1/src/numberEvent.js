// @flow strict

import * as React from 'react';


class numberEvent extends React.Component  {
    constructor(props){

        super(props)
        this.state = {
            number : 0
        }
    }

    numberUpButton = () => {


    this.setState({
        number : this.state.number + 1
    })
    }

    render() {
        // // 바꿔주는것
        // const {number} = {this.state}
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick ={this.numberUpButton}>+1</button>
            </div>
        );
    }
}

export default numberEvent;