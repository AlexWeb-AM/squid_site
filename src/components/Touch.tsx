import React from 'react'

const Touch = () => {
  return (
    <div className='touch_div'>
      <div className="container">
        <div className='globus_div'>
            <img src="images/globus.png" alt="" />
        </div>
        <div className='form'>
            <h1>Get In Touch</h1>
            <p>A good design is not only aesthetically pleasing, but <br /> also functional. It should be able to solve the problem </p>
            <form>
                <input type="text" className='email' placeholder='Your Email' />
                <input type="text" className='name' placeholder='Your Name' />
                <input type="text" className='message' placeholder='Your Message' />
                <button className='button_gradient'>Get In Touch</button>
            </form>
        </div>
      </div>    
    </div>
  )
}

export default Touch
