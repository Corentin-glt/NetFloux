/**
 * Created by corentin on 21/01/17.
 */
import React, {PropTypes} from 'react';
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
    this.renderLogout = this.renderLogout.bind(this);
    this.renderProfile = this.renderProfile.bind(this);
    this.renderRegister = this.renderRegister.bind(this);
  }

  handleItemClick(e, {name}){
    this.setState({ activeItem: name });
    browserHistory.push('/'+ name);
  }


  renderLogin(){
    browserHistory.push('/Login');
  }

  renderLogout(){
    let user = {
      token: localStorage.access_token
    };

    this.props.logout(user);
  }

  renderProfile(){
    browserHistory.push('/Profile');
  }

  renderRegister(){
    browserHistory.push('/Register');
  }

  render(){
    let buttonIsLogged;
    let buttonProfile;
    if (!this.props.user.session){
      buttonIsLogged =
        <Button.Group>
          <Button icon="sign in"
                  onClick={this.renderLogin}/>
          <Button icon="add user"
                  onClick={this.renderRegister}/>
        </Button.Group>;

    } else {
      buttonIsLogged =
        <Button.Group>
          <Button icon="power"
                  onClick={this.renderLogout}/>
          <Button icon="cogs"
                  onClick={this.renderProfile}/>
        </Button.Group>;
      buttonProfile =
        <Menu.Item name='Profile'
                   active={this.state.activeItem === 'Profile'}
                   onClick={this.handleItemClick}>
      </Menu.Item>
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
          {buttonProfile}
          <Menu.Menu position='right'>
            {buttonIsLogged}
          </Menu.Menu>
        </Menu>
        {this.props.children}
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
    fetchUserById: user => dispatch(userAction.fetchUserById(user)),
    logout: user => dispatch(userAction.logout(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);