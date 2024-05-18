import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../components/Assets/lotus-tower.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="Contact" />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
