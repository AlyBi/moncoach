import React from 'react';


const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy">
            <h1>Politique de confidentialité</h1>

            <p>En tant que coach de vie particulier et professionnel, je m'engage à protéger vos données personnelles et à respecter votre vie privée. Cette politique de confidentialité explique comment je collecte, utilise et protège vos informations.</p>

            <h2>Collecte des données</h2>
            <p>Je collecte uniquement les informations nécessaires pour vous fournir mes services de coaching, telles que :</p>
            <ul>
                <li>Nom et prénom</li>
                <li>Adresse e-mail</li>
                <li>Numéro de téléphone</li>
                <li>Informations relatives à votre situation personnelle et professionnelle</li>
            </ul>

            <h2>Utilisation des données</h2>
            <p>Vos données sont utilisées exclusivement pour :</p>
            <ul>
                <li>Vous contacter et assurer le suivi de nos séances de coaching</li>
                <li>Personnaliser votre accompagnement</li>
                <li>Améliorer mes services</li>
            </ul>

            <h2>Protection des données</h2>
            <p>Je m'engage à protéger vos données personnelles en utilisant des mesures de sécurité appropriées et en ne les partageant jamais avec des tiers sans votre consentement explicite.</p>

            <h2>Vos droits</h2>
            <p>Conformément au RGPD, vous avez le droit d'accéder, de rectifier ou de supprimer vos données personnelles. Pour exercer ces droits, veuillez me contacter à l'adresse suivante : <a href="mailto:contact@lifedesigncoaching.fr?subject=Question%20concernant%20le%20site" className="text-blue-500 hover:text-blue-700">
                Contactez-nous par e-mail
            </a>
            </p>

            <h2>Cookies</h2>
            <p>Ce site utilise des cookies uniquement pour améliorer votre expérience de navigation. Vous pouvez les désactiver dans les paramètres de votre navigateur.</p>

            <p>Cette politique de confidentialité peut être mise à jour périodiquement. La dernière mise à jour date du {new Date().toLocaleDateString()}.</p>
        </div>
    );
};

export default PrivacyPolicy;
