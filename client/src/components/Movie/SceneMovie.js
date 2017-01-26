/**
 * Created by corentin on 25/01/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Card, Icon, Button} from 'semantic-ui-react';
import * as moviesAction from '../../actions/movies/moviesAction';

class SceneMovie extends React.Component{
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
        <Card>
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
          <Card.Description>
            <a href={this.props.link}>Download</a>
          </Card.Description>
          <Card.Content extra>
              <Button basic color='red' onClick={this.delete}>Delete</Button>
          </Card.Content>
        </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(SceneMovie);