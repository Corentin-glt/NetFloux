/**
 * Created by corentin on 27/01/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Card, Icon} from 'semantic-ui-react';
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

export default connect(mapStateToProps, mapDispatchToProps)(SceneMovieNotUser);