import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Routes from './routes';
import './App.css';

const history = createBrowserHistory()

ReactDOM.render(
  <Routes history={history} />,
  document.getElementById('root')
);
