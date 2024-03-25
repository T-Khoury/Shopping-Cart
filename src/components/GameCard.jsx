import { Link } from "react-router-dom";


const Card = ({ id, name, image, price, setCartItems, cartItems, handleCartButton }) => {

    // function handleCartButton() {
    //     let newCart = [...cartItems];

    //     if (newCart.some(item => item.id === id)) {
    //         let item = newCart.find(item => item.id === id)
    //         item.quantity += 1;
    //         console.log(newCart)
    //     } else {
    //         newCart.push({
    //             name: name,
    //             image: image,
    //             price: price,
    //             id: id,
    //             key: id,
    //             quantity: 1
    //         })
    //     }
        
    //     setCartItems(newCart)
    // }

    return (
        <div
        className="gameCard"
        id={id}
        >
            <Link to={`/product/${id}`} >
                <img src={image}/>
                <h4 className="card-title">{name}</h4>
            </Link>
            <div className="price-details">
                <p>{price}</p>
                <button onClick={() => handleCartButton(name, image, price, id)}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Card