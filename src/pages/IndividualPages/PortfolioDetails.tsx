import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Glightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import masonryPortfolio1 from '../../assets/img/masonry-portfolio/masonry-portfolio-1.jpg'; // Assurez-vous que le chemin est correct
import masonryPortfolio2 from '../../assets/img/masonry-portfolio/masonry-portfolio-2.jpg'; // Assurez-vous que le chemin est correct
import masonryPortfolio3 from '../../assets/img/masonry-portfolio/masonry-portfolio-3.jpg'; // Assurez-vous que le chemin est correct

const PortfolioDetails = () => {
    const [activeFilter, setActiveFilter] = useState('*');

    // Initialise le lightbox
    useEffect(() => {
        const lightbox = Glightbox({
            selector: '.glightbox',
        });

        return () => {
            lightbox.destroy(); // Nettoyage du lightbox lors de la désinstallation
        };
    }, []);

    // Remonte la page lorsqu'un filtre est cliqué
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeFilter]);

    // Gère le clic sur un filtre de catégorie
    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter); // Met à jour le filtre actif
        const filters = document.querySelectorAll('.portfolio-item');
        filters.forEach((item) => {
            if (filter === '*' || item.classList.contains(filter.slice(1))) {
                item.classList.remove('d-none');
            } else {
                item.classList.add('d-none');
            }
        });
    };

    return (
        <main className="main">
            <section id="portfolio" className="portfolio section">
                <div className="container">
                    <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                        <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                            {/* Modification des classes des éléments de menu en fonction de l'élément actif */}
                            <li
                                data-filter="*"
                                className={`filter-item ${activeFilter === '*' ? 'filter-active' : ''}`}
                                onClick={() => handleFilterClick('*')}
                            >
                                All
                            </li>
                            <li
                                data-filter=".filter-app"
                                className={`filter-item ${activeFilter === '.filter-app' ? 'filter-active' : ''}`}
                                onClick={() => handleFilterClick('.filter-app')}
                            >
                                App
                            </li>
                            <li
                                data-filter=".filter-product"
                                className={`filter-item ${activeFilter === '.filter-product' ? 'filter-active' : ''}`}
                                onClick={() => handleFilterClick('.filter-product')}
                            >
                                Card
                            </li>
                            <li
                                data-filter=".filter-branding"
                                className={`filter-item ${activeFilter === '.filter-branding' ? 'filter-active' : ''}`}
                                onClick={() => handleFilterClick('.filter-branding')}
                            >
                                Web
                            </li>
                        </ul>

                        <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                            {/* Portfolio Item 1 */}
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                <img
                                    src={masonryPortfolio1}
                                    className="img-fluid glightbox"
                                    alt="Portfolio App 1"
                                    data-title="App 1"
                                    data-gallery="portfolio-gallery"
                                />
                                <div className="portfolio-info">
                                    <h4>App 1</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a href={masonryPortfolio1} className="glightbox preview-link" data-gallery="portfolio-gallery">
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
                                    src={masonryPortfolio2}
                                    className="img-fluid glightbox"
                                    alt="Portfolio Product 1"
                                    data-title="Product 1"
                                    data-gallery="portfolio-gallery"
                                />
                                <div className="portfolio-info">
                                    <h4>Product 1</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a href={masonryPortfolio2} className="glightbox preview-link" data-gallery="portfolio-gallery">
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
                                    src={masonryPortfolio3}
                                    className="img-fluid glightbox"
                                    alt="Portfolio Branding 1"
                                    data-title="Branding 1"
                                    data-gallery="portfolio-gallery"
                                />
                                <div className="portfolio-info">
                                    <h4>Branding 1</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a href={masonryPortfolio3} className="glightbox preview-link" data-gallery="portfolio-gallery">
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <Link to="/portfolio-details" className="details-link">
                                        <i className="bi bi-link-45deg"></i>
                                    </Link>
                                </div>
                            </div>
                            {/* Ajoutez d'autres éléments de portfolio ici... */}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PortfolioDetails;
