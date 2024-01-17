
const CartModalGameCard = ({ id, name, image, price, setCardItems }) => {

    return (
        <div className="cart-game-card">
            <img src={image} />
            <h4>{name}</h4>
            <p>{price}</p>
            <button>X</button>
        </div>
    )
}

export default CartModalGameCard