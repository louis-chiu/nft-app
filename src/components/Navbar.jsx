import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar__link--home"></Link>
      <Link to="/" className="navbar__link--browse"></Link>
      <Link to="/" className="navbar__link--launch"></Link>
      <Link to="/" className="navbar__link--shopping"></Link>
      <Link to="/" className="navbar__link--setting"></Link>
    </div>
  );
};
export default Navbar;
