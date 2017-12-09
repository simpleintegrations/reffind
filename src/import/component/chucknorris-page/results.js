

import React, { Component } from 'react';

import Instructions from './instructions';

export const Results = (props) => {
  return (
    <div className="chuck-result">
      <div>
        {/*<img src="/oops.gif" width="100px" height="100px" alt="failed ninja"/>*/}
        <img src="/wise_ninja.gif" width="100px" height="100px" alt="wise ninja"/>
        {/*<img src="/ninja_fetching.gif" width="71px" height="100px" alt="fetching ninja"/>*/}
      </div>
      <Instructions />
      {/*<div className="instructions">
        The Wisdom is Real. Enter some words above and press <strong>Search</strong> or select
        from the ancient tablets below. You can also <strong>Clear</strong> your mind.
      </div>*/}
    </div>
  )
}

export default Results;
