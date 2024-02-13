import "../../../styles/Product.css";

const Product = ({ heading3, productDescription, productImg }) => {
  return (
    <div className="product-container">
      <div className="product">
        <div className="product-description">
          <h3>{heading3}</h3>
          <p>{productDescription}</p>
          <button type="button">Learn more</button>
        </div>
        <div className="product-img">
          <img src={productImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Product;
