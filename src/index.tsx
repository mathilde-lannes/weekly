import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/main/App';
import reportWebVitals from './reportWebVitals';
import './i18n';

import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk"
import {todosComponentReducer} from './store/reducer';

let store = createStore(todosComponentReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
