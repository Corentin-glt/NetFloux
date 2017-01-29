import React from 'react';
import SceneAddTvshow from './SceneAddTvshow';
import * as tvshowAction from '../../../actions/tvshows/tvshowsAction';
import * as userAction from '../../../actions/users/userAction';
import moment from 'moment';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

class ContainerAddTvshow extends React.Component {
	constructor(props) {	
		super(props);
		this.state = {
			modalOpen: true,
			dateProduction: moment(),
			errorMessage: null,
			title: null,
			actor:null,
			link: null,
			category: null
		};
		this.handleOpen= this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.updateTitle = this.updateTitle.bind(this);
		this.updateActor = this.updateActor.bind(this);
		this.updateDate = this.updateDate.bind(this);
		this.updateCategory = this.updateCategory.bind(this);
		this.updateLink = this.updateLink.bind(this);
		this.saveTvshow = this.saveTvshow.bind(this);
	}
	
	handleOpen() {
		this.setState({modalOpen: true});
		console.log("open");
	}

	handleClose() {
		console.log("close");
		browserHistory.push('/Profile');
	}

	updateTitle(title) {
		this.setState({title: title.target.value});
	}

	updateActor(actor) {
		this.setState({actor: actor.target.value});
	}

	updateLink(link) {
		this.setState({link: link.target.value});
	}

	updateDate(date) {
		this.setState({dateProduction: date});  //?
	}

	updateCategory(category) {
		this.setState({category: category.target.value});
	}

	saveTvshow() {
		if(this.state.title && this.state.actor && this.state.category && this.state.link ) {
			let newTvshow = {
				title : this.state.title,
				actors: [this.state.actor],
				dateProduction: this.state.dateProduction._d,  //?
				category: this.state.category,
				linkDownload: this.state.link,
				users: {
					id: this.props.user.data._id //?
				}
			};
			this.props.createTvshow(newTvshow);
			console.log("newtvshow");
		}
		else {
			this.setState({errorMessage: "Please fill all the fields"})
		}
	}

	render() {
		return (
		<div className="ContainerAddTvshow">
			<SceneAddTvshow
				errorMessage = {this.state.errorMessage}
				modalOpen = {this.state.modalOpen}
				handleOpen= {this.handleOpen}
				handleClose = {this.handleClose}
				updateTitle = {this.updateTitle}
				updateActor = {this.updateActor}
				dateProduction = {this.state.dateProduction}
				updateDate = {this.updateDate}
				updateCategory = {this.updateCategory}
				updateLink = {this.updateLink}
				saveTvshow = {this.saveTvshow}
				/>
		</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.user,
		tvshows: state.tvshows
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		createTvshow: tvshow => dispatch(tvshowAction.createTvshow(tvshow))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerAddTvshow);

