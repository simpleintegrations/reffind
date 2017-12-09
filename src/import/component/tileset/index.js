

import React, { Component } from 'react';
import ButtonTile from '../buttontile';

function getButtons(buttonArray)
{
  return buttonArray.map((button,b) =>  {
    return <ButtonTile key={b} text={button} />
  });
}

export const TileSet = (props) => {
  return (
    <div className="chuck-categories">
      {
        getButtons([
          'One',
          'Two',
          'Three',
          'Four',
          'Five',
          'Six',
          'Seven',
          'Eight',
          'Nine',
          'Ten',
          'Eleven',
          'Twelve',
          'Thirteen',
          'Fourteen',
          'Fifteen',
          'Sixteen',
        ])
      }
    </div>
  )
}

export default TileSet;
