import React from 'react';
import './Products.css';
import ViewProduct from './ViewProduct';
import jsonData from '../product.json';

export default function Products() {
  // const { data } = props;
  const [data, setData] = React.useState(jsonData);

  const [singleProduct, setSingleProduct] = React.useState({});
  const [togleView, setToggleView] = React.useState(true);

  const handleProductView = (item) => {
    // console.log('dfdfdf', item);
    setSingleProduct(item);
    setToggleView(!togleView);
  };

  return togleView ? (
    <>
      <div className="product-parent">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="border-p"
              onClick={() => handleProductView(item)}
            >
              <div className="product-name">
                <h2>{item.name}</h2>
              </div>
              <div>
                <img className="img-name" src={item.image} />
              </div>
              <div className="product-price">
                <h3>Rs.{item.price}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <ViewProduct
      data={singleProduct}
      setToggleView={setToggleView}
      togleView={togleView}
    />
  );
}
