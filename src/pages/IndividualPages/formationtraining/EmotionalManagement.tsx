// // import React from 'react';
// // import { Row, Col, Container } from 'react-bootstrap';

// // // Définition du composant
// // const GestEmo: React.FC = () => {
// //     return (
// //         <div className="bg-black">
// //             <section
// //                 id="features"
// //                 className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30"
// //             >
// //                 <Container>
// //                     {/* Titre de la section */}
// //                     <div className="relative mx-auto max-w-5xl text-center">
// //                         <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
// //                             Why choose us
// //                         </span>
// //                         <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
// //                             Build a Website That Your Customers Love
// //                         </h2>
// //                         <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
// //                             Our templates allow for maximum customization. No technical skills required – our intuitive design tools
// //                             let you get the job done easily.
// //                         </p>
// //                     </div>

// //                     {/* Liste des fonctionnalités */}
// //                     <Row className="relative mx-auto max-w-7xl z-10 grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
// //                         <Col>
// //                             <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
// //                                 <div
// //                                     className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
// //                                     style={{
// //                                         backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)',
// //                                         borderColor: 'rgb(93, 79, 240)',
// //                                     }}
// //                                 >
// //                                     <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-color-swatch" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
// //                                         <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
// //                                         <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
// //                                         <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
// //                                         <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
// //                                         <line x1="17" y1="17" x2="17" y2="17.01"></line>
// //                                     </svg>
// //                                 </div>
// //                                 <h3 className="mt-6 text-gray-400">Customizable</h3>
// //                                 <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
// //                                     Tailor your landing page's look and feel, from the color scheme to the font size, to the design of the page.
// //                                 </p>
// //                             </div>
// //                         </Col>

// //                         <Col>
// //                             <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
// //                                 <div
// //                                     className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
// //                                     style={{
// //                                         backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)',
// //                                         borderColor: 'rgb(93, 79, 240)',
// //                                     }}
// //                                 >
// //                                     <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bolt" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
// //                                         <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
// //                                         <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
// //                                     </svg>
// //                                 </div>
// //                                 <h3 className="mt-6 text-gray-400">Fast Performance</h3>
// //                                 <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
// //                                     We build our templates for speed in mind, for super-fast load times so your customers never waver.
// //                                 </p>
// //                             </div>
// //                         </Col>

// //                         <Col>
// //                             <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
// //                                 <div
// //                                     className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
// //                                     style={{
// //                                         backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)',
// //                                         borderColor: 'rgb(93, 79, 240)',
// //                                     }}
// //                                 >
// //                                     <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
// //                                         <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
// //                                         <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
// //                                         <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
// //                                         <polyline points="12 8 7 3 3 7 8 12"></polyline>
// //                                         <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
// //                                         <polyline points="16 12 21 17 17 21 12 16"></polyline>
// //                                         <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
// //                                     </svg>
// //                                 </div>
// //                                 <h3 className="mt-6 text-gray-400">Fully Featured</h3>
// //                                 <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
// //                                     Everything you need to succeed and launch your landing page, right out of the box. No need to install anything else.
// //                                 </p>
// //                             </div>
// //                         </Col>
// //                     </Row>

// //                     {/* Décor du fond */}
// //                     <div
// //                         className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
// //                         style={{
// //                             backgroundImage: 'linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)',
// //                             borderColor: 'rgba(92, 79, 240, 0.2)',
// //                         }}
// //                     ></div>
// //                     <div
// //                         className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
// //                         style={{
// //                             backgroundImage: 'linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)',
// //                             borderColor: 'rgba(92, 79, 240, 0.2)',
// //                         }}
// //                     ></div>
// //                 </Container>
// //             </section>
// //         </div>
// //     );
// // };

// // export default GestEmo;

// import React, { useEffect, useState } from 'react';

// interface Service {
//     title: string;
//     description: string;
//     icon: string;
// }

