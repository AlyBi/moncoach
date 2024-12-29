
// import React from 'react';

// const About = () => (
//     <main className="main">
//         {/* Page Title */}
//         <div className="page-title accent-background">
//             <div className="container d-lg-flex justify-content-between align-items-center">
//                 <h1 className="mb-2 mb-lg-0">À propos</h1>
//                 <nav className="breadcrumbs">
//                     <ol>
//                         <li><a href="/">Accueil</a></li>
//                         <li className="current">À propos</li>
//                     </ol>
//                 </nav>
//             </div>
//         </div>

//         {/* About Section */}
//         <section id="about" className="about section">
//             <div className="container">
//                 <div className="row position-relative">
//                     <div className="col-lg-7 about-img" data-aos="zoom-out" data-aos-delay="200">
//                         <img src="/public/assets/img/bsl3.jpg" alt="About" />
//                     </div>

//                     <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
//                         <h2 className="inner-title">"On a deux vies. La deuxième commence le jour où l’on réalise qu’on n’en a qu’une !"</h2>
//                         <h5 className="phil-title">"(Confucius, philosophe chinois 551-479 avant J.C.)"</h5>
//                         <div className="our-story">
//                             <h3>Mon Parcours</h3>
//                             <p>Professionnel multi-diplômé, j'accompagne les individus depuis 8 ans dans divers domaines, notamment la reconversion professionnelle, le coaching de couple, l'orientation scolaire des enfants et la gestion du stress. J'intègre des approches psychologiques et existentielles pour fournir un soutien personnalisé, identifier les besoins de formation et aider à lever les freins à la réussite. Mon objectif est d'aider chacun à surmonter les obstacles et à réaliser ses aspirations, en garantissant une transition réussie dans leur parcours personnel et professionnel.</p>
//                             <ul>
//                                 <li><i className="bi bi-check-circle"></i> <span>Une écoute attentive pour comprendre vos besoins profonds et vos préoccupations</span></li>
//                                 <li><i className="bi bi-check-circle"></i> <span>Je vous apporte un soutien moral et émotionnel, essentiel pour traverser les défis de la vie.</span></li>
//                                 <li><i className="bi bi-check-circle"></i> <span>Je vous aide à clarifier et à personnaliser vos aspirations, afin de transformer vos rêves en réalités.</span></li>
//                                 <li><i className="bi bi-check-circle"></i> <span>Je vous aide à développer votre capacité à apprendre et à progresser</span></li>
//                             </ul>
//                             <p>"Je m'engage à personnaliser mon accompagnement en fonction de votre parcours unique et de vos objectifs spécifiques."</p>

//                             <div className="watch-video d-flex align-items-center position-relative">
//                                 <i className="bi bi-play-circle"></i>
//                                 <a href="https://www.youtube.com/" className="glightbox stretched-link">Watch Video</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </main>
// );

// export default About;
// import React, { useEffect } from 'react';
// import TestimonialsSimpl from './TestimonialsSimpl';
// import TeamSimpl from './TeamSimpl';

// const About = () => {
//     useEffect(() => {
//         // Exemple d'effet, par exemple pour initialiser une animation ou charger des données
//         const AOS = require('aos');
//         AOS.init(); // Initialise AOS (Animate On Scroll)

//         // Optionnel: nettoyage si nécessaire
//         return () => {
//             // Code de nettoyage si besoin
//         };
//     }, []); // Le tableau vide signifie que l'effet s'exécute uniquement au montage

//     return (
//         <main className="main">
//             {/* Page Title */}  <div className="about-page"></div>
//             <div className="page-title accent-background">
//                 <div className="container d-lg-flex justify-content-between align-items-center">
//                     <h1 className="mb-2 mb-lg-0">À propos</h1>
//                     <nav className="breadcrumbs">
//                         <ol>
//                             <li><a href="/">Accueil</a></li>
//                             <li className="current">À propos</li>
//                         </ol>
//                     </nav>
//                 </div>
//             </div>

//             {/* About Section */}
//             <section id="about" className="about section">
//                 <div className="container">
//                     <div className="row position-relative">
//                         <div className="col-lg-7 about-img" data-aos="zoom-out" data-aos-delay="200">
//                             <img src="/assets/img/bsl3.jpg" alt="About" />
//                         </div>

