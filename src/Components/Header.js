import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/Header.css'
import logo from './Image/Group 133.png'
import apple from './Image/Group 68@2x.png'
import google from './Image/Group 69.png'
import up from './Image/ArrowUp.png'
import down from './Image/ArrowDown.png'
import bgrc from './Image/Group 127.png'


const Header = () => {
    const [data, setData] = useState([])
    const url = 'https://api.coinlore.net/api/tickers/?start=0&limit=5'
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((rep) => setData(rep.data))
    })
    return (
        <div >
            <div className='first-page'>
                <Navbar expand="lg">
                    <Container>
                        <img src={logo} alt="" />
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#home" style={{ color: 'white' }}>Instant Buy/Sell</Nav.Link>
                                <Nav.Link href="#home" style={{ color: 'white' }}>Learn</Nav.Link>
                                <Nav.Link href="#link" className='login-button' >Login</Nav.Link>
                                <Nav.Link href="#link" className='get-started-button' >Get Started</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div className='container'>
                    <div className="text">
                        <p className='main-text'>Buy, sell and manage your <br /> Crypto on TradExpress</p>
                        <p className='sub-text'>Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN.</p>
                    </div>
                    <button className='start-button'>Get Started</button>
                    <div className='app-store'>
                        <img src={apple} alt="" />
                        <img className='google' src={google} alt="" />
                    </div>
                </div>
                <div className='header-image'>
                    <img src={bgrc} alt="" />
                </div>
            </div>


            <div className='coins'>
                {data.map((datum) => {
                    const { id, symbol, price_usd, percent_change_24h } = datum
                    return (
                        <div key={id}>
                            <p> {symbol}/NGN </p>
                            <p> {percent_change_24h} <img src={percent_change_24h > 0 ? up : down} alt="" /> </p>
                            <p> {price_usd} NGN </p> <hr />


                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default Header