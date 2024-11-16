import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesHome from './pages/ServicesHome';
import PortfolioDetails from './pages/PortfolioDetails';
import Services from './pages/Services';
import About from './pages/About';
import AboutSimpl from './pages/AboutSimpl';
import Carousel from './pages/Carousel';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import LegalNotices from './pages/LegalNotices';
import Contact from './pages/Contact';
import ContactModal from './pages/ContactModal';
import NewsletterForm from './pages/NewsletterForm';
import NewsletterModal from './pages/NewsletterModal';
import Team from './pages/Team';
import TeamSimpl from './pages/TeamSimpl';
import Testimonials from './pages/Testimonials';
import TestimonialsSimpl from './pages/TestimonialsSimpl';
import ServiceDetails from './components/ServiceDetails';
import ServicesList from './components/ServicesList';
import ScrollToTop from './components/ScrollToTop';
import Overlay from './components/Overlay';
import ScrollToTopButton from './components/ScrollToTopButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import GLightbox from 'glightbox';

const App = () => {
  useEffect(() => {
    AOS.init();
    GLightbox({ selector: '.glightbox' });
    // Swiper.use([Navigation, Pagination]);

    // Initialiser imagesLoaded et Isotope si nécessaire
    // imagesLoaded('#container', () => {
    //   new Isotope('#container', {
    //     itemSelector: '.item',
    //     layoutMode: 'fitRows'
    //   });
    // });

    // Initialiser Waypoints
    // new waypoints({
    //   element: document.getElementById('some-element') as HTMLElement,
    //   handler: function (direction: string) {
    //     console.log('Scrolled to waypoint!', direction);
    //   }
    // });
  }, []);
  return (
    <Router>
      <Overlay />
      <ScrollToTop />
      <ScrollToTopButton />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/services" element={<ServicesHome />} />
        <Route path="/portfolio/:id" element={<PortfolioDetails />} />
        <Route path="/about" element={<AboutSimpl />} />
        <Route path="/legal-notices" element={<LegalNotices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletter" element={<NewsletterForm />} />
        <Route path="/newsletter-modal" element={<NewsletterModal show={true} message="Your message here" onClose={() => { }} />} />
        <Route path="/contact-modal" element={<ContactModal show={true} message="Your message here" onClose={() => { }} />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-simpl" element={<TeamSimpl />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/testimonials-simpl" element={<TestimonialsSimpl />} />
        <Route path="/services/:id" element={<ServiceDetails title="Service Title" description="Service Description" imageUrl="image-url.jpg" highlights={["Highlight 1", "Highlight 2"]} />} />
        <Route path="/services" element={<ServicesList services={[]} activeService="" onServiceClick={() => { }} />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
