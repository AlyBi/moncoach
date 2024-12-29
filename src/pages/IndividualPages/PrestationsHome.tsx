// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const Services = () => {
//     const [services, setServices] = useState<any[]>([]);

//     useEffect(() => {
//         // Simuler une récupération de données
//         const fetchData = async () => {
//             const data = [
//                 {
//                     title: "Développement Personnel",
//                     description: "Développez votre potentiel et transformez votre vie avec notre approche unique de développement personnel.",
//                     icon: "bi-award",
//                     delay: 100,
//                     color: "item-cyan"
//                 },
//                 {
//                     title: "Coaching en Innovation et Créativité",
//                     description: "Découvrez de nouvelles perspectives et libérez votre potentiel grâce à une approche innovante et créative.",
//                     icon: "bi-lightbulb",
//                     delay: 200,
//                     color: "item-orange"
//                 },
//                 {
//                     title: "Stratégies de Croissance d'Entreprise",
//                     description: "Boostez la croissance de votre entreprise avec des stratégies innovantes et une vision audacieuse.",
//                     icon: "bi-graph-up",
//                     delay: 300,
//                     color: "item-teal"
//                 },
//                 {
//                     title: "Équilibre Vie Professionnelle et Vie Personnelle",
//                     description: "Atteignez l'équilibre parfait entre vie professionnelle et personnelle grâce à notre approche innovante et équilibrée.",
//                     icon: "bi-yin-yang",
//                     delay: 400,
//                     color: "item-red"
//                 },
//                 {
//                     title: "Leadership et Gestion d'Équipe",
//                     description: "Renforcez votre leadership et optimisez la gestion de votre équipe grâce à des stratégies impactantes et visionnaires.",
//                     icon: "bi-people",
//                     delay: 500,
//                     color: "item-indigo"
//                 },
//                 {
//                     title: "Accompagnement des adolescents",
//                     description: "Aidez vos adolescents à s'épanouir avec des solutions adaptées et une approche bienveillante.",
//                     icon: "bi-heart",
//                     delay: 600,
//                     color: "item-pink"
//                 },
//             ];
//             setServices(data);
//         };

//         fetchData();
//     }, []);

//     return (
//         <main className="main">

//             {/* Services Section */}
//             <section id="services" className="services section light-background">
//                 <div className="container">
//                     <div className="row gy-4">
//                         {services.map((service, index) => (
//                             <div className={`col-lg-4 col-md-6`} data-aos="fade-up" data-aos-delay={service.delay} key={index}>
//                                 <div className={`service-item ${service.color} position-relative`}>
//                                     <div className="icon">
//                                         <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
//                                             <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
//                                         </svg>
//                                         <i className={`bi ${service.icon}`}></i>
//                                     </div>
//                                     <Link to="/service-details" className="stretched-link">
//                                         <h3>{service.title}</h3>
//                                     </Link>
//                                     <p>{service.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Features Section */}

//             {/* <section id="features" className="features section">

//             //     {/* Section Title */}
//             {/* <div className="container section-title" data-aos="fade-up">
//             //         <h2>Features</h2>
//             //         <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
//             //     </div>End Section Title */}

//             {/* <div className="container">

//             //         <div className="row gy-4"> */}

//             {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
//             //                 <div className="features-item">
//             //                     <i className="bi bi-eye" style={{ color: '#ffbb2c' }}></i>
//             //                     <h3><Link to="" className="stretched-link">Lorem Ipsum</Link></h3>
//             //                 </div>
//             //             </div>End Feature Item */}

//             {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="200">
//             //                 <div className="features-item">
//             //                     <i className="bi bi-infinity" style={{ color: '#5578ff' }}></i>
//             //                     <h3><Link to="" className="stretched-link">Dolor Sitema</Link></h3>
//             //                 </div>
//             //             </div>End Feature Item */}

//             {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="300">
//             //                 <div className="features-item">
//             //                     <i className="bi bi-mortarboard" style={{ color: '#e80368' }}></i>
//             //                     <h3><Link to="" className="stretched-link">Sed perspiciatis</Link></h3>
//             //                 </div>
//             //             </div>End Feature Item */}

//             {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="400">
//             //                 <div className="features-item">
//             //                     <i className="bi bi-nut" style={{ color: '#e361ff' }}></i>
//             //                     <h3><Link to="" className="stretched-link">Magni Dolores</Link></h3>
//             //                 </div>
//             //             </div>End Feature Item */}

