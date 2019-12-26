import React, { Component } from 'react';
import './MainStyle.css';
import Navigate from './routers/Navigate';
import { AuthContexProvider } from './context/AuthContex';
import {Helmet} from 'react-helmet'

class App extends Component {
  render() {
    return (
      <AuthContexProvider>
        <Helmet>
          <link rel="shortcut icon" href="/img/favicon.ico" />
        </Helmet>
        <Navigate />
      </AuthContexProvider>
    );
  }
}

export default App;
