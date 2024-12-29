// // FeaturedSection.tsx
// import React from 'react';

// // Importation des images
// import aboutImage from '../../../assets/img/about.jpg';
// import aboutImage2 from '../../../assets/img/about-2.jpg';
// import featuredImage1 from '../../../assets/img/services-1.jpg';
// import featuredImage2 from '../../../assets/img/services-2.jpg';
// import featuredImage3 from '../../../assets/img/services-3.jpg';
// import workingImage1 from '../../../assets/img/working-1.jpg';
// import workingImage2 from '../../../assets/img/working-2.jpg';
// import workingImage3 from '../../../assets/img/working-3.jpg';
// import workingImage4 from '../../../assets/img/working-4.jpg';

// const FeaturedSection: React.FC = () => {
//     return (
//         <>
//             {/* About Section */}
//             <section id="about" className="about section">
//                 <div className="container">
//                     <div className="row gy-4">
//                         <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
//                             <h3>Voluptatem dignissimos provident laboris nisi ut aliquip ex ea commodo</h3>
//                             <img src={aboutImage} className="img-fluid rounded-4 mb-4" alt="About" />
//                             <p>
//                                 Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis quod nisi et. Placeat debitis quia recusandae
//                                 odit et consequatur voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.
//                             </p>
//                             <p>
//                                 Temporibus nihil enim deserunt sed ea. Provident sit expedita aut cupiditate nihil vitae quo officia vel.
//                                 Blanditiis eligendi possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus nobis tempore
//                                 doloribus debitis explicabo similique sit. Accusantium sed ut omnis beatae neque deleniti repellendus.
//                             </p>
//                         </div>
//                         <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
//                             <div className="content ps-0 ps-lg-5">
//                                 <p className="fst-italic">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//                                     magna aliqua.
//                                 </p>
//                                 <ul>
//                                     <li><i className="bi bi-check-circle-fill"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
//                                     <li><i className="bi bi-check-circle-fill"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
//                                     <li><i className="bi bi-check-circle-fill"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
//                                 </ul>
//                                 <p>
//                                     Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
//                                     velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
//                                 </p>

//                                 <div className="position-relative mt-4">
//                                     <img src={aboutImage2} className="img-fluid rounded-4" alt="About Video" />
//                                     <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn" aria-label="Play Video">
//                                         <span className="sr-only">Play Video</span>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Featured Section */}
//             <section id="featured" className="featured section">
//                 <div className="container section-title" data-aos="fade-up">
//                     <h2>Featured</h2>
//                     <p>Featured Services</p>
//                 </div>

//                 <div className="container" data-aos="fade-up" data-aos-delay="100">
//                     <div className="row gy-5">
//                         <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
//                             <div className="featured-item">
//                                 <div className="img">
//                                     <img src={featuredImage1} className="img-fluid" alt="Featured 1" />
//                                 </div>
//                                 <div className="details position-relative">
//                                     <div className="icon">
//                                         <i className="bi bi-activity"></i>
//                                     </div>
//                                     <a href="service-details.html" className="stretched-link">
//                                         <h3>Nesciunt Mete</h3>
//                                     </a>
//                                     <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
//                             <div className="featured-item">
//                                 <div className="img">
//                                     <img src={featuredImage2} className="img-fluid" alt="Featured 2" />
//                                 </div>
//                                 <div className="details position-relative">
//                                     <div className="icon">
//                                         <i className="bi bi-broadcast"></i>
//                                     </div>
//                                     <a href="service-details.html" className="stretched-link">
//                                         <h3>Eosle Commodi</h3>
//                                     </a>
//                                     <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
//                             <div className="featured-item">
//                                 <div className="img">
//                                     <img src={featuredImage3} className="img-fluid" alt="Featured 3" />
//                                 </div>
//                                 <div className="details position-relative">
//                                     <div className="icon">
//                                         <i className="bi bi-easel"></i>
//                                     </div>
//                                     <a href="service-details.html" className="stretched-link">
//                                         <h3>Ledo Markt</h3>
//                                     </a>
//                                     <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Features Section */}
//             <section id="features" className="features section">
//                 <div className="container">
//                     <ul className="nav nav-tabs row d-flex" data-aos="fade-up" data-aos-delay="100">
//                         <li className="nav-item col-3">
//                             <button className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1" style={{ background: 'none', border: 'none', padding: 0 }}>
//                                 <i className="bi bi-binoculars"></i>
//                                 <h4 className="d-none d-lg-block">Modi sit est dela pireda nest</h4>
//                             </button>
//                         </li>
//                         <li className="nav-item col-3">
//                             <button className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2" style={{ background: 'none', border: 'none', padding: 0 }}>
//                                 <i className="bi bi-box-seam"></i>
//                                 <h4 className="d-none d-lg-block">Unde praesenti mara setra le</h4>
//                             </button>
//                         </li>
//                         <li className="nav-item col-3">
//                             <button className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3" style={{ background: 'none', border: 'none', padding: 0 }}>
//                                 <i className="bi bi-brightness-high"></i>
//                                 <h4 className="d-none d-lg-block">Pariatur explica nitro dela</h4>
//                             </button>
//                         </li>
//                         <li className="nav-item col-3">
//                             <button className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4" style={{ background: 'none', border: 'none', padding: 0 }}>
//                                 <i className="bi bi-command"></i>
//                                 <h4 className="d-none d-lg-block">Nostrum qui dile node</h4>
//                             </button>
//                         </li>
//                     </ul>