// const EmotionalManagement = () => {
//     const [services, setServices] = useState<Service[]>([]);

//     useEffect(() => {
//         // Simuler une récupération de données
//         const fetchData = async () => {
//             const data: Service[] = [
//                 {
//                     title: "Settings",
//                     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//                     icon: "https://i.imgur.com/6NKPrhO.png",
//                 },
//                 {
//                     title: "Speedup",
//                     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//                     icon: "https://i.imgur.com/KMbnpFF.png",
//                 },
//                 {
//                     title: "Privacy",
//                     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//                     icon: "https://i.imgur.com/AgyneKA.png",
//                 },
//                 {
//                     title: "Backups",
//                     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//                     icon: "https://i.imgur.com/vdH9LKi.png",
//                 },
//                 {
//                     title: "SSL secured",
//                     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//                     icon: "https://i.imgur.com/v6OnUqu.png",
//                 },
//                 {
//                     title: "Database",
//                     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//                     icon: "https://i.imgur.com/VzjZw9M.png",
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
//                     <div className="text-center mt-5">
//                         <h1>Gestion des émotions</h1>
//                     </div>
//                     <div className="row gy-4">
//                         {services.map((service, index) => (
//                             <div key={index} className="col-md-4">
//                                 <div className="box">
//                                     <div className={`our-services ${service.title.toLowerCase()}`}>
//                                         <div className="icon">
//                                             <img src={service.icon} alt={service.title} />
//                                         </div>
//                                         <h4>{service.title}</h4>
//                                         <p>{service.description}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>



//             {/* Features Section */}

//             {/* <section id="features" className="features section">

//                 {/* Section Title */}
//             {/* <div className="container section-title" data-aos="fade-up">
//                     <h2>Features</h2>
//                     <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
//                 </div>End Section Title */}

//             {/* <div className="container">

//                     <div className="row gy-4"> */}

//             {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
//                             <div className="features-item">
//                                 <i className="bi bi-eye" style={{ color: '#ffbb2c' }}></i>
//                                 <h3><Link to="" className="stretched-link">Lorem Ipsum</Link></h3>
//                             </div>
//                         </div>End Feature Item */}

//             {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="200">
//                             <div className="features-item">
//                                 <i className="bi bi-infinity" style={{ color: '#5578ff' }}></i>
//                                 <h3><Link to="" className="stretched-link">Dolor Sitema</Link></h3>
//                             </div>
//                         </div>End Feature Item */}

//             {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="300">
//                             <div className="features-item">
//                                 <i className="bi bi-mortarboard" style={{ color: '#e80368' }}></i>
//                                 <h3><Link to="" className="stretched-link">Sed perspiciatis</Link></h3>
//                             </div>
//                         </div>End Feature Item */}

//             {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="400">
//                             <div className="features-item">
//                                 <i className="bi bi-nut" style={{ color: '#e361ff' }}></i>
//                                 <h3><Link to="" className="stretched-link">Magni Dolores</Link></h3>
//                             </div>
//                         </div>End Feature Item */}

//             {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="500">
//                             <div className="features-item">
//                                 <i className="bi bi-shuffle" style={{ color: '#47aeff' }}></i>
//                                 <h3><Link to="" className="stretched-link">Nemo Enim</Link></h3>
//                             </div>
//                         </div>End Feature Item */}

//             {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="600">
//                             <div className="features-item">
//                                 <i className="bi bi-star" style={{ color: '#ffa76e' }}></i>
//                                 <h3><Link to="" className="stretched-link">Eiusmod Tempor</Link></h3>
//                             </div>
//                         </div>End Feature Item */}

//             {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="700">
//                             <div className="features-item">
//                                 <i className="bi bi-x-diamond" style={{ color: '#11dbcf' }}></i>
//                                 <h3><Link to="" className="stretched-link">Midela Teren</Link></h3>
//                             </div>
//                         </div>End Feature Item */}

//             {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="800">
//                             <div className="features-item">
//                                 <i className="bi bi-camera-video" style={{ color: '#4233ff' }}></i>
//                                 <h3><Link to="" className="stretched-link">Pira Neve</Link></h3>
//                             </div>
//                         </div>End Feature Item */}

//             {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="900">
//                             <div className="features-item">
//                                 <i className="bi bi-command" style={{ color: '#b2904f' }}></i>
//                                 <h3><Link to="" className="stretched-link">Dirada Pack</Link></h3>
//                             </div>
//                         </div>End Feature Item */}
//             {/* 
//                         <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1000">
//                             <div className="features-item">
//                                 <i className="bi bi-dribbble" style={{ color: '#b20969' }}></i>
//                                 <h3><Link to="" className="stretched-link">Moton Ideal</Link></h3>
//                             </div>
//                         </div>End Feature Item */}
//             {/* 
//                         <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1100">
//                             <div className="features-item">
//                                 <i className="bi bi-activity" style={{ color: '#ff5828' }}></i>
//                                 <h3><Link to="" className="stretched-link">Verdo Park</Link></h3>
//                             </div>
//                         </div>End Feature Item */}

//             {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1200">
//                             <div className="features-item">
//                                 <i className="bi bi-brightness-high" style={{ color: '#29cc61' }}></i>
//                                 <h3><Link to="" className="stretched-link">Flavor Nivelanda</Link></h3>
//                             </div> */}
//             {/* </div>End Feature Item */}

//             {/* </div>

//                 </div> */}

//             {/* </section>/Features Section */}

//         </main>
//     );
// };

// export default EmotionalManagement;
// Importer les images de fond
import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import settingsImage from '../../../assets/img/working-1.jpg';
import speedupImage from '../../../assets/img/empowerment_12669243.png';
import privacyImage from '../../../assets/img/pressure_9675253.png';
import backupsImage from '../../../assets/img/meditation_9591459.png';
import sslImage from '../../../assets/img/empathy_15555957.png';
import databaseImage from '../../../assets/img/working-1.jpg';

// Importer les icônes locales
import pressureIcon from '../../../assets/img/pressure_9675253.png';
import developIcon from '../../../assets/img/conversion_7586499.png';
import stressIcon from '../../../assets/img/brainstrom_14995046.png';
import meditationIcon from '../../../assets/img/meditation_9591459.png';
import careIcon from '../../../assets/img/give-love_11685746.png';
import resilienceIcon from '../../../assets/img/charity_7221575.png';


// Import images...
// (keep all your existing imports)

interface Service {
    title: string;
    description: string;
    icon: string;
    backgroundImage?: string;  // Si tu veux garder cette propriété optionnelle
    backgroundColor?: string;  // Ajoute la nouvelle propriété ici
}

const EmotionalManagement = () => {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        // Keep your existing services data setup
        const data: Service[] = [
            {
                title: "Coaching émotionnel",
                description: "Un accompagnement sur mesure pour surmonter vos défis personnels.",
                icon: pressureIcon,
                backgroundImage: settingsImage,
            },
            {
                title: "Développement personnel",
                description: "Boostez votre confiance en vous et atteignez vos objectifs de vie.",
                icon: developIcon,
                backgroundImage: speedupImage,
            },
            {
                title: "Gestion du stress",
                description: "Apprenez des techniques efficaces pour réduire le stress et retrouver la sérénité.",
                icon: stressIcon,
                backgroundImage: privacyImage,
            },
            {
                title: "Méditation guidée",
                description: "Exercices de méditation pour apaiser votre esprit et vos émotions.",
                icon: meditationIcon,
                backgroundImage: backupsImage,
            },
            {
                title: "Prendre soin de soi",
                description: "Apprenez à prendre soin de vous pour mieux gérer vos émotions et votre énergie.",
                icon: careIcon,
                backgroundImage: sslImage,
            },
            {
                title: "Résilience émotionnelle",
                description: "Développez la résilience pour surmonter les défis émotionnels de la vie.",
                icon: resilienceIcon,
                backgroundImage: databaseImage,
            },
        ];
        setServices(data);
    }, []);

    const handleLearnMore = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        scroller.scrollTo(sectionId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

    return (
        <main className="main">
            <section id="services" className="services section light-background">
                <div className="container">
                    <div className="text-center mt-5">
                        <h1>Gestion des émotions - Coaching de vie</h1>
                    </div>
                    <div className="row gy-4">
                        {services.map((service, index) => {
                            const sectionId = `service-detail-${index}`;
                            return (
                                <div key={index} className="col-md-4">
                                    <div className="box">
                                        <div className={`our-services ${sectionId}`}>
                                            {/* Keep your existing image and content structure */}
                                            <div
                                                className="image"
                                                style={{
                                                    backgroundImage: `url(${service.backgroundImage})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    opacity: 1,
                                                    height: '100%',
                                                    zIndex: -1,
                                                }}
                                            />
                                            <div
                                                className="content"
                                                style={{
                                                    position: 'relative',
                                                    zIndex: 1,
                                                    textAlign: 'center',
                                                    padding: '20px',
                                                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                                    borderRadius: '10px',
                                                    height: '300px',
                                                    transition: 'transform 0.3s ease, background-color 0.3s ease',
                                                }}
                                            >
                                                {/* Keep your existing content structure */}
                                                <div className="icon" style={{ marginBottom: '10px' }}>
                                                    <img
                                                        src={service.icon}
                                                        alt={service.title}
                                                        style={{
                                                            width: '75px',
                                                            height: '75px',
                                                            position: 'relative',
                                                            top: '-30%',
                                                            zIndex: 2,
                                                        }}
                                                    />
                                                </div>
                                                <h4 style={{ color: 'white' }}>{service.title}</h4>
                                                <p style={{ color: 'white' }} className="short-description">
                                                    {service.description}
                                                </p>
                                                <p className="full-description" style={{ display: 'none', color: 'white' }}>
                                                    {service.description} Voici plus d'informations détaillées sur ce service et comment il peut vous aider à avancer dans votre vie.
                                                </p>

                                                <a
                                                    href={`#${sectionId}`}
                                                    onClick={(e) => handleLearnMore(e, sectionId)}
                                                    style={{
                                                        color: '#fff',
                                                        textDecoration: 'none',
                                                        display: 'inline-block',
                                                        marginTop: '20px',
                                                        backgroundColor: '#ffa500',
                                                        padding: '5px 10px',
                                                        borderRadius: '25px',
                                                        textAlign: 'center',
                                                        transition: 'background-color 0.3s ease',
                                                        position: 'absolute',
                                                        bottom: '10px',
                                                        left: '50%',
                                                        transform: 'translateX(-50%)',
                                                        zIndex: 10,
                                                    }}
                                                    className="btn-learn-more"
                                                >
                                                    En savoir plus
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Detail sections */}
            {services.map((service, index) => {
                const sectionId = `service-detail-${index}`;
                return (
                    <section
                        key={index}
                        id={sectionId}
                        className="service-detail-section"
                        style={{
                            padding: '50px 0',
                            background: `url(${service.backgroundImage}) no-repeat center center`,
                            backgroundSize: 'cover',
                            minHeight: '80vh', // Ensure full viewport height
                        }}
                    >
                        <div className="container text-center">
                            <h2 style={{ color: 'white' }}>{service.title}</h2>
                            <p style={{ color: 'white' }}>{service.description}</p>
                            <p style={{ color: 'white' }}>Détails supplémentaires à venir...</p>
                        </div>
                    </section>
                );
            })}

            {/* Keep your existing styles */}
            <style>
                {/* ... your existing styles ... */}
            </style>
        </main>
    );
};

export default EmotionalManagement;