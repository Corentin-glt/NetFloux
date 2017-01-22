/**
 * Created by corentin on 21/01/17.
 */
import React from 'react';
import { Form } from 'semantic-ui-react';

export default class SceneSearch extends React.Component{
  render(){
    return (
      <div className="SceneSearch">
        <Form>
          <Form.Group>
            <Form.Field>
              <label>Movie's title</label>
              <Form.Input type="text"
                     placeholder="Title"
                     onChange={this.props.updateTitle}>
              </Form.Input>
            </Form.Field>
            <Form.Field>
              <label>Added date</label>
              <Form.Input type="text"
                          placeholder={this.props.valueDateAdded}
                          onChange={this.props.updateAddedDate}>
              </Form.Input>
            </Form.Field>
            <Form.Field>
              <label>Production date</label>
              <input type="text"
                     placeholder={this.props.valueDateProd}
                     onChange={this.props.updateProdDate}>
              </input>
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
          </Form.Group>
        </Form>
      </div>

    )
  }
}