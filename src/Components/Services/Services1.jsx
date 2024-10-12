import SectionTitle from "../Common/SectionTitle";
// import data from '../../Data/services1.json';
import { Link } from "react-router-dom";
import "./service1.css"


const Services1 = () => {
    //changes made here by sanket

   const data= [
        {
          "icon": "/assets/Img/management.png",
          "title": "Tender Management",
          "desc": "Streamline the tender process from discovery to submission.",   
          "btnText": "READ MORE",
          "btnLink": "/service/service-details"
        },
        {
          "icon": "/assets/Img/statistics.png",
          "title": "AI Insights",
          "desc": "Utilize analytics and AI for better bidding strategies.",   
          "btnText": "READ MORE",
          "btnLink": "/service/service-details"
        },
        {
          "icon": "/assets/Img/documentation.png",
          "title": "Document Tracking",
          "desc": "Manage and track tender documents effortlessly.",   
          "btnText": "READ MORE",
          "btnLink": "/service/service-details"
        },
        {
          "icon": "/assets/Img/realtime.png",
          "title": "Real-Time Alerts",
          "desc": "Get instant alerts on new tenders and bid statuses.",   
          "btnText": "READ MORE",
          "btnLink": "/service/service-details"
        }
      ]
      
      
    
    return (
            <div className="sservice-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <SectionTitle
                                
                                    SubTitle="TENDERWIN"
                                    Title="Accelerating Success Through<br> Advanced <span>Tender Solutions  .</span>"
                                ></SectionTitle>
                                
                            </div>
                        </div>
                        {data.map((item, i) => (
                        <div key={i} className=" col-xl-3 col-lg-4 col-md-6 ">
                            <div className="service-single-box ">
                                <div className="service-icon hover-effect  " >
                                    <img src={item.icon}  style={{width: "50px"}} alt="service1" className="icon-invert"/>
                                </div>
                                <div className="service-content  ">
                                    <h3 className="service-title">{item.title}</h3>
                                    <p className="service-text">{item.desc}</p>
                                    <div className="service-btn ">
                                        <Link to={item.btnLink}><i className="bi bi-plus  "></i><span className="btn-text "> {item.btnText}</span></Link>
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

export default Services1;