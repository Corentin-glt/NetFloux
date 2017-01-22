/**
 * Created by corentin on 20/01/17.
 */
import React from 'react';
import Home from './components/Home/Home';
import Movie from './components/Movie/Movie';
import TvShow from './components/TvShow/TvShow';
import {Router, Route} from 'react-router';

export default class Root extends React.Component {
  render(){
    return (
      <Router history={this.props.history}>
        <Route path='/' component={Home}>
          <Route path='/Movie' component={Movie}/>
          <Route path='/TvShow' component={TvShow}/>
        </Route>
      </Router>
    )
  }
};