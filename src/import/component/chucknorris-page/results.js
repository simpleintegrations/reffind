
import React from 'react';

import ChuckFacts from './chuckfacts';

import Loading from '../common/loading';
import Wisdom from '../common/wisdom';
import Oops from '../common/oops';

export const Results = (props) => {
  console.log('Results:',props);
  let stateImage = null;
  if (props.loading) stateImage = <Loading />;
  else if (props.facts === null) stateImage = <Wisdom />;
  else if (props.facts.length === 0) stateImage = <Oops />
  return (
    <div className="chuck-result">
      <div>
        {stateImage}
      </div>
      
      <ChuckFacts facts={props.facts} />
      
    </div>
  )
}

Results.defaultProps = {
  facts: [],
}

export default Results;
