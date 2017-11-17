import { applyMiddleware, createStore } from 'redux';

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import css from "./style/main.scss";
import promise from 'redux-promise';
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router />
    </Provider>
    , document.getElementById('app'));
