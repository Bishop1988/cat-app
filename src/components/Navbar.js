import { Link } from "react-router-dom";

import "../styles/navbar.css"

const Navbar = () => {
    return ( 
        <nav className="navbar-container">
            <ul className="link-list">
                <li><Link className="link" to="/about">About</Link></li>
                <li><Link className="link" to="/contact">Contact</Link></li>
            </ul>
        </nav>
     );
}
// help
export default Navbar;