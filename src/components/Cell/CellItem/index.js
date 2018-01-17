import React from 'react';
import './style.css';

const CellItem = (props) => {

    const backgr = { backgroundImage: `url(${props.cell.url})` };

    return (
      <div className='main-cell-item-container' id='main'>
        <span className='delete-cell' onClick={props.handlerDeleteCell}>X</span>
        <div className={'cell-item-container'} onClick={props.handlerChooseCell} style={backgr}>
          <div className='cell-title'>{props.cell.title}</div>
          <div className='cell-url'>{props.cell.url}</div>
        </div>
      </div>
    );
}

export default CellItem;