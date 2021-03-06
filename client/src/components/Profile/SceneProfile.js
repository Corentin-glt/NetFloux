/**
 * Created by corentin on 24/01/17.
 */
import React from 'react';
import {Menu, Label, Grid} from 'semantic-ui-react';

export default class SceneProfile extends React.Component {
  render(){
    let labelSerieAdded;
    let labelMovieAdded;
    if (this.props.seriesAdded === 0){
      labelSerieAdded = <Label>0</Label>
    } else {
      labelSerieAdded = <Label color='teal'>{this.props.seriesAdded}</Label>
    }
    if (this.props.moviesAdded === 0){
      labelMovieAdded = <Label>0</Label>
    } else {
      labelMovieAdded = <Label color='teal'>{this.props.moviesAdded}</Label>
    }
    return (
      <div className="SceneProfile">
        <h1>Hey {this.props.pseudo} !</h1>
        <Grid.Column >
        <Menu inverted vertical attached='top'>
          <Menu.Item>
            {labelSerieAdded}
            Tv-Shows added
          </Menu.Item>
          <Menu.Item>
            {labelMovieAdded}
            Films Added
          </Menu.Item>
          <Menu.Item onClick={this.props.addMovie}>
            Add movie
          </Menu.Item>
          <Menu.Item onClick={this.props.addTvshow}>
            Add series
          </Menu.Item>
          <Menu.Item onClick={this.props.deleteProfile}>
            Delete Account
          </Menu.Item>
        </Menu>
        </Grid.Column>
      </div>
    )
  }
}