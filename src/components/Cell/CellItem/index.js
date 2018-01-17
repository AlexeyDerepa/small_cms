import React from 'react';
import './style.css';

const CellItem = (props) => {
  const deleteCell = () => props.handlerDeleteCell(props.cell);
  const chooseCell = () => props.handlerChooseCell(props.cell);

    let backgr = { backgroundImage: `url(${props.cell.url})` };
    return (
      <div className='main-cell-item-container' id='main'>
        <span className='delete-cell' onClick={deleteCell}>X</span>
        <div className={'cell-item-container'} onClick={chooseCell} style={backgr}>
          <div className='cell-title'>{props.cell.title}</div>
          <div className='cell-url'>{props.cell.url}</div>
        </div>
      </div>
    );
}

export default CellItem;