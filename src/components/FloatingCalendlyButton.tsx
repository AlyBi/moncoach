// import React, { useState } from 'react';
// import { InlineWidget } from 'react-calendly';


// const FloatingCalendlyButton: React.FC = () => {
//     const [showWidget, setShowWidget] = useState(false);

//     const toggleWidget = () => {
//         setShowWidget(prevState => !prevState);
//     };

//     return (
//         <div>
//             {/* Bouton flottant */}
//             <a
//                 href="#!"
//                 onClick={toggleWidget}
//                 className="calendly-button"
//             >
//                 Prendre un rendez-vous
//             </a>

//             {/* Widget Calendly intégré */}
//             {showWidget && (
//                 <div className="calendly-widget open">
//                     <InlineWidget url="https://calendly.com/definir/prise-de-rendez-vous?" />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FloatingCalendlyButton;
// import React, { useState } from 'react';
// import { Modal } from 'react-bootstrap'; // Importation de la Modal de react-bootstrap
// import { InlineWidget } from 'react-calendly'; // Importation du widget Inline de Calendly
// // Assurez-vous d'avoir un fichier CSS pour les styles personnalisés

// const FloatingCalendlyButton = () => {
//     const [showModal, setShowModal] = useState(false); // Etat pour gérer l'ouverture de la modal

//     const handleClose = () => setShowModal(false); // Fermer la modal
//     const handleShow = () => setShowModal(true);   // Ouvrir la modal

//     const calendlyUrl = "https://calendly.com/definir/prise-de-rendez-vous?";

//     return (
//         <div>
//             {/* Bouton dans la navbar pour ouvrir la modal */}
//             <button
//                 type="button"
//                 className="navbar-calendly-button"
//                 onClick={handleShow} // Ouvre la modal au clic
//             >
//                 Prendre un rendez-vous
//             </button>

//             {/* Modal Calendly */}
//             <Modal show={showModal} onHide={handleClose} centered className="custom-modal">
//                 <Modal.Header closeButton>
//                     <Modal.Title>Prendre un rendez-vous</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <InlineWidget url={calendlyUrl} /> {/* Le calendrier est chargé ici */}
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );
// };

// export default FloatingCalendlyButton;
import React from 'react';
import { InlineWidget } from 'react-calendly';
// Assurez-vous d'avoir un fichier CSS pour les styles personnalisés

const CalendlyPage: React.FC = () => {
    const calendlyUrl = "https://calendly.com/definir/prise-de-rendez-vous?";

    return (
        <div className="calendly-container">
            <h1>Prendre un rendez-vous</h1>
            <InlineWidget url={calendlyUrl} /> {/* Le calendrier est chargé ici */}
        </div>
    );
};

export default CalendlyPage;