//                         <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
//                             <h2 className="inner-title">"On a deux vies. La deuxième commence le jour où l’on réalise qu’on n’en a qu’une !"</h2>
//                             <h5 className="phil-title">"(Confucius, philosophe chinois 551-479 avant J.C.)"</h5>
//                             <div className="our-story">
//                                 <h3>Mon Parcours</h3>
//                                 <p>Professionnel multi-diplômé, j'accompagne les individus depuis 8 ans dans divers domaines, notamment la reconversion professionnelle, le coaching de couple, l'orientation scolaire des enfants et la gestion du stress. J'intègre des approches psychologiques et existentielles pour fournir un soutien personnalisé, identifier les besoins de formation et aider à lever les freins à la réussite. Mon objectif est d'aider chacun à surmonter les obstacles et à réaliser ses aspirations, en garantissant une transition réussie dans leur parcours personnel et professionnel.</p>
//                                 <ul>
//                                     <li><i className="bi bi-check-circle"></i> <span>Une écoute attentive pour comprendre vos besoins profonds et vos préoccupations</span></li>
//                                     <li><i className="bi bi-check-circle"></i> <span>Je vous apporte un soutien moral et émotionnel, essentiel pour traverser les défis de la vie.</span></li>
//                                     <li><i className="bi bi-check-circle"></i> <span>Je vous aide à clarifier et à personnaliser vos aspirations, afin de transformer vos rêves en réalités.</span></li>
//                                     <li><i className="bi bi-check-circle"></i> <span>Je vous aide à développer votre capacité à apprendre et à progresser</span></li>
//                                 </ul>
//                                 <p>"Je m'engage à personnaliser mon accompagnement en fonction de votre parcours unique et de vos objectifs spécifiques."</p>

//                                 <div className="watch-video d-flex align-items-center position-relative">
//                                     <i className="bi bi-play-circle"></i>
//                                     <a href="https://www.youtube.com/" className="glightbox stretched-link">Watch Video</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <TeamSimpl />
//             <TestimonialsSimpl />
//         </main>
//     );
// };

// export default About;
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importer les styles CSS d'AOS
import TestimonialsSimpl from './TestimonialsSimpl';
import Clients from './Clients';
import TeamSimpl from './TeamSimpl';
import FAQSection from './FAQSection';
import bsl3 from '../../assets/img/bsl3.jpg'; // Assurez-vous que le chemin est correct
import featureImage1 from '../../assets/img/devperso/10564.jpg';

