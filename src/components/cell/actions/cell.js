import * as types from './ActionTypes';

export const addNewCell = () => {
    return {
        type: types.ADD_NEW_CELL,
    }
};

export const deleteCell = (cell) => {
    return {
        type: types.DELETE_CELL,
        cell
    }
}


export const cellUpdated = (cell) => {
    return {
            type: types.CELL_UPDATED,
            cell          
    }
};

export const cellSelected = (cell) => {
    return {
            type: types.CELL_SELECTED,
            cell          
    }
};


