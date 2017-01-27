/**
 * Created by corentin on 24/01/17.
 */
import React from 'react';
import SceneProfile from './SceneProfile';
import {Grid, Dimmer, Loader, Label} from 'semantic-ui-react';
import * as userAction from '../../actions/users/userAction';
import * as moviesAction from '../../actions/movies/moviesAction';
import SceneMovie from '../Movie/SceneMovie';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

class ContainerProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      seriesAdded: [],
      moviesAdded: 0,
      loaded: false
    };
    this.addMovie = this.addMovie.bind(this);
    this.deleteProfile = this.deleteProfile.bind(this);
  }

  addMovie() {
    browserHistory.push('/AddMovie');
  }
  deleteProfile(){
    if(this.props.movies){
      this.props.deleteAllMovieOfUser(this.props.movies);
      this.props.deleteUser(this.props.user);

    } else {
      this.props.deleteUser(this.props.user);
    }

  }

  componentWillMount(){
      let user = {
        token: localStorage.access_token
      };
      this.props.fetchUserByToken(user)
        .then(() => {
          if (this.props.user.id !== ("" || undefined)){
            this.props.fetchAllMovieByUser(this.props.user)
              .then(()=>{
                this.setState({moviesAdded: this.props.movies.length});
                this.setState({loaded: true});
              })
          } else {

          }
        })
  }

  render(){
    let isloaded;
    if (this.state.loaded && this.props.movies !== 0){
      isloaded = <Grid columns={4}>
        {this.props.movies.map((movie, index) => {
          return(
            <Grid.Column key ={index}>
              <SceneMovie key = {index}
                                 title = {movie.title}
                                 id = {movie.id}
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
    } else if(this.state.loaded && this.props.movies === 0) {
      isloaded = <Label> 0 movie </Label>
    } else {
      isloaded = <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
    }
    return(
      <div className="ContainerProfile">
        <SceneProfile
          pseudo={this.props.user.data.pseudo}
          moviesAdded={this.props.movies.length}
          seriesAdded={this.state.seriesAdded.length}
          addMovie={this.addMovie}
          deleteProfile={this.deleteProfile}/>
        {this.props.children}
        {isloaded}
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
    fetchAllMovieByUser: user => dispatch(moviesAction.fetchAllMovieByUser(user)),
    deleteAllMovieOfUser: movies => dispatch(moviesAction.deleteAllMovieOfUser(movies)),
    deleteUser: user => dispatch(userAction.deleteUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerProfile);