// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/img/logo6.png'; // Assurez-vous que le chemin est correct

// const Navbar: React.FC = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // État pour savoir si le menu est ouvert ou fermé
//     const [openDropdown, setOpenDropdown] = useState<string>(''); // État pour savoir quel dropdown est ouvert

//     // Fonction pour ouvrir/fermer le menu burger
//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen); // Inverse l'état du menu
//     };

//     // Fonction pour fermer le menu après un clic sur un lien
//     const closeMenu = () => {
//         setIsMenuOpen(false); // Ferme le menu
//     };

//     // Fonction pour ouvrir/fermer les sous-menus
//     const toggleDropdown = (dropdown: string) => {
//         setOpenDropdown(openDropdown === dropdown ? '' : dropdown); // Bascule entre ouvrir/fermer le sous-menu
//     };

//     return (
//         <header id="header" className="header d-flex align-items-center sticky-top">
//             <div className="container position-relative d-flex align-items-center">
//                 <Link to="/" className="logo d-flex align-items-center me-auto">
//                     <img src={logo} alt="Logo" className="logo-img" />
//                     <h1 className="sitename">life design coaching</h1>
//                 </Link>
//                 <nav id="navmenu" className={`navmenu ${isMenuOpen ? 'active' : ''}`}>
//                     <ul>
//                         <li><Link to="/" className="active" onClick={closeMenu}>Accueil</Link></li>
//                         <li className={`dropdown ${openDropdown === 'about' ? 'open' : ''}`}>
//                             <Link to="#" onClick={() => toggleDropdown('about')}>
//                                 <span>À propos</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
//                             </Link>
//                             <ul>
//                                 <li><Link to="/team" onClick={closeMenu}>Equipe</Link></li>
//                                 <li><Link to="/testimonials" onClick={closeMenu}>Temoignages</Link></li>
//                                 <li className={`dropdown ${openDropdown === 'deep' ? 'open' : ''}`}>
//                                     <Link to="#" onClick={() => toggleDropdown('deep')}>
//                                         <span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
//                                     </Link>
//                                     <ul>
//                                         <li><Link to="#" onClick={closeMenu}>Deep Dropdown 1</Link></li>
//                                         <li><Link to="#" onClick={closeMenu}>Deep Dropdown 2</Link></li>
//                                         <li><Link to="#" onClick={closeMenu}>Deep Dropdown 3</Link></li>
//                                         <li><Link to="#" onClick={closeMenu}>Deep Dropdown 4</Link></li>
//                                         <li><Link to="#" onClick={closeMenu}>Deep Dropdown 5</Link></li>
//                                     </ul>
//                                 </li>
//                             </ul>
//                         </li>
//                         <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
//                         <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
//                         <li><Link to="/pricing" onClick={closeMenu}>Prix</Link></li>
//                         <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
//                         <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
//                     </ul>
//                     <i className={`mobile-nav-toggle d-xl-none bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`} onClick={toggleMenu}></i>
//                 </nav>

//                 <div className="header-social-links">
//                     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
//                     <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
//                     <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
//                     <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
//                 </div>
//             </div>
//         </header>
//     );
// };

// // export default Navbar;
// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Modal } from 'react-bootstrap'; // Importation de la Modal de react-bootstrap
// import logo from '../../assets/img/logo6.png'; // Assurez-vous que le chemin est correct
// import { InlineWidget } from 'react-calendly'; // Importation du widget Inline de Calendly

// const NavbarCompany: React.FC = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // État pour savoir si le menu est ouvert ou fermé
//     const [openDropdown, setOpenDropdown] = useState<string>(''); // État pour savoir quel dropdown est ouvert
//     const [isMobile, setIsMobile] = useState<boolean>(false); // État pour savoir si l'écran est mobile
//     const [showModal, setShowModal] = useState(false); // État pour gérer l'ouverture de la modal Calendly

//     // Fonction pour ouvrir/fermer le menu burger
//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen); // Inverse l'état du menu
//         document.body.classList.toggle('mobile-nav-active', !isMenuOpen);
//     };

//     // Fonction pour fermer le menu après un clic sur un lien
//     const closeMenu = () => {
//         setIsMenuOpen(false); // Ferme le menu
//         document.body.classList.remove('mobile-nav-active');
//     };

//     // Fonction pour ouvrir/fermer les sous-menus
//     const toggleDropdown = (dropdown: string, e: React.MouseEvent) => {
//         e.preventDefault(); // Empêche la navigation vers un lien quand on clique sur le bouton chevron
//         setOpenDropdown(openDropdown === dropdown ? '' : dropdown); // Bascule entre ouvrir/fermer
//     };

