import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { addNewCell, cellSelected, deleteCell } from '../../../actions/cell';


import CellList from '../CellList';

class CellContainer extends Component {

    handlerCreateNewCell = () => {
        this.props.addNewCell();
    }

    handlerDeleteCell = (cell) => {
        this.props.deleteCell(cell);
    }

    handlerChooseCell = (cell) => {
        this.props.cellSelected(cell);
    }

    render = () => (
        <Fragment>
            <CellList
                cells={this.props.cells}
                handlerChooseCell={this.handlerChooseCell}
                handlerDeleteCell={this.handlerDeleteCell}
            />
            <input type='button' value='new cell' onClick={this.handlerCreateNewCell} />
        </Fragment>
    )
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
