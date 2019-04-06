import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/global.css';

// COMPONENTS
import Header from './components/Header';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <Routes />
        </Fragment>
      </BrowserRouter >
    );
  }
}

export default App;
