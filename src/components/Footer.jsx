import React from 'react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer'>
            <div className='footer-left'>
            <Button className='footer-button1'>Buy now  <FontAwesomeIcon className='arrow' icon={faCircleArrowRight} /></Button>
                <div className='footer-left-div'>
                {/* <Button className='footer-button'>Buy now</Button> */}
                <div className='footer-left1'>
                    <h5>Links</h5>
                  <div className='footer-ul'>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Quick tour</p>
                    <p>Register</p>
                  </div>  
                  
                </div>
                <div className='footer-left2'>
                <h5>Company</h5>
                  <div className='footer-ul'>
                    <p>Terms & Conditions</p>
                    <p>Privacy Privacy</p>
                    <p>Contacts</p>
                    
                  </div>
                </div>
                </div>
              
            </div>
            <div className='footer-right'>
              <h3>Place an order</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores?</p>
              <Button className='footer-button'>Buy now   <FontAwesomeIcon className='arrow' icon={faCircleArrowRight} /></Button>
            </div>
            
        </div>
        <div className='lastdiv'>
          <p>Designed and developed by Oluleye Stephen @2023 copyrightreservred. All right reserved   </p>
        </div>
    </div>
  )
}

export default Footer