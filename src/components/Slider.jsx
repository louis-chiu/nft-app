import Product from "./Product";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__header">
        <h4 className="slider__title">Top Selling</h4>
        <button className="slider__see-all">See All</button>
      </div>
      <Product />
      <div className="slider__bar"></div>
    </div>
  );
};
export default Slider;
