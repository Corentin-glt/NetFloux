/**
 * Created by corentin on 22/01/17.
 */
import React from 'react';
import ContainerSearch from '../Search/ContainerSearch';
import {connect} from 'react-redux';
import {Grid, Dimmer, Loader, Modal, Button,Header, Image} from 'semantic-ui-react';
import * as moviesAction from '../../actions/movies/moviesAction';
import SceneMovieNotUser from './SceneMovieNotUser';
import SceneSearch from '../Search/SceneSearch';
import { browserHistory } from 'react-router';

class Movie extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      results: [],
      value: ''
    };
    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.resetComponent = this.resetComponent.bind(this);
  }

  componentWillMount(){
    this.resetComponent();
    this.props.fetchAllMovies().then(()=>{
      this.setState({loaded: true});
    });
  }
  resetComponent (){
    this.setState({ isLoading: false, results: [], value: '' });
  }

  handleResultSelect(e, result){
    console.log('ecrit');
    this.setState({ value: result.title });
  }

  handleSearchChange(e, value) {
    console.log('je vais chercher');
    this.setState({ isLoading: true, value});
    //this.setState({value: e.target.value});

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = (result) => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.props.movies, isMatch)
      })
    }, 500)
  }

  render(){
    let isloaded;
    if (this.state.loaded){
      isloaded = <Grid columns={4}>
        {this.props.movies.map((movie, index) => {
          return(

            <Grid.Column key ={index}>
              <SceneMovieNotUser key = {index}
                                 title = {movie.title}
                                 id = {movie.id}
                                 dateProduction={movie.dateProduction}
                                 category={movie.category}
                                 actor={movie.actors}
                                 dateAdd={movie.dateAdd}
                                 link={movie.linkDownload}
                                 image= {movie.image}
                                 description = {movie.description}
              />
            </Grid.Column>
          )
        })}
      </Grid>
    } else {
      isloaded = <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
    }
    return(
      <div className="Movie">
        <SceneSearch 
          loading={this.state.isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={this.handleSearchChange}
          results={this.state.results}
          value={this.state.value}/>
        {isloaded}
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies,
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllMovies: () => dispatch(moviesAction.fetchAllMovies())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);