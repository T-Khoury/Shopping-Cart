import CartModalGameCard from "./CartModalGameCard";

const CartModal = ({ isOpen, setCartModalOpen, cartItems, setCartItems }) => {
    console.log(isOpen);
    let cart = cartItems.map(game =>
        <CartModalGameCard
            id={game.id}
            key={game.key}
            name={game.name}
            image={game.image}
            quantity={game.quantity}
            price={`$${Number(game.price.slice(1)) * game.quantity}`}
            cartItems={cartItems}
            setCartItems={setCartItems}
        />
    )
    
    function handleClick(e) {
        if (e.target.className === "cart-modal") {
            setCartModalOpen(false)
        }
        
    }
    if (!isOpen) {
        return null
    }
    
    return (
        <div className="cart-modal" onClick={handleClick}>
            <div className="cart-modal-content">
                <p>Shopping Cart</p>
                <div className="cart-items">
                    {cart}
                </div>
            </div>
        </div>
    )
}


export default CartModal