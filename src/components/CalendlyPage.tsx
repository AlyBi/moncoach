import React, { useState, useEffect, useRef } from 'react';
import { InlineWidget } from 'react-calendly';
import { useNavigate } from 'react-router-dom';

const CalendlyPage: React.FC = () => {
    const [showModal, setShowModal] = useState(true); // Modal initially visible
    const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false); // To track if Calendly is loaded
    const calendlyRef = useRef<HTMLDivElement | null>(null); // Ref to track Calendly widget
    const navigate = useNavigate();

    useEffect(() => {
        // Function to check if Calendly has loaded by looking for its iframe
        const checkCalendlyLoaded = () => {
            if (calendlyRef.current && calendlyRef.current.querySelector('iframe')) {
                setIsCalendlyLoaded(true); // Calendly iframe is loaded
            }
        };

        // Initial check for Calendly
        checkCalendlyLoaded();

        // Set a timer to close modal after a certain delay (for example, 3 seconds)
        const modalTimer = setTimeout(() => {
            setShowModal(false); // Close the modal after 3 seconds
        }, 3000);

        // Optionally, use a mutation observer to detect iframe addition in the DOM
        const observer = new MutationObserver(checkCalendlyLoaded);
        if (calendlyRef.current) {
            observer.observe(calendlyRef.current, { childList: true });
        }

        // Clean up timers and observers
        return () => {
            clearTimeout(modalTimer);
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        // Redirect after a certain delay (e.g., 5 seconds)
        if (isCalendlyLoaded) {
            setTimeout(() => {
                navigate('/'); // Redirect to home after 5 seconds
            }, 5000);
        }
    }, [isCalendlyLoaded, navigate]);

    // Listen to the message from the Calendly iframe
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            // Check if the message comes from Calendly's iframe
            if (event.origin !== 'https://calendly.com') return;

            // Check if the event is a successful scheduling event
            if (event.data && event.data.event && event.data.event === 'event_scheduled') {
                setShowModal(false); // Close modal when the event is scheduled
            }
        };

        // Add event listener for messages
        window.addEventListener('message', handleMessage);

        // Cleanup event listener when the component is unmounted
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    return (
        <div className="calendly-container">
            {showModal && (
                <div className="modal">
                    <a
                        href="https://calendly.com/definir/prise-de-rendez-vous?"
                        className="calendly-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Prise de rendez-vous
                    </a>

                    {/* Calendly Widget */}
                    <div ref={calendlyRef}>
                        <InlineWidget
                            url="https://calendly.com/definir/prise-de-rendez-vous?"
                        />
                    </div>
                </div>
            )}

            {/* Optionally show a message when Calendly is loaded */}
            {isCalendlyLoaded && <p>Calendly est maintenant chargé!</p>}
        </div>
    );
};

export default CalendlyPage;
