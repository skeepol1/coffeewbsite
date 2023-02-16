import React from 'react'
import Button from './Button'
import productImage1 from '../Asset/whitesugar.png'
import productImage2 from '../Asset/image1.png'
import productImage3 from '../Asset/coffesaucerbrown.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleArrowRight, faCirclePlus} from '@fortawesome/free-solid-svg-icons'

const Product = () => {
  return (
    <div className='products'>
      <div className='product-container'>
      <div className='product-left'>
        <h2>From our very best</h2>
        <p>SATISFY YOUR CRAVINGS</p>
        <Button className='product-button'> Buy now  <FontAwesomeIcon className='arrow' icon={faCircleArrowRight} /></Button>
      </div>
      <div className='product-right'>
        <div className='product-boxes'>
          <img className='productimage' src={productImage1} alt=" image-loading" />
          <div className='product-tag'>
            <h6>espresso <br /> $12.00</h6>

            <p><FontAwesomeIcon icon={faCirclePlus} /></p>
          </div>
        </div>
        <div className='product-boxes'>
        <img className='productimage' src={productImage2} alt=" image-loading" />
          <div className='product-tag'>
            <h6>espresso <br /> $12.00</h6>

            <p><FontAwesomeIcon icon={faCirclePlus} /></p>
          </div>
        </div>
        <div className='product-boxes'>
        <img className='productimage3' src={productImage3} alt=" image-loading" />
          <div className='product-tag'>
            <h6>espresso <br /> $12.00</h6>

            <p><FontAwesomeIcon icon={faCirclePlus} /></p>
          </div>
        </div>
      </div>
       
      </div>
      
    </div>
  )
}

export default Product