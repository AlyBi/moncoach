// import React, { useEffect } from 'react';
// import { Modal, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'; // Import de useNavigate pour la redirection

// // Définition des propriétés du composant Modal
// interface ContactModalProps {
//     show: boolean;
//     message: string;
//     onClose: () => void;
// }

// const ContactModal = ({ show, message, onClose }: ContactModalProps) => {
//     const navigate = useNavigate(); // Initialise la fonction de navigation pour la redirection

//     useEffect(() => {
//         if (show) {
//             const timer = setTimeout(() => {
//                 onClose();  // Ferme la modal après 2 secondes
//                 navigate('/');  // Redirige vers l'accueil
//             }, 2000);  // Délai de 2 secondes avant fermeture et redirection

//             // Nettoyage du timer si la modal est fermée avant 2 secondes
//             return () => clearTimeout(timer);
//         }
//     }, [show, onClose, navigate]); // Déclenche l'effet lorsque "show" change

//     return (
//         <Modal show={show} onHide={onClose} backdrop="static" keyboard={false} dialogClassName="contact-modal-dialog">
//             {/* Modal Header avec un fond en dégradé */}
//             <Modal.Header closeButton className="contact-modal-header">
//                 <Modal.Title>Message concernant votre demande</Modal.Title>
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
import { useNavigate } from 'react-router-dom'; // Import de useNavigate pour la redirection

// Définition des propriétés du composant Modal
interface ContactModalProps {
    show: boolean;
    message: string;
    onClose: () => void;
}

const ContactModal = React.memo(({ show, message, onClose }: ContactModalProps) => {
    const [loading, setLoading] = useState(true); // Pour afficher "Chargement..." pendant un certain temps
    const navigate = useNavigate(); // Pour la redirection après la fermeture de la modal

    useEffect(() => {
        if (show) {
            // Simule l'envoi du message avec un délai de 2 secondes
            const timer = setTimeout(() => {
                setLoading(false); // On désactive l'état de chargement
                // Attendre encore 1 seconde avant de fermer la modal et rediriger
                setTimeout(() => {
                    onClose();  // Fermer la modal
                    navigate('/');  // Rediriger vers l'accueil
                }, 1000); // Délai de fermeture de la modal (1 seconde après l'envoi)
            }, 2000); // Simule un délai de 2 secondes pour "l'envoi" du message

            // Nettoyage du timer si la modal est fermée avant 2 secondes
            return () => clearTimeout(timer);
        }
    }, [show, onClose, navigate]);

    return (
        <Modal show={show} onHide={onClose} backdrop="static" keyboard={false} dialogClassName="contact-modal-dialog">
            {loading ? (
                <div className="loading-indicator">Chargement...</div> // Affiche l'indicateur de chargement
            ) : (
                <>
                    <Modal.Header closeButton className="contact-modal-header">
                        <Modal.Title>Message concernant votre demande</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="contact-modal-body">
                        {message}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onClose} className="contact-modal-close-button">
                            Fermer
                        </Button>
                    </Modal.Footer>
                </>
            )}
        </Modal>
    );
});

export default ContactModal;
