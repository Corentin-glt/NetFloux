/**
 * Created by corentin on 22/01/17.
 */
import React from 'react';
import {Modal, Button, Form} from 'semantic-ui-react';

export default class SceneRegister extends React.Component{
  render(){
    return(
      <div>
        <Modal trigger={<Button>Register</Button>}>
          <input onChange={this.props.updateUsername}/>
        </Modal>
      </div>
    )
  }
}