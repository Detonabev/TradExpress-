import React from 'react'
import '../Styles/Footer.css'
import {TfiTwitter} from 'react-icons/tfi'
import {TbBrandTelegram} from 'react-icons/tb'
import {ImWhatsapp} from 'react-icons/im'
import {BsFacebook} from 'react-icons/bs'


const Footer = () => {
  return (
    <div>
        <div className='footer'>
        <div className='products'>
            <p  className='footer-text' >Products</p> 
            <a className='products-a' href="#top">Bitcoin</a> <br />
            <a className='products-a' href="#top">Alt</a> <br />
            <a className='products-a' href="#top">Fiat</a> <br />
            <a className='products-a' href="#top">Refill</a> <br />
            <a className='products-a' href="#top">P2P</a> 
        </div>

        <div className='learn'>
            <p className='footer-text'>Learn</p>
            <a className='learn-a' href="#top">Blog</a> <br />
            <a className='learn-a' href="#top">Help Center</a>
        </div>

        <div className='contact'>
            <p className='footer-text'>Contact</p>
            <a className='contact-a' href="#">hello@tradeexpress.com</a> <br />
            <a className='contact-a' href="#">support@tradeexpress.com</a> <br />
            <div className='icons'>
            <TfiTwitter/>
            <TbBrandTelegram/>
            <ImWhatsapp/>
            <BsFacebook/>
            </div>
        </div>

        <div className='company'>
            <p className='footer-text'>Company</p>
            <a className='company-a' href="#top">About Us</a><br />
            <a className='company-a' href="#top">Careers</a><br />
            <a className='company-a' href="#top">Rates</a><br />
            <a className='company-a' href="#top">Mobile</a>
        </div>

        <div className='legal'>
            <p className='footer-text'>Legal</p>
            <a className='legal-a' href="#top">Privacy Policy</a> <br />
            <a className='legal-a' href="#top">Anti-Money Laundering</a> <br />
            <a className='legal-a' href="#top">Terms and Conditions</a> <br />
        </div>
    </div>
    </div>
  )
}

export default Footer