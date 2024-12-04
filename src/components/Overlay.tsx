// import React, { useState } from 'react';
// // Assurez-vous de créer ce fichier CSS pour le style

// const Overlay = () => {
//     const [isVisible, setIsVisible] = useState(true);

//     interface HandleSelectionProps {
//         selection: string;
//     }

//     const handleSelection = (selection: HandleSelectionProps['selection']): void => {
//         console.log(`User selected: ${selection}`);
//         setIsVisible(false);
//         // Redirigez l'utilisateur vers la section appropriée
//         // window.location.href = `/${selection}`;
//     };

//     if (!isVisible) {
//         return null; // Retourne null au lieu de false
//     }

//     return (
//         <div className="overlay">
//             <div className="overlay-content">
//                 <h2>Bienvenue sur notre site</h2>
//                 <p>Veuillez sélectionner votre profil pour continuer :</p>
//                 <button onClick={() => handleSelection('entreprise')}>Entreprise</button>
//                 <button onClick={() => handleSelection('particulier')}>Particulier</button>
//             </div>
//         </div>
//     );
// };

// export default Overlay;
// /components/Overlay/Overlay.tsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Overlay: React.FC = () => {
//     const [isVisible, setIsVisible] = useState(true);
//     const navigate = useNavigate();

//     const handleSelection = (selection: string) => {
//         setIsVisible(false);
//         // Redirection vers la page appropriée
//         navigate(`/${selection}`);
//     };

//     if (!isVisible) return null;

//     return (
//         <div className="overlay">
//             <div className="overlay-content">
//                 <h2>Bienvenue sur notre site</h2>
//                 <p>Veuillez choisir pour continuer</p>
//                 <button onClick={() => handleSelection('company')}>Entreprises</button>
//                 <button onClick={() => handleSelection('individual')}>Particuliers</button>
//             </div>
//         </div>
//     );
// };

// export default Overlay;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAppContext } from '../AppContext';

// const Overlay: React.FC = () => {
//     const { setUserType } = useAppContext();
//     const navigate = useNavigate();
//     const [overlayVisible, setOverlayVisible] = useState(true); // Contrôle de l'affichage de l'overlay

//     const handleSelectUserType = (type: 'company' | 'individual') => {
//         setUserType(type); // Met à jour le type d'utilisateur dans le contexte
//         localStorage.setItem('userType', type); // Stocke dans localStorage

//         // Cache l'overlay et redirige après un court délai
//         setOverlayVisible(false);
//         setTimeout(() => {
//             navigate(type === 'company' ? '/company' : '/individual'); // Redirige vers la bonne page
//         }, 300);
//     };

//     if (!overlayVisible) return null; // Retourne rien si l'overlay est masqué

//     return (
//         <div className="overlay">
//             <h1>Bienvenue, veuillez choisir votre type</h1>
//             <button onClick={() => handleSelectUserType('company')}>Entreprise</button>
//             <button onClick={() => handleSelectUserType('individual')}>Particulier</button>
//         </div>
//     );
// };

// export default Overlay;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../AppContext';
import '../index.css';

const Overlay: React.FC = () => {
    const { setUserType } = useAppContext();
    const navigate = useNavigate();
    const [overlayVisible, setOverlayVisible] = useState(true); // Contrôle de l'affichage de l'overlay

    const handleSelectUserType = (type: 'company' | 'individual') => {
        setUserType(type); // Met à jour le type d'utilisateur dans le contexte
        localStorage.setItem('userType', type); // Stocke dans localStorage

        // Cache l'overlay et redirige après un court délai
        setOverlayVisible(false);

        // Redirection après un délai pour laisser le temps à l'animation
        setTimeout(() => {
            navigate(type === 'company' ? '/company' : '/individual'); // Redirige vers la bonne page
        }, 300); // Délai de 300ms pour l'animation
    };

    return (
        <div className={`overlay ${overlayVisible ? 'show' : ''}`}>
            <h1>Bienvenue, veuillez choisir votre type</h1>
            <div className="button-container">
                <button onClick={() => handleSelectUserType('company')}>Entreprise</button>
                <button onClick={() => handleSelectUserType('individual')}>Particulier</button>
            </div>
        </div>
    );
};

export default Overlay;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAppContext } from '../AppContext';

// // Importation des images comme cartes
// import Image1 from '../assets/img/home1.jpg';
// import Image2 from '../assets/img/ado.jpg';
// import Image3 from '../assets/img/coach.jpg';

// const Overlay: React.FC = () => {
//     const { setUserType } = useAppContext();
//     const navigate = useNavigate();
//     const [overlayVisible, setOverlayVisible] = useState(true); // Contrôle de l'affichage de l'overlay

//     const handleSelectUserType = (type: 'company' | 'individual') => {
//         setUserType(type); // Met à jour le type d'utilisateur dans le contexte
//         localStorage.setItem('userType', type); // Stocke dans localStorage

//         // Cache l'overlay et redirige après un court délai
//         setOverlayVisible(false);

//         // Redirection après un délai pour laisser le temps à l'animation
//         setTimeout(() => {
//             navigate(type === 'company' ? '/company' : '/individual'); // Redirige vers la bonne page
//         }, 300); // Délai de 300ms pour l'animation
//     };

//     return (
//         <div className={`overlay ${overlayVisible ? 'show' : ''}`}>
//             <h1>Bienvenue, veuillez choisir votre type</h1>
//             <div className="button-container">
//                 <button onClick={() => handleSelectUserType('company')}>Entreprise</button>
//                 <button onClick={() => handleSelectUserType('individual')}>Particulier</button>
//             </div>

//             {/* Conteneur d'images flottantes sous forme de cartes */}
//             <div className="floating-images">
//                 <div className="card">
//                     <img src={Image1} alt="Description of 1" />
//                 </div>
//                 <div className="card">
//                     <img src={Image2} alt="Description of 2" />
//                 </div>
//                 <div className="card">
//                     <img src={Image3} alt="Description of 3" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Overlay;

