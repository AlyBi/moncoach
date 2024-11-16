// src/components/ScrollToTopButton.tsx
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Fonction pour gérer le défilement
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setIsVisible(true); // Affiche le bouton lorsque le défilement dépasse 200px
        } else {
            setIsVisible(false); // Cache le bouton si l'utilisateur est revenu en haut
        }
    };

    // Écouteur d'événements pour le défilement
    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // Ajoute l'écouteur d'événement au scroll
        return () => {
            window.removeEventListener('scroll', handleScroll); // Nettoie l'écouteur lorsqu'il n'est plus nécessaire
        };
    }, []);

    // Fonction pour faire défiler la page vers le haut
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Si isVisible est false, ne rien rendre
    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                backgroundColor: 'orange', // Orange foncé
                color: 'white',
                width: '50px', // Largeur carrée
                height: '50px', // Hauteur carrée
                borderRadius: '8px', // Coins légèrement arrondis pour un effet carré avec des bords
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '24px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Légère ombre portée
                zIndex: 1000, // S'assurer qu'il est au-dessus des autres éléments
                transition: 'opacity 0.3s ease-in-out', // Animation douce d'apparition
            }}
        >
            <i className="bi bi-arrow-up-short"></i> {/* Icône flèche vers le haut */}
        </button>
    );
};

export default ScrollToTopButton;
