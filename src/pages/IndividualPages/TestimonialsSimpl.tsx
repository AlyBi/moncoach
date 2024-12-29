// import React, { useState, useEffect } from 'react';

// // Import des images
// import img1 from '../../assets/img/testimonials/testimonials-1.jpg';
// import img2 from '../../assets/img/testimonials/testimonials-2.jpg';
// import img3 from '../../assets/img/testimonials/testimonials-3.jpg';
// import img4 from '../../assets/img/testimonials/testimonials-4.jpg';
// import img5 from '../../assets/img/testimonials/testimonials-5.jpg';
// import img6 from '../../assets/img/testimonials/testimonials-6.jpg';

// const TestimonialsSimpl = () => {
//     interface Testimonial {
//         id: number;
//         name: string;
//         role: string;
//         img: string;
//         text: string;
//     }

//     const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

//     useEffect(() => {
//         // Simulate fetching data
//         const fetchedTestimonials = [
//             { id: 1, name: 'Saul Goodman', role: 'Ceo & Founder', img: img1, text: 't semper.' },
//             { id: 2, name: 'Sara Wilsson', role: 'Designer', img: img2, text: 'nim culpa.' },
//             { id: 3, name: 'Jena Karlis', role: 'Store Owner', img: img3, text: 'minim.' },
//             { id: 4, name: 'Matt Brandon', role: 'Freelancer', img: img4, text: 'veniam.' },
//             { id: 5, name: 'John Larson', role: 'Entrepreneur', img: img5, text: 'Qquid.' },
//             { id: 6, name: 'Emily Harison', role: 'Store Owner', img: img6, text: 'em.' }
//         ];
//         setTestimonials(fetchedTestimonials);
//     }, []);

//     return (
//         <main className="main">
//             {/* Page Title */}


//             {/* Testimonials Section */}
//             <section id="testimonials" className="testimonials section">
//                 <div className="container">
//                     <div className="row gy-4">
//                         {testimonials.map((testimonial, index) => (
//                             <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100 * (index + 1)} key={testimonial.id}>
//                                 <div className="testimonial-item">
//                                     <img src={testimonial.img} className="testimonial-img" alt={testimonial.name} />
//                                     <h3>{testimonial.name}</h3>
//                                     <h4>{testimonial.role}</h4>
//                                     <div className="stars">
//                                         <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
//                                     </div>
//                                     <p>
//                                         <i className="bi bi-quote quote-icon-left"></i>
//                                         <span>{testimonial.text}</span>
//                                         <i className="bi bi-quote quote-icon-right"></i>
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default TestimonialsSimpl;
import React, { useState, useEffect } from 'react';
import testimonialsBg from '../../assets/img/home5.jpg';
import testimonial1 from '../../assets/img/testimonials/testimonials-1.jpg';
import testimonial2 from '../../assets/img/testimonials/testimonials-2.jpg';
import testimonial3 from '../../assets/img/testimonials/testimonials-3.jpg';
import testimonial4 from '../../assets/img/testimonials/testimonials-4.jpg';
import testimonial5 from '../../assets/img/testimonials/testimonials-5.jpg';

// Import Bootstrap Carousel
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Testimonials: React.FC = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);

    // Effect pour faire défiler toutes les 2 secondes
    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselIndex((prevIndex) => (prevIndex + 1) % 5); // 5 items au total
        }, 5000); // 2 secondes

        return () => clearInterval(interval); // Cleanup au démontage du composant
    }, []);


    return (
        <section id="testimonials" className="testimonials section" style={{ backgroundColor: 'transparent' }}>
            {/* Titre TÉMOIGNAGES avec le trait orange */}
            <div className="container section-title" data-aos="fade-up" style={{ marginBottom: '10px' }}>
                <h2 className="testimonial-title">TÉMOIGNAGES</h2>
                <div className="title-underline" style={{ marginTop: '5px' }}></div> {/* Réduire l'espace entre le titre et le trait */}
            </div>

            {/* Texte "Ils nous ont fait confiance" avec les guillemets */}
            <div className="container section-title" data-aos="fade-up" data-aos-delay="100" style={{ marginTop: '-55px' }}>
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
                            <img src={testimonial1} className="testimonial-img rounded-circle" alt="Saul Goodman" />
                            <h3>Saul Goodman</h3>
                            <h4>CEO &amp; Founder</h4>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className="bi bi-star-fill"></i>
                                ))}
                            </div>
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                <span>
                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                                    Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                </span>
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                    </Carousel.Item>

                    {/* Testimonial Item 2 */}
                    <Carousel.Item>
                        <div className="testimonial-item">
                            <img src={testimonial2} className="testimonial-img rounded-circle" alt="Sara Wilsson" />
                            <h3>Sara Wilsson</h3>
                            <h4>Designer</h4>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className="bi bi-star-fill"></i>
                                ))}
                            </div>
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                <span>
                                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram
                                    malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                </span>
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                    </Carousel.Item>

                    {/* Testimonial Item 3 */}
                    <Carousel.Item>
                        <div className="testimonial-item">
                            <img src={testimonial3} className="testimonial-img rounded-circle" alt="Jena Karlis" />
                            <h3>Jena Karlis</h3>
                            <h4>Store Owner</h4>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className="bi bi-star-fill"></i>
                                ))}
                            </div>
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                <span>
                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis
                                    minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                </span>
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                    </Carousel.Item>

                    {/* Testimonial Item 4 */}
                    <Carousel.Item>
                        <div className="testimonial-item">
                            <img src={testimonial4} className="testimonial-img rounded-circle" alt="Matt Brandon" />
                            <h3>Matt Brandon</h3>
                            <h4>Freelancer</h4>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className="bi bi-star-fill"></i>
                                ))}
                            </div>
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                <span>
                                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim
                                    velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum
                                    veniam.
                                </span>
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                    </Carousel.Item>

                    {/* Testimonial Item 5 */}
                    <Carousel.Item>
                        <div className="testimonial-item">
                            <img src={testimonial5} className="testimonial-img rounded-circle" alt="John Larson" />
                            <h3>John Larson</h3>
                            <h4>Entrepreneur</h4>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className="bi bi-star-fill"></i>
                                ))}
                            </div>
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                <span>
                                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam
                                    enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi
                                    cillum quid.
                                </span>
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>



        </section>


        //   </main >  
    );
};

export default Testimonials;
