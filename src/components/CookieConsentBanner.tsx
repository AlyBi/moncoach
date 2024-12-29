import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieConsentBanner = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (cookieConsent) {
      setIsAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsAccepted(true);
    // Vous pouvez définir vos cookies ici après que l'utilisateur ait accepté
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsAccepted(true);
    // Vous pouvez gérer le refus de l'utilisateur ici, par exemple en effaçant tous les cookies
  };

  return !isAccepted ? (
    <>
      <div className="fixed inset-0 z-50 bg-black opacity-50"></div>
      <div className="fixed inset-x-0 bottom-0 z-50 flex flex-col items-center justify-center p-4 text-white bg-blue-800 sm:p-6 lg:p-8">
        <p className="mb-4 text-lg text-center md:text-xl">
          Nous utilisons des cookies et d'autres technologies de suivi pour améliorer votre expérience de navigation sur notre site web, vous montrer du contenu personnalisé et des publicités ciblées, analyser le trafic de notre site web et comprendre d'où viennent nos visiteurs. En cliquant sur
          <span
            role="button"
            onClick={handleAccept}
            tabIndex={0}
            className="text-blue-500 underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            J'accepte
          </span>
          , vous consentez à l'utilisation de tous les cookies. Vous pouvez également choisir de refuser en cliquant sur
          <span
            role="button"
            onClick={handleDecline}
            tabIndex={0}
            className="text-gray-500 underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Je refuse
          </span>
          . Pour plus d'informations, veuillez consulter notre
          <Link to="/privacy" className="text-blue-500 underline">
            Politique de confidentialité
          </Link>
          .
        </p>

        <div className="flex flex-col gap-2 md:flex-row">
          <button
            onClick={handleAccept}
            aria-label="Accepter les cookies"
            className="bg-teal-600 w-full min-w-[200px] hover:bg-teal-700 px-4 py-2 text-sm md:text-base font-semibold rounded-lg mb-2 md:mb-0"
          >
            J'accepte
          </button>
          <button
            onClick={handleDecline}
            aria-label="Refuser les cookies"
            className="bg-gray-600 w-full min-w-[200px] hover:bg-gray-700 px-4 py-2 text-sm md:text-base font-semibold rounded-lg"
          >
            Je refuse
          </button>
        </div>
        {/* <button className="mt-2 text-sm text-gray-300 underline">Changer mes préférences</button> */}
      </div>
    </>
  ) : null;
};

export default CookieConsentBanner;