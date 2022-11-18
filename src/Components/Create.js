import React from 'react'
import '../Styles/Create.css'
import appstore from './Image/appstore.png'
import playstore from './Image/Groupandroid.png'

const Customer = () => {
  return (
    <div className='created'>
     <p id='create-head'>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
     <p id='create-text'>Create your account for free and start trading today!!!</p>
     <button className='create-btn' >Get Started</button>
     <div className='images'>
     <img src={appstore} alt="" />
     <img className='playstore' src={playstore} alt="" />
     </div>
    </div>
  )
}

export default Customer