//             {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="500">
//             //                 <div className="features-item">
//             //                     <i className="bi bi-shuffle" style={{ color: '#47aeff' }}></i>
//             //                     <h3><Link to="" className="stretched-link">Nemo Enim</Link></h3>
//             //                 </div>
//             //             </div>End Feature Item */}

//             {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="600">
//             //                 <div className="features-item">
//             //                     <i className="bi bi-star" style={{ color: '#ffa76e' }}></i>
//             //                     <h3><Link to="" className="stretched-link">Eiusmod Tempor</Link></h3>
//             //                 </div>
//             //             </div>End Feature Item */}

//             {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="700">
//             //                 <div className="features-item">
//             //                     <i className="bi bi-x-diamond" style={{ color: '#11dbcf' }}></i>
//             //                     <h3><Link to="" className="stretched-link">Midela Teren</Link></h3>
//             //                 </div>
//             //             </div>End Feature Item */}

//             {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="800">
//             //                 <div className="features-item">
//             //                     <i className="bi bi-camera-video" style={{ color: '#4233ff' }}></i>
//             //                     <h3><Link to="" className="stretched-link">Pira Neve</Link></h3>
//             //                 </div>
//             //             </div>End Feature Item */}

//             {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="900">
//             //                 <div className="features-item">
//             //                     <i className="bi bi-command" style={{ color: '#b2904f' }}></i>
//             //                     <h3><Link to="" className="stretched-link">Dirada Pack</Link></h3>
//             //                 </div>
//             //             </div>End Feature Item */}
//             {/*
//             //             <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1000">
//             //                 <div className="features-item">
//             //                     <i className="bi bi-dribbble" style={{ color: '#b20969' }}></i>
//             //                     <h3><Link to="" className="stretched-link">Moton Ideal</Link></h3>
//             //                 </div>
//             //             </div>End Feature Item */}
//             {/*
//             //             <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1100">
//             //                 <div className="features-item">
//             //                     <i className="bi bi-activity" style={{ color: '#ff5828' }}></i>
//             //                     <h3><Link to="" className="stretched-link">Verdo Park</Link></h3>
//             //                 </div>
//             //             </div>End Feature Item */}

//             {/* // {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1200">
//             //                 <div className="features-item">
//             //                     <i className="bi bi-brightness-high" style={{ color: '#29cc61' }}></i>
//             //                     <h3><Link to="" className="stretched-link">Flavor Nivelanda</Link></h3>
//             //                 </div> */}
//             {/* // </div>End Feature Item */}

//             {/* </div> */}

//             {/* //     </div> */}

//             {/* // </section>/Features Section */}

//         {/* </main> */}
//     {/* // );
// // };

// // export default Services; */}

// Assure-toi que ce fichier CSS est bien inclus pour l'effet de rotation

// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import formationImg from '../../assets/img/gestion-emotion/gestion-emotion4.jpg';
// import accompagnementImg from '../../assets/img/parentalité/parentalité (2).jpg';
// // import developpementImg from '../../assets/img/comefficacité/coefficacité (6).jpg';
// import projetFamilialImg from '../../assets/img/comefficacité/coefficacité (6).jpg';
// import coachingImg from '../../assets/img/comefficacité/coefficacité (6).jpg';
// import svstImg from '../../assets/img/comefficacité/coefficacité (6).jpg';
// import organisationFamilialeImg from '../../assets/img/comefficacité/coefficacité (6).jpg';

// const Services = () => {
//     const location = useLocation();
//     const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});
//     const [isMobile, setIsMobile] = useState(false);

//     // Détecter la taille de l'écran pour adapter l'affichage sur mobile
//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 768);  // Si l'écran est plus petit que 768px
//         };
//         handleResize(); // Vérification initiale
//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     useEffect(() => {
//         // Vérifier si l'URL contient une ancre (hash)
//         if (location.hash) {
//             const element = document.querySelector(location.hash);
//             if (element) {
//                 element.scrollIntoView({ behavior: 'smooth' });
//             }
//         }
//     }, [location]);

//     const handleFlip = (index: number) => {
//         setFlippedCards((prev) => ({
//             ...prev,
//             [index]: !prev[index],
//         }));
//     };

