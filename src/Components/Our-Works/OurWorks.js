import { useEffect } from "react";
import { image1, image2, image3 } from "../../pictures/pictures";
import "./OurWorks.css";
const OurWorks = () => {
    useEffect(() => {
        jQuery("#carousel").owlCarousel({
            autoplay: true,
            rewind: true, /* use rewind if you don't want loop */
            margin: 20,
            /*
           animateOut: 'fadeOut',
           animateIn: 'fadeIn',
           */
            responsiveclassName: true,
            autoHeight: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },

                600: {
                    items: 3
                },

                1024: {
                    items: 3
                },

                1366: {
                    items: 3
                }
            }
        });
    })
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className=" col-md-12">
                        <h2>OUR WORKS</h2>
                    </div>
                    <div className="col-md-12  px-0">
                        <div className="owl-slider">
                            <div id="carousel" className="owl-carousel">
                                <div className="item">
                                    <img src={image1} alt="1000X1000" />
                                </div>
                                <div className="item">
                                    <img src={image2} alt="" />
                                </div>

                                <div className="item">
                                    <img src={image3} alt=""/>
                                </div>
                                <div className="item">
                                    <img src={image1} alt="" />
                                </div>
                                <div className="item">
                                    <img  src={image2} alt="" />
                                </div>
                                <div className="item">
                                    <img src={image3} alt="" />
                                </div>
                                <div className="item">
                                    <img src={image3} alt="" />
                                </div>
                                <div className="item">
                                    <img src={image1} alt="" />
                                </div>
                                <div className="item">
                                    <img src={image2} alt="" />
                                </div>
                                <div className="item">
                                    <img src={image3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurWorks;
