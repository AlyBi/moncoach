// RoutesWithSelection.tsx
import { Routes, Route } from 'react-router-dom';
import { useAppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';
// Pages pour particuliers
import Home from '../pages/IndividualPages/Home';
import About from '../pages/IndividualPages/About';
import PrestationsHome from '../pages/IndividualPages/PrestationsHome';
import Prestations from '../pages/IndividualPages/Prestations';
import Portfolio from '../pages/IndividualPages/Portfolio';
import Pricing from '../pages/IndividualPages/Pricing';
import Blog from '../pages/IndividualPages/Blog';
import Carousel from '../pages/IndividualPages/Carousel';
import Team from '../pages/IndividualPages/Team';
import Testimonials from '../pages/IndividualPages/Testimonials';
import ServiceDetails from '../components/ServiceDetails';
import ServicesList from '../components/ServicesList';
import PortfolioDetails from '../pages/IndividualPages/PortfolioDetails';
import AboutSimpl from '../pages/IndividualPages/AboutSimpl';
import TeamSimpl from '../pages/IndividualPages/TeamSimpl';
import TestimonialsSimpl from '../pages/IndividualPages/TestimonialsSimpl';

// Pages pour entreprises
import HomeCompany from '../pages/CompanyPages/HomeCompany';
import AboutCompany from '../pages/CompanyPages/AboutCompany';
import ServicesHomeCompany from '../pages/CompanyPages/ServicesHomeCompany';
import PortfolioCompany from '../pages/CompanyPages/PortfolioCompany';
import PricingCompany from '../pages/CompanyPages/PricingCompany';
import BlogCompany from '../pages/CompanyPages/BlogCompany';
import CarouselCompany from '../pages/CompanyPages/CarouselCompany';
import TeamCompany from '../pages/CompanyPages/TeamCompany';
import TestimonialsSimplCompany from '../pages/CompanyPages/TestimonialsSimplCompany';
import ServiceDetailsCompany from '../components/ServiceDetails';
import ServicesListCompany from '../components/ServicesList';
import PortfolioDetailsCompany from '../pages/CompanyPages/PortfolioDetailsCompany';
import AboutSimplCompany from '../pages/CompanyPages/AboutSimplCompany';
import TeamSimplCompany from '../pages/CompanyPages/TeamSimplCompany';

// Routes générales (toujours accessibles)
import CompanyPage from '../components/CompanyPage';
import IndividualPage from '../components/IndividualPage';
import LegalNotices from '../components/LegalNotices';
import Contact from '../components/Contact';
import ContactModal from '../components/ContactModal';
import NewsletterForm from '../components/NewsletterForm';
import NewsletterModal from '../components/NewsletterModal';
import CalendlyPage from '../components/CalendlyPage';
import { useEffect } from 'react';

const RoutesWithSelection = () => {
    const { userType } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (userType === 'company') {
            navigate('/company'); // Rediriger vers la page Entreprise
        } else if (userType === 'individual') {
            navigate('/individual'); // Rediriger vers la page Particulier
        }
    }, [userType, navigate]);

    <Routes>
        {/* Routes spécifiques à l'entreprise */}
        {userType === 'company' && (
            <>
                <Route path="/company" element={<HomeCompany />} />
                <Route path="/aboutCompany" element={<AboutCompany />} />
                <Route path="/servicesCompany" element={<ServicesHomeCompany />} />
                <Route path="/portfolioCompany" element={<PortfolioCompany />} />
                <Route path="/pricingCompany" element={<PricingCompany />} />
                <Route path="/blogCompany" element={<BlogCompany />} />
                <Route path="/carouselCompany" element={<CarouselCompany />} />
                <Route path="/teamCompany" element={<TeamCompany />} />
                <Route path="/testimonialsCompany" element={<TestimonialsSimplCompany />} />
                <Route path="/service-details/:id" element={<ServiceDetailsCompany title="Service Title" description="Service Description" imageUrl="image-url.jpg" highlights={["Highlight 1", "Highlight 2"]} />} />
                <Route path="/servicesCompany/:id" element={<ServiceDetailsCompany title="Service Title" description="Service Description" imageUrl="image-url.jpg" highlights={["Highlight 1", "Highlight 2"]} />} />
                <Route path="/servicesCompany" element={<ServicesListCompany services={[]} activeService="" onServiceClick={() => { }} />} />
                <Route path="/portfolioCompany/:id" element={<PortfolioDetailsCompany />} />

                {/* Routes pour simplifiées entreprises */}
                <Route path="/aboutSimplCompany" element={<AboutSimplCompany />} />
                <Route path="/teamSimplCompany" element={<TeamSimplCompany />} />
                <Route path="/testimonialsSimplCompany" element={<TestimonialsSimplCompany />} />
            </>
        )}

        {/* Routes spécifiques aux particuliers */}
        {userType === 'individual' && (
            <>
                <Route path="/individual" element={<Home />} />
                <Route path="/individual/about" element={<About />} />
                <Route path="/individual/prestations" element={<PrestationsHome />} />
                <Route path="/individual/prestations" element={<Prestations />} />
                <Route path="/individual/portfolio" element={<Portfolio />} />
                <Route path="/individual/pricing" element={<Pricing />} />
                <Route path="/individual/blog" element={<Blog />} />
                <Route path="/individual/carousel" element={<Carousel />} />
                <Route path="/individual/team" element={<Team />} />
                <Route path="/individual/testimonials" element={<Testimonials />} />
                <Route path="/individual/service-details/:id" element={<ServiceDetails title="Service Title" description="Service Description" imageUrl="image-url.jpg" highlights={["Highlight 1", "Highlight 2"]} />} />
                <Route path="/individual/services/:id" element={<ServiceDetails title="Service Title" description="Service Description" imageUrl="image-url.jpg" highlights={["Highlight 1", "Highlight 2"]} />} />
                <Route path="/individual/services" element={<ServicesList services={[]} activeService="" onServiceClick={() => { }} />} />
                <Route path="/individual/portfolio/:id" element={<PortfolioDetails />} />

                {/* Routes pour simplifiées particuliers */}
                <Route path="/aboutSimpl" element={<AboutSimpl />} />
                <Route path="/teamSimpl" element={<TeamSimpl />} />
                <Route path="/testimonialsSimpl" element={<TestimonialsSimpl />} />
            </>
        )}

        {/* Routes Générales (toujours accessibles) */}
        <Route path="/" element={<Home />} />
        <Route path="/company-page" element={<CompanyPage />} />
        <Route path="/individual-page" element={<IndividualPage />} />
        <Route path="/legal-notices" element={<LegalNotices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletter" element={<NewsletterForm />} />
        <Route path="/newsletter-modal" element={<NewsletterModal show={true} message="Your message here" onClose={() => { }} />} />
        <Route path="/contact-modal" element={<ContactModal show={true} message="Your message here" onClose={() => { }} />} />
        <Route path="/calendly" element={<CalendlyPage />} />
        <Route path="*" element={<Home />} />
    </Routes>
}


export default RoutesWithSelection;
