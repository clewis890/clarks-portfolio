  
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import history from './history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';

import './style/index.css';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    
    composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.querySelector('#root')
 );