import Navbar from "./components/Navbar"
import Hero from "./components/hero"
import Services from "./components/Services"
import WhyChoose from "./components/WhyChoose"
import Testimonials from "./components/testimonials"   
import CallToAction from './components/cta';
import ContactInformation from './components/contact'; 
import Footer from './components/footer'; 

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <Testimonials />
      <CallToAction />
      <ContactInformation />
      <Footer />
    </div>
  );
};

export default App;