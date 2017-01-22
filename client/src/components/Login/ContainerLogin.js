/**
 * Created by corentin on 22/01/17.
 */
import React from 'react';
import SceneLogin from './SceneLogin';

export default class ContainerLogin extends React.Component{
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
    console.log('Pseudo: '+this.state.pseudo+ '\n' +
      'Password: ' +this.state.password);
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