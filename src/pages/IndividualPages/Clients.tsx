import React, { useState, useEffect } from 'react';

// Import des images
import client1 from '../../assets/img/clients/client-1.png';
import client2 from '../../assets/img/clients/client-2.jpg';
import client3 from '../../assets/img/clients/client-3.jpg';
import client4 from '../../assets/img/clients/client-4.jpg';
import client5 from '../../assets/img/clients/client-5.png';
import client6 from '../../assets/img/clients/client-6.png';
import client7 from '../../assets/img/clients/lhhh.jpg';
import client8 from '../../assets/img/clients/DG CONSULTING LIMITED.jpg';

interface ClientLogo {
    id: number;
    src: string;
    alt: string;
}

const clients: ClientLogo[] = [
    { id: 1, src: client1, alt: 'Client 1' },
    { id: 2, src: client2, alt: 'Client 2' },
    { id: 3, src: client3, alt: 'Client 3' },
    { id: 4, src: client4, alt: 'Client 4' },
    { id: 5, src: client5, alt: 'Client 5' },
    { id: 6, src: client6, alt: 'Client 6' },
    { id: 7, src: client7, alt: 'Client 7' },
    { id: 8, src: client8, alt: 'Client 8' },
];

const Clients: React.FC = () => {
    const [loadedImages, setLoadedImages] = useState<boolean[]>(new Array(clients.length).fill(false));

    // Fonction pour gérer le lazy loading des images
    const handleImageLoad = (index: number) => {
        const updatedLoadedImages = [...loadedImages];
        updatedLoadedImages[index] = true;
        setLoadedImages(updatedLoadedImages);
    };

    useEffect(() => {
        // Vous pouvez ajouter une logique pour précharger les images si nécessaire
        const preloadImages = () => {
            clients.forEach((_, index) => {
                const img = new Image();
                img.src = clients[index].src;
            });
        };

        preloadImages();
    }, []);

    return (
        <section id="clients" className="clients section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Clients</h2>
                <p>La satisfaction de nos clients est notre priorité</p>
            </div>
            {/* End Section Title */}

            {/* Client Logos */}
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row g-0 clients-wrap">
                    {clients.map((client, index) => (
                        <div key={client.id} className="col-xl-3 col-md-4 client-logo">
                            {/* Enlever le rendu conditionnel pour le test */}
                            <img
                                src={client.src}
                                className="img-fluid"
                                alt={client.alt}
                                onLoad={() => handleImageLoad(index)}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
