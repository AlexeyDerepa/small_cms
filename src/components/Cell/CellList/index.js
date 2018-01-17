import React, { Component } from 'react';

import CellItem from '../CellItem';

class CellList extends Component {

    eachCell = (cell) => {
        return <CellItem key={cell.id} index={cell.id}
        handlerChooseCell={this.props.handlerChooseCell}
        handlerDeleteCell={this.props.handlerDeleteCell}

        cell = {cell}              
        />
    }

  render =() => (this.props.cells !== undefined)
                    ? <div>{this.props.cells.map(this.eachCell)}</div>
                    : <div>create new cell</div>;
}

export default CellList;
