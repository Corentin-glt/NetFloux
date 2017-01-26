/**
 * Created by corentin on 24/01/17.
 */
import React from 'react';
import SceneProfile from './SceneProfile';
import {Grid} from 'semantic-ui-react';
import * as userAction from '../../actions/users/userAction';
import * as moviesAction from '../../actions/movies/moviesAction';
import SceneMovie from '../Movie/SceneMovie';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

class ContainerProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
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
        this.props.fetchAllMovieByUser(this.props.user);
    })
  }

  render(){
    return(
      <div className="ContainerProfile">
        <SceneProfile
          pseudo={this.state.pseudo}
          moviesAdded={this.props.movies.length}
          seriesAdded={this.state.seriesAdded.length}
          addMovie={this.addMovie}/>
        <Grid columns={4}>
          {this.props.movies.map((movie, index) =>{
            return (
              <Grid.Column key ={index}>
                <SceneMovie key = {index}
                            title = {movie.title}
                            dateProduction={movie.dateProduction}
                            category={movie.category}
                            actor={movie.actors}
                            dateAdd={movie.dateAdd}
                            link={movie.linkDownload}
                />
              </Grid.Column>
            )
          })}
        </Grid>
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