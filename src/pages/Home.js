import Card from "../components/Card";

import "../styles/home.css"

const Home = ({
    cat,
    addToBasket
}) => {
    return ( 
        <div className="home-container">
            <div className="hero-content">
                <p>Hero content</p>
            </div>
            <div className="cat-gallery">
                {cat.map((cat, i) => {
                    return (
                        <Card 
                            name={cat.name}
                            price={cat.price}
                            image={cat.image}
                            key={i}
                            id={cat.id}
                            addToBasket={addToBasket}
                        />
                    )
                })}
            </div>
        </div>
     );
}
 
export default Home;