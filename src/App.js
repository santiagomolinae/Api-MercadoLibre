import React from 'react';
import './App.css';
import Header from './Header';
import Product from "./Product";



function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Lobster&display=swap"
        rel="stylesheet"
      />
      <Header />
      <Product />
    </div>
  );
}

export default App;
