/**
 * Created by corentin on 20/01/17.
 */
import React from 'react';
import Home from './components/Home/Home';
import containerSearch from './components/Search/ContainerSearch';
import {Router, Route} from 'react-router';

export default class Root extends React.Component {
  render(){
    return (
      <Router history={this.props.history}>
        <Route path='/' component={Home}/>
      </Router>
    )
  }
};