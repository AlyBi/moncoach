import React, { useEffect } from 'react';
import { Carousel } from 'bootstrap';
import home2 from '../../assets/img/home2.jpg'; // Assurez-vous que le chemin est correct
import ado from '../../assets/img/ado.jpg'; // Assurez-vous que le chemin est correct
import coach from '../../assets/img/coach.jpg'; // Assurez-vous que le chemin est correct
import home6 from '../../assets/img/home6.jpg';
// import About from './AboutSimpl';
import ServicesCompany from './ServicesHomeCompany';
import PortfolioCompany from './PortfolioDetailsCompany';
import AboutCompany from './AboutSimplCompany';
// import FloatingCalendlyButton from './FloatingCalendlyButton';

const HomeCompany = () => {
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
                        <img src={coach} alt="Renforcez votre complicité" />
                        <div className="container">
                            <h2>Créez des fondations solides </h2>
                            <p>La famille c'est qe qui nous représente, vivez votre bonheur !!! </p>
                            <a href="about.html" className="btn-get-started">En Savoir Plus</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={home6} alt="Renforcez votre complicité" />
                        <div className="container">
                            <h2>Donner leur les bagages de la vie !</h2>
                            <p>Il est important de transmettre le savoir, et y a pas d'âge pour les connaissances !!</p>
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
                        <li data-bs-target="#hero-carousel" data-bs-slide-to="3"></li>
                    </ol>
                </div>
            </section>
            <AboutCompany />
            <ServicesCompany />
            <PortfolioCompany />
            {/* <InlineWidget url="https://calendly.com/definir/prise-de-rendez-vous?" /> */}
            {/* <FloatingCalendlyButton /> */}
        </main>

    );
};

export default HomeCompany;
