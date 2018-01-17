import React, {  Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addNewCell, cellSelected, deleteCell } from '../../../actions/cell';


import CellList from '../CellList';

const CellContainer = ({cells, addNewCell, deleteCell, cellSelected}) =>{

    const handlerCreateNewCell = () => {
        addNewCell();
    }

    const handlerDeleteCell = (cell) => {
        return () => deleteCell(cell);
    }

    const handlerChooseCell = (cell) => {
        return () => cellSelected(cell);
    }

    return (
        <Fragment>
            <CellList
                cells={cells}
                handlerChooseCell={handlerChooseCell}
                handlerDeleteCell={handlerDeleteCell}
            />
            <input type='button' value='new cell' onClick={handlerCreateNewCell} />
        </Fragment>
    )
}
CellContainer.propTypes = {
    cells: PropTypes.array,
    addNewCell: PropTypes.func.isRequired,
    deleteCell: PropTypes.func.isRequired,
    cellSelected: PropTypes.func.isRequired
  }
const mapStateToProps = (state) => ({
    cells: state.cellsReducer.cells,
});
const mapDispatchToProps = (dispatch) => ({
    addNewCell: () => dispatch(addNewCell()),
    cellSelected: (cell) => dispatch(cellSelected(cell)),
    deleteCell: (cell) => dispatch(deleteCell(cell)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CellContainer);
