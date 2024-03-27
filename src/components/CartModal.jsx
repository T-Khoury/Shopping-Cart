import CartModalGameCard from "./CartModalGameCard";

const CartModal = ({ isOpen, setCartModalOpen, cartItems, setCartItems }) => {
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

    
    const cartPrices = cartItems.map((item) => {
        return Number(item.price.slice(1)) * item.quantity;
    })
   

    const cartPrice = cartItems.length > 0 ? cartPrices.reduce((sum, a) => sum + a, 0).toFixed(2) : 0;


    function handleClick(e) {
        if (e.target.className === "cart-modal") {
            setCartModalOpen(false)
            let body = document.querySelector("body");
            body.classList.toggle("overflow-hidden");
        }
        
    }
    if (!isOpen) {
        return null
    }
    
    return (
        <div className="cart-modal" onClick={handleClick}>
            <div className="cart-modal-content">
                <p className="cart-title">Cart</p>
                <div className="cart-items">
                    {cart}
                </div>
                <button className="cart-checkout-button">Checkout {cartPrice}</button>
            </div>
        </div>
    )
}


export default CartModal