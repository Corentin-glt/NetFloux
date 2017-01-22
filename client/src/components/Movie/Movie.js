/**
 * Created by corentin on 22/01/17.
 */
import React from 'react';
import ContainerSearch from '../Search/ContainerSearch';

export default class Movie extends React.Component {

  render(){
    return(
      <div className="Movie">
        <ContainerSearch typeNeed='Movie'/>
      </div>
    )
  }
}