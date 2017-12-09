
import React, { Component } from 'react';

import chuckAPI from '../../api/chucknorris-io';

import Instructions from './instructions';
import SearchInput from './search';
import Results from './results';
import TileSet from '../tileset';

export class ChuckNorrisPage extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      query: '',
      loading: false,
      facts: null,
      error: null,
      categories: null,
      category: null,
    }
  }
  
  componentDidMount() {
    chuckAPI.categories()
      .then(result => {
        const stateUpdate = { ...result };
        if (this.state.category === null && stateUpdate.error === null) {
          stateUpdate.category = stateUpdate.categories[0];
        }
        this.setState(stateUpdate);
      });
  }
  
  onSearch = (query) => {
    this.setState({ query, loading: true, facts: null, error: null, category: null },()=>{
      chuckAPI.search(this.state.query)
        .then(stateUpdate => {
          this.setState({ ...stateUpdate, loading: false });
        });
    })
  }
  
  onClear = () => {
    this.setState({ loading: false, facts: null, error: null, category: null, query: '' });
  }
  
  onCategorySelect = (category) => {
    this.setState({ loading: true, facts: null, error: null, category: category, query: '' }, () => {
      chuckAPI.randomChuckWithCategory(category)
        .then(stateUpdate => {
          this.setState({ ...stateUpdate, loading: false });
        });
    })
  } 
  
  render() {
    return (
      <div className="chuck-page">

        <Results 
          loadingMessage="Searching the Wisdom of Chuck"
          loading={this.state.loading}
          facts={this.state.facts} 
        />
        
        <Instructions />
      
        <SearchInput onSearch={this.onSearch} onClear={this.onClear} query={this.state.query} />
        
        <TileSet 
          loadingMessage="Retrieving Ancient Tablets..." 
          items={this.state.categories} 
          onClick={this.onCategorySelect}
        />
        
      </div>
    )
  }
}

export default ChuckNorrisPage;
