import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import List from './List';

function App() {
  return (
    <div className="app">
      <Menu title="Amozon"/>
      <List />
    </div>
  );
}

export default App;
