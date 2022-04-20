import "../styles/home.css"

const Home = ({
    cat
}) => {
    return ( 
        <div>
            {cat.map((item, index) => {
                return (
                    <div className="cat-div">
                        <p className="cat-div-name" key={index}>{item.id}</p>
                        <img className="cat-div-img" src={item.url} alt="random" />
                        <p>test text</p>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Home;