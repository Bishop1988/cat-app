import "../styles/home.css"

const Home = ({
    cat
}) => {
    return ( 
        <div>
            {cat.map((item, index) => {
                return (
                    <>
                        <p key={index}>{item.id}</p>
                        <img src={item.url} alt="random" />
                    </>
                )
            })}
        </div>
     );
}
 
export default Home;