//     // Détecter la largeur de l'écran pour les écrans mobiles
//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 480); // Si l'écran est de 480px ou moins, on considère que c'est un petit écran
//         };

//         window.addEventListener('resize', handleResize); // Ajouter l'événement pour la redimensionner
//         handleResize(); // Vérifier dès le départ

//         return () => {
//             window.removeEventListener('resize', handleResize); // Nettoyer l'événement lors du démontage
//         };
//     }, []);

//     const handleCloseModal = () => setShowModal(false); // Fonction pour fermer la modal Calendly
//     const handleShowModal = () => setShowModal(true); // Fonction pour ouvrir la modal Calendly

//     return (
//         <header id="header" className="header d-flex align-items-center sticky-top">
//             <div className="container position-relative d-flex align-items-center">
//                 <NavLink to="/" className="logo d-flex align-items-center me-auto" onClick={closeMenu}>
//                     <img src={logo} alt="Logo" className="logo-img" />
//                     <h1 className="sitename">life design coaching</h1>
//                 </NavLink>
//                 <nav id="navmenu" className={`navmenu ${isMenuOpen ? 'active' : ''}`}>
//                     <ul>
//                         <li><NavLink to="/" className="active" onClick={closeMenu}>Accueil</NavLink></li>
//                         <li className={`dropdown ${openDropdown === 'about' ? 'open' : ''}`}>
//                             <NavLink to="#" onClick={(e) => toggleDropdown('about', e)}>
//                                 <span className={`${openDropdown === 'about' ? 'open-link' : ''}`}>À propos</span>
//                                 <i className={`bi bi-chevron-down toggle-dropdown ${openDropdown === 'about' ? 'rotate-chevron' : ''}`}></i>
//                             </NavLink>
//                             <ul className={`${openDropdown === 'about' ? 'dropdown-active' : ''}`}>
//                                 <li><NavLink to="/team" onClick={closeMenu}>Equipe</NavLink></li>
//                                 <li><NavLink to="/testimonials" onClick={closeMenu}>Temoignages</NavLink></li>
//                                 <li className={`dropdown ${openDropdown === 'deep' ? 'open' : ''}`}>
//                                     <NavLink to="#" onClick={(e) => toggleDropdown('deep', e)}>
//                                         <span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
//                                     </NavLink>
//                                     <ul className={`${openDropdown === 'deep' ? 'dropdown-active' : ''}`}>
//                                         <li><NavLink to="#" onClick={closeMenu}>Deep Dropdown 1</NavLink></li>
//                                         <li><NavLink to="#" onClick={closeMenu}>Deep Dropdown 2</NavLink></li>
//                                         <li><NavLink to="#" onClick={closeMenu}>Deep Dropdown 3</NavLink></li>
//                                         <li><NavLink to="#" onClick={closeMenu}>Deep Dropdown 4</NavLink></li>
//                                         <li><NavLink to="#" onClick={closeMenu}>Deep Dropdown 5</NavLink></li>
//                                     </ul>
//                                 </li>
//                             </ul>
//                         </li>
//                         <li><NavLink to="/servicesCompany" onClick={closeMenu}>Services</NavLink></li>
//                         <li><NavLink to="/portfolioCompany" onClick={closeMenu}>Portfolio</NavLink></li>
//                         <li><NavLink to="/pricingCompany" onClick={closeMenu}>Prix</NavLink></li>
//                         <li><NavLink to="/blogCompany" onClick={closeMenu}>Blog</NavLink></li>
//                         <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
//                     </ul>
//                     <i className={`mobile-nav-toggle d-xl-none bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`} onClick={toggleMenu}></i>
//                 </nav>

//                 <div className="header-social-links">
//                     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
//                     <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
//                     <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
//                     <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
//                 </div>
//             </div>

//             {/* Bouton Calendly intégré dans la navbar */}
//             <button
//                 className="navbar-calendly-button"
//                 onClick={handleShowModal}
//             >
//                 {isMobile ? "Prendre RDV" : "Prendre un rendez-vous"} {/* Texte dynamique basé sur la taille de l'écran */}
//             </button>

//             {/* Modal Calendly */}
//             <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
//                 <Modal.Header closeButton> {/* Bouton de fermeture avec croix */}
//                     <Modal.Title>Prendre un rendez-vous</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <InlineWidget url="https://calendly.com/definir/prise-de-rendez-vous" /> {/* Le calendrier est chargé ici */}
//                 </Modal.Body>
//             </Modal>
//         </header>
//     );
// };

