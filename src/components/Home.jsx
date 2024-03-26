import { Link } from "react-router-dom"

const Home = () => {


    return (
        <div className="home-container">
            <div className="home-wrapper">
                <h1 className="home-title">Game Shop</h1>
                <p className="home-description">Your <span className="home-description-span">one-stop shop</span> for videogames</p>
                <Link to={'/shop'}><button className="home-browse-button">Browse Collection</button></Link>
            </div>
        </div>
    )
}


export default Home