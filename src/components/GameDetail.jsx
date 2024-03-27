import { useOutletContext, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGamePrice } from "./Shop";

const key = "90cc2d37097041038ea82cf6fc69d6d5";

function removeTags(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
 
    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/ig, '');
}


const useData = (gameID) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let url = `https://api.rawg.io/api/games/${gameID}?&key=${key}`
        
        fetch(url, { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((response) => setData(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [gameID]);

    return { data, error, loading }
}

const GamePage = () => {
    const { id } = useParams();
    const { data, error, loading } = useData(id);
    const { cartItems, setCartItems, handleCartButton } = useOutletContext();




    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>

    const name = data.name;
    const image = data.background_image;
    const price = getGamePrice(data.metacritic, data.rating);
    const releaseData = data.released;
    const developer = data.developers[0].name;
    const publisher = data.publishers[0].name;
    const platforms = data.platforms.map((platform) => platform.platform.name)
    



    return (
        <div className="game-detail-container">
            <h1>{name}</h1>
            <div className="game-details">
                <div className="game-details-left">
                    <img className="game-detail-picture" src={image} />
                    <p>{removeTags(data.description)}</p>
                </div>
                <div className="game-details-right">
                    <p className="game-details-price">{price}</p>
                    <button className="game-detail-buynow-button">Buy Now</button>
                    <button className="game-detail-cart-button" onClick={() => handleCartButton(name, image, price, id)}>
                    Add to Cart
                    </button>
                    <div className="more-info-container">
                        <div className="detail-container">
                            <span className="detail-category">Developer</span>
                            <span className="detail-info">{developer}</span>
                        </div>
                        <div className="detail-container">
                            <span className="detail-category">Publisher</span>
                            <span className="detail-info">{publisher}</span>
                        </div>
                        <div className="detail-container">
                            <span className="detail-category">Release Date</span>
                            <span className="detail-info">{releaseData}</span>
                        </div>
                        <div className="detail-container">
                            <span className="detail-category">Platform</span>
                            <span className="detail-info">{platforms}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamePage