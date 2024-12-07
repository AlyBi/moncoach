import React from 'react';
// import logo from '../assets/img/logo5.jpg'; // Assurez-vous que le chemin est correct
import logoIyaTech from '../assets/img/logo5.jpg'; // Assurez-vous que le chemin est correct

const Footer: React.FC = () => (
    <footer id="footer" className="footer dark-background">
        <div className="container footer-top">
            <div className="row gy-4">
                <div className="col-lg-4 col-md-6 footer-about">
                    <a href="/" className="logo d-flex align-items-center">
                        {/* <img src={logo} alt="Logo" className="logo-img" /> */}
                        <span className="sitename">EHD CONSEIL</span>
                    </a>
                    <div className="footer-contact pt-3">
                        <p>27 Avenue de l'Opéra</p>
                        <p>Paris, 75001</p>
                        <p className="mt-3"><strong>Téléphone:</strong> <span>06 52 63 76 23</span></p>
                        <p><strong>Email:</strong> <a href="mailto:contact@lifedesigncoaching.fr">contact@lifedesigncoaching.fr</a></p>
                    </div>
                    <div className="social-links d-flex mt-4">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>

                <div className="col-lg-2 col-md-3 footer-links">
                    <h4>Liens Utiles</h4>
                    <ul>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/about">À propos</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/legal-notices">Mentions légales</a></li>
                        <li><a href="/privacy">Politique de confidentialité</a></li>
                    </ul>
                </div>

                <div className="col-lg-2 col-md-3 footer-links">
                    <h4>Nos Services</h4>
                    <ul>
                        <li><a href="/home">Développement Personnel</a></li>
                        <li><a href="/home">Coaching en Innovation et Créativité</a></li>
                        <li><a href="/home">Stratégies de Croissance d'Entreprise</a></li>
                        <li><a href="/home">Équilibre Vie Professionnelle/Vie Personnelle</a></li>
                        <li><a href="/home">Leadership et Gestion d'Équipe</a></li>
                    </ul>
                </div>

                <div className="col-lg-4 col-md-12 footer-newsletter">
                    <h4>Notre newsletter</h4>
                    <p>Abonnez-vous à notre newsletter et recevez les dernières nouvelles sur nos produits et services !</p>
                    <form id="newsletter-form" action="https://formspree.io/f/xeqyljab" method="POST" className="email-form">
                        <div className="newsletter-form">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your subscription request has been sent. Thank you!</div>
                            <input type="email" name="email" placeholder="Votre Email" required />
                            <input type="submit" value="s'Abonner" />
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="container copyright text-center mt-4">
            <p>© <span>2024 Copyright</span> <strong className="px-1 sitename">EHD CONSEIL</strong> <span>Tous droits réservés</span></p>
            <div className="credits">
                Designed by
                <a href="https://iya-tech-development.com/" target="_blank" rel="noopener noreferrer">
                    <img src={logoIyaTech} alt="Logo IYA TECH" style={{ height: '45px', verticalAlign: 'middle' }} />
                    IYA TECH DEVELOPMENT
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
