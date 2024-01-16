import { useEffect, useState } from "react";
import Card from "./GameCard";
import SideBar from "./ShopSideBar";

const key = "90cc2d37097041038ea82cf6fc69d6d5";

function getGamePrice(var1, var2) {
    let x = var1 / var2;
    return `$${(Math.ceil((x / 5) * 5) - 0.01)}`
}

const useData = (view) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let url;
        if (view.mode === 'genre') {
            url = `https://api.rawg.io/api/games?genres=${view.type}&key=${key}`
        } else {
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


    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>

    console.log(data)

    const cards = data.results.map(game =>
        <Card
            className="card"
            key={game.id}
            id={game.id}
            name={game.name}
            image={game.background_image}
            price={getGamePrice(game.metacritic, game.rating)}
        />
    )
    
    return (
    <> 
        <h2>Hello</h2>
        <form onSubmit={e => {
            e.preventDefault();
            console.log(e.target[0].value)
            setView({ mode: "genre", type: e.target[0].value})
            e.target.reset()
        }}>
            <input type="text" />
            <button>Search</button>
        </form>
        <SideBar setView={setView}/>
        <div className="cards">
            {cards}
        </div>
    </>
    )

}

export default Shop

