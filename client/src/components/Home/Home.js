/**
 * Created by corentin on 21/01/17.
 */
import React, {PropTypes} from 'react';
import ContainerLogin from '../Login/ContainerLogin';
import ContainerRegister from '../Register/ContainerRegister';
import { Menu, Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import * as userAction from '../../actions/users/userAction';
import {connect} from 'react-redux';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeItem: 'Movie',
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
  }

  handleItemClick(e, {name}){
    this.setState({ activeItem: name });
    browserHistory.push('/'+ name);
  }


  renderLogin(){
    browserHistory.push('/Login');
  }
  renderLogout(){
    this.props.logout(this.props.user);
  }
  render(){
    let buttonIsLogged;
    let buttonRegister;
    console.log(this.props.user);
    if (!this.props.user.session){
      buttonIsLogged = <Button icon="sign in"
                               color="green" circular
                               onClick={this.renderLogin}/>;
      buttonRegister = <ContainerRegister/>

    } else {
      buttonIsLogged = <Button icon="sign out"
                               color="red" circular
                               onClick={this.renderLogout}/>;
    }
    return(
      <div className="Home">
        <Menu pointing secondary>
          <Menu.Item name='Movie'
                     active={this.state.activeItem === 'Movie'}
                     onClick={this.handleItemClick}>
          </Menu.Item>
          <Menu.Item name='TvShow'
                     active={this.state.activeItem === 'TvShow'}
                     onClick={this.handleItemClick}>
          </Menu.Item>
          <Menu.Menu position='right'>
            {buttonIsLogged}
            {buttonRegister}
          </Menu.Menu>
        </Menu>
        {this.props.children}
      </div>
    )
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserByToken: access_token => dispatch(userAction.fetchUserByToken(access_token)),
    logout: user => dispatch(userAction.logout(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);