
import React, { useEffect, useState } from 'react';
import "./Footer.css";
import MapComponent from "../GoogleMap/GoogleMap";

const Footer = () => {
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);
  
  return (
    <>
      <div className="container mt-4">
        <div className="row d-flex  ">
          <div className="col-md-4 ps-3 mb-4">
          <h3>Location</h3>
          <MapComponent location={location} />
          </div>
          <div className="col-md-4 ps-3 mb-4">
            <h3>UPCOMING PRODUCTS</h3>
            <marquee
              behavior="scroll"
              direction="up"
              scrollamount="4"
              className="marquee-set"
            >
              <ul id="blog-widget" className="ps-0">
                <li>Anti Spatter Spray</li>
                <li>CR-90</li>
                <li>Nozzel Gel</li>
                <li>Treadmill Belt Lubricant</li>
                <li>Silicon Spray</li>
                <li>Rust Removal Spray</li>
                <li>Soldering Flux</li>
                <li>Paint hardener</li>
                <li>Grass cutter</li>
                <li>Glass shiner</li>
                <li>Paint Remover</li>
                <li>Fire Proof Coating for cloth</li>
                <li>Car Coolant </li>
                <li>Battery Terminal coating</li>
                <li>Teflon Spray</li>
                <li>Multi Purpose Cleaner</li>
              </ul>
            </marquee>
          </div>
          <div className="col-md-4 ps-3 mb-4">
            <h3>GET IN TOUCH WITH US</h3>
            <ul id="contact-widget" className="ps-0">
              <li className="corp-address">
                B1/104, Unity Gulshan-e-Burhani Apartments, Bharti Park, Mira
                Road(East) - 401107
              </li>
              <li className="address">
                Address: Gala No. A2, Shivam Udyog, Plot No. 12 &amp; 13, S. No.
                42/1, Gholavira Village, Nandore Road, Palghar (East) - 401 404.
              </li>
              <li className="phone">Phone: +91 9619888742, +91 9503671271</li>
              <li className="email">
                E-mail:{" "}
                <a href="mailto:info@thecreators.in">info@thecreators.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="bottomfooter">
        <div className="row">
          <div className="col-sm-6">
            <p>
              Copyright © 2016-2019 - Creators Company. All Rights
              ReservedFacebookLinkedinTwitter
            </p>
            <p>Designed by AAJ CreationS</p>
          </div>
          <div className="col-sm-6">
            <ul className=" d-flex justify-content-md-end gap-3 ps-0 mt-md-0 mt-3 social-links">
              <li>
                <a href="#" className='social-set'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className='social-set'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className='social-set'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15" />
                  </svg>
                </a>
              </li>
            
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
