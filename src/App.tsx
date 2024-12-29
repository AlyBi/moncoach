// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import NavbarIndividual from './pages/IndividualPages/NavbarIndividual'; // Navbar pour particuliers
// import NavbarCompany from './pages/CompanyPages/NavbarCompany'; // Navbar pour entreprises
// import './index.css';
// import CompanyPage from './components/CompanyPage'; // La page Entreprise
// import IndividualPage from './components/IndividualPage'; // La page Particulier
// import Footer from './components/Footer';
// import Home from './pages/IndividualPages/Home';
// import HomeCompany from './pages/CompanyPages/HomeCompany';
// import ServicesHome from './pages/IndividualPages/ServicesHome';
// import ServicesHomeCompany from './pages/CompanyPages/ServicesHomeCompany';
// import PortfolioDetails from './pages/IndividualPages/PortfolioDetails';
// import PortfolioDetailsCompagny from './pages/CompanyPages/PortfolioDetailsCompany';
// import Services from './pages/IndividualPages/Services';
// // import ServicesCompany from './pages/CompanyPages/Services';
// import About from './pages/IndividualPages/About';
// import AboutCompany from './pages/CompanyPages/AboutCompany';
// import AboutSimpl from './pages/IndividualPages/AboutSimpl';
// import AboutSimplCompany from './pages/CompanyPages/AboutSimplCompany';
// import Carousel from './pages/IndividualPages/Carousel';
// import CarouselCompany from './pages/CompanyPages/CarouselCompany';
// import Portfolio from './pages/IndividualPages/Portfolio';
// import PortfolioCompany from './pages/CompanyPages/PortfolioCompany';
// import Pricing from './pages/IndividualPages/Pricing';
// import PricingCompany from './pages/IndividualPages/Pricing';
// import Blog from './pages/IndividualPages/Blog';
// import BlogCompany from './pages/CompanyPages/BlogCompany';
// import LegalNotices from './components/LegalNotices';
// import Contact from './components/Contact';
// import ContactModal from './components/ContactModal';
// import NewsletterForm from './components/NewsletterForm';
// import NewsletterModal from './components/NewsletterModal';
// import Team from './pages/IndividualPages/Team';
// import TeamCompany from './pages/CompanyPages/TeamCompany';
// import TeamSimpl from './pages/IndividualPages/TeamSimpl';
// import TeamSimplCompany from './pages/CompanyPages/TeamSimplCompany';
// import Testimonials from './pages/IndividualPages/Testimonials';
// import TestimonialsSimpl from './pages/IndividualPages/TestimonialsSimpl';
// import TestimonialsSimplCompany from './pages/CompanyPages/TestimonialsSimplCompany';
// import ServiceDetails from './components/ServiceDetails';
// import ServiceDetailsCompany from './components/ServiceDetails';
// import ServicesList from './components/ServicesList';
// import ServicesListCompany from './components/ServicesList';
// import ScrollToTop from './components/ScrollToTop';
// import Overlay from './components/Overlay';
// import ScrollToTopButton from './components/ScrollToTopButton';
// import CalendlyPage from './components/CalendlyPage';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AOS from 'aos';
// import GLightbox from 'glightbox';


// const NavbarWithLocation = () => {
//   const location = useLocation(); // Récupère l'emplacement actuel de l'URL
//   const isCompanyRoute = location.pathname.startsWith('/company');
// useEffect(() => {
//   // Lorsque l'URL change, on fait défiler la page en haut
//   window.scrollTo(0, 0);
// }, [location]); // Réagir aux changements de location
// useEffect(() => {
//   AOS.init();
//   GLightbox({ selector: '.glightbox' });
//   // Swiper.use([Navigation, Pagination]);

//   // Initialiser imagesLoaded et Isotope si nécessaire
//   // imagesLoaded('#container', () => {
//   //   new Isotope('#container', {
//   //     itemSelector: '.item',
//   //     layoutMode: 'fitRows'
//   //   });
//   // });

//   // Initialiser Waypoints
//   // new waypoints({
//   //   element: document.getElementById('some-element') as HTMLElement,
//   //   handler: function (direction: string) {
//   //     console.log('Scrolled to waypoint!', direction);
//   //   }
//   // });
// }, []);
// return (
//     <>
//       {isCompanyRoute ? <NavbarCompany /> : <NavbarIndividual />}
//     </>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Overlay />
//       <ScrollToTop />
//       <ScrollToTopButton />
//       <NavbarWithLocation />
//       <Routes>
//         <Route path="/CompanyPage" element={<CompanyPage />} />
//         <Route path="/IndividualPage" element={<IndividualPage />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/home-company" element={<HomeCompany />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/about-company" element={<AboutCompany />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/services-company" element={<ServicesHomeCompany />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/portfolio-company" element={<PortfolioCompany />} />
//         <Route path="/pricing" element={<Pricing />} />
//         <Route path="/pricing-company" element={<PricingCompany />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/blog-company" element={<BlogCompany />} />
//         <Route path="/carousel" element={<Carousel />} />
//         <Route path="/carousel-company" element={<CarouselCompany />} />
//         <Route path="/services" element={<ServicesHome />} />
//         <Route path="/services-company" element={<ServicesHomeCompany />} />
//         <Route path="/portfolio/:id" element={<PortfolioDetails />} />
//         <Route path="/portfolio-company/:id" element={<PortfolioDetailsCompagny />} />
//         <Route path="/about" element={<AboutSimpl />} />
//         <Route path="/about-company" element={<AboutSimplCompany />} />
//         <Route path="/legal-notices" element={<LegalNotices />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/newsletter" element={<NewsletterForm />} />
//         <Route path="/newsletter-modal" element={<NewsletterModal show={true} message="Your message here" onClose={() => { }} />} />
//         <Route path="/contact-modal" element={<ContactModal show={true} message="Your message here" onClose={() => { }} />} />
//         <Route path="/team" element={<Team />} />
//         <Route path="/team-company" element={<TeamCompany />} />
//         <Route path="/team-simpl" element={<TeamSimpl />} />
//         <Route path="/team-simpl-company" element={<TeamSimplCompany />} />
//         <Route path="/testimonials" element={<Testimonials />} />
//         <Route path="/testimonials-simpl-company" element={<TestimonialsSimplCompany />} />
//         <Route path="/testimonials-simpl" element={<TestimonialsSimpl />} />
//         <Route path="/service-details" element={<ServiceDetails title="Service Title" description="Service Description" imageUrl="image-url.jpg" highlights={["Highlight 1", "Highlight 2"]} />} />
//         <Route path="/services/:id" element={<ServiceDetails title="Service Title" description="Service Description" imageUrl="image-url.jpg" highlights={["Highlight 1", "Highlight 2"]} />} />
//         <Route path="/services-company/:id" element={<ServiceDetailsCompany title="Service Title" description="Service Description" imageUrl="image-url.jpg" highlights={["Highlight 1", "Highlight 2"]} />} />
//         <Route path="/services" element={<ServicesList services={[]} activeService="" onServiceClick={() => { }} />} />
//         <Route path="/services-company" element={<ServicesListCompany services={[]} activeService="" onServiceClick={() => { }} />} />
//         <Route path="*" element={<Home />} /> {/* Redirige toutes les autres routes vers Home */}
//         <Route path="/calendly" element={<CalendlyPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;
// src/App.tsx

// src/App.tsx
// src/App.tsx

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarIndividual from './pages/IndividualPages/NavbarIndividual';  // Navbar pour particuliers
import CookieConsentBanner from './components/CookieConsentBanner';  // Bannière cookies
import './index.css';  // Styles globaux
import ParcoursDetails from './pages/IndividualPages/ParcoursDetails';
// import HalalProject from './pages/IndividualPages/SupportRoute/HalalProject';
import Home from './pages/IndividualPages/Home';
import PrestationsHome from './pages/IndividualPages/PrestationsHome';
import Portfolio from './pages/IndividualPages/Portfolio';
import Testimonials from './pages/IndividualPages/Testimonials';
import About from './pages/IndividualPages/About';
import TestimonialsSimpl from './pages/IndividualPages/TestimonialsSimpl';
import LegalNotices from './components/LegalNotices';
import Contact from './components/Contact';
import Pricing from './pages/IndividualPages/Pricing';
import Blog from './pages/IndividualPages/Blog';
import Clients from './pages/IndividualPages/Clients';
import FAQSection from './pages/IndividualPages/FAQSection';
import Footer from './components/Footer';  // Footer global
import Team from './pages/IndividualPages/Team'
import Formation from './pages/IndividualPages/formationtraining/Formation';
import EmotionalManagement from './pages/IndividualPages/formationtraining/EmotionalManagement';
import Parenting from './pages/IndividualPages/formationtraining/Parenting';
import EffectiveCommunication from './pages/IndividualPages/formationtraining/EffectiveCommunication';
import Coaching from './pages/IndividualPages/PersonalizedSupport/Coaching';
import CoachingJourney from './pages/IndividualPages/SupportRoute/CoachingJourney';
// import Overlay from './components/Overlay';  // Overlay au démarrage
import ScrollToTop from './components/ScrollToTop';  // Composant pour faire défiler en haut
import ScrollToTopButton from './components/ScrollToTopButton';  // Bouton flottant de défilement
import 'bootstrap/dist/css/bootstrap.min.css';  // Import de Bootstrap pour le style
import AOS from 'aos';  // Animation On Scroll
import GLightbox from 'glightbox';  // Pour les lightboxes d'images
import Swiper from 'swiper';  // Pour les carrousels
import { Navigation, Pagination } from 'swiper/modules';  // Modules Swiper
import imagesLoaded from 'imagesloaded';  // Pour charger les images avant affichage
import Isotope from 'isotope-layout';  // Pour le filtrage d'éléments
import { AppProvider } from './AppContext';  // Import du AppProvider

const App: React.FC = () => {
  // Effet pour faire défiler la page en haut lorsqu'on change de route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Initialisation des différentes librairies au montage du composant
  useEffect(() => {
    // Initialiser AOS (Animate On Scroll)
    AOS.init();

    // Initialiser GLightbox pour les galeries d'images
    GLightbox({ selector: '.glightbox' });

    // Initialiser Swiper (si nécessaire, décommenter pour l'utiliser)
    Swiper.use([Navigation, Pagination]);

    // Initialiser imagesLoaded et Isotope pour la gestion d'images et filtrage
    imagesLoaded('#container', () => {
      new Isotope('#container', {
        itemSelector: '.item',
        layoutMode: 'fitRows',
      });
    });

    // Initialiser Waypoints (si nécessaire)
    // new Waypoint({
    //   element: document.getElementById('some-element') as HTMLElement,
    //   handler: function (direction?: string) {
    //     console.log('Scrolled to waypoint!', direction);
    //   },
    // });
  }, []);

  return (
    <AppProvider> {/* Enveloppez toute l'application avec AppProvider */}
      <Router>
        {/* <Overlay />  Affiche l'overlay au démarrage */}
        <ScrollToTop />  {/* Composant pour faire défiler en haut */}
        <ScrollToTopButton />  {/* Composant pour afficher le bouton flottant de défilement */}

        <NavbarIndividual />  {/* Navbar pour les utilisateurs particuliers */}
        <CookieConsentBanner />  {/* Bannière de consentement aux cookies */}

        <Routes>
          {/* Routes spécifiques aux pages du site */}
          <Route path="/individual" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/prestations" element={<PrestationsHome />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/parcours-details" element={<ParcoursDetails />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonialsSimpl" element={<TestimonialsSimpl />} />
          <Route path="/faq" element={<FAQSection />} />
          <Route path="/parcours-details/:id" element={<ParcoursDetails />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/EmotionalManagement" element={<EmotionalManagement />} />
          <Route path="/Parenting" element={<Parenting />} />
          <Route path="/EffectiveCommunication" element={<EffectiveCommunication />} />
          <Route path="/Coaching" element={<Coaching />} />
          <Route path="/CoachingJourney" element={<CoachingJourney />} />

          {/* <Route path="/halal-project" element={<HalalProject />} /> */}
          {/* Routes générales */}
          <Route path="/legal-notices" element={<LegalNotices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />  {/* Footer global */}
      </Router>
    </AppProvider>
  );
};

export default App;
