
import React from 'react';

import SingleFact from './singlefact';

export const ChuckFacts = (props) => {
  return (
    <div>
      {
        props.facts && props.facts.length ?
          <div className="chuck-wisdom">
            {
              props.facts.map((fact,f) => <SingleFact key={f} fact={fact} /> )
            }
          </div>
        : null
      }
    </div>
  )
}

export default ChuckFacts;
