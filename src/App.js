import React from 'react';
import './style.css';
import data from './product.json';
import Products from './components/Products';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Products data={data} />
    </div>
  );
}
