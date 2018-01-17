import * as types from './ActionTypes';

export const cellUpdated = (cell) => {
    return {
            type: types.CELL_UPDATED,
            cell          
    }
};

