import React from 'react';
import {Modal, Button, Form, Message, Header} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
require('react-datepicker/dist/react-datepicker.css');

export default class SceneAddTvshow extends React.Component {

	render (){
		let labelErrorMessage;
		if(this.props.errorMessage) {
			labelErrorMessage = <Message warning>{this.props.errorMessage}</Message>
		}

		return (
		<div className="SceneAddTvshow">
			<Modal
				open={this.props.modalOpen}
				onOpen={this.props.handleOpen}
				onClose={this.props.handleClose}
				size='small'
			>
				<Header icon='film' content='Which TVShow do you want to add ?'/>
				<Modal.Content>
					<h3>Please enter the TvShow's details</h3>
					<Form>
						<Form.Field>
							<label>Title</label>
							<Form.Input type="text"
													placeholder="Title"
													onChange={this.props.updateTitle}/>
						</Form.Field>
						<Form.Field>
							<label>Actor</label>
							<Form.Input type="text"
													placeholder="Actor"
													onChange={this.props.updateActor}/>
						</Form.Field>
						<Form.Field>
							<label>Production Date</label>
							<div>
								<DatePicker placeholdertext="Click to select a date"
														selected={this.props.dateProduction}
														onChange={this.props.updateDate}/>
							</div>
						</Form.Field>
						<Form.Field>
                <label>TVShow Poster</label>
                <Form.Input type="text"
                            placeholder='Insert a source to the image'
                            onChange={this.props.updateImage}/>
              </Form.Field>
              <Form.Field>
                <label>Synopsis</label>
                <Form.Input type="text"
                            placeholder='About'
                            onChange={this.props.updateDescription}/>
              </Form.Field>
						<Form.Field>
                <label>Category</label>
                <select multiple=""
                        className="ui dropdown"
                        onChange={this.props.updateCategory}>
                  <option value="">Select Category</option>
                  <option value="Vostfr">Vostfr</option>
                  <option value="Vf">Vf</option>
                  <option value="Blueray">Blueray</option>
                </select>
            </Form.Field>
						<Form.Field>
                <label>Link download</label>
                <Form.Input type="text"
                            placeholder='Link'
                            onChange={this.props.updateLink}/>
            </Form.Field>
					</Form>
					<br/>
					<Modal.Actions>
					<Button.Group>
                <Button onClick={this.props.handleClose}>
                  Cancel</Button>
                <Button.Or />
                <Button positive
                        onClick={this.props.saveTvshow}>
                  Save</Button>
              </Button.Group>
				</Modal.Actions>
					{labelErrorMessage}
				</Modal.Content>
			</Modal>
		</div>
		)
	}
}
