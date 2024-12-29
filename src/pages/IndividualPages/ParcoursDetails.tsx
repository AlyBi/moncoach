// import React from 'react';
// import { Button } from 'react-bootstrap';

// // Import des images
// import image1 from '../../assets/img/services.jpg'; // Remplace par le chemin correct
// import image2 from '../../assets/img/services.jpg'; // Remplace par le chemin correct
// import image3 from '../../assets/img/services.jpg'; // Remplace par le chemin correct

// const ParcoursDetails: React.FC = () => {
//     return (
//         <div className="parcours-details-container py-5">
//             <div className="container">
//                 {/* Première section */}
//                 <div className="row align-items-center mb-5">
//                     <div className="col-lg-6">
//                         <img src={image1} alt="Natural Language Processing" className="img-fluid rounded-3 shadow-lg" />
//                     </div>
//                     <div className="col-lg-6">
//                         <h2 className="h3 font-weight-bold text-light">Natural Language Processing (NLP):</h2>
//                         <p className="text-light">
//                             The AI product utilizes advanced NLP algorithms to understand and interpret human language,
//                             enabling it to accurately process and analyze text-based inputs.
//                         </p>
//                         <Button variant="danger" href="/login">
//                             Learn More
//                         </Button>
//                     </div>
//                 </div>

//                 {/* Deuxième section */}
//                 <div className="row align-items-center mb-5">
//                     <div className="col-lg-6 order-lg-2">
//                         <img src={image2} alt="Sentiment Analysis" className="img-fluid rounded-3 shadow-lg" />
//                     </div>
//                     <div className="col-lg-6">
//                         <h2 className="h3 font-weight-bold text-light">Sentiment Analysis:</h2>
//                         <p className="text-light">
//                             The product has built-in sentiment analysis capabilities, allowing it to determine the sentiment
//                             (positive, negative, or neutral) expressed in text or customer feedback.
//                         </p>
//                         <Button variant="danger" href="/login">
//                             Learn More
//                         </Button>
//                     </div>
//                 </div>

//                 {/* Troisième section */}
//                 <div className="row align-items-center mb-5">
//                     <div className="col-lg-6">
//                         <img src={image3} alt="Natural Language Generation (NLG)" className="img-fluid rounded-3 shadow-lg" />
//                     </div>
//                     <div className="col-lg-6">
//                         <h2 className="h3 font-weight-bold text-light">Natural Language Generation (NLG):</h2>
//                         <p className="text-light">
//                             The AI product can generate human-like written content, summaries, or reports based on structured
//                             data or analysis results.
//                         </p>
//                         <Button variant="danger" href="/login">
//                             Learn More
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ParcoursDetails;
import React from 'react';
import { Button } from 'react-bootstrap';

// Import des images
import image1 from '../../assets/img/services.jpg'; // Remplace par le chemin correct
import image2 from '../../assets/img/services.jpg'; // Remplace par le chemin correct
import image3 from '../../assets/img/services.jpg'; // Remplace par le chemin correct
import featureImage1 from '../../assets/img/devperso/10564.jpg';
import featureImage2 from '../../assets/img/comefficacité/coefficacité (1).jpg';
import featureImage3 from '../../assets/img/bilanc/137653.jpg';

const ParcoursDetails: React.FC = () => {
    return (
        <div className="parcours-details-container py-5">
            <div className="container">
                {/* Première section */}
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6">
                        <img src={image1} alt="Natural Language Processing" className="img-fluid rounded-3 shadow-lg" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="h3 font-weight-bold text-light">Natural Language Processing (NLP):</h2>
                        <p className="text-light">
                            The AI product utilizes advanced NLP algorithms to understand and interpret human language,
                            enabling it to accurately process and analyze text-based inputs.
                        </p>
                        <Button variant="danger" href="/login">
                            Learn More
                        </Button>
                    </div>
                </div>

                {/* Deuxième section */}
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6 order-lg-2">
                        <img src={image2} alt="Sentiment Analysis" className="img-fluid rounded-3 shadow-lg" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="h3 font-weight-bold text-light">Sentiment Analysis:</h2>
                        <p className="text-light">
                            The product has built-in sentiment analysis capabilities, allowing it to determine the sentiment
                            (positive, negative, or neutral) expressed in text or customer feedback.
                        </p>
                        <Button variant="danger" href="/login">
                            Learn More
                        </Button>
                    </div>
                </div>

                {/* Section des Features */}
                <section id="features" className="features section">
                    {/* Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Features</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>

                    <div className="container">
                        {/* Feature Item 1 */}
                        <div className="row gy-4 align-items-center features-item">
                            <div className="col-lg-5 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                                <h3>Corporis temporibus maiores provident</h3>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                                </p>
                                <Button variant="primary" className="btn-get-started">Get Started</Button>
                            </div>
                            <div className="col-lg-7 order-1 order-lg-2" data-aos="zoom-out" data-aos-delay="100">
                                <img src={featureImage1} alt="Feature 1 Image" className="img-fluid rounded-3 shadow-lg" />
                            </div>
                        </div>

                        {/* Feature Item 2 */}
                        <div className="row gy-4 align-items-stretch justify-content-between features-item">
                            <div className="col-lg-6 d-flex align-items-center features-img-bg" data-aos="zoom-out">
                                <img src={featureImage3} className="img-fluid" alt="Feature 2 Image" />
                            </div>
                            <div className="col-lg-5 d-flex justify-content-center flex-column" data-aos="fade-up">
                                <h3>Sunt consequatur ad ut est nulla</h3>
                                <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                                <ul>
                                    <li><i className="bi bi-check"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                                    <li><i className="bi bi-check"></i><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                                    <li><i className="bi bi-check"></i> <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</span></li>
                                </ul>
                                <Button variant="primary" className="align-self-start">Get Started</Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Troisième section */}
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6">
                        <img src={image3} alt="Natural Language Generation (NLG)" className="img-fluid rounded-3 shadow-lg" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="h3 font-weight-bold text-light">Natural Language Generation (NLG):</h2>
                        <p className="text-light">
                            The AI product can generate human-like written content, summaries, or reports based on structured
                            data or analysis results.
                        </p>
                        <Button variant="danger" href="/login">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParcoursDetails;
