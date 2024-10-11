import About1 from "../Components/About/About1";
import Hero1 from "../Components/Banner/Hero1";
import Blog1 from "../Components/Blog/Blog1";
import Brand from "../Components/Brand/Brand";
import Contact1 from "../Components/Contact/Contact1";
import Faq from "../Components/Faq/Faq";
import Features from "../Components/Features/Features";
import Pricing from "../Components/Pricing/Pricing";
import Project1 from "../Components/Project/Project1";
import Services1 from "../Components/Services/Services1";
import Testimonial1 from "../Components/Testimonial/Testimonial1";

const Home = () => {
    return (
        <div className="home-page">
            <Hero1
                bgImg="/assets/images/hero-bg.jpg"
                SubTitle="TenderWIN"
                Title=" Welcome to  TenderWIN<br>"
                Content="Discover comprehensive solutions for all your tender needs. We provide expert guidance, resources, and tools to help you navigate the tendering process with ease."
                BtnText="EXPLORE MORE"
                BtnLink="/about"
                Image="/assets/images/hero-thumb.png"
                VideoText="WATCH VIDEO"
            ></Hero1>
            <Features></Features>
            <About1
            // changes made here by sanket
                MainImg="/assets/images/about-thumb.jpg"
                ImgTitle="BEST IT SOLUTION"
                SubTitle="TENDERWIN "
                Title="Innovative Tender Solutions<br> for Modern Procurement <span>Businesses.</span>"
                Content="Simplifying procurement processes for enhanced competitiveness and growth."
                listTitle=" Tenders with AI-Powered Insights"
                BottomText="Harness the power of artificial intelligence to gain actionable insights, streamline tender processes, and make informed decisions that drive competitive advantage.

"
                BtnUrl="/about"
                BtnText="EXPLORE MORE"
            ></About1>
            <Services1></Services1>
            <Project1 
                bgImage="/assets/images/project-bg.png"
                ClassAdd="project-area"
            ></Project1>
            <Brand></Brand>
            <Pricing></Pricing>
            <Faq></Faq>
            <Testimonial1></Testimonial1>
            <Contact1></Contact1>
            {/* <Blog1></Blog1> */}
        </div>
    );
};

export default Home;