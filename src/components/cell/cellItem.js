import React, { Component } from 'react';
import './style.css';

class CellItem extends Component {
  deleteCell =()=>this.props.handlerDeleteCell(this.props.cell);
  chooseCell =()=>this.props.handlerChooseCell(this.props.cell);
  render() {
    let backgr = {backgroundImage: `url(${this.props.cell.url})`};
    return (
      <div className='main-cell-item-container'>
        {/* <span className='delete-cell' onClick={this.props.handlerDeleteCell(this.props.cell)}>X</span> */}
        <span className='delete-cell' onClick={this.deleteCell}>X</span>
        {/* <input type='button' value='Delete' onClick={this.deleteCell}/> */}
        <div className={'cell-item-container'} onClick={this.chooseCell} style={backgr}>
          <div className='cell-title'>{this.props.cell.title}</div>
          <div className='cell-url'>{this.props.cell.url}</div>
        </div>
      </div>
    );
  }
}

export default CellItem;