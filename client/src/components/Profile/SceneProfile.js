/**
 * Created by corentin on 24/01/17.
 */
import React from 'react';
import {Button} from 'semantic-ui-react';

export default class SceneProfile extends React.Component {
  render(){
    return (
      <div className="SceneProfile">
        <h1>It's you !</h1>
        <Button.Group attached='top' vertical>
          <Button onClick={this.props.addMovie}>Add movies</Button>
          <Button>Add series</Button>
          <Button>Delete account</Button>
        </Button.Group>
      </div>
    )
  }
}