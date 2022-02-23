import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Index from './components/layout/Index';
import { Provider } from './store/Context';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Index />
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
