import React from 'react'
import './Header.css'
const Header = () => {

  const scrollToMenu = () => {
    document.getElementById('food-Display').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    {/* <div className="video-background-container">
      <video width="100%" height="100%" autoPlay loop muted>
        <source src="/EventKaroIntro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div> */}
    <div className='header'>
        <div className="header-contents">
            <h2>order ur favourite Snack here</h2>
            <p>Enjoy a world of delicious snacks delivered straight to your door,anytime you crave.</p>
            <button onClick={scrollToMenu}> View Menu</button>
        </div>
    </div>
    </>
  )
}

export default Header