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

// export default Navbar;
// import React, { useState, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom'; // Ajout de useNavigate
// import { Modal } from 'react-bootstrap'; // Importation de la Modal de react-bootstrap
// import logo from '../../assets/img/logo6.png'; // Assurez-vous que le chemin est correct
// import { InlineWidget } from 'react-calendly'; // Importation du widget Inline de Calendly
// import { useAppContext } from '../../AppContext'; // Import du contexte pour récupérer userType

// const Navbar: React.FC = () => {
//     const { userType } = useAppContext(); // Récupère le type d'utilisateur (company ou individual)
//     const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // État pour savoir si le menu est ouvert ou fermé
//     const [openDropdown, setOpenDropdown] = useState<string>(''); // État pour savoir quel dropdown est ouvert
//     const [isMobile, setIsMobile] = useState<boolean>(false); // État pour savoir si l'écran est mobile
//     const [showModal, setShowModal] = useState(false); // État pour gérer l'ouverture de la modal Calendly
//     const navigate = useNavigate(); // Le hook pour naviguer

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

//     // Fonction pour gérer le clic sur le logo et rediriger vers la bonne route
//     const handleLogoClick = () => {
//         if (userType === 'company') {
//             navigate('/company'); // Redirige vers /company si l'utilisateur est une entreprise
//         } else {
//             navigate('/individual'); // Redirige vers /individual si l'utilisateur est un particulier
//         }
//     };

//     const handleCloseModal = () => setShowModal(false); // Fonction pour fermer la modal Calendly
//     const handleShowModal = () => setShowModal(true); // Fonction pour ouvrir la modal Calendly

//     return (
//         <header id="header" className="header d-flex align-items-center sticky-top">
//             <div className="container position-relative d-flex align-items-center">
//                 {/* Logo et texte avec gestion du clic pour redirection */}
//                 <div className="logo d-flex align-items-center me-auto" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
//                     <img src={logo} alt="Logo" className="logo-img" />
//                     <h1 className="sitename">EHD CONSEIL</h1>
//                 </div>

//                 {/* Menu de navigation */}
//                 <nav id="navmenu" className={`navmenu ${isMenuOpen ? 'active' : ''}`}>
//                     <ul>
//                         <li><NavLink to="/individual" className="active" onClick={closeMenu}>Accueil</NavLink></li>
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
//                         <li><NavLink to="/prestations" onClick={closeMenu}>Prestations</NavLink></li>
//                         <li><NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink></li>
//                         <li><NavLink to="/pricing" onClick={closeMenu}>Prix</NavLink></li>
//                         <li><NavLink to="/blog" onClick={closeMenu}>Blog</NavLink></li>
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
//                 {isMobile ? "Prise RDV" : "Prise de rendez-vous"} {/* Texte dynamique basé sur la taille de l'écran */}
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
//         </header >
//     );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import logo from '../../assets/img/logo6.png';
import { InlineWidget } from 'react-calendly';
import { useAppContext } from '../../AppContext';
// import './Navbar.css'; // Importer le fichier CSS

const Navbar: React.FC = () => {
    const { userType } = useAppContext();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [openDropdown, setOpenDropdown] = useState<string>('');
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle('mobile-nav-active', !isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('mobile-nav-active');
    };

    const toggleDropdown = (dropdown: string, e: React.MouseEvent) => {
        e.preventDefault();
        setOpenDropdown(openDropdown === dropdown ? '' : dropdown);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLogoClick = () => {
        if (userType === 'company') {
            navigate('/company');
        } else {
            navigate('/individual');
        }
    };

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container position-relative d-flex align-items-center">
                <div className="logo d-flex align-items-center me-auto" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                    <img src={logo} alt="Logo" className="logo-img" />
                    <h1 className="sitename">EHD CONSEIL</h1>
                </div>

                <nav id="navmenu" className={`navmenu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <NavLink to="/individual" onClick={closeMenu}>
                                <i className="bi bi-house-door" style={{ color: 'orange', fontSize: '20px' }}></i>
                            </NavLink>
                        </li>

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

                        {/* Menu des prestations avec sous-menus */}
                        <li className={`dropdown ${openDropdown === 'prestations' ? 'open' : ''}`}>
                            <NavLink to="#" onClick={(e) => toggleDropdown('prestations', e)}>
                                <span className={`${openDropdown === 'prestations' ? 'open-link' : ''}`}>Prestations</span>
                                <i className={`bi bi-chevron-down toggle-dropdown ${openDropdown === 'prestations' ? 'rotate-chevron' : ''}`}></i>
                            </NavLink>
                            <ul className={`${openDropdown === 'prestations' ? 'dropdown-active' : ''}`}>
                                <li><NavLink to="/prestations" onClick={closeMenu}>Formations</NavLink></li>
                                <li><NavLink to="/accompagnement-personnalise" onClick={closeMenu}>Accompagnement personnalisé</NavLink></li>
                                <li><NavLink to="/parcours-accompagnement" onClick={closeMenu}>Parcours d'accompagnement</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink></li>
                        <li><NavLink to="/pricing" onClick={closeMenu}>Prix</NavLink></li>
                        <li><NavLink to="/blog" onClick={closeMenu}>Blog</NavLink></li>
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

            <button className="navbar-calendly-button" onClick={handleShowModal}>
                {isMobile ? "Prise RDV" : "Prise de rendez-vous"}
            </button>

            <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Prendre un rendez-vous</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InlineWidget url="https://calendly.com/definir/prise-de-rendez-vous" />
                </Modal.Body>
            </Modal>
        </header>
    );
};

export default Navbar;
