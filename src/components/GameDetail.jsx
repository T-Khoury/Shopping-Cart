import { useOutletContext, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGamePrice } from "./Shop";

const key = "90cc2d37097041038ea82cf6fc69d6d5";


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
    
    console.log(cartItems);


    return (
        <div className="game-detail-container">
            <h1>{name}</h1>
            <img src={image} />
            <p>{data.description.slice(3, -4)}</p>
            <div className="price-container">
                <p>{price}</p>
                <button onClick={() => handleCartButton(name, image, price, id)}>
                Add to Cart
            </button>
            </div>
        </div>
    )
}

export default GamePage