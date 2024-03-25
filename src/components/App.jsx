import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import CartModal from './CartModal';
import CartButton from './CartButton';
import '../App.css'


function App() {
  
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  

  function handleModalButton() {
    let status = !cartModalOpen;
    setCartModalOpen(status);
    let body = document.querySelector("body")
    body.classList.toggle("overflow-hidden")
  }

  function handleCartButton(name, image, price, id) {
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
    <div className='container'>
      <nav>
        <div className="site-title">
          <h1 className='site-name'>Game Stuff</h1>
        </div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            {/*<Link to="/cart">Cart</Link>*/}
            <CartButton quantity={cartItems.length} handleModalButton={handleModalButton}/>
          </li>
        </ul>
      </nav>
      <CartModal
      isOpen={cartModalOpen}
      setCartModalOpen={setCartModalOpen}
      setCartItems={setCartItems}
      cartItems={cartItems}
      />
      <Outlet context={{ cartItems, setCartItems, handleCartButton }}/>
      <footer></footer>
    </div>
  )
}

export default App
