import React, { Fragment } from 'react';

import CellItem from '../CellItem';

const CellList = (props) => {

    const list = props.cells.map((cell) => (
        <CellItem
            key={cell.id}
            handlerChooseCell={props.handlerChooseCell(cell)}
            handlerDeleteCell={props.handlerDeleteCell(cell)}
            cell = {cell}              
        />
    ))

    return (
        !!props.cells.length ? (
            <Fragment>
                {list}
            </Fragment>
        ) : (
            <div>create new cell</div>
        )
    )
}

export default CellList;
