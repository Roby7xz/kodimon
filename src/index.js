import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

//const store = createStore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<Provider store={store}>
    <App />
  //</Provider>
);
