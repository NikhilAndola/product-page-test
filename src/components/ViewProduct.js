import React from 'react';

export default function ViewProduct(props) {
  // console.log('mango', props);
  const { data, setToggleView, togleView } = props;

  // console.log(props);
  const crossButton = () => {
    setToggleView(!togleView);
  };
  return (
    <div className="borderNew">
      <div className="productNewName">
        <h2>{data.name}</h2>
        <button onClick={() => crossButton()}>X</button>
      </div>
      <div>
        <img className="imgNew" src={data.image} />
      </div>
      <div className="productNewPrice">
        <h3>Rs. {data.price}</h3>
        <div>quantity: 2</div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}
