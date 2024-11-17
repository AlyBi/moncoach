// import React, { useEffect } from 'react';
// import { Modal, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'; // Pour rediriger vers l'accueil

// // Définition des propriétés du composant Modal
// interface ContactModalProps {
//     show: boolean;
//     message: string;
//     onClose: () => void;
// }

// const ContactModal = ({ show, message, onClose }: ContactModalProps) => {
//     const navigate = useNavigate(); // Initialisation de la fonction de navigation

//     // Effet pour masquer la modal après 2 secondes et rediriger vers l'accueil
//     useEffect(() => {
//         if (show) {
//             setTimeout(() => {
//                 onClose();  // Ferme la modal
//                 navigate('/');  // Redirige vers l'accueil
//             }, 2000);  // Délai de 2 secondes
//         }
//     }, [show, onClose, navigate]);

//     return (
//         <Modal show={show} onHide={onClose} backdrop="static" keyboard={false} dialogClassName="contact-modal-dialog">
//             {/* Modal Header avec le fond en dégradé */}
//             <Modal.Header closeButton className="contact-modal-header">
//                 <Modal.Title>Message de la Newsletter</Modal.Title>
//             </Modal.Header>
//             {/* Contenu de la modal */}
//             <Modal.Body className="contact-modal-body">
//                 {message}
//             </Modal.Body>
//             {/* Footer de la modal avec le bouton de fermeture */}
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={onClose} className="contact-modal-close-button">
//                     Fermer
//                 </Button>
//             </Modal.Footer>
//         </Modal>
//     );
// };

// export default ContactModal;
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Pour rediriger vers l'accueil

// Définition des propriétés du composant Modal
interface ContactModalProps {
    show: boolean;
    message: string;
    onClose: () => void;
}

const ContactModal = ({ show, message, onClose }: ContactModalProps) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Initialisation de la fonction de navigation

    // Effet pour masquer la modal après 2 secondes et rediriger vers l'accueil
    useEffect(() => {
        if (show) {
            setTimeout(() => {
                setLoading(false);
                onClose();  // Ferme la modal
                navigate('/');  // Redirige vers l'accueil
            }, 2000);  // Délai de 2 secondes
        }
    }, [show, onClose, navigate]);

    return (
        <Modal show={show} onHide={onClose} backdrop="static" keyboard={false} dialogClassName="contact-modal-dialog">
            {loading ? (
                <div className="loading-indicator">Chargement...</div>
            ) : (
                <>
                    {/* Modal Header avec le fond en dégradé */}
                    <Modal.Header closeButton className="contact-modal-header">
                        <Modal.Title>Message de la Newsletter</Modal.Title>
                    </Modal.Header>
                    {/* Contenu de la modal */}
                    <Modal.Body className="contact-modal-body">
                        {message}
                    </Modal.Body>
                    {/* Footer de la modal avec le bouton de fermeture */}
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onClose} className="contact-modal-close-button">
                            Fermer
                        </Button>
                    </Modal.Footer>
                </>
            )}
        </Modal>
    );
};

export default ContactModal;
