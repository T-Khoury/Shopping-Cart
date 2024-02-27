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
  }


  return (
    <div className='container'>
      <nav>
        <div className="site-title">
          <h1>Game Stuff</h1>
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
      <Outlet context={[cartItems, setCartItems]}/>
      <footer></footer>
    </div>
  )
}

export default App
