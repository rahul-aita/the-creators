import { useState, useEffect } from "react";
import {
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
} from "../../pictures/pictures";
import "./Slider.css";

const Slider = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={slide1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={slide2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={slide3} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={slide4} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={slide5} className="d-block w-100" alt="..." />
                </div>
              </div>
              {/* <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
