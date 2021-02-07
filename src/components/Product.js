import React from 'react';

const Product = ({ id }) => {
  // console.log(props)
  return (
    <article className="product">
      <h1>{id}</h1>
    </article>
  );
}

export default Product;
