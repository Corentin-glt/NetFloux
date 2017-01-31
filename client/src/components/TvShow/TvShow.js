/**
 * Created by corentin on 22/01/17.
 */
import React from 'react';
import ContainerSearch from '../Search/ContainerSearch';
import SceneTvshowNotUser from './SceneTvshowNotUser';
import * as tvshowAction from '../../actions/tvshows/tvshowsAction';
import {connect} from 'react-redux';
import {Grid, Loader, Dimmer, Search} from 'semantic-ui-react';
import SceneSearch from '../Search/SceneSearch';

class TvShow extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
      isLoading: false,
      results: [],
      value: ''
		};
    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.resetComponent = this.resetComponent.bind(this);
	}

	componentWillMount() {
		this.props.fetchAllTvshows().then(() => {
			console.log("ok");
			this.setState({loaded: true});
		});
	}

  resetComponent (){
    this.setState({ isLoading: false, results: [], value: '' });
  }

  handleResultSelect(result){
    this.setState({ value: result.title });
  }

  handleSearchChange(value) {
    this.setState({ isLoading: true});
    this.setState({value: value.target.value});

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = (result) => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.props.tvshows, isMatch)
      })
    }, 500)
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
  																dateAdd = {tvshow.dateAdd}
                                  image= {tvshow.image}
                                  description = {tvshow.description}/>
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
        <Grid>
        <Grid.Column width={8}>
          {this.props.typeNeed}
          <Search
            loading={this.state.isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={this.state.results}
            value={this.state.value}
          />
        </Grid.Column>
      </Grid>
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