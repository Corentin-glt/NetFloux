/**
 * Created by corentin on 22/01/17.
 */
import React from 'react';
import {Modal, Button, Form, Header, Label} from 'semantic-ui-react';

export default class SceneRegister extends React.Component{
  render(){
    let labelErrorMessage;
    if(this.props.errorMessage !== ''){
      labelErrorMessage = <Label basic color='red' pointing='below'>
                          {this.props.errorMessage}
                          </Label>
    } else {
      labelErrorMessage = this.props.errorMessage;
    }
    return(
      <div className="SceneRegister">
        <Modal
          open={this.props.modalOpen}
          onOpen={this.props.handleOpen}
          onClose={this.props.handleClose}
          size='small'>
          <Header icon='write' content='Register here' />
          <Modal.Content>
            <h3>Please enter your identity.</h3>
            <Form>
              <Form.Field>
                <label>Pseudo</label>
                <Form.Input type="text"
                            placeholder='Pseudo'
                            onChange={this.props.updateUsername}/>
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <Form.Input type="password"
                            placeholder='Password'
                            onChange={this.props.updatePassword}/>
              </Form.Field>
              <Form.Field>
                <label>Verification password</label>
                {labelErrorMessage}
                <Form.Input type="password"
                            placeholder='Password'
                            onChange={this.props.updatePassword2}/>
              </Form.Field>
            </Form>
            <br/>
            <Modal.Actions>
              <Button.Group>
                <Button onClick={this.props.handleClose}>
                        Cancel</Button>
                <Button.Or />
                <Button positive
                        onClick={this.props.sendRegister}>
                        Register</Button>
              </Button.Group>
            </Modal.Actions>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}