//     return (
//         <main className="main">
//             {/* Page Title */}
//             <div className="page-title accent-background">
//                 <div className="container d-lg-flex justify-content-between align-items-center">
//                     <h1 className="mb-2 mb-lg-0">Nos Services</h1>
//                     <nav className="breadcrumbs">
//                         <ol>
//                             <li><Link to="/">Accueil</Link></li>
//                             <li className="current">Services</li>
//                         </ol>
//                     </nav>
//                 </div>
//             </div>

//             {/* Formation Section */}
//             <section id="formation" className="services section light-background">
//                 <div className="container">
//                     <h2>Formation</h2>
//                     <div className="row gy-4">
//                         {[formationImg, formationImg, formationImg].map((img, index) => (
//                             <div className={`col-lg-4 col-md-6`} key={index}>
//                                 <div className="service-item position-relative">
//                                     <div className="card-wrapper">
//                                         <div className={`flip-card ${flippedCards[index] ? 'flipped' : ''}`}>
//                                             <div className="flip-card-inner">
//                                                 <div className="flip-card-front">
//                                                     <div className="card-image-container">
//                                                         <img src={img} alt={`Formation ${index}`} className="card-img-top" />
//                                                         <div className="overlay-text">
//                                                             <h3>Formation {index + 1}</h3>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="flip-card-back">
//                                                     <div className="card-content">
//                                                         <h3>Formation {index + 1}</h3>
//                                                         <p>Description de la formation.</p>
//                                                         <Link to="/formation-details" className="btn btn-primary">Détails</Link>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {isMobile && !flippedCards[index] && (
//                                         <button
//                                             className="btn-en-savoir-plus"
//                                             onClick={() => handleFlip(index)}
//                                         >
//                                             En savoir plus
//                                         </button>
//                                     )}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Accompagnement personnalisé Section */}
//             <section id="accompagnement-personnalise" className="services section light-background">
//                 <div className="container">
//                     <h2>Accompagnement personnalisé</h2>
//                     <div className="row gy-4">
//                         {[accompagnementImg, accompagnementImg, accompagnementImg].map((img, index) => (
//                             <div className={`col-lg-4 col-md-6`} key={index}>
//                                 <div className="service-item position-relative">
//                                     <div className="card-wrapper">
//                                         <div className={`flip-card ${flippedCards[index + 3] ? 'flipped' : ''}`}>
//                                             <div className="flip-card-inner">
//                                                 <div className="flip-card-front">
//                                                     <div className="card-image-container">
//                                                         <img src={img} alt={`Accompagnement ${index}`} className="card-img-top" />
//                                                         <div className="overlay-text">
//                                                             <h3>Accompagnement {index + 1}</h3>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="flip-card-back">
//                                                     <div className="card-content">
//                                                         <h3>Accompagnement {index + 1}</h3>
//                                                         <p>Description de l'accompagnement.</p>
//                                                         <Link to="/accompagnement-details" className="btn btn-primary">Détails</Link>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {isMobile && !flippedCards[index + 3] && (
//                                         <button
//                                             className="btn-en-savoir-plus"
//                                             onClick={() => handleFlip(index + 3)}
//                                         >
//                                             En savoir plus
//                                         </button>
//                                     )}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Développement personnel et professionnel Section
//             <section id="developpement" className="services section light-background">
//                 <div className="container">
//                     <h2>Développement personnel et professionnel</h2>
//                     <div className="row gy-4">
//                         {[developpementImg, developpementImg, developpementImg].map((img, index) => (
//                             <div className={`col-lg-4 col-md-6`} key={index}>
//                                 <div className="service-item position-relative">
//                                     <div className="card-wrapper">
//                                         <div className={`flip-card ${flippedCards[index + 6] ? 'flipped' : ''}`}>
//                                             <div className="flip-card-inner">
//                                                 <div className="flip-card-front">
//                                                     <div className="card-image-container">
//                                                         <img src={img} alt={`Développement ${index}`} className="card-img-top" />
//                                                         <div className="overlay-text">
//                                                             <h3>Développement {index + 1}</h3>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="flip-card-back">
//                                                     <div className="card-content">
//                                                         <h3>Développement {index + 1}</h3>
//                                                         <p>Description du développement.</p>
//                                                         <Link to="/developpement-details" className="btn btn-primary">Détails</Link>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {isMobile && !flippedCards[index + 6] && (
//                                         <button
//                                             className="btn-en-savoir-plus"
//                                             onClick={() => handleFlip(index + 6)}
//                                         >
//                                             En savoir plus
//                                         </button>
//                                     )}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section> */}

