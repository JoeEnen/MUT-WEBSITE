import Hero from "../../Components/Hero/hero";
import "../Home/home.css";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Testimonials from "../../Components/Testimonials/testimonials";

function Home() {
  return (
    <div className="homePage">
      <Hero />
      <AboutUs />
      <Testimonials />
    </div>
  );
}

export default Home;
