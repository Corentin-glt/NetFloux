/**
 * Created by corentin on 22/01/17.
 */
import React from'react';
import SceneRegister from './SceneRegister';
import * as userAction from '../../actions/users/userAction';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

class ContainerRegister extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      username: '',
      password: '',
      password2: '',
      errorMessage: ''
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updatePassword2 = this.updatePassword2.bind(this);
    this.register = this.register.bind(this);
  }

  handleOpen(){
    this.setState({modalOpen: true});
  }

  handleClose(){
    this.setState({modalOpen: false});
  }

  updateUsername(username){
    this.setState({username: username.target.value});
  }

  updatePassword(password){
    this.setState({password: password.target.value});
  }

  updatePassword2(password2){
    this.setState({password2: password2.target.value});
  }

  register(){
    if (this.state.password === this.state.password2){
      let user = {
        pseudo: this.state.username,
        password: this.state.password
      };
      this.props.createUser(user).then(() => {
        this.handleClose();
        browserHistory.push('/');
      });
    } else {
      this.setState({errorMessage: 'The password isn\'t the same'});
    }
  }


  render(){
    return(
      <div>
        <SceneRegister
          modalOpen={this.state.modalOpen}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          updateUsername={this.updateUsername}
          updatePassword={this.updatePassword}
          updatePassword2={this.updatePassword2}
          sendRegister={this.register}
          errorMessage={this.state.errorMessage}
          />

      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: user => dispatch(userAction.createUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerRegister);