import Slider from "react-slick";
import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/testimonial1.json';
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import "./testimonal.css";

const Testimonial1 = () => {
    useEffect(() => {
        loadBackgroudImages();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="testimonial-area">
            <div className="container">
                <div className="tender-counts mt-4 text-center">
                    <div className="text-center">
                        <SectionTitle
                            SubTitle="TenderWINc"
                            Title="Tender Statistics"
                        />
                    </div>
                    <div className="row justify-content-around mt-3">
                        <div className="col-md-2 count-box">
                            <h5>Fresh Tenders</h5>
                            <p>485859</p>
                        </div>
                        <div className="col-md-2 count-box">
                            <h5>Live Tenders</h5>
                            <p>1500000</p>
                        </div>
                        <div className="col-md-2 count-box">
                            <h5>Archive Tenders</h5>
                            <p>4950973</p>
                        </div>
                        <div className="col-md-2 count-box">
                            <h5>Tender Results</h5>
                            <p>XXX</p> {/* Replace XXX with actual data if available */}
                        </div>
                    </div>
                </div>

                {/* Customer Count Section */}
                <div className="customer-count mt-4 text-center">
                    <h4>Our Customers</h4>
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-4 count-box">
                            <h5>Total Customers</h5>
                            <p>2000+</p> {/* Replace with actual customer count if available */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial1;
