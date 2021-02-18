// @flow strict

import * as React from 'react';


class lecture2 extends React.Component {

    // state = {
    //     message : ""
    // }


    // 기본방식

    constructor(props) {

        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            message : ""
        }

    }

    handleChange(e) {

        this.setState({
            message : e.target.value
        })
    }

    handleClick() {
     alert (this.state.message);
     this.setState({
         message : ""
     })
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                
                <input type ="text"
                name = "message"
                placeholder ="아무거나 입력하세요" onChange = {this.handleChange}
                value = {this.state.message}/>

                

                <button onClick = {this.handleClick}>확인</button>

            

                

            </div>
        );
    }
}

export default lecture2;