import React from 'react'
import logooImage1 from '../Asset/Vector.png'

const Header = () => {
  return (
    <div className='header'>
        
        <div className='header-logo'>
            <img className='logoImage' src={logooImage1} alt="Loading" />
            <h2>Eeffoc</h2>
            
        </div>

        <nav className='nav-list1'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Scooters</li>
                <li>Quick tour</li>
            </ul>
        </nav>
        
    </div>
  )
}

export default Header
