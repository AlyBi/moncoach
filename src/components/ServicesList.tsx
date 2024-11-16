import React from 'react';

interface ServicesListProps {
    services: string[];
    activeService: string;
    onServiceClick: (service: string) => void;
}

const ServicesList = ({ services, activeService, onServiceClick }: ServicesListProps) => (
    <div className="services-list">
        {services.map((service, index) => (
            <button
                key={index}
                className={`service-button ${service === activeService ? 'active' : ''}`}
                onClick={() => onServiceClick(service)}
            >
                {service}
            </button>
        ))}
    </div>
);

export default ServicesList;
