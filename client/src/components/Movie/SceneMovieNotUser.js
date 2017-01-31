/**
 * Created by corentin on 27/01/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Card, Icon, Modal, Button,Header, Image, Divider} from 'semantic-ui-react';
import * as moviesAction from '../../actions/movies/moviesAction';

class SceneMovieNotUser extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
    this.delete = this.delete.bind(this);
  }
  delete(){
    let movie = {
      id: this.props.id
    };
    this.props.deleteMovie(movie);
  }
  render(){
    return(
      <div className="SceneMovie">
        <Modal trigger={
          <Card color='yellow'>
            <Card.Content>
              <Icon name="film"/>
              <Card.Header>
                {this.props.title}
              </Card.Header>
              <Card.Meta>
                {this.props.dateProduction}<br/>
                Category: {this.props.category}
              </Card.Meta>
              <Card.Description>
                Movie added by: <strong>{this.props.pseudo}</strong>
                <strong>{this.props.dateAdd}</strong>
              </Card.Description>
              <Card.Description>
                Actor: {this.props.actor}
              </Card.Description>
            </Card.Content>
            <Card.Content extra style={{"backgroundColor": "#008080"}}>
              <a style={{"float": "right", "color": "#FFD700"}} href={this.props.link}>Download</a>
            </Card.Content>
          </Card>}>
            <Modal.Header>Movie Details</Modal.Header>
            <Modal.Content image>
            <Image wrapped size='medium' src={this.props.image} />
            <Modal.Description>
              <Header>{this.props.title}</Header>
              {this.props.dateProduction}<br/>
              <p>Category: {this.props.category}</p>
              <p>Movie added by: <strong>{this.props.pseudo}</strong>
                    <strong>{this.props.dateAdd}</strong></p>
              <p>Description: {this.props.description}</p>
              <p>Actor: {this.props.actor}</p>
              <Divider section />
              <a href={this.props.link}>Download</a>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
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
    deleteMovie: movie => dispatch(moviesAction.deleteMovie(movie))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SceneMovieNotUser);