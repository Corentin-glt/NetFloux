/**
 * Created by corentin on 22/01/17.
 */
import React from 'react';
import SceneLogin from './SceneLogin';
import { browserHistory } from 'react-router';
import * as userAction from '../../actions/userAction';
import {connect} from 'react-redux';

class ContainerLogin extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      pseudo: '',
      password: '',
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
    this.setState({modalOpen: false});
  }

  updatePseudo(e){
    e.preventDefault();
    this.setState({pseudo: e.target.value});
  }

  updatePassword(password){
    console.log(password);
    this.setState({password: password.target.value});
  }

  login(){
    let user = {
      pseudo: this.state.pseudo,
      password: this.state.password
    };
    this.props.login(user).then(() => {
      this.handleClose();
      console.log(this.props.user);
      browserHistory.push('/');
    })
      .catch(err => console.log(err));
  }

  render(){
    return(
      <div className="ContainerLogin">
        <SceneLogin
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
    login: user => dispatch(userAction.login(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerLogin);