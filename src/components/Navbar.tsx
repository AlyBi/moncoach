import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo5.jpg'; // Assurez-vous que le chemin est correct

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // État pour savoir si le menu est ouvert ou fermé
    const [openDropdown, setOpenDropdown] = useState<string>(''); // État pour savoir quel dropdown est ouvert

    // Fonction pour ouvrir/fermer le menu burger
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Inverse l'état du menu
    };

    // Fonction pour fermer le menu après un clic sur un lien
    const closeMenu = () => {
        setIsMenuOpen(false); // Ferme le menu
    };

    // Fonction pour ouvrir/fermer les sous-menus
    const toggleDropdown = (dropdown: string) => {
        setOpenDropdown(openDropdown === dropdown ? '' : dropdown); // Bascule entre ouvrir/fermer le sous-menu
    };

    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container position-relative d-flex align-items-center">
                <Link to="/" className="logo d-flex align-items-center me-auto">
                    <img src={logo} alt="Logo" className="logo-img" />
                    <h1 className="sitename">life design coaching</h1>
                </Link>
                <nav id="navmenu" className={`navmenu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><Link to="/" className="active" onClick={closeMenu}>Accueil</Link></li>
                        <li className={`dropdown ${openDropdown === 'about' ? 'open' : ''}`}>
                            <Link to="#" onClick={() => toggleDropdown('about')}>
                                <span>À propos</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                            </Link>
                            <ul>
                                <li><Link to="/team" onClick={closeMenu}>Equipe</Link></li>
                                <li><Link to="/testimonials" onClick={closeMenu}>Temoignages</Link></li>
                                <li className={`dropdown ${openDropdown === 'deep' ? 'open' : ''}`}>
                                    <Link to="#" onClick={() => toggleDropdown('deep')}>
                                        <span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                                    </Link>
                                    <ul>
                                        <li><Link to="#" onClick={closeMenu}>Deep Dropdown 1</Link></li>
                                        <li><Link to="#" onClick={closeMenu}>Deep Dropdown 2</Link></li>
                                        <li><Link to="#" onClick={closeMenu}>Deep Dropdown 3</Link></li>
                                        <li><Link to="#" onClick={closeMenu}>Deep Dropdown 4</Link></li>
                                        <li><Link to="#" onClick={closeMenu}>Deep Dropdown 5</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
                        <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
                        <li><Link to="/pricing" onClick={closeMenu}>Prix</Link></li>
                        <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
                        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
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
        </header>
    );
};

export default Navbar;
