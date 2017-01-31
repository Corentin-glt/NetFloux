/**
 * Created by corentin on 22/01/17.
 */
import React from 'react';
import ContainerSearch from '../Search/ContainerSearch';
import SceneTvshowNotUser from './SceneTvshowNotUser';
import * as tvshowAction from '../../actions/tvshows/tvshowsAction';
import {connect} from 'react-redux';
import {Grid, Loader, Dimmer} from 'semantic-ui-react';
import SceneSearch from '../Search/SceneSearch';

class TvShow extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		};
	}

	componentWillMount() {
		this.props.fetchAllTvshows().then(() => {
			console.log("ok");
			this.setState({loaded: true});
		});
	}

  render(){
  	let isLoaded;
  	if(this.state.loaded) {
  		isLoaded = <Grid columns={4}>
  			{this.props.tvshows.map((tvshow, index) => {
  				return(
  					<Grid.Column key= {index}>
  						<SceneTvshowNotUser key ={index}
  																title = {tvshow.title}
  																id = {tvshow.id}
  																dateProduction = {tvshow.dateProduction}
  																actor = {tvshow.actors}
  																category = {tvshow.category}
  																link = {tvshow.linkDownload}
  																dateAdd = {tvshow.dateAdd}/>
  					</Grid.Column>
  					)
  			})}
  		</Grid>
  	}
  	else {
  		isLoaded = <Dimmer active>
  			<Loader>Loading</Loader>
  		</Dimmer>
  	}

    return(
      <div className="TvShow">
        <SceneSearch />
        {isLoaded}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
	return {
		tvshows: state.tvshows
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllTvshows: () => dispatch(tvshowAction.fetchAllTvshows())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShow);