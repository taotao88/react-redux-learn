import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import reducer from './reducers';
import HomePage from './components/HomePage';
import ChartsPage from './components/ChartsPage';

import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

const history = createHistory();

const store = createStore(
  reducer, 
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(history))
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/charts" component={ChartsPage}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
