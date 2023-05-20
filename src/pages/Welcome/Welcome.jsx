import "./Welcome.css";
import cardFirst from "../../assets/card-first-cut.jpg";
import cardSecondary from "../../assets/card-secondary-cut.jpg";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <section className="welcome__hero">
        <div className="welcome__hero-circle welcome__hero-circle--purple" />
        <div className="welcome__hero-circle welcome__hero-circle--blue" />
        <div className="welcome__hero-card welcome__hero-card--first">
          <img className="welcome__hero-card-img" src={cardFirst} alt="nft" />
        </div>
        <div className="welcome__hero-card welcome__hero-card--secondary">
          <img
            className="welcome__hero-card-img"
            src={cardSecondary}
            alt="nft"
          />
        </div>
        <div className="welcome__hero-circle welcome__hero-circle--pink" />
      </section>

      <article className="welcome__article">
        <h1 className="welcome__article-title">
          Hi, friend! get
          <br />
          Collect your NFTs
        </h1>
        <p className="welcome__article-content">
          Discover your various NFT collections from global content creators
        </p>
        <Link className="welcome__btn" to="/home">
          Let's Start &rarr;
        </Link>
      </article>
    </div>
  );
};
export default Welcome;
