import { useLocation } from "react-router-dom";
import { useMemo } from "react";

const useQuery = () => {
    const { search } = useLocation()
    return useMemo(() => new URLSearchParams(search), [search])
}

const AboutMe = ({
    cat
}) => {
    const query = useQuery()
    const catName = query.get("id")
    const catAbout = cat.filter((c) => c.name === catName)[0]

    return ( 
        <div className="aboutMe-container">
            {
                <div className="about-me">  
                    <img src={catAbout.image} alt="cat"/>

                    <div className="about-me-info">
                        <h2>About Me</h2>
                        <h3>Name: {catAbout.name}</h3>
                        <h3>Breed: {catAbout.breed}</h3>
                        <h3>Age: {catAbout.age}</h3>
                        <h3>Location: {catAbout.city}</h3>
                        <h3>Sex: {catAbout.gender}</h3>
                        <h3>Price: {catAbout.price}</h3>
                    </div>
                </div>
            }
        </div>
    )
}
 
export default AboutMe;