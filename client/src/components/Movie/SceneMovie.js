/**
 * Created by corentin on 25/01/17.
 */
import React from 'react';
import {Card, Icon, Button} from 'semantic-ui-react';

export default class SceneMovie extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: '',
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }
  deleteMovie(){

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
              {this.props.dateProduction}
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
              <Button basic color='red' onClick={this.deleteMovie}>Delete</Button>
          </Card.Content>
        </Card>
      </div>
    )
  }
}