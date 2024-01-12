import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../App.css'


function App() {
  
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
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer></footer>
    </div>
  )
}

export default App
