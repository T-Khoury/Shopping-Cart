
const CartButton = ({ quantity, handleModalButton }) => {

    return (
        <>
            <button onClick={handleModalButton}>{quantity}</button>
        </>
    )
}

export default CartButton