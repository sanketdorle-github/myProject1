import About4 from "../Components/About/About4";
import Blog1 from "../Components/Blog/Blog1";
import Brand from "../Components/Brand/Brand";
import BreadCumb from "../Components/Common/BreadCumb";
import Project1 from "../Components/Project/Project1";

const About = () => {
  return (
    <div className="about-page">
      <BreadCumb Title="About Us"></BreadCumb>
      <About4
        MainImg="/assets/Img/analysis.png"
        SubTitle="TenderWIN"
        Title="All government tenders <br/> from across
 the<br> world in <span> one place.</span>"
        Content="Harnessing AI for intelligent bid analysis, real-time tender alerts, and critical deadline notifications to streamline your procurement process."
        listTitle1="Real-Time Notifications"
        listTitle2="Bid Matching"
        BoxTitle1="826"
        BoxTitle2="Satisfied Clients"
      ></About4>
      <Project1
        bgImage="/assets/images/inner/project-bg-3.png"
        ClassAdd="project-area style-two"
      ></Project1>
      <Brand></Brand>
      <hr />
      {/* <Blog1></Blog1> */}
    </div>
  );
};

export default About;
