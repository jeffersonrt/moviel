import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './styles/global.css';

// COMPONENTS
import Header from './components/Header';
import Routes from './routes';

import reducers from './stores/reducers';
const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Header />
            <Routes />
          </Fragment>
        </BrowserRouter >
      </Provider>
    );
  }
}

export default App;
