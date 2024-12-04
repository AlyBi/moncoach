// NavbarWithLocation.tsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarIndividual from '../pages/IndividualPages/NavbarIndividual';
import NavbarCompany from '../pages/CompanyPages/NavbarCompany';
import AOS from 'aos';
import GLightbox from 'glightbox';

const NavbarWithLocation = () => {
    const location = useLocation();
    const isCompanyRoute = location.pathname.startsWith('/company'); // Vérifier si l'URL est pour une entreprise

    useEffect(() => {
        window.scrollTo(0, 0); // Faites défiler en haut à chaque changement d'URL
    }, [location]);

    useEffect(() => {
        AOS.init();
        GLightbox({ selector: '.glightbox' });
    }, []);

    return isCompanyRoute ? <NavbarCompany /> : <NavbarIndividual />;
};

export default NavbarWithLocation;
