import React, { useEffect } from 'react';
import { Carousel } from 'bootstrap';
import home2 from '../assets/img/home2.jpg'; // Assurez-vous que le chemin est correct
import ado from '../assets/img/ado.jpg'; // Assurez-vous que le chemin est correct
import home3 from '../assets/img/home3.jpg'; // Assurez-vous que le chemin est correct
import About from './AboutSimpl';
import Services from './ServicesHome';
import Portfolio from './PortfolioDetails';

const Home: React.FC = () => {
    useEffect(() => {
        // Initialisez le carousel après que le composant a été monté
        const carouselElement = document.querySelector('#hero-carousel');
        if (carouselElement) {
            new Carousel(carouselElement, {
                interval: 5000, // Intervalle correspondant à data-bs-interval
                wrap: true
            });
        }
    }, []);

    return (
        <main className="main">
            {/* Hero Section */}
            <section id="hero" className="hero section dark-background">
                <div id="hero-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
                    <div className="carousel-item active">
                        <img src={home2} alt="Explorez votre potentiel" />
                        <div className="container">
                            <h2>Explorez votre potentiel</h2>
                            <p>Découvrez de nouveaux horizons</p>
                            <a href="about.html" className="btn-get-started">En Savoir Plus</a>
                        </div>
                    </div>
                    {/* Additional Carousel Items */}
                    <div className="carousel-item">
                        <img src={ado} alt="Créez des liens forts" />
                        <div className="container">
                            <h2>Créez des liens forts</h2>
                            <p>Épanouissez-vous ensemble</p>
                            <a href="about.html" className="btn-get-started">En Savoir Plus</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={home3} alt="Renforcez votre complicité" />
                        <div className="container">
                            <h2>Renforcez votre complicité</h2>
                            <p>Construisez un avenir harmonieux</p>
                            <a href="about.html" className="btn-get-started">En Savoir Plus</a>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                    </a>
                    <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                    </a>
                    <ol className="carousel-indicators">
                        <li data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#hero-carousel" data-bs-slide-to="1"></li>
                        <li data-bs-target="#hero-carousel" data-bs-slide-to="2"></li>
                    </ol>
                </div>
            </section>
            <About />
            <Services />
            <Portfolio />
        </main>
    );
};

export default Home;
