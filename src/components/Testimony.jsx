import React from 'react'
import testimonyImage from '../Asset/Ellipse10.png'
import quoteImage from '../Asset/quote.png'

const Testimony = () => {
  return (
    <div className='testimony-container'>
      <div className='testimony'>
          <div className='testimony-left'>
            <h2>Testimonials</h2>
            <div className='testimony-box1'>
              <div className='testimony-img'>
                <div className='testimony-flex'>
                <img  src={testimonyImage} alt="" />
                <h6><b>James Doe</b> <br />BMX Stunts Biker </h6>
                {/* <img src={quoteImage} alt="" />  */}
                {/* <div className='name'>
                
                </div> */}

                </div>
                <p>I couldn't be happier with my purchase. The staff was incredibly helpful and patient as 
                  I tried out different models, and they even helped me
                   get a great deal on the one I ultimately chose
                </p>
              </div>
            </div>
          </div>
          <div className='testimony-right'>
          <div className='testinomy-box2'>
          <div className='testimony-img'>
              <div className='name'>
                <div className='testimony-flex'>
                   <img src={testimonyImage} alt="" />
                    <h6><b>James Doe</b> <br />BMX Stunts Biker </h6>
                </div>
                <img src={quoteImage} alt="" />               
                 
              </div>
                <p>  The mechanics were very knowledgeable and efficient, and the
                  y had my bike up and running in no time. I'll definitely be coming back for all my future bike needs.
                </p>
            </div>
          
            </div>
          <div className='testimony-bottom'>
            <div className='testimony-img'>
              <div className='name'>
                <div className='testimony-flex'>
                   <img src={testimonyImage} alt="" />
                    <h6><b>James Doe</b> <br />BMX Stunts Biker </h6>
                </div>
                <img src={quoteImage} alt="" />               
                 
              </div>
                <p> I've been loving my new bike and I'm so glad I went with Roadactive
                </p>
            </div>

          </div>

          </div>
      </div>
    </div>
  )
}

export default Testimony