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
import { Link } from 'react-router-dom';

// Import des images
import img1 from '../../assets/img/testimonials/testimonials-1.jpg';
import img2 from '../../assets/img/testimonials/testimonials-2.jpg';
import img3 from '../../assets/img/testimonials/testimonials-3.jpg';
import img4 from '../../assets/img/testimonials/testimonials-4.jpg';
import img5 from '../../assets/img/testimonials/testimonials-5.jpg';
import img6 from '../../assets/img/testimonials/testimonials-6.jpg';

const Testimonials = () => {
    interface Testimonial {
        id: number;
        name: string;
        role: string;
        img: string;
        text: string;
    }

    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

    useEffect(() => {
        // Simulate fetching data
        const fetchedTestimonials = [
            { id: 1, name: 'Saul Goodman', role: 'Ceo & Founder', img: img1, text: 't semper.' },
            { id: 2, name: 'Sara Wilsson', role: 'Designer', img: img2, text: 'nim culpa.' },
            { id: 3, name: 'Jena Karlis', role: 'Store Owner', img: img3, text: 'minim.' },
            { id: 4, name: 'Matt Brandon', role: 'Freelancer', img: img4, text: 'veniam.' },
            { id: 5, name: 'John Larson', role: 'Entrepreneur', img: img5, text: 'Qquid.' },
            { id: 6, name: 'Emily Harison', role: 'Store Owner', img: img6, text: 'em.' }
        ];
        setTestimonials(fetchedTestimonials);
    }, []);

    return (
        <main className="main">
            {/* Page Title */}
            <div className="page-title accent-background">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Témoignages</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><Link to="/">Accueil</Link></li>
                            <li className="current">Témoignages</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Testimonials Section */}
            <section id="testimonials" className="testimonials section">
                <div className="container">
                    <div className="row gy-4">
                        {testimonials.map((testimonial, index) => (
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100 * (index + 1)} key={testimonial.id}>
                                <div className="testimonial-item">
                                    <img src={testimonial.img} className="testimonial-img" alt={testimonial.name} />
                                    <h3>{testimonial.name}</h3>
                                    <h4>{testimonial.role}</h4>
                                    <div className="stars">
                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                    </div>
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        <span>{testimonial.text}</span>
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Testimonials;
