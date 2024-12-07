import React from 'react';
import { InlineWidget } from 'react-calendly';
// Assurez-vous d'avoir un fichier CSS pour les styles personnalisés

const CalendlyPage: React.FC = () => {
    return (
        <div className="calendly-container">
            <a href="https://calendly.com/definir/prise-de-rendez-vous?" className="calendly-button" target="_blank" rel="noopener noreferrer">
                Prise de rendez-vous
            </a>
            <InlineWidget url="https://calendly.com/definir/prise-de-rendez-vous?" />
        </div>
    );
};

export default CalendlyPage;
