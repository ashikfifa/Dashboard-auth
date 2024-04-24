import React from "react";
import "./product.scss";
import { BabyProduct } from "../../common/dummyData";
const Product = () => {
  return (
    <div className="container">
      <div className="productShowcasing">
        {BabyProduct.map((product, index) => (
          <div className="cardProduct">
            <div key={index}>
              <img src={product.img} alt={product.name} />
              <p>{product.name}</p>
              <p>Price: {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
