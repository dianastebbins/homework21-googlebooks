import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Books from "./pages/Books";

function App() {
  return (
    <div className="Container">
      <Books />      
    </div>
  );
}

export default App;
