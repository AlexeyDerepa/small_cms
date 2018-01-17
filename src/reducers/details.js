import * as types from '../actions/ActionTypes';

const newCell = {
    id: null,
    title: '',
    url: ''
};

let initialState = {
    cell: newCell,
    isActive: false,
};


function detailsReducer(state = initialState, action) {

    switch (action.type) {

        case types.CELL_SELECTED: {
            return updateObject(state, {
                cell: action.cell.id === state.cell.id || 0 ? newCell : action.cell,
                isActive: action.cell.id === state.cell.id || 0 ? false : true,
            })
        }

        case types.CELL_UPDATED:
        case types.DELETE_CELL:
            return updateObject(state, {
                cell: newCell,
                isActive: false,
            })

        default:
            return state;

    }

    function updateObject(obj, newProperties) {
        return Object.assign({}, obj, newProperties);
    }
}

export default detailsReducer;