import React, { useState, useEffect } from 'react';
import teamImage1 from '../assets/img/team/team-1.jpg'; // Assurez-vous que le chemin est correct
import teamImage2 from '../assets/img/team/team-2.jpg'; // Assurez-vous que le chemin est correct

const Team = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        // Charger les images lors du montage du composant
        setImages([teamImage1, teamImage2]);
    }, []);

    return (
        <main className="main">
            {/* Page Title */}
            <div className="page-title accent-background">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Équipe</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><a href="/">Accueil</a></li>
                            <li className="current">Équipe</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Team Section */}
            <section id="team" className="team section">
                <div className="container">
                    <div className="row gy-4">
                        {images.length > 0 && (
                            <>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                    <div className="team-member">
                                        <div className="member-img">
                                            <img src={images[0]} className="img-fluid" alt="Walter White" />
                                            <div className="social">
                                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>Walter White</h4>
                                            <span>Chief Executive Officer</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                    <div className="team-member">
                                        <div className="member-img">
                                            <img src={images[1]} className="img-fluid" alt="Sarah Jhonson" />
                                            <div className="social">
                                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>Sarah Jhonson</h4>
                                            <span>Product Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {/* Ajoute d'autres membres de l'équipe ici */}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Team;
