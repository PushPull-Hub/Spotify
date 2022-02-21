import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Index from './components/layout/Index'
import React from "react";

function App() {
  return (
    <Router>
        <React.Fragment>
            <Navbar /> 
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index}></Route>
              </Switch>
            </div>
        </React.Fragment>
    </Router>
  );
}

export default App;
