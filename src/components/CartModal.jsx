import CartModalGameCard from "./CartModalGameCard";

const CartModal = ({ isOpen, cartItems, setCartItems }) => {
    console.log(isOpen);

    if (!isOpen) {
        return null
    }

    let cart = cartItems.map(game =>
        <CartModalGameCard
            id={game.id}
            key={game.key}
            name={game.name}
            image={game.image}
            price={game.price}
            setCartItems={setCartItems}
        />
    )
    return (
        <div>
            <p>Hello</p>
            <div>
                {cart}
            </div>
        </div>
    )
}


export default CartModal