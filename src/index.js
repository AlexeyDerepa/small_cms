import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import MainPage from './containers/mainPage';
import Start from './containers';
ReactDOM.render(
    <Provider store={store}>
        <Start />
    </Provider>
    , document.getElementById('root'));

