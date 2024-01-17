
const CartModalGameCard = ({ id, name, image, price, cartItems, setCartItems }) => {
    
    function handleDeleteButton() {

        let cart = [...cartItems];
        let newCart = cart.filter((item) => item.id !== id)
        
        setCartItems(newCart)
        

    }
    return (
        <div className="cart-game-card">
            <img src={image} />
            <h4>{name}</h4>
            <p>{price}</p>
            <button onClick={handleDeleteButton}>X</button>
        </div>
    )
}

export default CartModalGameCard