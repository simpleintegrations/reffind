
import React, { Component } from 'react';

import Instructions from './instructions';
import SearchInput from './search';
import Results from './results';
import TileSet from '../tileset';

export class ChuckNorrisPage extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="chuck-page">
        {/*<Instructions />*/}
        <Results />
        <SearchInput />
        <TileSet />
      </div>
    )
  }
}

export default ChuckNorrisPage;
