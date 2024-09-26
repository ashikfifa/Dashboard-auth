import "./product.scss";
import { BabyProduct } from "../../common/dummyData";
const Product = () => {
  return (
    <div className="container">
      <div className="productShowcasing">
        {BabyProduct.map((product, index) => (
          <div key={index} className="cardProduct">
              <img src={product.img} alt={product.name} />
              <p>{product.name}</p>
              <p>Price: {product.price}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
