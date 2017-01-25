/**
 * Created by corentin on 24/01/17.
 */
import React from'react';
import SceneAddMovie from './SceneAddMovie';
import * as userAction from '../../../actions/users/userAction';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import moment from 'moment';

class ContainerAddMovie extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: true,
      dateProduction: moment(),
      title: '',
      actor: '',
      category: '',
      link: '',
      errorMessage: null
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.updateActor = this.updateActor.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.updateLink = this.updateLink.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
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
    this.setState({dateProduction: date});
  }
  updateCategory(category){
    this.setState({category: category.target.value});
  }

  updateActor(actor){
    this.setState({actor: actor.target.value});
  }

  updateLink(link){
    this.setState({link: link.target.value})
  }

  saveMovie(){
    if (this.state.title !== ''
      || this.state.actor!== ''
      || this.state.link !== ''
      || this.state.category !== ''){
      let newMovie = {
        title: this.state.title,
        dateProduction: this.state.dateProduction._d,
        actors: [this.state.actor],
        linkDownload: this.state.link,
        category: this.state.category,
        addBy: this.props.user.id
      };
      console.log(newMovie);
      browserHistory.push('/Profile');
    } else {
      this.setState({errorMessage: "Please valid all champs"})
    }
  }

  render(){
    return(
      <div className="ContainerAddMovie">
        <SceneAddMovie
          errorMessage={this.state.errorMessage}
          modalOpen={this.state.modalOpen}
          dateProduction={this.state.dateProduction}
          handleClose={this.handleClose}
          handleOpen={this.handleOpen}
          updateTitle={this.updateTitle}
          updateCategory={this.updateCategory}
          updateLink={this.updateLink}
          updateDate={this.updateDate}
          updateActor={this.updateActor}
          saveMovie={this.saveMovie}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    movies:state.movies
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(userAction.login(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerAddMovie);