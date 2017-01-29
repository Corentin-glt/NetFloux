/**
 * Created by corentin on 20/01/17.
 */
import React from 'react';
import Home from './components/Home/Home';
import Movie from './components/Movie/Movie';
import TvShow from './components/TvShow/TvShow';
import Profile from './components/Profile/ContainerProfile';
import Register from './components/Register/ContainerRegister';
import Login from './components/Login/ContainerLogin';
import {Router, Route} from 'react-router';
import AddMovie from './components/Profile/AddMovie/ContainerAddMovie';
import AddTvshow from './components/Profile/AddTvshow/ContainerAddTvshow';

export default class Root extends React.Component {
  render(){
    return (
      <Router history={this.props.history}>
        <Route path='/' component={Home}>
          <Route path='/Movie' component={Movie}/>
          <Route path='/TvShow' component={TvShow}/>
          <Route path='/Login' component={Login}/>
          <Route path='/Register' component={Register}/>
          <Route path='/Profile' component={Profile} onEnter={requireAuth}>
            <Route path='/AddMovie' component={AddMovie}/>
            <Route path='/AddTvshow' component={AddTvshow}/>
          </Route>
        </Route>
      </Router>
    )
  }
};

function requireAuth(nextState, replace){
  if(!localStorage.access_token){
    replace({
      pathname: '/Login',
      state: {nextPathname: nextState.location.pathname}
    })
  }
}