import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Index from './components/layout/body/Index';
import { Provider } from './store/Context';

function App() {
  return (
    <Provider>
      <Router>
        <>
          <Index />
        </>
      </Router>
    </Provider>
  );
}

export default App;
