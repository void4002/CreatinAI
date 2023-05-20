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
    <Header />
    <Hero/>
    <Services/>
    <Testimonial/>
    <CTA/>
    <Footer />
    </>
    </div>
  );
}

export default Layout;
