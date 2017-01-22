/**
 * Created by corentin on 22/01/17.
 */
import React from'react';
import SceneRegister from './SceneRegister';
export default class ContainerRegister extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: ''
    };
  }
  updateUsername(e){
    e.preventDefault();
    this.setState({username: e.target.value});
  }

  render(){
    return(
      <div>
        <SceneRegister
          updateUsername={this.updateUsername.bind(this)}/>
      </div>
    )
  }
}