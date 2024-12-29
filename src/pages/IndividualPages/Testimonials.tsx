// import React from 'react';


// const Testimonials = () => (
//     <main className="main">
//         {/* Page Title */}
//         <div className="page-title accent-background">
//             <div className="container d-lg-flex justify-content-between align-items-center">
//                 <h1 className="mb-2 mb-lg-0">Témoignages</h1>
//                 <nav className="breadcrumbs">
//                     <ol>
//                         <li><a href="/">Accueil</a></li>
//                         <li className="current">Témoignages</li>
//                     </ol>
//                 </nav>
//             </div>
//         </div>

//         {/* Testimonials Section */}
//         <section id="testimonials" className="testimonials section">
//             <div className="container">
//                 <div className="row gy-4">
//                     <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
//                         <div className="testimonial-item">
//                             <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="Saul Goodman" />
//                             <h3>Saul Goodman</h3>
//                             <h4>Ceo & Founder</h4>
//                             <div className="stars">
//                                 <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
//                             </div>
//                             <p>
//                                 <i className="bi bi-quote quote-icon-left"></i>
//                                 <span>t semper.</span>
//                                 <i className="bi bi-quote quote-icon-right"></i>
//                             </p>
//                         </div>
//                     </div>

//                     <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
//                         <div className="testimonial-item">
//                             <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="Sara Wilsson" />
//                             <h3>Sara Wilsson</h3>
//                             <h4>Designer</h4>
//                             <div className="stars">
//                                 <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
//                             </div>
//                             <p>
//                                 <i className="bi bi-quote quote-icon-left"></i>
//                                 <span>nim culpa.</span>
//                                 <i className="bi bi-quote quote-icon-right"></i>
//                             </p>
//                         </div>
//                     </div>

//                     <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
//                         <div className="testimonial-item">
//                             <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="Jena Karlis" />
//                             <h3>Jena Karlis</h3>
//                             <h4>Store Owner</h4>
//                             <div className="stars">
//                                 <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
//                             </div>
//                             <p>
//                                 <i className="bi bi-quote quote-icon-left"></i>
//                                 <span>minim.</span>
//                                 <i className="bi bi-quote quote-icon-right"></i>
//                             </p>
//                         </div>
//                     </div>

//                     <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
//                         <div className="testimonial-item">
//                             <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="Matt Brandon" />
//                             <h3>Matt Brandon</h3>
//                             <h4>Freelancer</h4>
//                             <div className="stars">
//                                 <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
//                             </div>
//                             <p>
//                                 <i className="bi bi-quote quote-icon-left"></i>
//                                 <span>veniam.</span>
//                                 <i className="bi bi-quote quote-icon-right"></i>
//                             </p>
//                         </div>
//                     </div>

//                     <div className="col-lg-6" data-aos="fade-up" data-aos-delay="500">
//                         <div className="testimonial-item">
//                             <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="John Larson" />
//                             <h3>John Larson</h3>
//                             <h4>Entrepreneur</h4>
//                             <div className="stars">
//                                 <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
//                             </div>
//                             <p>
//                                 <i className="bi bi-quote quote-icon-left"></i>
//                                 <span>Qquid.</span>
//                                 <i className="bi bi-quote quote-icon-right"></i>
//                             </p>
//                         </div>
//                     </div>

//                     <div className="col-lg-6" data-aos="fade-up" data-aos-delay="600">
//                         <div className="testimonial-item">
//                             <img src="assets/img/testimonials/testimonials-6.jpg" className="testimonial-img" alt="Emily Harison" />
//                             <h3>Emily Harison</h3>
//                             <h4>Store Owner</h4>
//                             <div className="stars">
//                                 <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
//                             </div>
//                             <p>
//                                 <i className="bi bi-quote quote-icon-left"></i>
//                                 <span>em.</span>
//                                 <i className="bi bi-quote quote-icon-right"></i>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </main>
// );

// export default Testimonials;
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// Import des images
import testimonialsBg from '../../assets/img/home5.jpg';
import testimonial1 from '../../assets/img/testimonials/testimonials-1.jpg';
import testimonial2 from '../../assets/img/testimonials/testimonials-4.jpg';
import testimonial3 from '../../assets/img/testimonials/test1.webp';
import testimonial4 from '../../assets/img/testimonials/djbrl.png';
import testimonial5 from '../../assets/img/testimonials/testimonials-5.jpg';
import testimonial6 from '../../assets/img/testimonials/alib.png';
import testimonial7 from '../../assets/img/testimonials/jpd.jpg';

