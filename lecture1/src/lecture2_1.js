// @flow strict

import * as React from 'react';



class lecture2_1 extends React.Component {

    
    state = {
        username: '',
        message: ''
    }

    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handClick = () => {

        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username :'',
            message: ''
        })
    }

    handleKeypress = (e) => {

        if (e.key === 'Enter'){

            this.handClick();
        }
    }

    render() {
        return (
            <div>
                
            <h1> 이벤트 연습2</h1>
            <input type= "text"
            name = "username"
            placeholder = "Input your username"
            value = {this.state.username}
            onChange = {this.handleChange}
            />

            <input type ="text"
            name = "message"
            placeholder = "Type your message"
            value = {this.state.message}
            onChange = {this.handleChange}

            onKeyPress = {this.handleKeypress}

            />

            <button onClick = {this.handClick}>확인</button>
            </div>
        );
    }
}

export default lecture2_1;