import Navbar from "./components/Navbar"
import Hero from "./components/hero"
import Services from "./components/services"
import WhyChoose from "./components/whyChoose"
import Testimonials from "./components/testimonials"   
import CallToAction from './components/cta';
import ContactInformation from './components/contact'; 
import Footer from './components/footer'; 
const App = () => {
  return (
    <div>
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
