/**
 * Created by corentin on 21/01/17.
 */
import React from 'react';
import SceneSearch from './SceneSearch';
import { Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

export default class ContainerSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      typeNeed: this.props.typeNeed,
    };

  }
  render(){
   return (
      <div className="ContainerSearch">
        <SceneSearch typeNeed={this.state.typeNeed}/><br/>
      </div>
    )
  }
}