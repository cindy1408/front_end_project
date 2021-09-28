import './App.css';
import PlantsContainer from './containers/PlantsContainer'

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <PlantsContainer />
    </div>
  );
}

export default App;
