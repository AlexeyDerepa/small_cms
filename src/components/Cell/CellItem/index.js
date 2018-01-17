import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const CellItem = ({ cell, handlerDeleteCell, handlerChooseCell }) => {

  const backgr = { backgroundImage: `url(${cell.url})` };

  return (
    <div className='main-cell-item-container' id='main'>
      <span className='delete-cell' onClick={handlerDeleteCell}>X</span>
      <div className={'cell-item-container'} onClick={handlerChooseCell} style={backgr}>
        <div className='cell-title'>{cell.title}</div>
        <div className='cell-url'>{cell.url}</div>
      </div>
    </div>
  );
}

CellItem.propTypes = {
  cell: PropTypes.object.isRequired,
  handlerDeleteCell: PropTypes.func.isRequired,
  handlerChooseCell: PropTypes.func.isRequired
}
export default CellItem;