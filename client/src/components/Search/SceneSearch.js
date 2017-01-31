/**
 * Created by corentin on 21/01/17.
 */
import _ from 'lodash';
import React  from 'react';
import { Search, Grid, Header } from 'semantic-ui-react'


export default class SceneSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
    //this.handleResultSelect = this.handleResultSelect.bind(this);
    //this.handleSearchChange = this.handleSearchChange.bind(this);
    //this.resetComponent = this.resetComponent.bind(this);
  }
/*
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
  }*/

  render() {

    return (
      <div className='SceneSearch'>
      <Grid>
        <Grid.Column width={8}>
          <Search
            loading={this.props.isLoading}
            onResultSelect={this.props.handleResultSelect}
            onSearchChange={this.props.handleSearchChange}
            results={this.props.results}
            value={this.props.value}

          />
        </Grid.Column>
      </Grid>
      </div>
    )
  }
}