//             {/* Parcours d’accompagnement Section */}
//             <section id="parcours-accompagnement" className="services section light-background">
//                 <div className="container">
//                     <h2>Parcours d’accompagnement</h2>
//                     <div className="row gy-4">
//                         {[projetFamilialImg, coachingImg, svstImg, organisationFamilialeImg].map((img, index) => (
//                             <div className={`col-lg-3 col-md-6`} key={index}>
//                                 <div className="service-item position-relative">
//                                     <div className="card-wrapper">
//                                         <div className={`flip-card ${flippedCards[index + 9] ? 'flipped' : ''}`}>
//                                             <div className="flip-card-inner">
//                                                 <div className="flip-card-front">
//                                                     <div className="card-image-container">
//                                                         <img src={img} alt={`Parcours ${index}`} className="card-img-top" />
//                                                         <div className="overlay-text">
//                                                             <h3>Parcours {index + 1}</h3>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="flip-card-back">
//                                                     <div className="card-content">
//                                                         <h3>Parcours {index + 1}</h3>
//                                                         <p>Description du parcours.</p>
//                                                         <Link to="/parcours-details" className="btn btn-primary">Détails</Link>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {isMobile && !flippedCards[index + 9] && (
//                                         <button
//                                             className="btn-en-savoir-plus"
//                                             onClick={() => handleFlip(index + 9)}
//                                         >
//                                             En savoir plus
//                                         </button>
//                                     )}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default Services;
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// // Importation des images
// import formationImg from '../../assets/img/gestion-emotion/gestion-emotion4.jpg';
// import accompagnementImg from '../../assets/img/parentalité/parentalité (2).jpg';
// import projetFamilialImg from '../../assets/img/comefficacité/coefficacité (6).jpg';
// import coachingImg from '../../assets/img/comefficacité/coefficacité (6).jpg';
// import svstImg from '../../assets/img/comefficacité/coefficacité (6).jpg';
// import organisationFamilialeImg from '../../assets/img/comefficacité/coefficacité (6).jpg';

// const Services: React.FC = () => {
//     const location = useLocation();
//     const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});
//     const [isMobile, setIsMobile] = useState(false);

//     // Détecter la taille de l'écran pour adapter l'affichage sur mobile
//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 768);  // Si l'écran est plus petit que 768px
//         };
//         handleResize(); // Vérification initiale
//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     useEffect(() => {
//         // Vérifier si l'URL contient une ancre (hash)
//         if (location.hash) {
//             const element = document.querySelector(location.hash);
//             if (element) {
//                 element.scrollIntoView({ behavior: 'smooth' });
//             }
//         }
//     }, [location]);

//     // Fonction pour gérer le flip de la carte
//     const handleFlip = (index: number) => {
//         setFlippedCards((prev) => ({
//             ...prev,
//             [index]: !prev[index],
//         }));
//     };

//     // Données pour les cartes
//     const formations = [
//         { title: 'Gestion des émotions', description: 'Maîtrisez vos émotions pour naviguer sereinement à travers les défis de la vie.', image: formationImg, link: '/formation-details/1' },
//         { title: 'Parentalité', description: 'Élevez vos enfants avec amour et sagesse pour un avenir harmonieux.', image: formationImg, link: '/formation-details/2' },
//         { title: 'Communiquer avec efficacité', description: 'Développez des compétences de communication pour des échanges authentiques et constructifs.', image: formationImg, link: '/formation-details/3' },
//     ];

//     const accompagnements = [
//         { title: 'Développement personnel et professionnel', description: 'Libérez votre potentiel et atteignez de nouveaux sommets dans votre vie personnelle et professionnelle.', image: accompagnementImg, link: '/accompagnement-details/1' },
//         { title: 'Bilan de compétences', description: 'Identifiez vos forces et vos aspirations pour construire une carrière épanouissante.', image: accompagnementImg, link: '/accompagnement-details/2' },
//         { title: 'Schéma comportementaux', description: 'Comprenez et transformez vos schémas comportementaux pour une vie plus équilibrée.', image: accompagnementImg, link: '/accompagnement-details/3' },
//     ];

