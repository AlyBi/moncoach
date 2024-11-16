import React from 'react';

const Team = () => (
    <main className="main">
        {/* Page Title */}


        {/* Team Section */}
        <section id="team" className="team section light-background">


            <div className="container section-title" data-aos="fade-up">
                <h2>Our Team</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container">

                <div className="row gy-4">
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                        <div className="team-member">
                            <div className="member-img">
                                <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="Walter White" />
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
                                <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="Sarah Jhonson" />
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

                    {/* Ajoute d'autres membres de l'équipe ici */}
                </div>
            </div>
        </section>
    </main>
);

export default Team;
