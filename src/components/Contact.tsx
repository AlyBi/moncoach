// import React, { useEffect } from 'react';
// import '/public/assets/css/vendor/bootstrap/css/bootstrap.min.css';
// import '/public/assets/css/vendor/bootstrap-icons/bootstrap-icons.css';
// import '/public/assets/css/vendor/aos/aos.css';
// import '/public/assets/css/vendor/glightbox/css/glightbox.min.css';
// import '/public/assets/css/vendor/swiper/swiper-bundle.min.css';
// import './../main.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Contact = () => {
//     useEffect(() => {
//         AOS.init();
//     }, []);

//     return (

//         <main className="main">

//             {/* Page Title */}
//             <div className="page-title accent-background">
//                 <div className="container d-lg-flex justify-content-between align-items-center">
//                     <h1 className="mb-2 mb-lg-0">Contact</h1>
//                     <nav className="breadcrumbs">
//                         <ol>
//                             <li><a href="index.html">Accueil</a></li>
//                             <li className="current">Contact</li>
//                         </ol>
//                     </nav>
//                 </div>
//             </div>

//             {/* Google Maps Container */}
//             <section id="map" className="map section">
//                 <div className="mb-5">
//                     <iframe
//                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.546138492845!2d2.3311339769787414!3d48.866864471333244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f796ea2f629%3A0x18503bb4028800ce!2s27%20Av.%20de%20l'Op%C3%A9ra%2C%2075001%20Paris!5e0!3m2!1sfr!2sfr!4v1729971264213!5m2!1sfr!2sfr"
//                         width="100%"
//                         height="400px"
//                         style={{ border: 0 }}
//                         allowFullScreen
//                         loading="lazy"
//                         referrerPolicy="no-referrer-when-downgrade"
//                         title="Google Maps Location"
//                     ></iframe>
//                 </div>
//             </section>

//             {/* Contact Form Container */}
//             <section id="contact" className="contact section" data-aos="fade">
//                 <div className="container" data-aos="fade">
//                     <div className="row gy-5 gx-lg-5">
//                         <div className="col-lg-4">
//                             <div className="info">
//                                 <h3>Nous Contacter</h3>
//                                 <p>Contactez-nous facilement via téléphone, e-mail ou à notre adresse.</p>

//                                 <div className="info-item d-flex">
//                                     <i className="bi bi-geo-alt flex-shrink-0"></i>
//                                     <div>
//                                         <h4>Adresse:</h4>
//                                         <p>
//                                             <a
//                                                 href="https://www.google.com/maps/search/?api=1&query=27+Avenue+de+l'Opéra,+Paris,+75001"
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                             >
//                                                 27 Avenue de l'Opéra, Paris, 75001
//                                             </a>
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <div className="info-item d-flex">
//                                     <i className="bi bi-envelope flex-shrink-0"></i>
//                                     <div>
//                                         <h4>Email:</h4>
//                                         <p>
//                                             <a href="mailto:contact@lifedesigncoaching.fr">contact@lifedesigncoaching.fr</a>
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <div className="info-item d-flex">
//                                     <i className="bi bi-phone flex-shrink-0"></i>
//                                     <div>
//                                         <h4>Téléphone:</h4>
//                                         <a href="tel:06 52 63 76 23">06 52 63 76 23</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-lg-8">
//                             <form
//                                 id="contact-form"
//                                 action="https://formspree.io/f/xeqyljab"
//                                 method="POST"
//                                 className="email-form"
//                             >
//                                 <div className="row">
//                                     <div className="col-md-6 form-group">
//                                         <input
//                                             type="text"
//                                             name="name"
//                                             className="form-control"
//                                             id="name"
//                                             placeholder="Votre Nom"
//                                             required
//                                         />
//                                     </div>
//                                     <div className="col-md-6 form-group mt-3 mt-md-0">
//                                         <input
//                                             type="email"
//                                             className="form-control"
//                                             name="email"
//                                             id="email"
//                                             placeholder="Votre Email"
//                                             required
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="form-group mt-3">
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         name="subject"
//                                         id="subject"
//                                         placeholder="Objet"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="form-group mt-3">
//                                     <textarea
//                                         className="form-control"
//                                         name="message"
//                                         placeholder="Message"
//                                         required
//                                     ></textarea>
//                                 </div>
//                                 <div className="my-3">
//                                     <div className="loading">Loading</div>
//                                     <div className="error-message"></div>
//                                     <div className="sent-message">Votre message a été envoyé. Merci!</div>
//                                 </div>
//                                 <div className="text-center">
//                                     <button type="submit" className="btn btn-custom">Envoyer le Message</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default Contact;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import de useNavigate pour la redirection
import ContactModal from './ContactModal';  // Le composant modal pour les réponses
import NewsletterModal from './NewsletterModal'; // Si tu as une autre modal spécifique pour newsletter


import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const [showModal, setShowModal] = useState(false);  // Pour afficher ou masquer la modal
    const [message, setMessage] = useState('');  // Le message à afficher dans la modal
    const [isNewsletter] = useState(false);  // Pour savoir si c'est une réponse newsletter
    const navigate = useNavigate();  // Utilisation de useNavigate pour la redirection

    useEffect(() => {
        AOS.init();
    }, []);

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();  // Empêche le comportement par défaut du formulaire

        // Simulation d'un envoi réussi (ici tu peux appeler ton API ou service de soumission)
        setMessage("Votre message a été envoyé. Merci !");
        setShowModal(true);  // Affiche la modal

        // Redirige vers l'accueil après 3 secondes
        setTimeout(() => {
            navigate('/');  // Redirige vers l'accueil
        }, 3000);  // Temps en millisecondes avant la redirection
    };

    return (
        <main className="main">

            {/* Page Title */}
            <div className="page-title accent-background">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Contact</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><a href="index.html">Accueil</a></li>
                            <li className="current">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Google Maps Container */}
            <section id="map" className="map section">
                <div className="mb-5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.546138492845!2d2.3311339769787414!3d48.866864471333244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f796ea2f629%3A0x18503bb4028800ce!2s27%20Av.%20de%20l'Op%C3%A9ra%2C%2075001%20Paris!5e0!3m2!1sfr!2sfr!4v1729971264213!5m2!1sfr!2sfr"
                        width="100%"
                        height="400px"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps Location"
                    />

                </div>
            </section>

            {/* Contact Form Container */}
            <section id="contact" className="contact section" data-aos="fade">
                <div className="container" data-aos="fade">
                    <div className="row gy-5 gx-lg-5">
                        <div className="col-lg-4">
                            <div className="info">
                                <h3>Nous Contacter</h3>
                                <p>Contactez-nous facilement via téléphone, e-mail ou à notre adresse.</p>

                                <div className="info-item d-flex">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h4>Adresse:</h4>
                                        <p>
                                            <a
                                                className="contact-link" // Classe pour appliquer la même couleur que le texte
                                                href="https://www.google.com/maps/search/?api=1&query=27+Avenue+de+l'Opéra,+Paris,+75001"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                27 Avenue de l'Opéra, Paris, 75001
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="info-item d-flex">
                                    <i className="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                        <h4>Email:</h4>
                                        <p>
                                            <a className="contact-link" href="mailto:contact@lifedesigncoaching.fr">
                                                contact@lifedesigncoaching.fr
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="info-item d-flex">
                                    <i className="bi bi-phone flex-shrink-0"></i>
                                    <div>
                                        <h4>Téléphone:</h4>
                                        <a className="contact-link" href="tel:06 52 63 76 23">06 52 63 76 23</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-8">
                            <form
                                id="contact-form"
                                onSubmit={handleSubmit}  // Lien avec la fonction de soumission
                                className="email-form"
                            >
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Votre Nom"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Votre Email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        id="subject"
                                        placeholder="Objet"
                                        required
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        placeholder="Message"
                                        required
                                    ></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Votre message a été envoyé. Merci!</div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-custom">Envoyer le Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal Affichage */}
            {showModal && (
                isNewsletter ? (
                    <NewsletterModal show={showModal} message={message} onClose={() => setShowModal(false)} />
                ) : (
                    <ContactModal show={showModal} message={message} onClose={() => setShowModal(false)} />
                )
            )}
        </main>
    );
};

export default Contact;
