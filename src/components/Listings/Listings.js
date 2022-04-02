import React from "react";
import houseOutside1 from "../../assets/house-outside-3.jpeg";
import houseInside1 from "../../assets/house-inside-1.jpeg";
import houseInside2 from "../../assets/house-inside-2.jpeg";
import houseLiving1 from "../../assets/house-living-1.jpeg";
import houseLiving2 from "../../assets/house-living-2.jpeg";

import houseOutside2 from '../../assets/house-outside-2.jpeg'
import houseOutside3 from '../../assets/house-outside-1.jpeg'
import houseInside3 from '../../assets/house-inside-3.jpeg'
import houseLiving3 from '../../assets/house-living-3.jpeg'
import houseLiving4 from '../../assets/hero-home.jpeg'

import "./Listings.css";

export default function Listings() {
  return (
    <div className="listings">
      <hr />
      <h1 className="title-text">Top Listings</h1>
      <p className="title-text">Selected listings by City, State, & Zip based on views</p>
      <div className="container">
        <img className="span-3 image-grid-row-2" src={houseOutside1} alt="listings of properties" />
        <img src={houseInside1} alt="listings of properties" />
        <img src={houseInside2} alt="listings of properties" />
        <img src={houseLiving1} alt="listings of properties" />
        <img src={houseLiving2} alt="listings of properties" />
        <div className="span-3 img-details">
          <div className="top">
            <h2>123 Acme St. Seattle, WA</h2>
            <h3>Listing Price:</h3>
            <p className="price">$699,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedrooms:</p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms:</p>
                <p>7</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Square Feet:</p>
                <p>3,150 sq ft.</p>
              </div>
              <div className="info">
                <p className="bold">Est Payment:</p>
                <p>4,100/mo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="span-2 right-img-details">
          <p>
            A beautiful modern home with a brand new kitchen located in the
            heart of Seattle in a nice preimum neighborhood with a great school
            district
          </p>
          <button className="btn">View Listing</button>
        </div>
      </div>
        {/* Section  */}
    </div>
  );
}
