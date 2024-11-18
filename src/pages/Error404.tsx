import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import errorImage from '../assets/img/404 (2).jpg'; // Assurez-vous de remplacer par le chemin correct de votre image


const Error404: React.FC = () => {
    return (
        <div className="error-page">
            <Container className="text-center d-flex align-items-center justify-content-center vh-100">
                <Row>
                    <Col>
                        <img src={errorImage} alt="404 Error" className="img-fluid full-screen-image" />
                        <h1 className="mt-4">Vous n'avez pas la forme</h1>
                        <p className="lead">Vous êtes sur une page qui n'existe pas.</p>
                        <Link to="/">
                            <Button variant="primary" className="custom-button">Accueil</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Error404;
