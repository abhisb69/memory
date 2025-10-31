import "./Index.css";
import HeroSection from "../../Util/HeroSection";
import AboutSection from "../../Util/AboutSection";
import EventSection from "../../Util/EventSection";
import PortfolioSection from "../Portfolio/Index"
import FooterSection from "../../Util/FooterSection";
import NavBar from "../../Util/NavBar";
import ContactUs from "../../Util/ContactUs";
import HighLights from "../../Util/HighLights";
import OurServices from "../Services/OurServices";


const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <HeroSection />
      <div className="blue-text-section">
        <p>We Are Getting A Heaven Ready For Your Wonderful
           Day</p>
      </div>
      <AboutSection />
      <EventSection />
      <HighLights />
      <PortfolioSection />
      <ContactUs />
      <FooterSection />
    </div>
  );
};

export default Home;
