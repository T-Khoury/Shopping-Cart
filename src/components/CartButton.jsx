import carticon from "../assets/shopping_cart.svg"

const CartButton = ({ quantity, handleModalButton }) => {

    return (
        <>
            <button className="cart-button" onClick={handleModalButton}>
                <img src={carticon} alt=""/>
                <p className="cart-count">{quantity}</p>
            </button>
        </>
    )
}

export default CartButton