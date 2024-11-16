import React from 'react';

interface ServiceDetailsProps {
  title: string;
  description: string;
  imageUrl: string;
  highlights: string[];
}

const ServiceDetails = ({ title, description, imageUrl, highlights }: ServiceDetailsProps) => (
  <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
    <img src={imageUrl} alt={title} className="img-fluid services-img" />
    <h3>{title}</h3>
    <p>{description}</p>
    <ul>
      {highlights.map((highlight, index) => (
        <li key={index}><i className="bi bi-check-circle"></i> <span>{highlight}</span></li>
      ))}
    </ul>
  </div>
);

export default ServiceDetails;
