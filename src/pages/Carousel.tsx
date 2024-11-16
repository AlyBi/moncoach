import { Link } from 'react-router-dom';

const Carousel = () => {
    return (
        <section id="hero" className="hero section dark-background">
            <div id="hero-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
                <div className="carousel-item active">
                    <img src="assets/img/home.jpg" alt="" />
                    <div className="container">
                        <h2>We are professional</h2>
                        <p>Lorem ipsum dolor sit amet...</p>
                        <Link to="/about" className="btn-get-started">Read More</Link>
                    </div>
                </div>
                {/* Ajoutez d'autres éléments de carrousel ici */}
            </div>
        </section>
    );
};

export default Carousel;
