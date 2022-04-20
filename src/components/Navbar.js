import { Link } from "react-router-dom";

import "../styles/navbar.css"

const Navbar = () => {
    return ( 
        <nav className="navbar-container">
            <ul>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;