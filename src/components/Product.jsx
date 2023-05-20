import User from "./User";

const Product = () => {
  return (
    <div className="product">
      <img src="" alt="" className="product__img" />
      <div className="product__content">
        {/* Grid */}
        <p className="product__content-nft-name"></p>
        <p className="product__content-nft-price"></p>
        <User className="product__content-seller" />
        <button className="product__content-btn">Price Bid</button>
      </div>
    </div>
  );
};
export default Product;
