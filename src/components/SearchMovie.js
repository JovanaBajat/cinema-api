import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12
};



class SearchMovie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue : ''
    }
  }

  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      inputValue : e.target.value
    });
  }

  updateValue = (e) => {
    e.preventDefault();
    this.props.input(this.state.inputValue);
    this.setState({
      inputValue : ''
    });
  }

  render() {
    return (
      <form>
        <TextField hintText='Type the Movie' type="text"
        style={{width : '300px'}}
        hintStyle={{ color: '#d0d4db', letterSpacing : '3px', width: '300px', textAlign : 'center'}}
        inputStyle= {{ color: 'white', letterSpacing : '3px', fontSize : '23px', textAlign : 'center'}}
        onChange={this.handleInputChange}
        value={this.state.inputValue}/>
        <RaisedButton
          label="Find!"
          type="submit"
          primary={true}
          style={style}
        onClick={this.updateValue} />
      </form>
    );
  }

}

export default SearchMovie;
