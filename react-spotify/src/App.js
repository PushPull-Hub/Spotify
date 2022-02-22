import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import React from 'react';
import { Provider } from './store/Context';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <Index />
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