//     const parcoursAccompagnement = [
//         { title: 'Life Design Coaching', description: 'Créez la vie de vos rêves avec un accompagnement personnalisé en life design coaching.', image: projetFamilialImg, link: '/parcours-details/1' },
//         { title: 'Système de Valeurs, Stratégies et Tactiques', description: 'Optimisez vos stratégies et tactiques pour aligner vos actions avec vos valeurs profondes.', image: coachingImg, link: '/parcours-details/2' },
//         { title: 'Organisation familiale', description: "Améliorez l'harmonie et l'efficacité de votre foyer grâce à une organisation familiale optimale.", image: svstImg, link: '/parcours-details/3' },
//         { title: 'Élaborer un projet familial halal et tayiib', description: 'Concevez un projet familial éthique et prospère, en accord avec vos valeurs.', image: organisationFamilialeImg, link: '../IndividualPages/SupportRoute/HalalProject.tsx' },
//     ];

//     // Fonction pour rendre une carte
//     const renderCard = (item: { title: string; description: string; image: string; link: string }, index: number, sectionIndex: number, columnClass: string) => (
//         <div className={columnClass} key={index}>
//             <div className="service-item position-relative">
//                 <div className="card-wrapper">
//                     <div className={`flip-card ${flippedCards[index + sectionIndex] ? 'flipped' : ''}`}>
//                         <div className="flip-card-inner">
//                             <div className="flip-card-front">
//                                 <div className="card-image-container">
//                                     <img src={item.image} alt={`${item.title}`} className="card-img-top" />
//                                     <div className="overlay-text">
//                                         <h3>{item.title}</h3>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="flip-card-back">
//                                 <div className="card-content">
//                                     <h3>{item.title}</h3>
//                                     <p>{item.description}</p>
//                                     <Link to={item.link} className="btn btn-primary">Détails</Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {isMobile && !flippedCards[index + sectionIndex] && (
//                     <button
//                         className="btn-en-savoir-plus"
//                         onClick={() => handleFlip(index + sectionIndex)}
//                     >
//                         En savoir plus
//                     </button>
//                 )}
//             </div>
//         </div>
//     );

//     return (
//         <main className="main">
//             {/* Page Title */}
//             <div className="page-title accent-background">
//                 <div className="container d-lg-flex justify-content-between align-items-center">
//                     <h1 className="mb-2 mb-lg-0">Nos Services</h1>
//                     <nav className="breadcrumbs">
//                         <ol>
//                             <li><Link to="/">Accueil</Link></li>
//                             <li className="current">Services</li>
//                         </ol>
//                     </nav>
//                 </div>
//             </div>

//             {/* Formation Section */}
//             <section id="formation" className="services section light-background">
//                 <div className="container">
//                     <h2>Formation</h2>
//                     <div className="row gy-4">
//                         {formations.map((item, index) => renderCard(item, index, 0, 'col-lg-4 col-md-6 col-12'))}
//                     </div>
//                 </div>
//             </section>

//             {/* Accompagnement personnalisé Section */}
//             <section id="accompagnement-personnalise" className="services section light-background">
//                 <div className="container">
//                     <h2>Accompagnement personnalisé</h2>
//                     <div className="row gy-4">
//                         {accompagnements.map((item, index) => renderCard(item, index, 3, 'col-lg-4 col-md-6 col-12'))}
//                     </div>
//                 </div>
//             </section>

//             {/* Parcours d’accompagnement Section */}
//             <section id="parcours-accompagnement" className="services section light-background">
//                 <div className="container">
//                     <h2>Parcours d’accompagnement</h2>
//                     <div className="row gy-4">
//                         {parcoursAccompagnement.map((item, index) => renderCard(item, index, 6, 'col-lg-3 col-md-4 col-6'))}
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default Services;
import React from 'react';
import { NavLink } from 'react-router-dom';
import Formation from './formationtraining/Formation';
import Coaching from './PersonalizedSupport/Coaching';
import CoachingJourney from './SupportRoute/CoachingJourney';

const Services = () => {
    return (
        <main className="main">
            <div className="page-title accent-background">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Nos Services</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><NavLink to="/">Accueil</NavLink></li>
                            <li className="current">Services</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <Formation />
            <Coaching />
            <CoachingJourney />
        </main>
    );
};

export default Services;
