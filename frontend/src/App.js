import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Routes from './routes'



import './global.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
