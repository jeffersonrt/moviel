import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header';
import Routes from './routes';

import { GlobalStyle } from './elements';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <Routes />
          <GlobalStyle/>
        </Fragment>
      </BrowserRouter >
    );
  }
}

export default App;
