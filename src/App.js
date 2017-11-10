import React, { Component } from 'react';
import './App.css';

import DisplayMovie from './components/DisplayMovie';
import SearchMovie from './components/SearchMovie';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName : ''
    }
  }

  inputMovieName = (name) => {
    this.setState({
      movieName : name
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <h1 className="myTitle">Type a movie you are looking for!</h1>
        <SearchMovie input={this.inputMovieName}/>
        <DisplayMovie name={this.state.movieName}/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
