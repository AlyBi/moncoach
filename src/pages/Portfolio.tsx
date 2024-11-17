// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Glightbox from 'glightbox';
// import 'glightbox/dist/css/glightbox.min.css';

// const Portfolio = () => {
//     const [activeFilter, setActiveFilter] = useState('*');  // Déclare un état pour le filtre actif

//     // Initialise le lightbox
//     useEffect(() => {
//         const lightbox = Glightbox({
//             selector: '.glightbox',
//         });

//         return () => {
//             lightbox.destroy(); // Nettoyage du lightbox lors de la désinstallation
//         };
//     }, []);

//     // Remonte la page à chaque fois qu'on arrive sur la section Portfolio
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     // Gère le clic sur un filtre de catégorie
//     const handleFilterClick = (filter: string) => {
//         setActiveFilter(filter);  // Met à jour le filtre actif
//         const filters = document.querySelectorAll('.portfolio-item');
//         filters.forEach((item) => {
//             if (filter === '*' || item.classList.contains(filter.slice(1))) {
//                 item.classList.remove('d-none');  // Affiche les éléments correspondants
//             } else {
//                 item.classList.add('d-none');  // Masque les autres éléments
//             }
//         });
//     };

//     return (
//         <main className="main">
//             <div className="page-title accent-background">
//                 <div className="container d-lg-flex justify-content-between align-items-center">
//                     <h1 className="mb-2 mb-lg-0">Portfolio</h1>
//                     <nav className="breadcrumbs">
//                         <ol>
//                             <li><a href="index.html">Accueil</a></li>
//                             <li className="current">Portfolio</li>
//                         </ol>
//                     </nav>
//                 </div>
//             </div>

//             <section id="portfolio" className="portfolio section">
//                 <div className="container">
//                     <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
//                         <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
//                             {/* Modifier la classe 'filter-active' en fonction du filtre sélectionné */}
//                             <li
//                                 data-filter="*"
//                                 className={`filter-item ${activeFilter === '*' ? 'filter-active' : ''}`}
//                                 onClick={() => handleFilterClick('*')}
//                             >
//                                 All
//                             </li>
//                             <li
//                                 data-filter=".filter-app"
//                                 className={`filter-item ${activeFilter === '.filter-app' ? 'filter-active' : ''}`}
//                                 onClick={() => handleFilterClick('.filter-app')}
//                             >
//                                 App
//                             </li>
//                             <li
//                                 data-filter=".filter-product"
//                                 className={`filter-item ${activeFilter === '.filter-product' ? 'filter-active' : ''}`}
//                                 onClick={() => handleFilterClick('.filter-product')}
//                             >
//                                 Card
//                             </li>
//                             <li
//                                 data-filter=".filter-branding"
//                                 className={`filter-item ${activeFilter === '.filter-branding' ? 'filter-active' : ''}`}
//                                 onClick={() => handleFilterClick('.filter-branding')}
//                             >
//                                 Web
//                             </li>
//                         </ul>

//                         <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
//                             {/* Portfolio Item 1 */}
//                             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
//                                 <img
//                                     src="assets/img/masonry-portfolio/masonry-portfolio-1.jpg"
//                                     className="img-fluid glightbox"
//                                     alt="Portfolio App 1"
//                                     data-title="App 1"
//                                     data-gallery="portfolio-gallery"
//                                 />
//                                 <div className="portfolio-info">
//                                     <h4>App 1</h4>
//                                     <p>Lorem ipsum, dolor sit</p>
//                                     <a href="assets/img/masonry-portfolio/masonry-portfolio-1.jpg" className="glightbox preview-link" data-gallery="portfolio-gallery">
//                                         <i className="bi bi-zoom-in"></i>
//                                     </a>
//                                     <Link to="/portfolio-details" className="details-link">
//                                         <i className="bi bi-link-45deg"></i>
//                                     </Link>
//                                 </div>
//                             </div>

