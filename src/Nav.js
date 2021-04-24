import { Link } from 'react-router-dom';
import "./App.css";

const Nav = () => {
  return (
    <nav>
      <Link style={{ color: "white", textDecoration: "none"}} to="/"><div style={{ fontSize: "30px"}}>Home</div></Link>
      <ul className="nav-links">
      <Link style={{ color: "white", textDecoration: "none"}} to="/about"><div style={{ fontSize: "30px"}}>About</div></Link>
      </ul>
    </nav>
  )
}

export default Nav
