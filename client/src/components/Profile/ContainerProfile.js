/**
 * Created by corentin on 24/01/17.
 */
import React from 'react';
import SceneProfile from './SceneProfile';
import * as userAction from '../../actions/users/userAction';
import * as moviesAction from '../../actions/movies/moviesAction';
import SceneMovie from '../Movie/SceneMovie';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

class ContainerProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pseudo: '',
      moviesAdded: [],
      seriesAdded: []
    };
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie() {
    browserHistory.push('/AddMovie');
  }

  componentWillMount(){
    let user = {
      token: localStorage.access_token
    };
    this.props.fetchUserByToken(user)
      .then(() => {
        this.props.fetchAllMovieByUser(this.props.user).then(() => {
          this.setState({pseudo: this.props.user.data.pseudo});
          this.setState({moviesAdded: this.props.movies});
          this.setState({seriesAdded: this.props.user.data.tvshows});
        });
    })
  }

  render(){
    return(
      <div className="ContainerProfile">
        <SceneProfile
          pseudo={this.state.pseudo}
          moviesAdded={this.state.moviesAdded.length}
          seriesAdded={this.state.seriesAdded.length}
          addMovie={this.addMovie}/>
        {this.state.moviesAdded.map((movie, index) =>{
          return (
            <SceneMovie key = {index}
                        title = {movie.title}
                        dateProduction={movie.dateProduction}
                        category={movie.category}
                        actor={movie.actors}
                        dateAdd={movie.dateAdd}
                        link={movie.linkDownload}
          />
          )
        })}
        {this.props.children}
      </div>

    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    movies: state.movies
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserByToken: user => dispatch(userAction.fetchUserByToken(user)),
    fetchAllMovieByUser: user => dispatch(moviesAction.fetchAllMovieByUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerProfile);