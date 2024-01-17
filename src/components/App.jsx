import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import CartModal from './CartModal';
import '../App.css'


function App() {
  
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function handleModalButton() {
    let status = !cartModalOpen;
    setCartModalOpen(status);
  }


  return (
    <div className='container'>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            {/*<Link to="/cart">Cart</Link>*/}
            <button
            onClick={handleModalButton}
            >Cart</button>
          </li>
        </ul>
      </nav>
      <CartModal
      isOpen={cartModalOpen}
      setCartItems={setCartItems}
      cartItems={cartItems}
      />
      <Outlet context={[cartItems, setCartItems]}/>
      <footer></footer>
    </div>
  )
}

export default App
