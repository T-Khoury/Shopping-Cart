const Card = ({ id, name, image, price }) => {

    return (
        <div
        className="gameCard"
        onClick={() => console.log('hello')}
        id={id}
        >
            <img src={image}/>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
}

export default Card