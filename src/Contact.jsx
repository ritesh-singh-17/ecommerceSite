import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Contact = () => {

  const {isAuthenticated, user} = useAuth0();

  return (
    <>
      <div className="title">
        <h1>Contact Section</h1>
      </div>
      <div className="contactSection">
        <form className='contactForm' action="" method='POST'>
          <input
            type="text"
            placeholder='Name'
            name='name'
            value={isAuthenticated ? user.name : ""}
            required
            autoComplete='off'
          />
          <input
            type="email"
            placeholder='Email'
            name='Email'
            value={isAuthenticated ? user.email : ""}
            required
            autoComplete='off'
          />
          <textarea
            placeholder="Enter your message"
            cols="30"
            rows="10"
            required
            autoComplete='off'
            name="Message"
          ></textarea>
          <input className='btn btn-primary' type="submit" value="Send"/>
        </form>
      </div>
    </>
  )
}

export default Contact
