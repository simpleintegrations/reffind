
import React, { Component } from 'react';

import Instructions from './instructions';
import SearchInput from './search';
import Results from './results';
import TileSet from '../tileset';

export const ChuckNorrisPage = (props) => {
  return (
    <div className="chuck-page">
      <Instructions />
      <SearchInput />
      <Results />
      <TileSet />
    </div>
  )
}

export default ChuckNorrisPage;
