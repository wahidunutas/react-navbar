import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import Products from './Components/pages/Products';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
      </Switch>
    </Router>
  );
}

export default App;