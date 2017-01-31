 /**
 * Created by corentin on 25/01/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Card, Icon, Button, Segment} from 'semantic-ui-react';
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
        <Card color='teal' style={{"marginTop": "5%"}}>
          <Card.Content>         
            <Card.Header>
              <Icon name="film"/>
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
            <a href={this.props.link} style={{ "float": "right", "fontSize": "17px", "marginRight": "2%", "paddingBottom": "3%"}}>Download</a>
          </Card.Description>
          <Card.Content extra style={{"backgroundColor": "#008080"}}>
            <Button inverted color='yellow' style={{"float": "right"}} onClick={this.delete}>Delete</Button>
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