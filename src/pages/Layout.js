import './Layout.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CTA from '../components/CTA';

function Layout() {
  return (
      <>
      <Header/>
      <Hero/>
    <CTA/>
    <Footer />
    </>
  );
}

export default Layout;
