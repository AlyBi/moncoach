// // import React from 'react';

// const Pricing = () => (
//     <main className="main">
//         {/* Page Title */}
//         <div className="page-title accent-background">
//             <div className="container d-lg-flex justify-content-between align-items-center">
//                 <h1 className="mb-2 mb-lg-0">Prix</h1>
//                 <nav className="breadcrumbs">
//                     <ol>
//                         <li><a href="/">Accueil</a></li>
//                         <li className="current">Prix</li>
//                     </ol>
//                 </nav>
//             </div>
//         </div>

//         {/* Pricing Section */}
//         <section id="pricing" className="pricing section">
//             <div className="container">
//                 <div className="row gy-4">
//                     <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
//                         <div className="pricing-item">
//                             <h3>Free Plan</h3>
//                             <p className="description">Uater</p>
//                             <h4><sup>$</sup>0<span> / month</span></h4>
//                             <button className="cta-btn">Stl</button>
//                             <p className="text-center small">No cred</p>
//                             <ul>
//                                 <li><i className="bi bi-check"></i> <span>Qua</span></li>
//                                 <li><i className="bi bi-check"></i> <span>Nec </span></li>
//                                 <li><i className="bi bi-check"></i> <span>Nulla</span></li>
//                                 <li className="na"><i className="bi bi-x"></i> <span>Phar</span></li>
//                                 <li className="na"><i className="bi bi-x"></i> <span>Massa </span></li>
//                                 <li className="na"><i className="bi bi-x"></i> <span>Volu</span></li>
//                                 <li className="na"><i className="bi bi-x"></i> <span>Iure </span></li>
//                             </ul>
//                         </div>
//                     </div>

//                     <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
//                         <div className="pricing-item featured">
//                             <p className="popular">Popular</p>
//                             <h3>Business Plan</h3>
//                             <p className="description">x strater</p>
//                             <h4><sup>$</sup>29<span> / month</span></h4>
//                             <button className="cta-btn">S</button>
//                             <p className="text-center small">No </p>
//                             <ul>
//                                 <li><i className="bi bi-check"></i> <span>Quam </span></li>
//                                 <li><i className="bi bi-check"></i> <span>Nec </span></li>
//                                 <li><i className="bi bi-check"></i> <span>Nulla </span></li>
//                                 <li><i className="bi bi-check"></i> <span>Pharet</span></li>
//                                 <li><i className="bi bi-check"></i> <span>Massa </span></li>
//                                 <li><i className="bi bi-check"></i> <span>Volupm</span></li>
//                                 <li className="na"><i className="bi bi-x"></i> <span>Itibus</span></li>
//                             </ul>
//                         </div>
//                     </div>

//                     <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
//                         <div className="pricing-item">
//                             <h3>Developer Plan</h3>
//                             <p className="description">rater</p>
//                             <h4><sup>$</sup>49<span> / month</span></h4>
//                             <button className="cta-btn">St</button>
//                             <p className="text-center small">No d</p>
//                             <ul>
//                                 <li><i className="bi bi-check"></i> <span>Quam </span></li>
//                                 <li><i className="bi bi-check"></i> <span>Nec </span></li>
//                                 <li><i className="bi bi-check"></i> <span>Nulla</span></li>
//                                 <li><i className="bi bi-check"></i> <span>Pharetra</span></li>
//                                 <li><i className="bi bi-check"></i> <span>Massa </span></li>
//                                 <li><i className="bi bi-check"></i> <span>V rerum</span></li>
//                                 <li><i className="bi bi-check"></i> <span>bus</span></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </main>
// );

