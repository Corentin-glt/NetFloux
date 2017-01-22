/**
 * Created by corentin on 21/01/17.
 */
import React from 'react';
import ContainerSearch from '../Search/ContainerSearch';
import { Menu } from 'semantic-ui-react'

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeItem: 'Movies'
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, {name}){
    console.log(name);
    this.setState({ activeItem: name });
  }

  render(){
    const { activeItem } = this.state;
    return(
      <div className="Home">
        <Menu pointing secondary>
          <Menu.Item name='Movies'
                     active={activeItem === 'Movies'}
                     onClick={this.handleItemClick}>
          </Menu.Item>
          <Menu.Item name='Tv-Shows'
                     active={activeItem === 'Tv-Shows'}
                     onClick={this.handleItemClick}>
          </Menu.Item>
        </Menu>
        <ContainerSearch/>
      </div>
    )
  }
}