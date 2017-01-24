/**
 * Created by corentin on 24/01/17.
 */
import React from 'react';
import SceneProfile from './SceneProfile';
import * as userAction from '../../actions/users/userAction';
import {connect} from 'react-redux';

export default class ContainerProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <SceneProfile/>
    )
  }
}