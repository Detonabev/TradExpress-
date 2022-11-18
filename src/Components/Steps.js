import React from 'react'
import vector1 from './Image/emojione-monotone_keycap-1.png'
import vector2 from './Image/emojione-monotone_keycap-2.png'
import vector3 from './Image/emojione-monotone_keycap-3.png'
import Account from './Image/createmobile.png'
import Deposit from './Image/depositgirl.png'
import BuySell from './Image/buy_sellgirl.png'
import '../Styles/Steps.css'

const Steps = () => {
  return (
    <div className='steps'>
        <p className='heading'>Buy and Sell your Cryptocurrency in 3 simple steps</p>
        <div className='free-account'>
              
           <div className='account'>
           <p className='create'> <img src={vector1} alt="" /> Create a free Account</p>
           <p className='create-text'>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our <br /> easy process to set up your profile.</p>
           </div>
            <img className='account-img' src={Account} alt="" />
        </div>
       <div className=''>
            <div className='com-deposit'>
            <p className='deposit'> <img src={vector2} alt=""  /> Deposit</p>
            <p className='deposit-text'>Choose your preferred deposit option like bank transfer, credit/debit card <br /> or send digital asset directly to your wallet for easy funding/withdrawal.</p>
            </div>
            <img className='deposit-img' src={Deposit} alt="" />
            
      </div>
        <div>
         <div className='com-buysell'>
         <p className='buysell'> <img src={vector3} alt="" /> Buy/ Sell Crypto</p>
         <p className='buysell-text'>Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it <br /> in your wallet or send it easily to friends and family.</p>
         </div>
         <img className='buysell-img' src={BuySell} alt="" />
        </div>
    </div>
  )
}

export default Steps