//                             {/* Portfolio Item 2 */}
//                             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
//                                 <img
//                                     src="assets/img/masonry-portfolio/masonry-portfolio-2.jpg"
//                                     className="img-fluid glightbox"
//                                     alt="Portfolio Product 1"
//                                     data-title="Product 1"
//                                     data-gallery="portfolio-gallery"
//                                 />
//                                 <div className="portfolio-info">
//                                     <h4>Product 1</h4>
//                                     <p>Lorem ipsum, dolor sit</p>
//                                     <a href="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" className="glightbox preview-link" data-gallery="portfolio-gallery">
//                                         <i className="bi bi-zoom-in"></i>
//                                     </a>
//                                     <Link to="/portfolio-details" className="details-link">
//                                         <i className="bi bi-link-45deg"></i>
//                                     </Link>
//                                 </div>
//                             </div>

//                             {/* Portfolio Item 3 */}
//                             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
//                                 <img
//                                     src="assets/img/masonry-portfolio/masonry-portfolio-3.jpg"
//                                     className="img-fluid glightbox"
//                                     alt="Portfolio Branding 1"
//                                     data-title="Branding 1"
//                                     data-gallery="portfolio-gallery"
//                                 />
//                                 <div className="portfolio-info">
//                                     <h4>Branding 1</h4>
//                                     <p>Lorem ipsum, dolor sit</p>
//                                     <a href="../assets/img/masonry-portfolio/masonry-portfolio-3.jpg" className="glightbox preview-link" data-gallery="portfolio-gallery">
//                                         <i className="bi bi-zoom-in"></i>
//                                     </a>
//                                     <Link to="/portfolio-details" className="details-link">
//                                         <i className="bi bi-link-45deg"></i>
//                                     </Link>
//                                 </div>
//                             </div>

