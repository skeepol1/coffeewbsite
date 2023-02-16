import React from 'react'
import blogImage1 from '../Asset/Rectangle1.png'
import blogImage2 from '../Asset/Rectangle2.png'
import blogImage3 from '../Asset/Rectangle3.png'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'

const Blog = () => {
  return (
    <div className='blog'>
      <div className='blog-head'>
        <h3>Our Blog</h3>
        <p>STAY UPDATED WITH OUR NEWSLETTER </p>
      </div> 
      <div className='blog-border'>
        <div className='blog-box'>
            <img className='img' src={blogImage1} alt="" />
            <h4> Should I drink coffee in the morning?</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed 
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
            <Button className='blog-button'> Read More  <FontAwesomeIcon className='arrow' icon={faCircleArrowRight} /></Button>
        </div>
        <div className='blog-box'>
            <img className='img' src={blogImage2} alt="" />
            <h4>Health benefits of coffee</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed 
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
              <Button className='blog-button'> Read More  <FontAwesomeIcon className='arrow' icon={faCircleArrowRight} /></Button>
        </div>
        <div className='blog-box'>
          <img className='img' src={blogImage3} alt="" />
          <h4>How coffee is made</h4>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed 
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
              <Button className='blog-button'> Read More  <FontAwesomeIcon className='arrow' icon={faCircleArrowRight} /></Button>
        </div>
      </div>
    </div>
  )
}

export default Blog