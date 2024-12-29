import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import projetFamilialImg from '../../../assets/img/ldc.jpg';
import coachingImg from '../../../assets/img/svst.jpg';
import svstImg from '../../../assets/img/fml1.jpg';
import organisationFamilialeImg from '../../../assets/img/projethalal/PH1 (5).jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ParcoursItem {
    title: string;
    description: string;
    image: string;
    link: string;
}

const parcoursAccompagnement: ParcoursItem[] = [
    { title: 'Life Design Coaching', description: 'Créez la vie de vos rêves avec un accompagnement personnalisé en life design coaching.', image: projetFamilialImg, link: '/LifeDesignCoaching' },
    { title: 'Système de Valeurs, Stratégies et Tactiques', description: 'Optimisez vos stratégies et tactiques pour aligner vos actions avec vos valeurs profondes.', image: coachingImg, link: '/ValuesSystem' },
    { title: 'Organisation familiale', description: "Améliorez l'harmonie et l'efficacité de votre foyer grâce à une organisation familiale optimale.", image: svstImg, link: '/FamilyOrganization' },
    { title: 'Élaborer un projet familial halal et tayiib', description: 'Concevez un projet familial éthique et prospère, en accord avec vos valeurs.', image: organisationFamilialeImg, link: './HalalTayiibFamilyProject' },
];

const CoachingJourney = () => {
    // Utilisation de useEffect pour gérer l'initialisation d'AOS

    useEffect(() => {
        // Initialisation d'AOS
        AOS.init({
            duration: 1500, // Durée plus longue pour accentuer l'animation
            easing: 'ease-out-back', // Animation fluide avec un effet de ressort
            once: true, // L'animation ne se déclenche qu'une seule fois
        });

        // Déclenchement de l'animation de manière conditionnelle si nécessaire
        // Déclenchement de l'animation après un délai de 500ms
        const timeout = setTimeout(() => {
            AOS.refresh();
        }, 500);

        return () => clearTimeout(timeout); // Nettoyage du timeout

    }, []); // Add this line to close the useEffect hook

    return (
        <main className="main">
            <div className="page-title accent-background">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Parcours d’accompagnement</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li>
                                <NavLink to="index.html">Accueil</NavLink>
                            </li>
                            <li className="current">Parcours d’accompagnement</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <section id="parcours-accompagnement" className="services section light-background">
                <div className="container">
                    <div className="row gy-4">
                        {parcoursAccompagnement.map((item, index) => (
                            <div
                                className="col-lg-3 col-md-4 col-6"
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

export default CoachingJourney;
