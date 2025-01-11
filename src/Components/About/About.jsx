import React, { forwardRef } from 'react';
import './About.css';
import { assets } from '../../assets/assets';

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="about-container">
      <h1>About Us</h1>
      <div className="underline"></div>

      <div className="features">
        <div className="box1">
          <div className="text">
            <h2>Plan Trips from Scratch</h2>
            <p>
              Start with an idea and let us turn it into reality. From choosing
              your destination to booking transportation and accommodations, we
              make it easy for you.
            </p>
          </div>
          <div className="pic">
            <img src={assets.about1} alt="Feature 1" />
          </div>
        </div>

        <div className="box1">
          <div className="pic">
            <img src={assets.about2} alt="Feature 2" />
          </div>
          <div className="text">
            <h2>Budget-Friendly Planning</h2>
            <p>
              Whether you're splurging on luxury or sticking to a budget, we help
              you plan the perfect trip without breaking the bank. Get recommendations
              based on your preferences and budget limits.
            </p>
          </div>
        </div>

        <div className="box1">
          <div className="text">
            <h2>Customized Itineraries</h2>
            <p>
              We create personalized itineraries based on your preferences and must-see
              locations, ensuring that you get the most out of your trip while enjoying
              stress-free planning.
            </p>
          </div>
          <div className="pic">
            <img src={assets.about3} alt="Feature 3" />
          </div>
        </div>

        <div className="box1">
          <div className="pic">
            <img src={assets.about4} alt="Feature 4" />
          </div>
          <div className="text">
            <h2>Seamless Booking</h2>
            <p>
              WonderPlan lets you book everything in one place—flights, hotels,
              car rentals, and activities—all seamlessly integrated into your plan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
