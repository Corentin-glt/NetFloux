/**
 * Created by corentin on 22/01/17.
 */
import React from 'react';
import ContainerSearch from '../Search/ContainerSearch';

export default class TvShow extends React.Component {

  render(){
    return(
      <div className="TvShow">
        <ContainerSearch typeNeed='TvShow'/>
      </div>
    )
  }
}