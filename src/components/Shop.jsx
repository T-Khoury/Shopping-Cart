import { useEffect, useState } from "react";
import Card from "./GameCard";

const key = "90cc2d37097041038ea82cf6fc69d6d5";
const genres = ["Action", "Indie", "Adventure", "RPG", "Strategy", "Shooter", "Casual", "Simulation", "Puzzle", "Arcade", "Platformer", "Massively Multiplayer", "Racing", "Sports", "Fighting", "Family", "Board Games", "Educational", "Card"];

function getGamePrice(var1, var2) {
    let x = var1 / var2;
    return `$${(Math.ceil((x / 5) * 5) - 0.01)}`
}

const useData = (genre) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?&genres=${genre}&key=${key}`, { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((response) => setData(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [genre]);

    return { data, error, loading }
}

const Shop = () => {
    const [view, setView] = useState({ mode: "genre", type: "action"});
    const { data, error, loading } = useData(view.type);


    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>

    console.log(data)

    function getCards() {
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
        return cards
    }
    return (
    <> 
        <h2>Hello</h2>
        <form onSubmit={e => {
            e.preventDefault();
            setView({ mode: "genre", type: e.target[0].value})
            e.target.reset()
        }}>
            <input type="text" />
            <button>Search</button>
        </form>
        <div className="cards">
            {getCards()}
        </div>
    </>
    )

}

export default Shop

