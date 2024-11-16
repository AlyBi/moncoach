import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const NewsletterForm = () => {
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);  // Contrôle l'affichage de la modal
    const [message, setMessage] = useState('');  // Contient le message à afficher dans la modal

    // Fonction pour mettre à jour l'email
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    // Fonction pour gérer l'envoi du formulaire
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Envoyer les données au serveur (Formspree dans cet exemple)
        try {
            const response = await fetch('https://formspree.io/f/xeqyljab', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setMessage('Merci pour votre inscription à notre newsletter !');
            } else {
                setMessage('Oups! Il y a eu un problème, veuillez réessayer.');
            }
            setShowModal(true);  // Afficher la modal après l'envoi du formulaire
        } catch (error) {
            setMessage('Oups! Il y a eu un problème, veuillez réessayer.');
            setShowModal(true);
        }
    };

    // Fonction pour fermer la modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            {/* Formulaire de la newsletter */}
            <form id="newsletter-form" onSubmit={handleSubmit}>
                <div className="newsletter-form">
                    <input
                        type="email"
                        name="email"
                        placeholder="Votre Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <input type="submit" value="S'abonner" />
                </div>
            </form>

            {/* Modal de confirmation */}
            <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Newsletter - Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {message}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default NewsletterForm;
