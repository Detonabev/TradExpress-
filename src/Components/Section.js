import React from 'react'
import { useState } from 'react'
import '../Styles/Section.css'
import payment from './Image/easymode.png'
import financial from './Image/financial.png'
import investment from './Image/investment.png'

const Section = () => {
    const [less,setLess] = useState(false)
  return (
    <div className=''>
        <p className='crypto-head'>Why do People get involved with Cryptocurrencies?</p>
        <br />
        {less && <Moreinfo/>}
        <section className='see-btn'><button onClick={()=> setLess(!less)} className='less-btn' > {less ? 'See Less' : 'See More'}  </button>
        </section>
    </div>
  )
}
// className='less-btn'
function Moreinfo(){
    return(
        <div className='reasons'>
        <div className='payment'>
            <img className='payment-img' src={payment} alt="" />
            <p className='payment-mode'>Easy Mode of Payment</p>
            <p className='payment-text'>People can now easily send and receive money from anywhere in the world to purchase goods and pay for services.</p>
        </div>
        <div className='financial'>
            <img className='financial-img' src={financial} alt="" />
            <p className='financial-mode'>Financial Freedom</p>
            <p className='financial-text'>Just like the internet no single entity controls the Crypto network which provides users transparency and privacy, which puts you in absolute control of your money.</p>
        </div>
        <div className='investment'>
            <img className='investment-img' src={investment} alt="" />
            <p className='investment-mode'>Investment</p>
            <p className='investment-text'>The constant demand as made Cryptocurrecies a Digital Gold used for alternative store of wealth on long term investments.</p>
        </div>
    </div>
    )
    
}

export default Section