import React, {Component} from 'react';
import '../App.css';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';



class DisplayMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      showDialog : false
    }
  }

  handleOpen = (i) => {
  this.setState({showDialog: true, oneMovie: this.state.display[i]});
};

  handleClose = () => {
  this.setState({showDialog: false});
};

  componentWillReceiveProps(nextProps) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=285a5537d8ed136ffe0a923c00d40732&query=${nextProps.name}`)
    .then((response) => response.json())
    .then((movieDetails) => {
      this.setState({display: movieDetails.results})
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    const style = {
      margin: 12
    };
    return (
  <div className="displayBody">
    <ul>
      {this.state.display && this.state.display.map((movie, index) => {
        return (
          <li key={index} className="myList">
            <RaisedButton className="oneMovie" label={movie.title} onClick={() => this.handleOpen(index)}/>
            <Dialog modal={false}
              open={this.state.showDialog}
              onRequestClose={this.handleClose}
              overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
              <div className="dialogBody">
                {this.state.oneMovie &&
                <div>
                  <h2>{this.state.oneMovie.title}</h2>
                  <p>{this.state.oneMovie.overview}</p>
                </div>
              }
                  <FlatButton
                    label="Close"
                    primary={true}
                    onClick={this.handleClose}
                  />
              </div>
            </Dialog>
          </li>
        )
      })}
    </ul>
  </div>
);
  }

}

export default DisplayMovie;
