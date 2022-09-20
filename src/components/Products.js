import React from 'react';
import './Products.css';

export default function Products(props) {
  const { data } = props;
  return (
    <div className="product-parent">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div>{item.name}</div>
            <div>
              <img className="img-name" src={item.image} />
            </div>
            <div>{item.price}</div>
          </div>
        );
      })}
    </div>
  );
}
