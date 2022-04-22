import "../styles/about.css"
import ragDoll from "../images/ragdoll1.jpeg"

const About = () => {
    return ( 
        <div className="about-container">
            <h1>About us</h1>
            <p className="about-text"> 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
           <div className="image-adjust"></div>
            <img src={ragDoll} alt=" a cat"/>
        </div>
     );
}
 
export default About;