//                     <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
//                         {/* Tab Content 1 */}
//                         <div className="tab-pane fade active show" id="features-tab-1">
//                             <div className="row">
//                                 <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
//                                     <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
//                                     <p className="fst-italic">
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//                                         magna aliqua.
//                                     </p>
//                                     <ul>
//                                         <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
//                                         <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
//                                         <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
//                                     </ul>
//                                     <p>
//                                         Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//                                     </p>
//                                 </div>
//                                 <div className="col-lg-6 order-1 order-lg-2 text-center">
//                                     <img src={workingImage1} alt="Working 1" className="img-fluid" />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Tab Content 2 */}
//                         <div className="tab-pane fade" id="features-tab-2">
//                             <div className="row">
//                                 <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
//                                     <h3>Neque exercitationem debitis soluta quos debitis quo mollitia officia est</h3>
//                                     <p>
//                                         Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
//                                         velit esse cillum dolore eu fugiat nulla pariatur.
//                                     </p>
//                                     <ul>
//                                         <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
//                                         <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
//                                         <li><i className="bi bi-check2-all"></i> Provident mollitia neque rerum asperiores dolores quos qui a.</li>
//                                     </ul>
//                                 </div>
//                                 <div className="col-lg-6 order-1 order-lg-2 text-center">
//                                     <img src={workingImage2} alt="Working 2" className="img-fluid" />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Tab Content 3 */}
//                         <div className="tab-pane fade" id="features-tab-3">
//                             <div className="row">
//                                 <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
//                                     <h3>Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda</h3>
//                                     <ul>
//                                         <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
//                                         <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
//                                         <li><i className="bi bi-check2-all"></i> Provident mollitia neque rerum asperiores dolores quos qui a.</li>
//                                     </ul>
//                                 </div>
//                                 <div className="col-lg-6 order-1 order-lg-2 text-center">
//                                     <img src={workingImage3} alt="Working 3" className="img-fluid" />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Tab Content 4 */}
//                         <div className="tab-pane fade" id="features-tab-4">
//                             <div className="row">
//                                 <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
//                                     <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h3>
//                                     <ul>
//                                         <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
//                                         <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
//                                         <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
//                                     </ul>
//                                 </div>
//                                 <div className="col-lg-6 order-1 order-lg-2 text-center">
//                                     <img src={workingImage4} alt="Working 4" className="img-fluid" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default FeaturedSection;
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

