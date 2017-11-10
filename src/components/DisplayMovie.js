import React, {Component} from 'react';
// import request from 'request';
import '../App.css';

class DisplayMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    }
  }

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
    return (
      <div>
        <ul>
          {this.state.display &&
            this.state.display.map((movie, e) => {
            return (
              <li key={e}>
                {movie.title}
                {movie.release_date}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }

}

export default DisplayMovie;
