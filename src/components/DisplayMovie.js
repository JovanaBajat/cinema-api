import React, {Component} from 'react';
import '../App.css';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FullscreenDialog from 'material-ui-fullscreen-dialog'

class DisplayMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      showDialog: false
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
    })
    .catch((err) => {
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
          {this.state.display &&
            this.state.display.map((movie, index) => {
            return (
              <li key={index}
                className="myList">
                <RaisedButton
                  className="oneMovie"
                  primary={true}
                  label={movie.title}
                  onClick={() => this.handleOpen(index)}/>
                <FullscreenDialog
                  modal={false}
                  open={this.state.showDialog}
                  onRequestClose={this.handleClose}>
                  <div className="dialogBody">
                    {this.state.oneMovie && <div>
                      <h2 className="movieTitle">{this.state.oneMovie.title}</h2>
                      <p className="movieDate">{this.state.oneMovie.release_date}</p>
                      <div className="content">
                        <div className="aboutMovie">
                          <p className="movieOverview">{this.state.oneMovie.overview}</p>
                          <p className="movieVote">Note : {this.state.oneMovie.vote_average}</p>
                        </div>
                        {this.state.oneMovie !== '' &&
                        <img
                          className="movieImg"
                          src={`https://image.tmdb.org/t/p/w500${this.state.oneMovie.poster_path}`}
                          alt=""/>}
                      </div>
                    </div>}
                    <RaisedButton
                      className="closeDialog"
                      label="Close"
                      primary={true}
                      onClick={this.handleClose}/>
                  </div>
                </FullscreenDialog>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }

}

export default DisplayMovie;
