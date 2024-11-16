import React, { useState } from 'react';
// Assurez-vous de créer ce fichier CSS pour le style

const Overlay = () => {
    const [isVisible, setIsVisible] = useState(true);

    interface HandleSelectionProps {
        selection: string;
    }

    const handleSelection = (selection: HandleSelectionProps['selection']): void => {
        console.log(`User selected: ${selection}`);
        setIsVisible(false);
        // Redirigez l'utilisateur vers la section appropriée
        // window.location.href = `/${selection}`;
    };

    if (!isVisible) {
        return null; // Retourne null au lieu de false
    }

    return (
        <div className="overlay">
            <div className="overlay-content">
                <h2>Bienvenue sur notre site</h2>
                <p>Veuillez sélectionner votre profil pour continuer :</p>
                <button onClick={() => handleSelection('entreprise')}>Entreprise</button>
                <button onClick={() => handleSelection('particulier')}>Particulier</button>
            </div>
        </div>
    );
};

export default Overlay;
