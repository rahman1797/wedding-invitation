import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import storeRedux from './Redux/Store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={storeRedux}>
    <Router>
      <App />
    </Router>
  </Provider>,
  // </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
