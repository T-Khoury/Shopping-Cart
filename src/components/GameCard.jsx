const Card = ({ id, name, image, price, setCartItems, cartItems }) => {

    function handleCartButton() {
        let newCart = [...cartItems];

        if (newCart.some(item => item.id === id)) {
            let item = newCart.find(item => item.id === id)
            item.quantity += 1;
            console.log(newCart)
        } else {
            newCart.push({
                name: name,
                image: image,
                price: price,
                id: id,
                key: id,
                quantity: 1
            })
        }
        
        setCartItems(newCart)
    }

    return (
        <div
        className="gameCard"
        id={id}
        >
            <img src={image}/>
            <h4>{name}</h4>
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