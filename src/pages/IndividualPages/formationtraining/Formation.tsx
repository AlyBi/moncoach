import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import formationImg from '../../../assets/img/gestion-emotion/gestion-emotion.jpg';
import parentaliteImg from '../../../assets/img/parentalité/parentalité (9).jpg';
import comImg from '../../../assets/img/comefficacité/cae.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface FormationItem {
    title: string;
    description: string;
    image: string;
    link: string;
}

const formations: FormationItem[] = [
    { title: 'Gestion des émotions', description: 'Maîtrisez vos émotions pour naviguer sereinement à travers les défis de la vie.', image: formationImg, link: '/EmotionalManagement' },
    { title: 'Parentalité', description: 'Élevez vos enfants avec amour et sagesse pour un avenir harmonieux.', image: parentaliteImg, link: '/Parenting' },
    { title: 'Communiquer avec efficacité', description: 'Développez des compétences de communication pour des échanges authentiques et constructifs.', image: comImg, link: '/EffectiveCommunication' },
];

const Formation: React.FC = () => {
    // Utilisation de useState et useEffect pour initialiser l'animation AOS
    useEffect(() => {
        AOS.init({
            duration: 1200, // Durée des animations
            easing: 'ease-out-back', // Utilisation d'un effet de ressort pour l'animation
            once: true, // L'animation ne se déclenche qu'une seule fois
        });
    }, []);

    return (
        <main className="main">
            <div className="page-title accent-background">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Formation</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li>
                                <NavLink to="index.html">Accueil</NavLink>
                            </li>
                            <li className="current">Formation</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <section id="formation" className="services section light-background">
                <div className="container">

                    <div className="row gy-4">
                        {formations.map((item, index) => (
                            <div
                                className="col-lg-4 col-md-6 col-12"
                                key={index}
                                data-aos="fade-up" // Effet de remontée
                                data-aos-delay={index * 300} // Décalage d'animation pour chaque carte
                                data-aos-offset="200" // Déclenchement de l'animation avant que l'élément soit entièrement visible
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

export default Formation;
