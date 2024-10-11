import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Form from "../Form/Form";
import loadBackgroudImages from "../Common/loadBackgroudImages";
// import {loadBackgroudImages} from "../../../public/assets/Img/contact.jpg";
import VideoModal from "../VideoModal/VideoModal";


const Contact1 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

      const [iframeSrc, setIframeSrc] = useState('about:blank');
	  const [toggle, setToggle] = useState(false);
	
	  const handelClick = () => {
		setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
		setToggle(!toggle);
	  };
	  const handelClose = () => {
		setIframeSrc('about:blank');
		setToggle(!toggle);
	  };
      
    return (
        <div className="contact-area" data-background="/assets/Img/contact.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7">
                            <div className="section-title text-left">
                            <SectionTitle
                                    SubTitle="CONTACT US"
                                    Title="Our experts provide tailored insights and support for your tender needs."
                            ></SectionTitle>
                            </div>
                            <Form></Form>
                        </div>
                    {/* added bg image for contact us page  */}
                    </div>
                </div>
                <VideoModal
                    isTrue={toggle}
                    iframeSrc={iframeSrc}
                    handelClose={handelClose}        
                ></VideoModal>
            </div>

    );
};

export default Contact1;