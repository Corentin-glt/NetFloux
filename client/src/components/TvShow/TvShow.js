/**
 * Created by corentin on 22/01/17.
 */
import React from 'react';
import ContainerSearch from '../Search/ContainerSearch';

export default class TvShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
    return(
      <div className="TvShow">
        <ContainerSearch typeNeed='TvShow'/>
      </div>
    )
  }
}