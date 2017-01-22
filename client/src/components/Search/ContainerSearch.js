/**
 * Created by corentin on 21/01/17.
 */
import React from 'react';
import SceneSearch from './SceneSearch';
import { Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

export default class ContainerSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      titleSearch: '',
      dateAddSearch: new Date(),
      dateProductionSearch: new Date(),
      categorySearch: ''
    };
    this.updateTitleSearch = this.updateTitleSearch.bind(this);
    this.updateDateAddSearch = this.updateDateAddSearch.bind(this);
    this.updateDateProductionSearch = this.updateDateProductionSearch.bind(this);
    this.updateCategorySearch = this.updateCategorySearch.bind(this);
  }
  updateTitleSearch(title){
    this.setState({titleSearch: title.target.value});
  }

  updateDateAddSearch(dateAdd){
    this.setState({dateAddSearch: dateAdd.target.value});
  }

  updateDateProductionSearch(dateProduction){
    this.setState({dateProductionSearch: dateProduction.target.value});
  }
  updateCategorySearch(category){
    this.setState({categorySearch: category.target.value});
  }
  onSubmit(){
    console.log('yolo');
    browserHistory.push('/');
  }
  render(){
    return (
      <div className="ContainerSearch">
        <SceneSearch
          updateTitle={this.updateTitleSearch}
          updateAddedDate={this.updateDateAddSearch}
          valueDateAdded={this.state.dateAddSearch}
          valueDateProd={this.state.dateProductionSearch}
          updateProdDate={this.updateDateProductionSearch}
          updateCategory={this.updateCategorySearch}
        /><br/>
        <Button positive
                onClick={e => {
                  e.preventDefault();
                  this.onSubmit();
                  //e.target.reset();
                }}>Submit</Button>
      </div>
    )
  }
}