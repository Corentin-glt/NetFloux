/**
 * Created by corentin on 22/01/17.
 */
import React from 'react';
import SceneLogin from './SceneLogin';
import * as userAction from '../../actions/users/userAction';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux';

class ContainerLogin extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: true,
      pseudo: '',
      password: '',
      errorMessage: null
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.updatePseudo = this.updatePseudo.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.login = this.login.bind(this);
  }

  handleOpen(){
    this.setState({modalOpen: true});
  }

  handleClose(){
    browserHistory.push('/');
  }

  updatePseudo(pseudo){
    this.setState({pseudo: pseudo.target.value});
  }

  updatePassword(password){
    this.setState({password: password.target.value});
  }

  login(){
    let user = {
      pseudo: this.state.pseudo,
      password: this.state.password
    };
    this.props.login(user).then(() => {
      let newUser  = {
        token: localStorage.access_token
      };
      this.props.fetchUserByToken(newUser).then(()=> {
        browserHistory.push('/');
      })
    })
      .catch(err => this.setState({errorMessage: "Wrong pseudo or password!"}));
  }

  render(){
    return(
      <div className="ContainerLogin">
        <SceneLogin
          errorMessage={this.state.errorMessage}
          modalOpen={this.state.modalOpen}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          updatePseudo={this.updatePseudo}
          updatePassword={this.updatePassword}
          sendLogin={this.login}/>
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
    fetchUserByToken: user => dispatch(userAction.fetchUserByToken(user)),
    login: user => dispatch(userAction.login(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerLogin);