
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
import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        // Exemple d'effet, par exemple pour initialiser une animation ou charger des données
        const AOS = require('aos');
        AOS.init(); // Initialise AOS (Animate On Scroll)

        // Optionnel: nettoyage si nécessaire
        return () => {
            // Code de nettoyage si besoin
        };
    }, []); // Le tableau vide signifie que l'effet s'exécute uniquement au montage

    return (
        <main className="main">
            {/* Page Title */}


            {/* About Section */}
            <section id="about" className="about section">
                <div className="container">
                    <div className="row position-relative">
                        <div className="col-lg-7 about-img" data-aos="zoom-out" data-aos-delay="200">
                            <img src="/assets/img/bsl3.jpg" alt="About" />
                        </div>

                        <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                            <h2 className="inner-title">"On a deux vies. La deuxième commence le jour où l’on réalise qu’on n’en a qu’une !"</h2>
                            <h5 className="phil-title">"(Confucius, philosophe chinois 551-479 avant J.C.)"</h5>
                            <div className="our-story">
                                <h3>Mon Parcours</h3>
                                <p>Professionnel multi-diplômé, j'accompagne les individus depuis 8 ans dans divers domaines, notamment la reconversion professionnelle, le coaching de couple, l'orientation scolaire des enfants et la gestion du stress. J'intègre des approches psychologiques et existentielles pour fournir un soutien personnalisé, identifier les besoins de formation et aider à lever les freins à la réussite. Mon objectif est d'aider chacun à surmonter les obstacles et à réaliser ses aspirations, en garantissant une transition réussie dans leur parcours personnel et professionnel.</p>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i> <span>Une écoute attentive pour comprendre vos besoins profonds et vos préoccupations</span></li>
                                    <li><i className="bi bi-check-circle"></i> <span>Je vous apporte un soutien moral et émotionnel, essentiel pour traverser les défis de la vie.</span></li>
                                    <li><i className="bi bi-check-circle"></i> <span>Je vous aide à clarifier et à personnaliser vos aspirations, afin de transformer vos rêves en réalités.</span></li>
                                    <li><i className="bi bi-check-circle"></i> <span>Je vous aide à développer votre capacité à apprendre et à progresser</span></li>
                                </ul>
                                <p>"Je m'engage à personnaliser mon accompagnement en fonction de votre parcours unique et de vos objectifs spécifiques."</p>

                                <div className="watch-video d-flex align-items-center position-relative">
                                    <i className="bi bi-play-circle"></i>
                                    <a href="https://www.youtube.com/" className="glightbox stretched-link">Watch Video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
