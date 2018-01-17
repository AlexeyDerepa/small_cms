import * as types from '../actions/ActionTypes';
const newCell = {
    id: null,
    title: '',
    url: ''
};
let initialState = {
    cells: [],
    cell:newCell,
};


function cellsReducer(state = initialState, action) {

    switch (action.type) {

        case types.ADD_NEW_CELL:
            return updateObject(state, {                
                cells: state.cells.concat(Object.assign({}, newCell, { id: Date.now() })),
                cell: newCell
            });

        case types.DELETE_CELL:
            return updateObject(state, { 
                cells: state.cells.filter(item => item.id !== action.cell.id),
                cell: newCell
            });

        case types.CELL_UPDATED:
            return updateObject(state, {
                cells: state.cells.map((item) => (item.id === action.cell.id) ? action.cell : item),
                cell: newCell
            })

        case types.CELL_SELECTED: {
            return updateObject(state, {
                cell: action.cell
            })
        }

        default:
            return state;

    }

    function updateObject(obj, newProperties) {
        return Object.assign({}, obj, newProperties);
    }
}

export default cellsReducer;