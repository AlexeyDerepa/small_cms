import React, { Component } from 'react';
import { connect } from 'react-redux';

import { cellUpdated } from './actions/details';

class CellDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            url: ''
        }
    }
    handlerUpdateCell = (cell) => {
        this.props.cellUpdated(Object.assign({}, this.props.cell, {title:this.state.title, url:this.state.url}));
        this.setState({title: '', url: ''})
    }

    handlerChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    render = () => 
    this.props.isActive?
    <div>
        <div>
            <input type='text' placeholder='Enter title of cell' name='title' onChange={this.handlerChange} value={this.state.title} />
            <input type='text' placeholder='Enter url of cell' name='url' onChange={this.handlerChange} value={this.state.url} />
        </div>
        <input type='button' value='Save' onClick={this.handlerUpdateCell} />
    </div>
    :null;
}

const mapStateToProps = (state) => ({
    cell: state.detailsReducer.cell,
    isActive:state.detailsReducer.isActive,
});
const mapDispatchToProps = (dispatch) => ({
    cellUpdated: (cell) => dispatch(cellUpdated(cell)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CellDetails);
