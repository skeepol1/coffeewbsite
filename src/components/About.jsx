import React from 'react'
import aboutImage1 from '../Asset/coffeebean1.png'
import aboutImage2 from '../Asset/coffecupsaucer.png'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div className='about'>
      <div className='about-head'>
        <h2>About Us</h2>
        <p> <span className='border'></span> STAY UPDATED WITH OUR NEWSLETTER</p>
      </div>
      <div className='about1'>
        <div className='about1-left'>
          <h3>Roasted coffee bean</h3>
          <p>Cultivating the land and nourishing our communities, one seed at a time. 
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
             diam nonummy nibh euismod tincidunt ut 
            laoreet dolore  magna aliquam erat volutpat. 
            Ut wisi enim ad minim veniam, quis nostrud.
          </p>
          <Button className='about-button'> Learn more  <FontAwesomeIcon className='arrow' icon={faCircleArrowRight} /></Button>
        </div>
        <div className='about1-right'>
          <img className='aboutimagediv' src={aboutImage1} alt="" />
        </div>
      </div>
      <div className='about2'>
        <div className='about2-left'>
         
         <img className='about2-image' src={aboutImage2} alt="" />
         
        </div>
        <div className='about2-right'>
          <h3>We sell in bulk </h3>
          <p>Cultivating the land and nourishing our communities, one seed at 
           a time. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod 
           tincidunt ut laoreet dolore
           magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>
           <Button className='about-button-2'> Learn more <FontAwesomeIcon className='arrow' icon={faCircleArrowRight} /></Button>
        </div>
      </div>
     
        
    </div>
  )
}

export default About