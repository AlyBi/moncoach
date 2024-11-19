// import React from 'react';

// const Team = () => (
//     <main className="main">
//         {/* Page Title */}


//         {/* Team Section */}
//         <section id="team" className="team section light-background">


//             <div className="container section-title" data-aos="fade-up">
//                 <h2>Our Team</h2>
//                 <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
//             </div>

//             <div className="container">

//                 <div className="row gy-4">
//                     <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
//                         <div className="team-member">
//                             <div className="member-img">
//                                 <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="Walter White" />
//                                 <div className="social">
//                                     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
//                                     <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
//                                     <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
//                                     <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
//                                 </div>
//                             </div>
//                             <div className="member-info">
//                                 <h4>Walter White</h4>
//                                 <span>Chief Executive Officer</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
//                         <div className="team-member">
//                             <div className="member-img">
//                                 <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="Sarah Jhonson" />
//                                 <div className="social">
//                                     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
//                                     <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
//                                     <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
//                                     <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
//                                 </div>
//                             </div>
//                             <div className="member-info">
//                                 <h4>Sarah Jhonson</h4>
//                                 <span>Product Manager</span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Ajoute d'autres membres de l'équipe ici */}
//                 </div>
//             </div>
//         </section>
//     </main>
// );

// export default Team;
import React, { useState, useEffect } from 'react';
import teamImage1 from '../assets/img/team/team-1.jpg'; // Assurez-vous que le chemin est correct
import teamImage2 from '../assets/img/team/team-2.jpg'; // Assurez-vous que le chemin est correct
import teamImage3 from '../assets/img/team/team-3.jpg';
import teamImage4 from '../assets/img/team/team-4.jpg';                                                     // Assurez-vous que le chemin est correct
const Team = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => setLoading(false);

        const images = [teamImage1, teamImage2];
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
                    <section id="team" className="team section light-background">
                        <div className="container section-title" data-aos="fade-up">
                            <h2>Équipe</h2>
                            <p>"Notre équipe d'experts en finance, santé, sport et bien-être est dédiée à vous accompagner vers l'excellence, en vous offrant des conseils personnalisés et un soutien inégalé pour atteindre vos objectifs et améliorer votre qualité de vie."</p>
                        </div>

                        <div className="container">
                            <div className="row gy-4">
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                    <div className="team-member">
                                        <div className="member-img">
                                            <img src={teamImage1} className="img-fluid" alt="Walter White" />
                                            <div className="social">
                                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>Walter White</h4>
                                            <span>Coach financier</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                    <div className="team-member">
                                        <div className="member-img">
                                            <img src={teamImage2} className="img-fluid" alt="Sarah Jhonson" />
                                            <div className="social">
                                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>Sarah Jhonson</h4>
                                            <span>Coach santé</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Ajoute d'autres membres de l'équipe ici */}

                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                                    <div className="team-member">
                                        <div className="member-img">
                                            <img src={teamImage3} className="img-fluid" alt="William Anderson" />
                                            <div className="social">
                                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>William Anderson</h4>
                                            <span>Coach Sportif</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                                    <div className="team-member">
                                        <div className="member-img">
                                            <img src={teamImage4} className="img-fluid" alt="Amanda Jepson" />
                                            <div className="social">
                                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>Myriam Jepson</h4>
                                            <span>Coach bien être</span>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </section>
                </>
            )}
        </main>
    );
};

export default Team;

