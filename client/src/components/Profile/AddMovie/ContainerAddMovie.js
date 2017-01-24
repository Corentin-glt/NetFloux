/**
 * Created by corentin on 24/01/17.
 */
import React from'react';
import SceneAddMovie from './SceneAddMovie';
import * as userAction from '../../../actions/users/userAction';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

export default class ContainerAddMovie extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: true,
      startDate: new Date(),
      title: '',
      actor: '',
      link: '',

    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.updateActor = this.updateActor.bind(this);
    this.updateLink = this.updateLink.bind(this);
  }

  handleOpen(){
    this.setState({modalOpen: true});
  }

  handleClose(){
    browserHistory.push('/Profile');
  }

  updateTitle(title){
    this.setState({title: title.target.value});
  }

  updateDate(date){
    this.setState({date: date.target.value});
  }

  updateActor(actor){
    this.setState({actor: actor.target.value});
  }

  updateLink(link){
    this.setState({link: link.target.value})
  }

  saveMovie(){
    browserHistory.push('/Profile');
  }

  render(){
    return(
      <div className="ContainerAddMovie">
        <SceneAddMovie
          modalOpen={this.state.modalOpen}
          handleClose={this.handleClose}
          handleOpen={this.handleOpen}
          updateTitle={this.updateTitle}
          updateLink={this.updateLink}
          updateDate={this.updateDate}
          updateActor={this.updateActor}
          saveMovie={this.saveMovie}
        />
      </div>
    )
  }
}