import React from 'react';
import './App.css';
import Navbar from "./Navbar/Navbar";
import Expenses from "./Expenses/Expenses";
import Piechart from "./Piechart/Piechart";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar></Navbar>
      <div className='content'>
        {/* Expenses */}
        <Expenses></Expenses>
        {/* Piechart*/}
        <Piechart></Piechart>
      </div>
    </div>
  );
}

export default App;
