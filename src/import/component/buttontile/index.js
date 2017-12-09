
import React from 'react';

export const ButtonTile = (props) => {
  const rune = props.number ? `rune${props.number}` : null;
  return (
    <div className={`chuck-category-wrapper ${rune}`}>
      <div className="chuck-category">
        {props.text}
      </div>
    </div>
  )
}

export default ButtonTile;
