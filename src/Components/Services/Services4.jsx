import SectionTitle from "../Common/SectionTitle";
// import data from '../../Data/services4.json';
import { Link } from "react-router-dom";
import "./service1.css"

const Services4 = () => {
    const data= [
        {
          "icon": "/assets/Img/management.png",
          "title": "Tender Management",
          "desc": "Streamline the tender process from discovery to submission.",   
         "image": "/assets/images/inner/service-thumb1.png"
        },
        {
          "icon": "/assets/Img/statistics.png",
          "title": "AI Insights",
          "desc": "Utilize analytics and AI for better bidding strategies.",   
          "image": "/assets/images/inner/service-thumb1.png"

        },
        {
          "icon": "/assets/Img/documentation.png",
          "title": "Competitive Analysis",
          "desc": "Analyze all past bids of your competitors.",   
          "image": "/assets/images/inner/service-thumb1.png"

        },
        {
          "icon": "/assets/Img/realtime.png",
          "title": "Real-Time Alerts",
          "desc": "Get instant alerts on new tenders and bid statuses.",   
          "image": "/assets/images/inner/service-thumb1.png"

        }
      ]
      
    return (
        <div className="sservice-area style-two">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <SectionTitle
                                    SubTitle="TenderWIN"
                                    Title="How Professional IT Services<br> Can Drive <span>Success.</span>"
                            ></SectionTitle>
                        </div>
                    </div>
                    {data.map((item, i) => (
                    <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                        <div className="single-service-box">
                            <div className="service-thumb">
                                <img src={item.image} alt="thumb" />
                            </div>
                            <div className="service-icon hover-effect bg-light ">
                                <img src={item.icon} alt="icon" />
                            </div>
                            <div className="service-content">
                                <h3 className="service-title"><Link to="/service/service-details"><span>{item.title}</span></Link></h3>
                                <p className="service-text">{item.desc}</p>
                                <div className="service-btn">
                                <Link to="/service/service-details"><i className="bi bi-plus"></i> READ MORE</Link>
                                </div>
                                <div className="services-shape bounce-animate-3">
                                    <img src="/assets/images/inner/serice-shape.png" alt="shape" />
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="service-shape bounce-animate3">
                    <img src="/assets/images/service5.png" alt="service5" />
                </div>
                <div className="service-shape2">
                    <img src="/assets/images/service7.png" alt="service5" />
                </div>
                <div className="service-shape3 bounce-animate4">
                    <img src="/assets/images/service8.png" alt="service5" />
                </div>
            </div>
        </div>

    );
};

export default Services4;