import { genres, sorted } from "../assets/viewData"

const SideBar = ({ setView }) => {

    const genreList = genres.map(genre =>
        <a
        href="#"
        key={genre.slug}
        id={genre.slug}
        onClick={handleGenreChange}
        >
            {genre.name}
        </a>
    )
    const sortedList = sorted.map(view => 
        <a
        href="#"
        key={view.slug}
        id={view.slug}
        onClick={handleSortChange}
        >
            {view.name}
        </a>
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
                {sortedList}
            </div>
            <div className="side-nav-bottom">
                <h3>Genres</h3>
                <ul>{genreList}</ul>
            </div>
        </div>
    )
}

export default SideBar