import { genres, sorted } from "../assets/viewData"

const SideBar = ({ setView }) => {

    const genreList = genres.map(genre =>
        <li
        key={genre.slug}
        >
            <a
            href="#"
            id={genre.slug}
            onClick={handleGenreChange}
            >
                {genre.name}
            </a>
        </li>
    )
    const sortedList = sorted.map(view => 
        <li
        key={view.slug}
        >
            <a
            href="#"
            id={view.slug}
            onClick={handleSortChange}
            >
                {view.name}
            </a>
        </li>
    )
    function handleGenreChange(e) {
        console.log(e.target.id)
        setView({ mode: "genre", type: e.target.id})
    }
    function handleSortChange(e) {
        setView({ mode: "sorted", type: e.target.id})
    }
    
    return (
        <div className="shop-side-nav">
            <div className="side-nav-top">
                <h3>Sort</h3>
                <ul className="sorting-list">{sortedList}</ul>
            </div>
            <div className="side-nav-bottom">
                <h3>Genres</h3>
                <ul className="genre-list">{genreList}</ul>
            </div>
        </div>
    )
}

export default SideBar