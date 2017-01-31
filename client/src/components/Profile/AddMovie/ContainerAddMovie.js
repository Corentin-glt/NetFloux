/**
 * Created by corentin on 24/01/17.
 */
import React from'react';
import SceneAddMovie from './SceneAddMovie';
import * as moviesAction from '../../../actions/movies/moviesAction';
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
      title: null,
      actor: null,
      image: null,
      description: null,
      category: null,
      link: null,
      errorMessage: null
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.updateDescription = this.updateDescription.bind(this);    
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

  updateImage(image) {
    this.setState({image: image.target.value});
  }

  updateDescription(description) {
    this.setState({description: description.target.value});
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
    if (this.state.title && this.state.actor
      && this.state.link && this.state.category){
      let newMovie = {
        title: this.state.title,
        dateProduction: this.state.dateProduction._d,
        actors: [this.state.actor],
        image: this.state.image,
        description: this.state.description,
        linkDownload: this.state.link,
        category: this.state.category,
        users: {
          id: this.props.user.data._id,
        }
      };
      this.props.createMovie(newMovie);
    } else {
      this.setState({errorMessage: "Please fill all the fields"})
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
          updateImage = {this.updateImage}
          updateDescription = {this.updateDescription}
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
    createMovie: movie => dispatch(moviesAction.createMovie(movie))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerAddMovie);