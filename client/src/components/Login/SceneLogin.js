/**
 * Created by corentin on 22/01/17.
 */
import React from 'react';
import { Form, Button, Modal, Header, Message} from 'semantic-ui-react';

export default class SceneLogin extends React.Component{

  render(){
    let labelErrorMessage;
    if (this.props.errorMessage){
      labelErrorMessage = <Message warning>{this.props.errorMessage}</Message>
    }
    return(
      <div className="SceneLogin">
        <Modal
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
            {labelErrorMessage}
            <br/>
            <Modal.Actions>
              <Button.Group>
                <Button onClick={this.props.handleClose}>
                  Cancel</Button>
                <Button.Or />
                <Button positive
                        onClick={this.props.sendLogin}>
                  Save</Button>
              </Button.Group>
            </Modal.Actions>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}