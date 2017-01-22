/**
 * Created by corentin on 22/01/17.
 */
import React from 'react';
import { Form, Button, Modal, Header } from 'semantic-ui-react';

export default class SceneLogin extends React.Component{

  render(){
    return(
      <div className="SceneLogin">
        <Modal
          trigger={<Button icon="sign in"
                           color="green" circular
                           onClick={this.props.handleOpen}/>}
          open={this.props.modalOpen}
          onOpen={this.props.handleOpen}
          onClose={this.props.handleClose}
          size='small'>
          <Header icon='write' content='Login here' />
          <Modal.Content>
            <h3>Please enter your pseudo and password.</h3>
            <Form>
              <Form.Field>
              <label>Pseudo</label>
                <Form.Input type="text"
                            placeholder='Pseudo'
                            onChange={this.props.updatePseudo}/>
              </Form.Field>
              <Form.Field>
              <label>Password</label>
                <Form.Input type="password"
                            placeholder='Password'
                            onChange={this.props.updatePassword}/>
              </Form.Field>
            </Form>
            <Modal.Actions>
              <Button positive
                      onClick={this.props.sendLogin}>
                      Login</Button>
            </Modal.Actions>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}