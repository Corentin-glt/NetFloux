/**
 * Created by corentin on 21/01/17.
 */
import React from 'react';
import ContainerLogin from '../Login/ContainerLogin';
import ContainerRegister from '../Register/ContainerRegister';
import { Menu } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import * as userAction from '../../actions/userAction';
import {connect} from 'react-redux';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeItem: 'Movie',
      logged: false,
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.isLogin = this.isLogin.bind(this);

  }

  handleItemClick(e, {name}){
    this.setState({ activeItem: name });
    browserHistory.push('/'+ name);
  }

  isLogin(){
    this.setState({logged: !!localStorage.acces_token});
  }

  render(){
    this.isLogin;
    let containerLog;
    if(this.state.logged){
      containerLog = <ContainerRegister/>
    } else {
      containerLog = <ContainerLogin/>
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
            {containerLog}
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
    fetchUserByToken: access_token => dispatch(userAction.fetchUserByToken(access_token))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);