// Importation des images
import aboutImage from '../../../assets/img/about.jpg';
import aboutImage2 from '../../../assets/img/about-2.jpg';
import featuredImage1 from '../../../assets/img/services-1.jpg';
import featuredImage2 from '../../../assets/img/services-2.jpg';
import featuredImage3 from '../../../assets/img/services-3.jpg';
import workingImage1 from '../../../assets/img/working-1.jpg';
import workingImage2 from '../../../assets/img/working-2.jpg';
import workingImage3 from '../../../assets/img/working-3.jpg';
import workingImage4 from '../../../assets/img/working-4.jpg';

const FeaturedSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState('features-tab-1');
    const navigate = useNavigate();

    useEffect(() => {
        // Cette logique est utilisée pour gérer la navigation ou toute autre logique au besoin
        // Exemple : Rediriger vers une autre page au chargement du composant
        // navigate('/home'); // Exemple d'utilisation de navigate
    }, [navigate]);

    return (
        <>
            {/* About Section */}
            <section id="about" className="about section">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3>La communication efficace : un outil puissant</h3>
                            <img src={aboutImage} className="img-fluid rounded-4 mb-4" alt="About" />
                            <p>
                                Une communication réussie repose sur l'écoute active et la compréhension des messages véhiculés, mais aussi sur l'impact de notre propre message.
                                Chaque mot et chaque geste compte, et cela peut transformer la dynamique des échanges.
                            </p>
                            <p>
                                L'écoute active est une composante essentielle de la communication efficace. Elle permet de se concentrer pleinement sur le message de l'autre,
                                sans distractions, pour mieux comprendre ses besoins, ses sentiments et ses intentions.
                            </p>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
                            <div className="content ps-0 ps-lg-5">
                                <p className="fst-italic">
                                    La communication efficace est un pilier fondamental pour le succès, tant dans la vie professionnelle que personnelle.
                                    Elle permet de créer des liens solides, de mieux comprendre les besoins et attentes des autres, et de résoudre les conflits de manière constructive.
                                </p>
                                <ul>
                                    <li><i className="bi bi-check-circle-fill"></i> <span>Une communication claire évite les malentendus.</span></li>
                                    <li><i className="bi bi-check-circle-fill"></i> <span>Elle favorise une collaboration harmonieuse au sein des équipes.</span></li>
                                    <li><i className="bi bi-check-circle-fill"></i> <span>La communication efficace améliore la gestion des conflits et des émotions.</span></li>
                                </ul>
                                <p>
                                    Une communication efficace repose non seulement sur la clarté des messages, mais aussi sur l'attitude que nous adoptons en échangeant avec les autres.
                                    Une attitude positive et constructive renforce l'impact de la communication.
                                </p>




                                <div className="position-relative mt-4">
                                    <img src={aboutImage2} className="img-fluid rounded-4" alt="About Video" />
                                    <a href="/home" className="glightbox pulsating-play-btn" aria-label="">
                                        <span className="arrow"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Featured Section */}


            {/* Features Section */}
            <section id="features" className="features section">
                <div className="container">
                    <ul className="nav nav-tabs row d-flex" data-aos="fade-up" data-aos-delay="100">
                        <li className="nav-item col-3">
                            <button
                                className={`nav-link ${activeTab === 'features-tab-1' ? 'active show' : ''}`}
                                onClick={() => setActiveTab('features-tab-1')}
                            >
                                <i className="bi bi-binoculars"></i>
                                <h4 className="d-none d-lg-block">Atteindre la clarté dans vos objectifs</h4>
                            </button>
                        </li>
                        <li className="nav-item col-3">
                            <button
                                className={`nav-link ${activeTab === 'features-tab-2' ? 'active show' : ''}`}
                                onClick={() => setActiveTab('features-tab-2')}
                            >
                                <i className="bi bi-box-seam"></i>
                                <h4 className="d-none d-lg-block">Construire une vision stratégique et durable</h4>
                            </button>
                        </li>
                        <li className="nav-item col-3">
                            <button
                                className={`nav-link ${activeTab === 'features-tab-3' ? 'active show' : ''}`}
                                onClick={() => setActiveTab('features-tab-3')}
                            >
                                <i className="bi bi-brightness-high"></i>
                                <h4 className="d-none d-lg-block">Maximiser votre potentiel</h4>
                            </button>
                        </li>
                        <li className="nav-item col-3">
                            <button
                                className={`nav-link ${activeTab === 'features-tab-4' ? 'active show' : ''}`}
                                onClick={() => setActiveTab('features-tab-4')}
                            >
                                <i className="bi bi-command"></i>
                                <h4 className="d-none d-lg-block">Accomplir vos rêves avec audace</h4>
                            </button>
                        </li>
                    </ul>

                    <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
                        {/* Tab Content 1 */}
                        <div className={`tab-pane fade ${activeTab === 'features-tab-1' ? 'active show' : ''}`} id="features-tab-1">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                    <h3>Clarifiez vos objectifs et réalisez vos aspirations</h3>
                                    <p className="fst-italic">
                                        Le premier pas vers le succès est de savoir où vous voulez aller. En clarifiant vos objectifs, vous pouvez prendre des décisions plus éclairées et aligner vos actions avec vos valeurs profondes.
                                    </p>
                                    <ul>
                                        <li><i className="bi bi-check2-all"></i> Identifiez vos priorités et vos objectifs clés.</li>
                                        <li><i className="bi bi-check2-all"></i> Évitez les distractions et restez concentré sur ce qui compte.</li>
                                        <li><i className="bi bi-check2-all"></i> Alignez vos actions avec vos aspirations profondes pour maximiser votre impact.</li>
                                    </ul>
                                    <p>
                                        Prenez le temps de définir ce que vous voulez accomplir, et chaque étape de votre parcours deviendra plus facile à franchir.
                                    </p>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 text-center">
                                    <img src={workingImage1} alt="Working 1" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                        {/* Tab Content 2 */}
                        <div className={`tab-pane fade ${activeTab === 'features-tab-2' ? 'active show' : ''}`} id="features-tab-2">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                    <h3>Créez une stratégie pour un succès durable</h3>
                                    <p>
                                        Chaque grande réussite est le résultat d'une vision claire et d'un plan stratégique solide. Développer des stratégies efficaces vous aide à faire face aux défis et à persévérer dans l'atteinte de vos objectifs.
                                    </p>
                                    <ul>
                                        <li><i className="bi bi-check2-all"></i> Analysez vos ressources et construisez un plan d'action concret.</li>
                                        <li><i className="bi bi-check2-all"></i> Apprenez à anticiper les obstacles et à vous adapter en temps réel.</li>
                                        <li><i className="bi bi-check2-all"></i> Renforcez votre motivation en visualisant vos réussites futures.</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 text-center">
                                    <img src={workingImage2} alt="Working 2" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                        {/* Tab Content 3 */}
                        <div className={`tab-pane fade ${activeTab === 'features-tab-3' ? 'active show' : ''}`} id="features-tab-3">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                    <h3>Libérez votre potentiel et atteignez des sommets</h3>
                                    <ul>
                                        <li><i className="bi bi-check2-all"></i> Identifiez vos talents cachés et développez-les.</li>
                                        <li><i className="bi bi-check2-all"></i> Renforcez votre confiance en vous et en vos capacités.</li>
                                        <li><i className="bi bi-check2-all"></i> Transformez vos croyances limitantes en croyances motivantes.</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 text-center">
                                    <img src={workingImage3} alt="Working 3" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                        {/* Tab Content 4 */}
                        <div className={`tab-pane fade ${activeTab === 'features-tab-4' ? 'active show' : ''}`} id="features-tab-4">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                    <h3>Osez accomplir vos rêves et transformez votre vie</h3>
                                    <ul>
                                        <li><i className="bi bi-check2-all"></i> Visez grand et croyez en vos capacités à réussir.</li>
                                        <li><i className="bi bi-check2-all"></i> Faites face à vos peurs et dépassez vos limites personnelles.</li>
                                        <li><i className="bi bi-check2-all"></i> Créez un impact positif et durable dans votre vie et celle des autres.</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 text-center">
                                    <img src={workingImage4} alt="Working 4" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default FeaturedSection;
