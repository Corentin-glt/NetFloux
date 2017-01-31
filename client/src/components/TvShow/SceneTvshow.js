import React from 'react';
import {Card, Button, Icon} from 'semantic-ui-react';
import * as tvshowAction from '../../actions/tvshows/tvshowsAction';
import {connect} from 'react-redux';

class SceneTvshow extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.delete = this.delete.bind(this);
	}

	delete() {
		let tvshow = {
			id: this.props.id
		};
		console.log('je vais me delete');
		this.props.deleteTvshow(tvshow);
		console.log('je delete');
	}

	render() {
		return(
			<div className="SceneTvshow">
				<Card color='teal'>
					<Card.Content>
						<Icon name="film"/>
						<Card.Header>
							{this.props.title}
						</Card.Header>
						<Card.Meta>
							{this.props.dateProduction} <br/>
							Category: {this.props.category}
						</Card.Meta>
						<Card.Description>
							TVShow added by: <strong>{this.props.pseudo}</strong> <br/>
							<strong>{this.props.dateAdd}</strong>
						</Card.Description>
						<Card.Description>
							Actors: {this.props.actor}
						</Card.Description>
					</Card.Content>
					<Card.Description>
						<a href={this.props.link}>Download</a>
					</Card.Description>
					<Card.Content extra>
						<Button basic color='red' onClick={this.delete}>Delete</Button>
					</Card.Content>
				</Card>
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
		deleteTvshow: tvshow => dispatch(tvshowAction.deleteTvshow(tvshow))
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(SceneTvshow);