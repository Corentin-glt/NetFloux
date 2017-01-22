/**
 * Created by corentin on 21/01/17.
 */
import React from 'react';
import ContainerLogin from '../Login/ContainerLogin';
import ContainerRegister from '../Register/ContainerRegister';
import { Menu, Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeItem: 'Movie'
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, {name}){
    this.setState({ activeItem: name });
    browserHistory.push('/'+ name);
  }

  render(){
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
            <ContainerLogin/>
            <ContainerRegister/>
          </Menu.Menu>
        </Menu>
        {this.props.children}
      </div>
    )
  }
}