//                             {/* Ajoutez d'autres éléments de portfolio ici... */}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default Portfolio;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Glightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import portfolioImage1 from "../assets/img/masonry-portfolio/masonry-portfolio-1.jpg"; // Assurez-vous que le chemin est correct
import portfolioImage2 from "../assets/img/masonry-portfolio/masonry-portfolio-2.jpg"; // Assurez-vous que le chemin est correct
import portfolioImage3 from "../assets/img/masonry-portfolio/masonry-portfolio-3.jpg"; // Assurez-vous que le chemin est correct
import portfolioImage4 from "../assets/img/masonry-portfolio/masonry-portfolio-4.jpg"; // Assurez-vous que le chemin est correct
const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState("*"); // Déclare un état pour le filtre actif
    const [loading, setLoading] = useState(true); // État de chargement

    // Initialise le lightbox
    useEffect(() => {
        const lightbox = Glightbox({
            selector: ".glightbox",
        });

        return () => {
            lightbox.destroy(); // Nettoyage du lightbox lors de la désinstallation
        };
    }, []);

    // Remonte la page à chaque fois qu'on arrive sur la section Portfolio
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Gère le clic sur un filtre de catégorie
    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter); // Met à jour le filtre actif
        const filters = document.querySelectorAll(".portfolio-item");
        filters.forEach((item) => {
            if (filter === "*" || item.classList.contains(filter.slice(1))) {
                item.classList.remove("d-none"); // Affiche les éléments correspondants
            } else {
                item.classList.add("d-none"); // Masque les autres éléments
            }
        });
    };

    useEffect(() => {
        const handleLoad = () => setLoading(false);

        const images = [
            portfolioImage1,
            portfolioImage2,
            portfolioImage3,
            portfolioImage4,
        ];
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
                    <div className="page-title accent-background">
                        <div className="container d-lg-flex justify-content-between align-items-center">
                            <h1 className="mb-2 mb-lg-0">Portfolio</h1>
                            <nav className="breadcrumbs">
                                <ol>
                                    <li>
                                        <a href="index.html">Accueil</a>
                                    </li>
                                    <li className="current">Portfolio</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <section id="portfolio" className="portfolio section">
                        <div className="container">
                            <div
                                className="isotope-layout"
                                data-default-filter="*"
                                data-layout="masonry"
                                data-sort="original-order"
                            >
                                <ul
                                    className="portfolio-filters isotope-filters"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >
                                    {/* Modifier la classe 'filter-active' en fonction du filtre sélectionné */}
                                    <li
                                        data-filter="*"
                                        className={`filter-item ${activeFilter === "*" ? "filter-active" : ""
                                            }`}
                                        onClick={() => handleFilterClick("*")}
                                    >
                                        All
                                    </li>
                                    <li
                                        data-filter=".filter-app"
                                        className={`filter-item ${activeFilter === ".filter-app" ? "filter-active" : ""
                                            }`}
                                        onClick={() => handleFilterClick(".filter-app")}
                                    >
                                        App
                                    </li>
                                    <li
                                        data-filter=".filter-product"
                                        className={`filter-item ${activeFilter === ".filter-product" ? "filter-active" : ""
                                            }`}
                                        onClick={() => handleFilterClick(".filter-product")}
                                    >
                                        Card
                                    </li>
                                    <li
                                        data-filter=".filter-branding"
                                        className={`filter-item ${activeFilter === ".filter-branding" ? "filter-active" : ""
                                            }`}
                                        onClick={() => handleFilterClick(".filter-branding")}
                                    >
                                        Web
                                    </li>
                                </ul>

                                <div
                                    className="row gy-4 isotope-container"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    {/* Portfolio Item 1 */}
                                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                        <img
                                            src={portfolioImage1}
                                            className="img-fluid glightbox"
                                            alt="Portfolio App 1"
                                            data-title="App 1"
                                            data-gallery="portfolio-gallery"
                                        />
                                        <div className="portfolio-info">
                                            <h4>App 1</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                            <a
                                                href={portfolioImage1}
                                                className="glightbox preview-link"
                                                data-gallery="portfolio-gallery"
                                            >
                                                <i className="bi bi-zoom-in"></i>
                                            </a>
                                            <Link to="/portfolio-details" className="details-link">
                                                <i className="bi bi-link-45deg"></i>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Portfolio Item 2 */}
                                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                        <img
                                            src={portfolioImage2}
                                            className="img-fluid glightbox"
                                            alt="Portfolio Product 1"
                                            data-title="Product 1"
                                            data-gallery="portfolio-gallery"
                                        />
                                        <div className="portfolio-info">
                                            <h4>Product 1</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                            <a
                                                href={portfolioImage2}
                                                className="glightbox preview-link"
                                                data-gallery="portfolio-gallery"
                                            >
                                                <i className="bi bi-zoom-in"></i>
                                            </a>
                                            <Link to="/portfolio-details" className="details-link">
                                                <i className="bi bi-link-45deg"></i>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Portfolio Item 3 */}
                                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                        <img
                                            src={portfolioImage3}
                                            className="img-fluid glightbox"
                                            alt="Portfolio Branding 1"
                                            data-title="Branding 1"
                                            data-gallery="portfolio-gallery"
                                        />
                                        <div className="portfolio-info">
                                            <h4>Branding 1</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                            <a
                                                href={portfolioImage3}
                                                className="glightbox preview-link"
                                                data-gallery="portfolio-gallery"
                                            >
                                                <i className="bi bi-zoom-in"></i>
                                            </a>
                                            <Link to="/portfolio-details" className="details-link">
                                                <i className="bi bi-link-45deg"></i>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Ajoutez d'autres éléments de portfolio ici... */}
                                    {/* Portfolio Item 4 */}
                                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                        <img
                                            src={portfolioImage4}
                                            className="img-fluid glightbox"
                                            alt="Portfolio App 2"
                                            data-title="App 2"
                                            data-gallery="portfolio-gallery"
                                        />
                                        <div className="portfolio-info">
                                            {" "}
                                            <h4>App 2</h4> <p>Lorem ipsum, dolor sit</p>
                                            <a
                                                href={portfolioImage4}
                                                className="glightbox preview-link"
                                                data-gallery="portfolio-gallery"
                                            >
                                                <i className="bi bi-zoom-in"></i>{" "}
                                            </a>{" "}
                                            <Link to="/portfolio-details" className="details-link">
                                                {" "}
                                                <i className="bi bi-link-45deg"></i>{" "}
                                            </Link>
                                        </div>{" "}
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

export default Portfolio;
