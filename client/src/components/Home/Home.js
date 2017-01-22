/**
 * Created by corentin on 21/01/17.
 */
import React from 'react';
import ContainerSearch from '../Search/ContainerSearch';
import { Menu, Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeItem: ''
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, {name}){
    this.setState({ activeItem: name });
    browserHistory.push('/'+ name);
  }

  login(){

  }

  render(){
    const { activeItem } = this.state;
    return(
      <div className="Home">
        <Menu pointing secondary>
          <Menu.Item name='Movie'
                     active={activeItem === 'Movie'}
                     onClick={this.handleItemClick}>
          </Menu.Item>
          <Menu.Item name='TvShow'
                     active={activeItem === 'TvShow'}
                     onClick={this.handleItemClick}>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Button icon="sign in"
                    color="green"
                    circular
                    onClick={this.login}
                    />
          </Menu.Menu>
        </Menu>
        {this.props.children}
      </div>
    )
  }
}