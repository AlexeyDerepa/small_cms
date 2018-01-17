import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import cellsReducer from './reducers/cell';
import detailsReducer from './reducers/details';

const middleware = [
    thunk,
    createLogger(),
];

const store = createStore(
    combineReducers({
        cellsReducer: cellsReducer,
        detailsReducer: detailsReducer,
    }),
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store; 