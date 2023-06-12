import './Layout.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CTA from '../components/CTA';

function Layout() {
  return (
      <>
      <div className="flex flex-col min-h-screen">
    <div className="flex-grow">
      <Header/>
      <Hero/>
    <CTA/>
    </div>
    <Footer />
    </div>
    </>
  );
}

export default Layout;