const About: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Initialiser AOS (Animate On Scroll)
        AOS.init();

        const handleLoad = () => setLoading(false);

        const images = [bsl3];
        let loadedImages = 0;

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedImages += 1;
                if (loadedImages === images.length) {
                    handleLoad();
                }
            };
        });

        return () => {
            images.forEach((src) => {
                const img = new Image();
                img.src = src;
                img.onload = null;
            });
        };
    }, []);

    return (
        <main className="main">
            {loading ? (
                <div className="loading-indicator">Chargement...</div>
            ) : (
                <>
                    {/* Page Title */}
                    <div className="about-page"></div>
                    <div className="page-title accent-background">
                        <div className="container d-lg-flex justify-content-between align-items-center">
                            <h1 className="mb-2 mb-lg-0">À propos</h1>
                            <nav className="breadcrumbs">
                                <ol>
                                    <li>
                                        <NavLink to="index.html">Accueil</NavLink>
                                    </li>
                                    <li className="current">À propos</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    {/* About Section */}
                    <section id="about" className="about section">
                        <div className="container">
                            <div className="row position-relative">
                                <div className="col-lg-7 about-img" data-aos="zoom-out" data-aos-delay="200">
                                    <img src={bsl3} alt="About" />
                                </div>

                                <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                                    <h2 className="inner-title">"On a deux vies. La deuxième commence le jour où l’on réalise qu’on n’en a qu’une !"</h2>
                                    <h5 className="phil-title">"(Confucius, philosophe chinois 551-479 avant J.C.)"</h5>
                                    <div className="our-story">
                                        <h3>Mon Parcours</h3>
                                        <p>Fort de plus de dix ans d’expérience dans la formation continue et l’accompagnement, je conçois des dispositifs sur mesure pour permettre aux entreprises de révéler, développer et optimiser le potentiel de leurs collaborateurs, tout en répondant à leurs enjeux stratégiques et opérationnels. Bénéficiant d’une expertise solide en formation continue, coaching professionnel et développement personnel, j’offre des solutions sur mesure pour répondre à vos besoins spécifiques.</p>

                                        <ul>
                                            <li>
                                                <i className="bi bi-check-circle"></i>
                                                <span className="li-title">• Approche existentielle et éthique</span>
                                                <div className="li-description">Donner du sens au travail pour renforcer l’engagement, la motivation et la performance de collaborateurs ou de vos équipes.</div>
                                            </li>
                                            <li>
                                                <i className="bi bi-check-circle"></i>
                                                <span className="li-title">• Accompagnement des transitions professionnelles</span>
                                                <div className="li-description">Bilan de compétences enrichi, gestion de carrière, accompagnement existentiel en orientation professionnelle, développement de potentiel et alignement stratégique.</div>
                                            </li>
                                            <li>
                                                <i className="bi bi-check-circle"></i>
                                                <span className="li-title">• Formation des managers et des collaborateurs</span>
                                                <div className="li-description">Gestion des émotions, développement des soft skills et optimisation de l’efficacité opérationnelle.</div>
                                            </li>
                                            <li>
                                                <i className="bi bi-check-circle"></i>
                                                <span className="li-title">• AFEST</span>
                                                <div className="li-description">Je conçois et mets en œuvre des dispositifs AFEST sur mesure, adaptés aux spécificités de votre entreprise.</div>
                                            </li>
                                            <li>
                                                <i className="bi bi-check-circle"></i>
                                                <span className="li-title">• Blended Learning</span>
                                                <div className="li-description">Des dispositifs innovants et personnalisés alliant présentiel et digital pour garantir un apprentissage flexible et performant.</div>
                                            </li>
                                        </ul>

                                        <p>"Je m'engage à personnaliser mon accompagnement en fonction de votre parcours unique et de vos objectifs spécifiques."</p>

                                        <div className="watch-video d-flex align-items-center position-relative">
                                            <i className="bi bi-play-circle"></i>
                                            <a href="/home" className="glightbox stretched-link">Watch Video</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Additional Section */}
                    <div className="container">
                        <div className="row gy-4 align-items-center features-item">
                            {/* Texte à gauche avec un design moderne */}
                            <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                                <div className="why-work-container">
                                    <h3 className="section-title">Pourquoi travailler avec moi ?</h3>
                                    <p className="section-description">Professionnalisme, éthique et rigueur : les fondations de mon approche.</p>
                                </div>
                                <div className="features-cards">
                                    <div className="feature-card" data-aos="flip-left" data-aos-delay="300">
                                        <div className="card-icon bg-primary">
                                            <i className="bi bi-person-check"></i>
                                        </div>
                                        <h5>Approche Personnalisée</h5>
                                        <p>Mon approche repose sur des bases solides alliant psychologie appliquée et sciences humaines. Diplômé en coaching des transitions professionnelles, je crée des solutions uniques et adaptées aux besoins spécifiques de chaque client.</p>
                                    </div>
                                    <div className="feature-card" data-aos="flip-left" data-aos-delay="400">
                                        <div className="card-icon bg-success">
                                            <i className="bi bi-award"></i>
                                        </div>
                                        <h5>Formation Reconnue</h5>
                                        <p>Certifications en coaching professionnel et transitions, appuyées par des formations reconnues. Mon expertise me permet de proposer des solutions basées sur des principes éprouvés et des approches innovantes.</p>
                                    </div>
                                    <div className="feature-card" data-aos="flip-left" data-aos-delay="500">
                                        <div className="card-icon bg-warning">
                                            <i className="bi bi-brightness-high"></i>
                                        </div>
                                        <h5>Approche Pragmatique</h5>
                                        <p>Une approche structurée et orientée résultats, respectant des principes éthiques et humanistes. J'analyse les freins et utilise des leviers adaptés pour assurer le succès des transitions professionnelles.</p>
                                    </div>
                                </div>
                                <NavLink to="/contact" className="btn-get-started">Contactez-moi</NavLink>
                            </div>

                            {/* Image à droite, ajustée en taille */}
                            <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-out" data-aos-delay="100">
                                <img src={featureImage1} alt="Feature 1" className="img-fluid rounded-3 shadow-lg" />
                            </div>
                        </div>
                    </div>



                    <TeamSimpl />
                    <TestimonialsSimpl />
                    <Clients />
                    <FAQSection />
                </>
            )}
        </main>
    );
};

export default About;
