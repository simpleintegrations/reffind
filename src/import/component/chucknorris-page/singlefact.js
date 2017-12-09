
import React from 'react';

export const SingleFact = (props) => {
  return (
    <div className="single-fact">
      {props.fact.value}
    </div>
  )
}

export default SingleFact;
