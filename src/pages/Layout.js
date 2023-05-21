import './Layout.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';

function Layout() {
  return (
    <div>
      <>
      <Header/>
    <section id='home'>
      <Hero/>
    </section>
    <section id='services'><Services/></section>
    <section id='events'><Testimonial/></section>
    <CTA/>
    <Footer />
    </>
    </div>
  );
}

export default Layout;
