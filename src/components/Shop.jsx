import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Card from "./GameCard";
import SideBar from "./ShopSideBar";

const key = "90cc2d37097041038ea82cf6fc69d6d5";

function getGamePrice(var1, var2) {
    let x = var1 / var2;
    let price = (Math.ceil((x / 5) * 5) - 0.01)
    if (price < 0 || Number.isNaN(price)){
        price = 15.99
    }
    return `$${price}`
}

const useData = (view) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let url;
        if (view.mode === 'genre') {
            url = `https://api.rawg.io/api/games?genres=${view.type}&key=${key}`
        } else if (view.mode === 'sorted') {
            switch (view.type) {
                case 'top-rated':
                    url = `https://api.rawg.io/api/games?ordering=-metacritic&key=${key}`;
                    break;
                case 'popular':
                    url = `https://api.rawg.io/api/games?ordering=-added&key=${key}`;
                    break;
                case 'upcoming':
                    url = `https://api.rawg.io/api/games?dates=2024-02-01,2024-12-31&key=${key}`;
                    break;
            } 
        } else {
            url = `https://api.rawg.io/api/games?search=${view.type}&key=${key}`
        }
        
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
    }, [view]);

    return { data, error, loading }
}

const Shop = () => {
    const [view, setView] = useState({ mode: "sorted", type: "upcoming"});
    const { data, error, loading } = useData(view);
    const [cartItems, setCartItems] = useOutletContext();


    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>

    console.log(cartItems)

    const cards = data.results.map(game =>
        <Card
            className="card"
            key={game.id}
            id={game.id}
            name={game.name}
            image={game.background_image}
            price={getGamePrice(game.metacritic, game.rating)}
            cartItems={cartItems}
            setCartItems={setCartItems}
        />
    )
    
    return (
    <> 
        <div className="shop">
            <h2>Hello</h2>
            <form onSubmit={e => {
                e.preventDefault();
                setView({ mode: "search", type: e.target[0].value})
                e.target.reset()
            }}>
                <input type="text" />
                <button>Search</button>
            </form>
            <SideBar setView={setView}/>
            <div className="cards">
                {cards}
            </div>
        </div>
    </>
    )

}

export default Shop

