/**
 * Created by corentin on 24/01/17.
 */
import React from 'react';
import SceneProfile from './SceneProfile';
import {Grid, Dimmer, Loader, Label, Segment} from 'semantic-ui-react';
import * as userAction from '../../actions/users/userAction';
import * as moviesAction from '../../actions/movies/moviesAction';
import * as tvshowsAction from '../../actions/tvshows/tvshowsAction';
import SceneMovie from '../Movie/SceneMovie';
import SceneTvshow from '../TvShow/SceneTvshow';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

class ContainerProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      seriesAdded: 0,
      moviesAdded: 0,
      loaded: false
    };
    this.addMovie = this.addMovie.bind(this);
    this.addTvshow = this.addTvshow.bind(this);
    this.deleteProfile = this.deleteProfile.bind(this);
  }

  addMovie() {
    browserHistory.push('/AddMovie');
  }

  addTvshow() {
    browserHistory.push('/AddTvshow');
  }

  deleteProfile(){
    if(this.props.movies || this.props.tvshows){
      this.props.deleteAllMovieOfUser(this.props.movies);
      this.props.deleteAllTvshowOfUser(this.props.tvshows);
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
            this.props.fetchAllTvshowsByUser(this.props.user)
              .then(() => {
                this.setState({seriesAdded: this.props.tvshows.length});
                this.setState({loaded: true});
              })
          } else {

          }
        })
  }

  render(){
    let isloaded;
    if (this.state.loaded && (this.props.movies !== 0 || this.props.tvshows !==0)){
      isloaded = <Segment ><Grid columns={4}>
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
        {this.props.tvshows.map((tvshow, index) => {
          return(
            <Grid.Column key = {index}>
              <SceneTvshow key = {index}
                                title = {tvshow.title}
                                id = {tvshow.id}
                                dateProduction={tvshow.dateProduction}
                                category={tvshow.category}
                                actor={tvshow.actors}
                                dateAdd={tvshow.dateAdd}
                                link={tvshow.linkDownload}
              />
            </Grid.Column>
            )
        })}
      </Grid>
      </Segment>
    } else if(this.state.loaded && this.props.movies === 0) {
      isloaded = <Label> 0 movie </Label>
    } else {
      isloaded = <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
    }
    return(
      <div className="ContainerProfile">
      <Grid.Column width={2}>
        <SceneProfile
          pseudo={this.props.user.data.pseudo}
          moviesAdded={this.props.movies.length}
          seriesAdded={this.props.tvshows.length}
          addMovie={this.addMovie}
          addTvshow={this.addTvshow}
          deleteProfile={this.deleteProfile}/>
        {this.props.children}
        {isloaded}
      </Grid.Column>
      </div>

    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    movies: state.movies,
    tvshows: state.tvshows
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserByToken: user => dispatch(userAction.fetchUserByToken(user)),
    fetchAllMovieByUser: user => dispatch(moviesAction.fetchAllMovieByUser(user)),
    deleteAllMovieOfUser: movies => dispatch(moviesAction.deleteAllMovieOfUser(movies)),
    deleteUser: user => dispatch(userAction.deleteUser(user)),
    fetchAllTvshowsByUser: user => dispatch(tvshowsAction.fetchAllTvshowsByUser(user)),
    deleteAllTvshowOfUser: tvshows => dispatch(tvshowsAction.deleteAllTvshowOfUser(tvshows))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerProfile);