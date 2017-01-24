/**
 * Created by corentin on 24/01/17.
 */
import React from 'react';
import SceneProfile from './SceneProfile';
import * as userAction from '../../actions/users/userAction';
import {connect} from 'react-redux';
import ContainerAddMovie from './AddMovie/ContainerAddMovie';
import { browserHistory } from 'react-router';

export default class ContainerProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie() {
    browserHistory.push('/AddMovie');
  }

  render(){
    return(
      <div className="ContainerProfile">
        <SceneProfile
          addMovie={this.addMovie}/>
        {this.props.children}
      </div>

    )
  }
}