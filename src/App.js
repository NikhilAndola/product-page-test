import React from 'react';
import './style.css';
import data from './product.json';
import Products from './components/Products';

export default function App() {
  return (
    <div className="App">
      <h1>Products</h1>
      <Products data={data} />
    </div>
  );
}
