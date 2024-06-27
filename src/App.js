import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './features/Landing';

function App() {
  return (
    <Router>
    <div className="App">
      <Landing></Landing>
    </div>
    </Router>
  );
}

export default App;