// Import Bootstrap Carousel
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Testimonials: React.FC = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);

    // Effect pour faire défiler toutes les 2 secondes
    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselIndex((prevIndex) => (prevIndex + 1) % 7); // 5 items au total
        }, 5000); // 2 secondes

        return () => clearInterval(interval); // Cleanup au démontage du composant
    }, []);


    return (
        <main className="main">
            <div className="page-title accent-background">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Expérience</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li>
                                <NavLink to="index.html">Accueil</NavLink>
                            </li>
                            <li className="current">Expérience</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <section
                id="testimonials"
                className="testimonials section"
                style={{ backgroundColor: 'transparent' }} // Fond transparent
            >
                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <i className="bi bi-quote quote-icon-left"></i>
                    <p>Ils nous ont fait confiance</p>
                    <i className="bi bi-quote quote-icon-right"></i>
                </div>



                {/* Background Image */}
                <img src={testimonialsBg} className="testimonials-bg" alt="Testimonials Background" />

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    {/* Bootstrap Carousel */}
                    <Carousel
                        activeIndex={carouselIndex}
                        onSelect={(selectedIndex) => setCarouselIndex(selectedIndex)}
                        interval={null} // Désactive l'intervalle de Bootstrap
                        indicators={true} // Affiche la pagination sous forme de cercles
                        controls={false}  // Désactive les boutons "Précédent" / "Suivant"
                        fade={false}      // Ne pas appliquer de fondu
                        touch={false}     // Empêche le swipe sur mobile
                        slide={true}      // Assure le défilement horizontal
                    >
                        {/* Testimonial Item 1 */}
                        <Carousel.Item>
                            <div className="testimonial-item">
                                <img src={testimonial1} className="testimonial-img rounded-circle" alt="Stéphane P" />
                                <h3>Stéphane P</h3>
                                {/* <h4>CEO &amp; Founder</h4> */}
                                <h4>Project Manager</h4>
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="bi bi-star-fill"></i>
                                    ))}
                                </div>
                                <p>
                                    <i className="bi bi-quote quote-icon-left"></i>
                                    <span>
                                        “ Amin est un véritable passionné ! Il a cette capacité de cibler nos qualités profondes, de nous comprendre pour faire émerger la meilleure version de nous-mêmes.
                                        Sa palette de connaissances et d’outils est très complète et s’adapte à toutes les personnalités.”
                                    </span>
                                    <i className="bi bi-quote quote-icon-right"></i>
                                </p>
                            </div>
                        </Carousel.Item>

                        {/* Testimonial Item 2 */}
                        <Carousel.Item>
                            <div className="testimonial-item">
                                <img src={testimonial2} className="testimonial-img rounded-circle" alt="Samy I" />
                                <h3>Samy I</h3>
                                <h4>Chef d’entreprise </h4>
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="bi bi-star-fill"></i>
                                    ))}
                                </div>
                                <p>
                                    <i className="bi bi-quote quote-icon-left"></i>
                                    <span>
                                        “Cet accompagnement pendant plusieurs mois fut un moment très agréable et très enrichissant.
                                        Si vous sentez que vous n’allez pas dans la bonne direction d’un point de vue professionnel ou personnel, c’est bien à Amin qu’il faut en parler !”
                                    </span>
                                    <i className="bi bi-quote quote-icon-right"></i>
                                </p>
                            </div>
                        </Carousel.Item>

                        {/* Testimonial Item 3 */}
                        <Carousel.Item>
                            <div className="testimonial-item">
                                <img src={testimonial3} className="testimonial-img rounded-circle" alt="Mohamed T." />
                                <h3>Mohamed T.</h3>
                                <h4>Scrum Master</h4>
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="bi bi-star-fill"></i>
                                    ))}
                                </div>
                                <p>
                                    <i className="bi bi-quote quote-icon-left"></i>
                                    <span>
                                        “J’ai été accompagné par Amin Mtamar sur le Life Design Coaching. J’étais venu pour traiter d’un mal-être professionnel, mais avant de commencer à travailler sur ma reconversion, Amin a décelé le besoin d’un accompagnement plus complet. Et il a été très fructueux cet accompagnement.
                                        J’ai pu me redécouvrir, me rappeler de qui j’étais et surtout retrouver du sens à ma vie personnelle et professionnelle. Amin a une maîtrise impressionnante des sujets qu’il aborde. C’est très plaisant de sentir qu’on ne parle pas avec un énième coach-coquille-vide. Bien au contraire, Amin incarne l’excellence, et je vous le conseille les yeux fermés.”

                                    </span>
                                    <i className="bi bi-quote quote-icon-right"></i>
                                </p>
                            </div>
                        </Carousel.Item>

                        {/* Testimonial Item 4 */}
                        <Carousel.Item>
                            <div className="testimonial-item">
                                <img src={testimonial4} className="testimonial-img rounded-circle" alt="Djibril N" />
                                <h3>Djibril N</h3>
                                <h4>Expert Data Analyst</h4>
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="bi bi-star-fill"></i>
                                    ))}
                                </div>
                                <p>
                                    <i className="bi bi-quote quote-icon-left"></i>
                                    <span>
                                        “Amin est un expert dans l’usage des méthodes PNL.
                                        Il exerce ces méthodes avec une aisance impressionnante.
                                        Avec sa formation ‘Life Design Coaching’, Amin nous propose de faire un point sur notre parcours professionnel, de redéfinir notre mode de vie idéal et de trouver la force de nous y aventurer.
                                        Son accompagnement fut pour moi une expérience utile et très bénéfique.
                                        J’ai pu découvrir mes qualités et aptitudes enfouies, éliminer les blocages et découvrir mon domaine d’excellence.
                                        Si vous aspirez à une qualité de vie meilleure et souhaitez exploiter votre plein potentiel, je vous recommande vivement Amin.”
                                    </span>
                                    <i className="bi bi-quote quote-icon-right"></i>
                                </p>
                            </div>
                        </Carousel.Item>

                        {/* Testimonial Item 5 */}
                        <Carousel.Item>
                            <div className="testimonial-item">
                                <img src={testimonial5} className="testimonial-img rounded-circle" alt="Georges-Elia S" />
                                <h3>Georges-Elia S</h3>
                                <h4>Professeur des Universités</h4>
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="bi bi-star-fill"></i>
                                    ))}
                                </div>
                                <p>
                                    <i className="bi bi-quote quote-icon-left"></i>
                                    <span>
                                        “Amin Mtamar possède de grandes qualités humaines et une expertise professionnelle remarquable dans l’accompagnement personnalisé.
                                        Son écoute attentive, sa capacité au dialogue et son souci sincère de compréhension et de suivi font toute la différence.
                                        Son sérieux, son humanité et sa disponibilité sont des gages de confiance et de progrès, tant dans les choix de carrière que dans les choix de vie.”
                                    </span>
                                    <i className="bi bi-quote quote-icon-right"></i>
                                </p>
                            </div>
                        </Carousel.Item>
                        {/* Testimonial Item 6 */}
                        <Carousel.Item>
                            <div className="testimonial-item">
                                <img src={testimonial6} className="testimonial-img rounded-circle" alt="Ali B" />
                                <h3>Ali B</h3>
                                <h4>Docteur en Pharmacie</h4>
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="bi bi-star-fill"></i>
                                    ))}
                                </div>
                                <p>
                                    <i className="bi bi-quote quote-icon-left"></i>
                                    <span>
                                        “Amin a une capacité d’écoute et de compréhension assez déconcertante…
                                        Faire ressortir les problématiques et les gérer avec simplicité, appuyer sur les bons boutons pour faire redémarrer la machine, difficile de résumer au mieux le travail exceptionnel qu’a entrepris Amin sur ma personne…
                                        Un nouveau départ !!
                                        Merci infiniment.”
                                    </span>
                                    <i className="bi bi-quote quote-icon-right"></i>
                                </p>
                            </div>
                        </Carousel.Item>
                        {/* Testimonial Item 7 */}
                        <Carousel.Item>
                            <div className="testimonial-item">
                                <img src={testimonial7} className="testimonial-img rounded-circle" alt="Paul De M." />
                                <h3>Paul De M. </h3>
                                <h4>Chargé d’enseignement, Auteur</h4>
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="bi bi-star-fill"></i>
                                    ))}
                                </div>
                                <p>
                                    <i className="bi bi-quote quote-icon-left"></i>
                                    <span>
                                        “Amin, par son esprit chaleureux et positif, autant que par sa palette d’outils de coaching, est remarquable dans sa capacité à aider des professionnels à clarifier dans quel type de situation peut s’exprimer leur ‘excellence’,
                                        c’est-à-dire là où ils expriment un talent rare.”
                                    </span>
                                    <i className="bi bi-quote quote-icon-right"></i>
                                </p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>



            </section>


        </main >
    );
};

export default Testimonials;