// export default Pricing;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Pricing: React.FC = () => {
//     const [selectedPlan, setSelectedPlan] = useState('Business Plan');
//     const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 768);
//         };
//         handleResize(); // Set initial state
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     const handleSelectPlan = (plan: string) => {
//         setSelectedPlan(plan);
//     };

//     const handleMouseEnter = (plan: string) => {
//         if (!isMobile) setHoveredPlan(plan);
//     };

//     const handleMouseLeave = () => {
//         if (!isMobile) setHoveredPlan(null);
//     };

//     return (
//         <main className="main">
//             {/* Page Title */}
//             <div className="page-title accent-background">
//                 <div className="container d-lg-flex justify-content-between align-items-center">
//                     <h1 className="mb-2 mb-lg-0">Prix</h1>
//                     <nav className="breadcrumbs">
//                         <ol>
//                             <li><a href="/">Accueil</a></li>
//                             <li className="current">Prix</li>
//                         </ol>
//                     </nav>
//                 </div>
//             </div>

//             {/* Pricing Section */}
//             <section id="pricing" className="pricing section">
//                 <div className="container">
//                     <div className="row gy-4">
//                         <div
//                             className="col-lg-4"
//                             data-aos="zoom-in"
//                             data-aos-delay="100"
//                             onMouseEnter={() => handleMouseEnter('Free Plan')}
//                             onMouseLeave={handleMouseLeave}
//                             onClick={() => handleSelectPlan('Free Plan')}
//                         >
//                             <div className={`pricing-item ${selectedPlan === 'Free Plan' || hoveredPlan === 'Free Plan' ? 'selected' : ''}`}>
//                                 <h3>Plan Gratuit</h3>
//                                 <p className="description">Niveau Débutant</p>
//                                 <h4><sup>€</sup>0<span> / mois</span></h4>
//                                 <Link to="/" className={`cta-btn ${selectedPlan === 'Free Plan' || hoveredPlan === 'Free Plan' ? 'btn-orange' : 'btn-gray'}`} onClick={() => handleSelectPlan('Free Plan')}>Selectionner</Link>
//                                 <p className="text-center small">Pas de carte bancaire</p>
//                                 <ul>
//                                     <li><i className="bi bi-check"></i> <span>Écoute</span></li>
//                                     <li><i className="bi bi-check"></i> <span>Échange </span></li>
//                                     <li className="na"><i className="bi bi-x"></i> <span>Choix de décision </span></li>
//                                     <li className="na"><i className="bi bi-x"></i> <span>Orientation </span></li>
//                                     <li className="na"><i className="bi bi-x"></i> <span>Accompagnement quotidien </span></li>
//                                     <li className="na"><i className="bi bi-x"></i> <span>Bilan hebdomadaire </span></li>
//                                     <li className="na"><i className="bi bi-x"></i> <span>Contact H24</span></li>
//                                 </ul>
//                             </div>
//                         </div>

//                         <div
//                             className="col-lg-4"
//                             data-aos="zoom-in"
//                             data-aos-delay="200"
//                             onMouseEnter={() => handleMouseEnter('Business Plan')}
//                             onMouseLeave={handleMouseLeave}
//                             onClick={() => handleSelectPlan('Business Plan')}
//                         >
//                             <div className={`pricing-item featured ${selectedPlan === 'Business Plan' || hoveredPlan === 'Business Plan' ? 'selected' : ''}`}>
//                                 <p className="popular">Populaire</p>
//                                 <h3>Plan Business </h3>
//                                 <p className="description">Niveau Compétent</p>
//                                 <h4><sup>€</sup>229<span> / mois</span></h4>
//                                 <Link to="/" className={`cta-btn ${selectedPlan === 'Business Plan' || hoveredPlan === 'Business Plan' ? 'btn-orange' : 'btn-gray'}`} onClick={() => handleSelectPlan('Business Plan')}>Selectionner</Link>
//                                 <p className="text-center small">Pas de carte bancaire </p>
//                                 <ul>
//                                     <li><i className="bi bi-check"></i> <span>Écoute </span></li>
//                                     <li><i className="bi bi-check"></i> <span>Échange </span></li>
//                                     <li><i className="bi bi-check"></i> <span>Choix de décision </span></li>
//                                     <li><i className="bi bi-check"></i> <span>Orientation </span></li>
//                                     <li><i className="bi bi-check"></i> <span>Accompagnement quotidien </span></li>
//                                     <li className="na"><i className="bi bi-x"></i> <span>Bilan hebdomadaire </span></li>
//                                     <li className="na"><i className="bi bi-x"></i> <span>Contact H24</span></li>
//                                 </ul>
//                             </div>
//                         </div>

//                         <div
//                             className="col-lg-4"
//                             data-aos="zoom-in"
//                             data-aos-delay="300"
//                             onMouseEnter={() => handleMouseEnter('Developer Plan')}
//                             onMouseLeave={handleMouseLeave}
//                             onClick={() => handleSelectPlan('Developer Plan')}
//                         >
//                             <div className={`pricing-item ${selectedPlan === 'Developer Plan' || hoveredPlan === 'Developer Plan' ? 'selected' : ''}`}>
//                                 <h3>Plan Développement </h3>
//                                 <p className="description">Niveau Excellence</p>
//                                 <h4><sup>€</sup>349<span> / mois</span></h4>
//                                 <Link to="/" className={`cta-btn ${selectedPlan === 'Developer Plan' || hoveredPlan === 'Developer Plan' ? 'btn-orange' : 'btn-gray'}`} onClick={() => handleSelectPlan('Developer Plan')}>Selectionner</Link>
//                                 <p className="text-center small">Pas de carte bancaire</p>
//                                 <ul>
//                                     <li><i className="bi bi-check"></i> <span>Écoute </span></li>
//                                     <li><i className="bi bi-check"></i> <span>Échange </span></li>
//                                     <li><i className="bi bi-check"></i> <span>Choix de décision</span></li>
//                                     <li><i className="bi bi-check"></i> <span>Orientation</span></li>
//                                     <li><i className="bi bi-check"></i> <span>Accompagnement quotidien </span></li>
//                                     <li><i className="bi bi-check"></i> <span>Bilan hebdomadaire </span></li>
//                                     <li><i className="bi bi-check"></i> <span>Contact H24</span></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default Pricing;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = useState<string>('Business Plan');
    const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSelectPlan = (plan: string) => {
        setSelectedPlan(plan);
    };

    const handleMouseEnter = (plan: string) => {
        if (!isMobile) setHoveredPlan(plan);
    };

    const handleMouseLeave = () => {
        if (!isMobile) setHoveredPlan(null);
    };

    return (
        <main className="main">
            {/* Page Title */}
            <div className="page-title accent-background">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Prix</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><a href="/">Accueil</a></li>
                            <li className="current">Prix</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Pricing Section */}
            <section id="pricing" className="pricing section">
                <div className="container">
                    <div className="row gy-4">
                        {/* Free Plan */}
                        <div
                            className="col-lg-4"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                            onMouseEnter={() => handleMouseEnter('Free Plan')}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleSelectPlan('Free Plan')}
                        >
                            <div
                                className={`pricing-item ${selectedPlan === 'Free Plan' ? 'selected' : ''} ${selectedPlan !== 'Free Plan' && hoveredPlan !== 'Free Plan' ? 'not-selected' : ''}`}
                            >
                                <h3>Plan Gratuit</h3>
                                <p className="description">Niveau Débutant</p>
                                <h4><sup>€</sup>0<span> / mois</span></h4>
                                <Link
                                    to="/"
                                    className={`cta-btn ${selectedPlan === 'Free Plan' ? 'btn-orange' : 'btn-gray'}`}
                                    onClick={() => handleSelectPlan('Free Plan')}
                                >
                                    Sélectionner
                                </Link>
                                <p className="text-center small">Pas de carte bancaire</p>
                                <ul>
                                    <li><i className="bi bi-check"></i> <span>Écoute</span></li>
                                    <li><i className="bi bi-check"></i> <span>Échange</span></li>
                                    <li className="na"><i className="bi bi-x"></i> <span>Choix de décision</span></li>
                                    <li className="na"><i className="bi bi-x"></i> <span>Orientation</span></li>
                                    <li className="na"><i className="bi bi-x"></i> <span>Accompagnement quotidien</span></li>
                                    <li className="na"><i className="bi bi-x"></i> <span>Bilan hebdomadaire</span></li>
                                    <li className="na"><i className="bi bi-x"></i> <span>Contact H24</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Business Plan */}
                        <div
                            className="col-lg-4"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                            onMouseEnter={() => handleMouseEnter('Business Plan')}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleSelectPlan('Business Plan')}
                        >
                            <div
                                className={`pricing-item ${selectedPlan === 'Business Plan' ? 'selected' : ''} ${selectedPlan !== 'Business Plan' && hoveredPlan !== 'Business Plan' ? 'not-selected' : ''}`}
                            >
                                {/* Badge Populaire en orange */}
                                <p className="popular">Populaire</p>
                                <h3>Plan Business</h3>
                                <p className="description">Niveau Compétent</p>
                                <h4><sup>€</sup>229<span> / mois</span></h4>
                                <Link
                                    to="/"
                                    className={`cta-btn ${selectedPlan === 'Business Plan' ? 'btn-orange' : 'btn-gray'}`}
                                    onClick={() => handleSelectPlan('Business Plan')}
                                >
                                    Sélectionner
                                </Link>
                                <p className="text-center small">Pas de carte bancaire</p>
                                <ul>
                                    <li><i className="bi bi-check"></i> <span>Écoute</span></li>
                                    <li><i className="bi bi-check"></i> <span>Échange</span></li>
                                    <li><i className="bi bi-check"></i> <span>Choix de décision</span></li>
                                    <li><i className="bi bi-check"></i> <span>Orientation</span></li>
                                    <li><i className="bi bi-check"></i> <span>Accompagnement quotidien</span></li>
                                    <li className="na"><i className="bi bi-x"></i> <span>Bilan hebdomadaire</span></li>
                                    <li className="na"><i className="bi bi-x"></i> <span>Contact H24</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Developer Plan */}
                        <div
                            className="col-lg-4"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                            onMouseEnter={() => handleMouseEnter('Developer Plan')}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleSelectPlan('Developer Plan')}
                        >
                            <div
                                className={`pricing-item ${selectedPlan === 'Developer Plan' ? 'selected' : ''} ${selectedPlan !== 'Developer Plan' && hoveredPlan !== 'Developer Plan' ? 'not-selected' : ''}`}
                            >
                                <h3>Plan Développement</h3>
                                <p className="description">Niveau Excellence</p>
                                <h4><sup>€</sup>349<span> / mois</span></h4>
                                <Link
                                    to="/"
                                    className={`cta-btn ${selectedPlan === 'Developer Plan' ? 'btn-orange' : 'btn-gray'}`}
                                    onClick={() => handleSelectPlan('Developer Plan')}
                                >
                                    Sélectionner
                                </Link>
                                <p className="text-center small">Pas de carte bancaire</p>
                                <ul>
                                    <li><i className="bi bi-check"></i> <span>Écoute</span></li>
                                    <li><i className="bi bi-check"></i> <span>Échange</span></li>
                                    <li><i className="bi bi-check"></i> <span>Choix de décision</span></li>
                                    <li><i className="bi bi-check"></i> <span>Orientation</span></li>
                                    <li><i className="bi bi-check"></i> <span>Accompagnement quotidien</span></li>
                                    <li><i className="bi bi-check"></i> <span>Bilan hebdomadaire</span></li>
                                    <li><i className="bi bi-check"></i> <span>Contact H24</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Pricing;
