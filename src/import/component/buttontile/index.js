
import React from 'react';

export const ButtonTile = (props) => {
  const rune = props.number ? `rune${props.number}` : null;
  return (
    <div className={`chuck-category-wrapper ${rune}`} onClick={()=>props.onClick(props.text)}>
      <div className="chuck-category">
        {props.text}
      </div>
    </div>
  )
}

ButtonTile.defaultProps = {
  onClick: (text) => { console.warn('ButtonTile: No onlick handler provided:',text) },
}

export default ButtonTile;
