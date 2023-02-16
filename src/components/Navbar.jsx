import React from 'react'
import Button from './Button'
import logoImage from '../Asset/Vector.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'

// import heroImage from '../Asset/coffee1.png'
// import Button from './Button'

const Navbar = () => {
  return (
    <div className='navbar'>      
      
      <div className='hero-left'>
          <div className='logo'>
            <img className='logoImage' src={logoImage} alt="Loading" />
            <h2>Eeffoc</h2>
        
          </div>
          <div className="black-cofe">
            <h1>Black Coffee </h1>
            <p>Take care of the project during its whole product life-сycle: from initial research 
              to concept creation to prototyping and usability testing.</p>
          </div>
            <Button className='nav-button'>Learn More   <FontAwesomeIcon className='arrow' icon={faCircleArrowRight} /></Button>
              

      </div>

      <div className='hero-right'>
        <div className="nav-list">
          <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Scooters</li>
              <li>Quick tour</li>
          </ul>
        </div>
           

          
        </div>
          
    </div>
  )
}

export default Navbar