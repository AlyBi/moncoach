import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState<any[]>([]);

    useEffect(() => {
        // Simuler une récupération de données
        const fetchData = async () => {
            const data = [
                {
                    title: "Développement Personnel",
                    description: "Développez votre potentiel et transformez votre vie avec notre approche unique de développement personnel.",
                    icon: "bi-award",
                    delay: 100,
                    color: "item-cyan"
                },
                {
                    title: "Coaching en Innovation et Créativité",
                    description: "Découvrez de nouvelles perspectives et libérez votre potentiel grâce à une approche innovante et créative.",
                    icon: "bi-lightbulb",
                    delay: 200,
                    color: "item-orange"
                },
                {
                    title: "Stratégies de Croissance d'Entreprise",
                    description: "Boostez la croissance de votre entreprise avec des stratégies innovantes et une vision audacieuse.",
                    icon: "bi-graph-up",
                    delay: 300,
                    color: "item-teal"
                },
                {
                    title: "Équilibre Vie Professionnelle et Vie Personnelle",
                    description: "Atteignez l'équilibre parfait entre vie professionnelle et personnelle grâce à notre approche innovante et équilibrée.",
                    icon: "bi-yin-yang",
                    delay: 400,
                    color: "item-red"
                },
                {
                    title: "Leadership et Gestion d'Équipe",
                    description: "Renforcez votre leadership et optimisez la gestion de votre équipe grâce à des stratégies impactantes et visionnaires.",
                    icon: "bi-people",
                    delay: 500,
                    color: "item-indigo"
                },
                {
                    title: "Accompagnement des adolescents",
                    description: "Aidez vos adolescents à s'épanouir avec des solutions adaptées et une approche bienveillante.",
                    icon: "bi-heart",
                    delay: 600,
                    color: "item-pink"
                },
            ];
            setServices(data);
        };

        fetchData();
    }, []);

    return (
        <main className="main">

            {/* Services Section */}
            <section id="services" className="services section light-background">
                <div className="container">
                    <div className="row gy-4">
                        {services.map((service, index) => (
                            <div className={`col-lg-4 col-md-6`} data-aos="fade-up" data-aos-delay={service.delay} key={index}>
                                <div className={`service-item ${service.color} position-relative`}>
                                    <div className="icon">
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                                        </svg>
                                        <i className={`bi ${service.icon}`}></i>
                                    </div>
                                    <Link to="/service-details" className="stretched-link">
                                        <h3>{service.title}</h3>
                                    </Link>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}

            {/* <section id="features" className="features section">

                {/* Section Title */}
            {/* <div className="container section-title" data-aos="fade-up">
                    <h2>Features</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>End Section Title */}

            {/* <div className="container">

                    <div className="row gy-4"> */}

            {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="features-item">
                                <i className="bi bi-eye" style={{ color: '#ffbb2c' }}></i>
                                <h3><Link to="" className="stretched-link">Lorem Ipsum</Link></h3>
                            </div>
                        </div>End Feature Item */}

            {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="features-item">
                                <i className="bi bi-infinity" style={{ color: '#5578ff' }}></i>
                                <h3><Link to="" className="stretched-link">Dolor Sitema</Link></h3>
                            </div>
                        </div>End Feature Item */}

            {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="features-item">
                                <i className="bi bi-mortarboard" style={{ color: '#e80368' }}></i>
                                <h3><Link to="" className="stretched-link">Sed perspiciatis</Link></h3>
                            </div>
                        </div>End Feature Item */}

            {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="400">
                            <div className="features-item">
                                <i className="bi bi-nut" style={{ color: '#e361ff' }}></i>
                                <h3><Link to="" className="stretched-link">Magni Dolores</Link></h3>
                            </div>
                        </div>End Feature Item */}

            {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="500">
                            <div className="features-item">
                                <i className="bi bi-shuffle" style={{ color: '#47aeff' }}></i>
                                <h3><Link to="" className="stretched-link">Nemo Enim</Link></h3>
                            </div>
                        </div>End Feature Item */}

            {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="600">
                            <div className="features-item">
                                <i className="bi bi-star" style={{ color: '#ffa76e' }}></i>
                                <h3><Link to="" className="stretched-link">Eiusmod Tempor</Link></h3>
                            </div>
                        </div>End Feature Item */}

            {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="700">
                            <div className="features-item">
                                <i className="bi bi-x-diamond" style={{ color: '#11dbcf' }}></i>
                                <h3><Link to="" className="stretched-link">Midela Teren</Link></h3>
                            </div>
                        </div>End Feature Item */}

            {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="800">
                            <div className="features-item">
                                <i className="bi bi-camera-video" style={{ color: '#4233ff' }}></i>
                                <h3><Link to="" className="stretched-link">Pira Neve</Link></h3>
                            </div>
                        </div>End Feature Item */}

            {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="900">
                            <div className="features-item">
                                <i className="bi bi-command" style={{ color: '#b2904f' }}></i>
                                <h3><Link to="" className="stretched-link">Dirada Pack</Link></h3>
                            </div>
                        </div>End Feature Item */}
            {/* 
                        <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1000">
                            <div className="features-item">
                                <i className="bi bi-dribbble" style={{ color: '#b20969' }}></i>
                                <h3><Link to="" className="stretched-link">Moton Ideal</Link></h3>
                            </div>
                        </div>End Feature Item */}
            {/* 
                        <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1100">
                            <div className="features-item">
                                <i className="bi bi-activity" style={{ color: '#ff5828' }}></i>
                                <h3><Link to="" className="stretched-link">Verdo Park</Link></h3>
                            </div>
                        </div>End Feature Item */}

            {/* <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1200">
                            <div className="features-item">
                                <i className="bi bi-brightness-high" style={{ color: '#29cc61' }}></i>
                                <h3><Link to="" className="stretched-link">Flavor Nivelanda</Link></h3>
                            </div> */}
            {/* </div>End Feature Item */}

            {/* </div>

                </div> */}

            {/* </section>/Features Section */}

        </main>
    );
};

export default Services;
