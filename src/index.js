import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Start from './containers';
ReactDOM.render(
    <Provider store={store}>
        <Start />
    </Provider>
    , document.getElementById('root'));

