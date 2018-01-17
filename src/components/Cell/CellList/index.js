import React from 'react';
import PropTypes from 'prop-types';

import CellItem from '../CellItem';

const CellList = ({cells, handlerChooseCell, handlerDeleteCell}) => {

    const list = cells.map((cell) => (
        <CellItem
            key={cell.id}
            handlerChooseCell={handlerChooseCell(cell)}
            handlerDeleteCell={handlerDeleteCell(cell)}
            cell = {cell}              
        />
    ))

    return (
        !!cells.length ? (
            <div className="cell-list">
                {list}
            </div>
        ) : (
            <div className="create-new-cell">Create new cell</div>
        )
    )
}

CellList.propTypes = {
    cells: PropTypes.array,
    handlerDeleteCell: PropTypes.func.isRequired,
    handlerChooseCell: PropTypes.func.isRequired
  }
export default CellList;
