// @flow strict

import * as React from 'react';


// Input page 만들기;
class lecture1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            hobby: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    // 핵심을 나타내는곳;
      handleChange(event) {
          this.setState({
            [event.target.name] : event.target.value 

          })
        
      }
    
      handleSubmit(event) {
          
        alert('A name was submitted: ' + this.state.name + "Your hobby was submmited : " + this.state.hobby);
    
        event.preventDefault();
      }
    
      render() {
        return (
        <div>
          <form onSubmit={this.handleSubmit}>
            
            <label>
              Name:
              <input type="text" name = "name" placeholder = "Your name" value={this.state.name} onChange={this.handleChange} />
            </label>

            <label>
            취미:
            <input type ="text" name = "hobby" placeholder = "Hoppy" value = {this.state.hobby} onChange = {this.handleChange}/>


            </label>
            
            <input type="submit" value="Submit" />
          </form>

          </div>
        );
      }
}

export default lecture1;