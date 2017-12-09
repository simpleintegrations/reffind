

import React, { Component } from 'react';
import ButtonTile from '../buttontile';

function getButtons(buttonArray)
{
  return buttonArray.map((button,b) =>  {
    return <ButtonTile key={b} text={button} number={b+1} />
  });
}

export const TileSet = (props) => {
  return (
    <div className="chuck-categories">
      {
        getButtons(props.names)
      }
    </div>
  )
}

TileSet.defaultProps = {
  names: [
    "explicit", "dev", "movie", "food", 
    "celebrity", "science", "political", "sport", 
    "religion", "animal", "music", "history", 
    "travel", "career", "money", "fashion"
  ],
}

export default TileSet;
