const Card = ({ id, name, image, price, setCartItems, cartItems }) => {

    function handleCartButton() {
        let newCart = cartItems;
        newCart.push({
            name: name,
            image: image,
            price: price,
            id: id,
            key: id
        })
        setCartItems(newCart)
    }

    return (
        <div
        className="gameCard"
        id={id}
        >
            <img src={image}/>
            <h3>{name}</h3>
            <p>{price}</p>
            <button
            onClick={handleCartButton}
            >
                Add to Cart
            </button>
        </div>
    )
}

export default Card