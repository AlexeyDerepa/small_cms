import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import MainPage from './containers/mainPage';

ReactDOM.render(
    <Provider store={store}>
        <MainPage />
    </Provider>
    , document.getElementById('root'));

