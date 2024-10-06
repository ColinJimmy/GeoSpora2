import { Link } from "react-router-dom";
import '../components/Navbar.css'; // Optional: Add styling here or use inline styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/flood">Flood</Link>
        </li>
        <li>
          <Link to="/drought">Drought</Link>
        </li>
        <li>
          <Link to="/extreme">Extreme</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
