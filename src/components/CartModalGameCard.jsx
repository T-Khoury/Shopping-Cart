
const CartModalGameCard = ({ id, name, image, price, quantity, cartItems, setCartItems }) => {
    

    
    function handleDeleteButton() {

        let cart = [...cartItems];
        let newCart = cart.filter((item) => item.id !== id)
        
        setCartItems(newCart)
    
    }

    function handleQuantityChange(e) {

        setCartItems(cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: e.target.value}
            } else {
                return item;
            }
        }))
    }
    return (
        <div className="cart-game-card">
            <img src={image} />
            <button className="cart-card-button" onClick={handleDeleteButton}>X</button>
            <div className="card-details">
                <h4 className="card-title">{name}</h4>
                <div className="card-price-and-quantity">
                    <p>{price}</p>
                    <div className="card-quantity">
                        <label htmlFor="quantity">Quantity:</label>
                        <select
                        name="quantity"
                        id="quantity"
                        value={quantity}
                        onChange={handleQuantityChange}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartModalGameCard