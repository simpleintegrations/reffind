

import React from 'react';
import ButtonTile from '../buttontile';

import Loading from '../common/loading';

export const TileSet = (props) => {
  return (
    <div className="chuck-categories">
      {
        props.items ?
          props.items.map((button,b) =>  {
            return <ButtonTile key={b} text={button} number={b+1} onClick={props.onClick} />
          })
        : 
          <div>
            <div>{props.loadingMessage}</div>
            <Loading />
          </div>
      }
    </div>
  )
}

TileSet.defaultProps = {
  items: [
    // "explicit", "dev", "movie", "food", 
    // "celebrity", "science", "political", "sport", 
    // "religion", "animal", "music", "history", 
    // "travel", "career", "money", "fashion"
  ],
  loadingMessage: 'Loading...',
  onClick: (text) => { console.warn('TileSet: No onclick handler provided:',text) }
}

export default TileSet;
