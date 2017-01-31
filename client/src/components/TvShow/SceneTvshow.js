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
				<Card color='teal' style={{"marginTop": "5%"}}>
					<Card.Content>
						<Card.Header>
							<Icon name="film"/>
							{this.props.title}
						</Card.Header>
						<Card.Meta>
							{this.props.dateProduction} <br/>
							Category: {this.props.category}
						</Card.Meta>
						<Card.Description>
							TVShow added by: <strong>{this.props.pseudo}</strong>
							<strong>{this.props.dateAdd}</strong>
						</Card.Description>
						<Card.Description>
							Actors: {this.props.actor}
						</Card.Description>
					</Card.Content>
					<Card.Description>
						<a href={this.props.link} style={{ "float": "right", "fontSize": "17px", "marginRight": "2%", "paddingBottom": "3%"}}>Download</a>
					</Card.Description>
					<Card.Content extra style={{"backgroundColor": "#008080"}}>
						<Button inverted color='yellow' style={{"float": "right"}} onClick={this.delete}>Delete</Button>
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