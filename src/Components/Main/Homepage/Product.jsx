import "../../../styles/Product.css";

const Product = ({ heading3, productDescription, productImg, openModal }) => {
  return (
    <div className="py-28 px-4 sm:py-36 sm:p-12 product-container">
      <div className="my-0 mx-auto max-w-7xl w-full flex flex-col-reverse md:flex-row items-center">
        <div className="my-8 mx-0 md:p-8 flex-grow flex flex-col items-center md:items-start product-description">
          <h3 className="mt-0 mb-6 max-w-md text-2xl sm:text-5xl md:text-6xl text-center md:text-left">
            {heading3}
          </h3>
          <p className="mt-0 max-w-md text-base text-center md:text-left">
            {productDescription}
          </p>
          <a onClick={openModal}>Learn more</a>
        </div>
        <div className="product-img">
          <img src={productImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Product;