// export default NavbarCompany;
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-bootstrap'; // Importation de la Modal de react-bootstrap
import logo from '../../assets/img/logo6.png'; // Assurez-vous que le chemin est correct
import { InlineWidget } from 'react-calendly'; // Importation du widget Inline de Calendly
import { useAppContext } from '../../AppContext'; // Assurez-vous que vous avez le bon chemin pour ce contexte

const NavbarCompany: React.FC = () => {
    const { userType } = useAppContext(); // Utilisation du contexte pour savoir si l'utilisateur est une entreprise ou un particulier
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // État pour savoir si le menu est ouvert ou fermé
    const [openDropdown, setOpenDropdown] = useState<string>(''); // État pour savoir quel dropdown est ouvert
    const [isMobile, setIsMobile] = useState<boolean>(false); // État pour savoir si l'écran est mobile
    const [showModal, setShowModal] = useState(false); // État pour gérer l'ouverture de la modal Calendly

    // Fonction pour ouvrir/fermer le menu burger
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Inverse l'état du menu
        document.body.classList.toggle('mobile-nav-active', !isMenuOpen);
    };

    // Fonction pour fermer le menu après un clic sur un lien
    const closeMenu = () => {
        setIsMenuOpen(false); // Ferme le menu
        document.body.classList.remove('mobile-nav-active');
    };

    // Fonction pour ouvrir/fermer les sous-menus
    const toggleDropdown = (dropdown: string, e: React.MouseEvent) => {
        e.preventDefault(); // Empêche la navigation vers un lien quand on clique sur le bouton chevron
        setOpenDropdown(openDropdown === dropdown ? '' : dropdown); // Bascule entre ouvrir/fermer
    };

    // Détecter la largeur de l'écran pour les écrans mobiles
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480); // Si l'écran est de 480px ou moins, on considère que c'est un petit écran
        };

        window.addEventListener('resize', handleResize); // Ajouter l'événement pour la redimensionner
        handleResize(); // Vérifier dès le départ

        return () => {
            window.removeEventListener('resize', handleResize); // Nettoyer l'événement lors du démontage
        };
    }, []);

    const handleCloseModal = () => setShowModal(false); // Fonction pour fermer la modal Calendly
    const handleShowModal = () => setShowModal(true); // Fonction pour ouvrir la modal Calendly

    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container position-relative d-flex align-items-center">
                <NavLink to={userType === 'company' ? "/company" : "/individual"} className="logo d-flex align-items-center me-auto" onClick={closeMenu}>
                    <img src={logo} alt="Logo" className="logo-img" />
                    <h1 className="sitename">EHD-CONSEIL</h1>
                </NavLink>
                <nav id="navmenu" className={`navmenu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><NavLink to={userType === 'company' ? "/company" : "/individual"} className="active" onClick={closeMenu}>Accueil</NavLink></li>
                        <li className={`dropdown ${openDropdown === 'about' ? 'open' : ''}`}>
                            <NavLink to="#" onClick={(e) => toggleDropdown('about', e)}>
                                <span className={`${openDropdown === 'about' ? 'open-link' : ''}`}>À propos</span>
                                <i className={`bi bi-chevron-down toggle-dropdown ${openDropdown === 'about' ? 'rotate-chevron' : ''}`}></i>
                            </NavLink>
                            <ul className={`${openDropdown === 'about' ? 'dropdown-active' : ''}`}>
                                <li><NavLink to="/team" onClick={closeMenu}>Equipe</NavLink></li>
                                <li><NavLink to="/testimonials" onClick={closeMenu}>Temoignages</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/servicesCompany" onClick={closeMenu}>Services</NavLink></li>
                        <li><NavLink to="/portfolioCompany" onClick={closeMenu}>Portfolio</NavLink></li>
                        <li><NavLink to="/pricingCompany" onClick={closeMenu}>Prix</NavLink></li>
                        <li><NavLink to="/blogCompany" onClick={closeMenu}>Blog</NavLink></li>
                        <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
                    </ul>
                    <i className={`mobile-nav-toggle d-xl-none bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`} onClick={toggleMenu}></i>
                </nav>

                <div className="header-social-links">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>

            {/* Bouton Calendly intégré dans la navbar */}
            <button
                className="navbar-calendly-button"
                onClick={handleShowModal}
            >
                {isMobile ? "Prendre RDV" : "Prendre un rendez-vous"} {/* Texte dynamique basé sur la taille de l'écran */}
            </button>

            {/* Modal Calendly */}
            <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
                <Modal.Header closeButton> {/* Bouton de fermeture avec croix */}
                    <Modal.Title>Prendre un rendez-vous</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InlineWidget url="https://calendly.com/definir/prise-de-rendez-vous" /> {/* Le calendrier est chargé ici */}
                </Modal.Body>
            </Modal>
        </header>
    );
};

export default NavbarCompany;
