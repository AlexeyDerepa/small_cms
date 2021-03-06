import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { cellUpdated } from '../../actions/details';

class CellDetails extends Component {
    state = {
        title: '',
        url: ''
    }
    componentWillReceiveProps(nextProps){
        this.setState({...nextProps.cell})
    }
    handlerUpdateCell = (cell) => {
        this.props.cellUpdated(Object.assign({}, this.props.cell, {title:this.state.title, url:this.state.url}));
        this.setState({title: '', url: ''})
    }

    handlerChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    } 
    render = () => (
        this.props.isActive ? (
            <div className="popup">
                <div className="form-holder">
                    <div className="form-group">
                        <input className="form-control" type='text' placeholder='Enter title of cell' name='title' onChange={this.handlerChange} value={this.state.title} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type='text' placeholder='Enter url of cell' name='url' onChange={this.handlerChange} value={this.state.url} />
                    </div>
                    <button onClick={this.handlerUpdateCell} className="btn btn-primary">Save</button>
                </div>
            </div>
        ) : (
            null
        )
    )
}
CellDetails.propTypes = {
    cell: PropTypes.object.isRequired,
    isActive: PropTypes.bool.isRequired,   
  }
  
const mapStateToProps = (state) => ({
    cell: state.detailsReducer.cell,
    isActive:state.detailsReducer.isActive,
});
const mapDispatchToProps = (dispatch) => ({
    cellUpdated: (cell) => dispatch(cellUpdated(cell)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CellDetails);
