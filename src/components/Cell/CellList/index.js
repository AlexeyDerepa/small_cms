import React, { Fragment } from 'react';
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
            <Fragment>
                {list}
            </Fragment>
        ) : (
            <div>create new cell</div>
        )
    )
}

CellList.propTypes = {
    cells: PropTypes.array,
    handlerDeleteCell: PropTypes.func.isRequired,
    handlerChooseCell: PropTypes.func.isRequired
  }
export default CellList;
