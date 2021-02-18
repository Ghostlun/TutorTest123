// @flow strict

import * as React from 'react';

// import image1 from "../src/Image/bulb.jpg"

class RandomButton extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            imageList : ['cup', 'bulb', 'car'],
            number : 0,
            imageName : '../src/Image/bulb.jpg',
            ADD : "Value"
        }

    }

    randomPicker = () => {

        var randomNumber = Math.floor(Math.random() * 3);    
    

        this.setState ({
            number : randomNumber
        })
        console.log("Random Number" , this.state.number)

    }

    showPicture = () => {

        var pickednumberinState = this.state.number
        var pickedpictureName = this.state.imageList[pickednumberinState]

        var sourceName =  '../src/Image/' + pickedpictureName + ".jpg"


        this.setState ({

            imageName : sourceName
        })
    }

    // public folder 안에 넣어야한다: src = "/images/imagefiles."

    render() {
        return (

            <div>
                <center>
                <button onClick = {this.randomPicker}> 
                    Random Picker
                </button>

                 <img src = {require(this.state.imageName)}> </img>
                </center>
            </div>
        );
    }
}

export default RandomButton;