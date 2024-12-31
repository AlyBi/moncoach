import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface CookieConsentBannerProps {
  onConsent: (consent: boolean) => void;
}

const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onConsent }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShow(true);
    } else {
      onConsent(cookieConsent === 'accepted');
    }
  }, [onConsent]);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShow(false);
    onConsent(true);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShow(false);
    onConsent(false);
  };

  return (
    <Modal
      show={show}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header>
        <Modal.Title>Consentement aux cookies</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Nous utilisons des cookies et d'autres technologies de suivi pour améliorer votre expérience de navigation sur notre site web, vous montrer du contenu personnalisé et des publicités ciblées. En cliquant sur "J'accepte", vous consentez à l'utilisation de tous les cookies. Vous pouvez également choisir de refuser en cliquant sur "Je refuse".
        </p>
        <p>
          Pour plus d'informations, veuillez consulter notre <Link to="/privacy">Politique de confidentialité</Link>.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleDecline}>
          Je refuse
        </Button>
        <Button variant="primary" onClick={handleAccept}>
          J'accepte
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CookieConsentBanner;
