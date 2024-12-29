import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import accompagnementImg from '../../../assets/img/dpp.jpg';
import bilancompetImg from '../../../assets/img/bcm.jpg';
import schemacompoImg from '../../../assets/img/scomm3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AccompagnementItem {
    title: string;
    description: string;
    image: string;
    link: string;
}

const accompagnements: AccompagnementItem[] = [
    { title: 'Développement personnel et professionnel', description: 'Libérez votre potentiel et atteignez de nouveaux sommets dans votre vie personnelle et professionnelle.', image: accompagnementImg, link: '/PersonalProfessionalDevelopment' },
    { title: 'Bilan de compétences', description: 'Identifiez vos forces et vos aspirations pour construire une carrière épanouissante.', image: bilancompetImg, link: '/SkillsAssessment' },
    { title: 'Schéma comportementaux', description: 'Comprenez et transformez vos schémas comportementaux pour une vie plus équilibrée.', image: schemacompoImg, link: '/BehavioralPatterns' },
];

const Coaching = () => {
    // Utilisation de useState pour gérer l'état des cartes ou autre interaction

    useEffect(() => {
        // Initialisation d'AOS
        AOS.init({
            duration: 1200, // Durée plus longue pour accentuer l'animation
            easing: 'ease-out-back', // Animation fluide avec un effet de ressort
            once: true, // L'animation ne se déclenche qu'une seule fois
        });

        // Déclenchement de l'animation de manière conditionnelle si nécessaire
    }, []);

    return (
        <main className="main">
            <div className="page-title accent-background">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Accompagnement personnalisé</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li>
                                <NavLink to="index.html">Accueil</NavLink>
                            </li>
                            <li className="current">Accompagnement personnalisé</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <section id="accompagnement-personnalise" className="services section light-background">
                <div className="container">
                    <div className="row gy-4">
                        {accompagnements.map((item, index) => (
                            <div
                                className="col-lg-4 col-md-6 col-12"
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 200} // Retard dynamique pour chaque carte
                                data-aos-offset="200" // Accentue le déclenchement de l'animation plus tôt
                            >
                                <div className="service-item position-relative">
                                    <div className="card-wrapper">
                                        <div className="flip-card">
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <div className="card-image-container">
                                                        <img src={item.image} alt={item.title} className="card-img-top" />
                                                        <div className="overlay-text">
                                                            <h3>{item.title}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flip-card-back">
                                                    <div className="card-content">
                                                        <h3>{item.title}</h3>
                                                        <p>{item.description}</p>
                                                        <Link to={item.link} className="btn btn-primary">Détails</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Coaching;

