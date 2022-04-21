import { Link } from "react-router-dom";

import "../styles/home.css"

const Card = ({
    name,
    price,
    image,
    id,
    addToBasket
}) => {
    const catInfo = () => {
        addToBasket({ id, name, price, image })
    }
  return (
    <div className="cat-div">
      <p>{name}</p>
      <p>{price}</p>
      <p className="cat-div-name">
        {id}
      </p>
      <img className="cat-div-img" src={image} alt="random" />
      <Link to={`aboutMe/?id=${name}`}>About Me</Link>
      <button onClick={catInfo}>Add to Basket</button>
    </div>
  );
};

export default Card;
