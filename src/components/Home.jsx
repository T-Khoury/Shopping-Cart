import { Link } from "react-router-dom"
import githubLogo from "../assets/github.svg"
import RAWGLogo from "../assets/RAWG.png"

const Home = () => {


    return (
        <div className="home-container">
            <div className="home-wrapper">
                <h1 className="home-title">Game Shop</h1>
                <p className="home-description">Your <span className="home-description-span">one-stop shop</span> for videogames</p>
                <Link to={'/shop'}><button className="home-browse-button">Browse Collection</button></Link>
            </div>
            <div className="site-credits">
                <a href="https://github.com/T-Khoury">
                    <img src={githubLogo} />
                    T-Khoury
                </a>
                <a href="https://rawg.io/apidocs">
                    <img src={RAWGLogo} />
                    RAWG API
                </a>
            </div>
        </div>
    )
}


export default Home