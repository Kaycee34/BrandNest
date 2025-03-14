import Navbar from './components/Navbar'
import ContactInformation from './components/contact'
import CallToAction from './components/cta'
import Footer from './components/footer'
import Hero from './components/hero'
import Services from './components/services'
import Team from './components/team'
import Testimonials from './components/testimonials'
import WhyChoose from './components/whyChoose'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <Testimonials />
      <Team />
      <CallToAction />
      <ContactInformation />
      <Footer />
    </div>
  )
}

export default App
