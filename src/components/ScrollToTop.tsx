import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Lorsque l'URL change, on fait défiler la page en haut
    window.scrollTo(0, 0);
  }, [location]); // Réagir aux changements de location

  return null; // Pas besoin d'afficher quoi que ce soit
};

export default ScrollToTop;
