/**
 * Created by corentin on 21/01/17.
 */
import _ from 'lodash';
import React  from 'react';
import {connect} from 'react-redux';
import { Search, Grid, Header } from 'semantic-ui-react'
import * as moviesAction from '../../actions/movies/moviesAction';


class SceneSearch extends React.Component {
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

  resetComponent (){
    this.setState({ isLoading: false, results: [], value: '' });
  }

  handleResultSelect(result){
    this.setState({ value: result.title });
  }

  handleSearchChange(value) {
    this.setState({ isLoading: true});
    this.setState({value: value.target.value});

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

  render() {

    return (
      <Grid>
        <Grid.Column width={8}>
          {this.props.typeNeed}
          <Search
            loading={this.state.isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={this.state.results}
            value={this.state.value}

          />
        </Grid.Column>
      </Grid>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllMovies: () => dispatch(moviesAction.fetchAllMovies())
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(SceneSearch);