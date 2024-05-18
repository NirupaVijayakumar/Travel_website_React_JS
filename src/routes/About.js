import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../components/Assets/tea.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={AboutImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
