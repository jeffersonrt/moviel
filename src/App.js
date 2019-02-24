import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "mobx-react";
import DevTools from 'mobx-react-devtools';

import './styles/global.css';

// STORE
import stores from './stores';

// ROUTES
import Header from './components/Header';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <Provider store={{ ...stores }} >
        <BrowserRouter>
          <Fragment>
            <DevTools />
            <Header />
            <Routes />
          </Fragment>
        </BrowserRouter >
      </ Provider>
    );
  }
}

export default App;
