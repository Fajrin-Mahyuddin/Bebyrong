import React, { Component } from 'react';
import './MainStyle.css';
import Navigate from './routers/Navigate';
import { AuthContexProvider } from './context/AuthContex';

class App extends Component {
  render() {
    return (
      <AuthContexProvider>
        <Navigate />
      </AuthContexProvider>
    );
  }
}

export default App;
