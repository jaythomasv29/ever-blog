import React from 'react'

import './Featured.css'

import homeOutside1 from '../../assets/house-outside-1.jpeg'
import homeOutside2 from '../../assets/house-outside-2.jpeg'
import homeOutside3 from '../../assets/house-outside-3.jpeg'

function Featured() {
  return (
    <div className="featured">
      <h1>Find Best Rated Properties</h1>
      <div>
        <p><span className="bold">All</span></p>
        <p>Commercial</p>
        <p>Residential</p>
        <p>Agricultural</p>
      </div>
      <div className="container">
        <img src={homeOutside1} alt="featured-home" />
        <img src={homeOutside2} alt="featured-home" />
        <img src={homeOutside3} alt="featured-home" />
      </div>
      <button className="btn">View All</button>
    </div>
  )
}

export default Featured