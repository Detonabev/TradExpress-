import React from 'react'
import '../Styles/Review.css'
import Ireti from './Image/ireti.png'
import Bayo from './Image/bayo.png'
import Olagoke from './Image/olagoke.png'

const Review = () => {
  return (
    <div>
        <p className='review-head'>Customer's Review</p>
        <div className='review-img'>
           <img src={Ireti} alt="" />
           <img src={Bayo} alt="" />
           <img src={Olagoke} alt="" />
        </div>
    </div>
  )
}

export default Review