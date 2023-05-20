import "./Home.css";
import User from "../../components/User";
import Product from "../../components/Product";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import cat from "../../assets/cat.jpg";
import { CiBellOn } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  return (
    <div className="home">
      <section className="home__status-bar">
        <img className="home__status-bar-avatar" src={cat} alt="avatar" />
        <p className="home__status-bar-wel-msg">Welcome Back!</p>
        <p className="home__status-bar-user-name">Christian Zela</p>
        <button className="home__status-bar-notification">
          <CiBellOn size={24} />
        </button>
      </section>
      {/* TODOs - ::placeholder::before */}
      <section className="home__search-bar">
        <BsSearch
          size={20}
          style={{
            color: "#939191",
            position: "relative",
            left: "22px",
            top: "38px",
          }}
        />
        <input
          placeholder="Search Artwork"
          type="text"
          className="home__search-bar-input"
        />
      </section>

      <Slider className="home__slider">
        <Product className="home__slider-item" />
      </Slider>
      <Navbar />
    </div>
  );
};
export default Home;
