

import React, { Component } from 'react';

export class SearchInput extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      query: props.query,
    };
  }
  onChange = (e) => {
    const { value: query } = e.target;
    this.setState({ query })
  }
  render() {
    return (
      <div className="chuck-input">
        <input onChange={this.onChange} value={this.state.query}/>
        <button onClick={() => this.props.onSearch(this.state.query)}>Search</button>
        <button onClick={() => this.props.onClear()}>Clear</button>
      </div>
    )
  }
}

SearchInput.defaultProps = {
  searchValue: '',
  onSearch: (query) => { console.warn('No onSearch provided:', query) },
  onClear: () => { console.warn('No onClear provided') }, 
}

export default SearchInput;
