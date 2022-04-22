import { Link } from "react-router-dom";

import "../styles/navbar.css"

const Navbar = () => {
    return ( 
        <div className="navbar-container">
            <ul className="Link-List">
                <li className="Link"><Link to="/">Home</Link></li>
                <li className="Link"><Link to="/about">About</Link></li>
                <li className="Link"><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="nav-cart">

                </div>

        </div>
);
}
// help
export default Navbar;
