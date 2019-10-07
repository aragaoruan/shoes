import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes />
    </BrowserRouter>
  );
}

export default App;
