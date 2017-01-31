import React from 'react';
import {Card, Button, Icon, Modal, Header, Image, Divider} from 'semantic-ui-react';
import * as tvshowAction from '../../actions/tvshows/tvshowsAction';
import {connect} from 'react-redux';

class SceneTvshowNotUser extends React.Component {

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
				<Modal trigger={
					<Card color='yellow'>
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
						 <Card.Content extra style={{"backgroundColor": "#008080"}}>
							<a style={{"float": "right", "color": "#FFD700"}} href={this.props.link}>Download</a>
						</Card.Content>
					</Card>}>
					<Modal.Header>TVShow Details</Modal.Header>
    			<Modal.Content image>
      			<Image wrapped size='medium' src={this.props.image} />
      			<Modal.Description>
        			<Header>{this.props.title}</Header>
			        {this.props.dateProduction}<br/>
			        <p>Category: {this.props.category}</p>
			        <p>Movie added by: <strong>{this.props.pseudo}</strong>
              <strong>{this.props.dateAdd}</strong></p>
			        <p>Description: {this.props.description}</p>
			        <p>Actor: {this.props.actor}</p>
			        <Divider section />
         			<a href={this.props.link}>Download</a>
      			</Modal.Description>
    			</Modal.Content>
  			</Modal>
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

export default connect(mapStateToProps,mapDispatchToProps)(SceneTvshowNotUser);