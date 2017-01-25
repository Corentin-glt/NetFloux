/**
 * Created by corentin on 24/01/17.
 */
import React from 'react';
import SceneProfile from './SceneProfile';
import * as userAction from '../../actions/users/userAction';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

class ContainerProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pseudo: '',
      moviesAdded: [],
      seriesAdded: []
    };
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie() {
    browserHistory.push('/AddMovie');
  }

  componentWillMount(){
    let user = {
      token: localStorage.access_token
    };
    this.props.fetchUserByToken(user)
      .then(() => {
        this.setState({pseudo: this.props.user.data.pseudo});
        this.setState({moviesAdded: this.props.user.data.movies});
        this.setState({seriesAdded: this.props.user.data.tvshows});
    })
  }

  render(){
    return(
      <div className="ContainerProfile">
        <SceneProfile
          pseudo={this.state.pseudo}
          moviesAdded={this.state.moviesAdded.length}
          seriesAdded={this.state.seriesAdded.length}
          addMovie={this.addMovie}/>
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
    fetchUserByToken: user => dispatch(userAction.fetchUserByToken(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerProfile);