import React from 'react';
import videoBackground from '../../../assets/bg/BGvid.mp4';
import './HomeSlider.css';
import { Link } from 'react-router-dom';

function HomeSlider() {
  return (
    <>
      <div className="video-background">
        <video autoPlay muted loop id="video" className="video-element">
          <source src={videoBackground} type="video/mp4" />
        </video>
        <div class="Link-container">
          <Link to="/register" className="link1">
            Register
          </Link>
          <span className="link-spacing"></span>
          <Link to="/login1" className="link1">
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomeSlider;