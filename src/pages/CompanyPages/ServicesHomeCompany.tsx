import React, { useEffect, useState } from 'react';

interface Service {
    title: string;
    description: string;
    icon: string;
}

const Services: React.FC = () => {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        // Simuler une récupération de données
        const fetchData = async () => {
            const data: Service[] = [
                {
                    title: "Settings",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    icon: "https://i.imgur.com/6NKPrhO.png",
                },
                {
                    title: "Speedup",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    icon: "https://i.imgur.com/KMbnpFF.png",
                },
                {
                    title: "Privacy",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    icon: "https://i.imgur.com/AgyneKA.png",
                },
                {
                    title: "Backups",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    icon: "https://i.imgur.com/vdH9LKi.png",
                },
                {
                    title: "SSL secured",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    icon: "https://i.imgur.com/v6OnUqu.png",
                },
                {
                    title: "Database",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    icon: "https://i.imgur.com/VzjZw9M.png",
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
                    <div className="text-center mt-5">
                        <h1>Our Services</h1>
                    </div>
                    <div className="row gy-4">
                        {services.map((service, index) => (
                            <div key={index} className="col-md-4">
                                <div className="box">
                                    <div className={`our-services ${service.title.toLowerCase()}`}>
                                        <div className="icon">
                                            <img src={service.icon} alt={service.title} />
                                        </div>
                                        <h4>{service.title}</h4>
                                        <p>{service.description}</p>
                                    </div>
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
