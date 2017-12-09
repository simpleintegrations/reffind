
import React, { Component } from 'react';

export class SearchInput extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      query: props.query,
    };
  }
  componentWillReceiveProps(next)
  {
    const { props: past } = this;
    if(next.query !== past.query)
    {
      const { query } = next;
      this.setState({ query });
    }
  }
  onChange = (e) => {
    const { value: query } = e.target;
    this.setState({ query })
  }
  preventDefault = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <div className="chuck-input">
        <form onSubmit={this.preventDefault}>
          <input onChange={this.onChange} value={this.state.query}/>
          <button onClick={() => this.props.onSearch(this.state.query)} type="submit">Search for Wisdom</button>
          <button onClick={() => this.props.onClear()}>Clear your Mind</button>
        </form>
      </div>
    )
  }
}

SearchInput.defaultProps = {
  query: '',
  onSearch: (query) => { console.warn('No onSearch provided:', query) },
  onClear: () => { console.warn('No onClear provided'); }, 
}

export default SearchInput;
