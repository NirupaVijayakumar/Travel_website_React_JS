import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../components/Assets/1.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import Destination from "../components/Destination ";

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="Service" />

      <Trip />
      <Footer />
    </>
  );
}

export default Service;
