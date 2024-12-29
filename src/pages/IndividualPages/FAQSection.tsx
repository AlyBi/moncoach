// import React, { useState } from 'react';
// import { Collapse } from 'react-bootstrap';
// import 'bootstrap-icons/font/bootstrap-icons.css'; // Assurez-vous que les icônes Bootstrap sont disponibles

// const FAQSection: React.FC = () => {
//     const [openFAQ, setOpenFAQ] = useState<number | null>(null);
//     const [hoveredFAQ, setHoveredFAQ] = useState<number | null>(null); // Suivre quel FAQ est survolé

//     // Liste des questions et réponses
//     const faqItems = [
//         {
//             question: "Qu'est-ce que le coaching de vie et comment cela fonctionne-t-il ?",
//             answer: "Le coaching de vie est un processus d'accompagnement personnalisé qui vous aide à identifier vos objectifs, surmonter vos obstacles et atteindre votre plein potentiel. En tant que coach, je vous guide à travers des discussions structurées, des exercices pratiques et des stratégies qui favorisent votre croissance personnelle. Contrairement à la thérapie, le coaching de vie est orienté vers l'action et l'avenir, vous permettant de prendre des décisions conscientes et de réaliser des changements durables dans votre vie.",
//         },
//         {
//             question: "Qui peut bénéficier du coaching de vie ?",
//             answer: "Le coaching de vie est pour toute personne qui souhaite améliorer un aspect spécifique de sa vie, qu'il s'agisse de sa carrière, de ses relations, de sa gestion du stress, de sa confiance en soi ou de son équilibre personnel. Les individus recherchant une orientation dans leur parcours de vie ou confrontés à des moments de transition (changement de carrière, divorce, etc.) peuvent grandement bénéficier d'un coach de vie. Quel que soit le défi ou l'objectif, le coaching vous aide à aller au-delà des obstacles et à réaliser vos aspirations.",
//         },
//         {
//             question: "Combien de séances faut-il pour obtenir des résultats ?",
//             answer: "Le nombre de séances nécessaires dépend de vos objectifs et de la complexité des défis auxquels vous faites face. En général, les clients voient des progrès après quelques séances, mais pour un impact durable, une série de sessions sur plusieurs mois peut être bénéfique. Nous pouvons établir un plan d'action ensemble pour structurer notre travail en fonction de vos besoins. Chaque séance vous apportera des outils et des perspectives qui vous aideront à avancer vers vos objectifs à chaque étape.",
//         },
//         {
//             question: "Quels types de coaching proposez-vous ?",
//             answer: "Je propose plusieurs types de coaching en fonction de vos besoins spécifiques. Cela inclut, mais ne se limite pas à :\n- Coaching de carrière : Aide à clarifier vos objectifs professionnels, faire face aux transitions de carrière et améliorer votre équilibre travail-vie personnelle.\n- Coaching personnel : Aide à renforcer la confiance en soi, améliorer les relations, gérer le stress ou atteindre un meilleur équilibre entre la vie professionnelle et personnelle.\n- Coaching pour la gestion du changement : Si vous traversez une période de transition ou de prise de décision importante (déménagement, reconversion professionnelle, etc.), je vous accompagne pour naviguer sereinement.",
//         },
//         {
//             question: "Comment se déroulent les séances de coaching ?",
//             answer: "Les séances de coaching se déroulent en ligne ou en personne, selon vos préférences. Chaque séance dure généralement entre 60 et 90 minutes et se concentre sur vos objectifs, vos défis actuels et vos progrès. Nous utiliserons une combinaison de questions ouvertes, de discussions approfondies et d'exercices pratiques pour vous aider à trouver des solutions et à clarifier vos priorités. Avant chaque séance, vous pouvez préparer des points à discuter ou des objectifs spécifiques, et après chaque séance, vous repartirez avec des actions concrètes à mettre en place pour progresser.",
//         },
//     ];

//     // Fonction pour basculer l'affichage des réponses
//     const toggleFAQ = (index: number) => {
//         setOpenFAQ(openFAQ === index ? null : index);
//     };

//     return (
//         <section id="faq" className="faq section">
//             <div className="container">
//                 <div className="row gy-4">

//                     {/* Section de gauche avec le texte d'introduction */}
//                     <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
//                         <div className="content px-xl-5">
//                             <h3><span>Questions Fréquentes </span><strong>Questions</strong></h3>
//                             <p>
//                                 Découvrez les réponses à vos questions les plus fréquentes concernant le coaching de vie. Si vous avez d'autres questions, n'hésitez pas à me contacter.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Section de droite avec les items FAQ */}
//                     <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
//                         <div className="faq-container">
//                             {faqItems.map((item, index) => (
//                                 <div key={index} className="faq-item">
//                                     <h3
//                                         className="d-flex justify-content-between align-items-center"
//                                         onClick={() => toggleFAQ(index)}
//                                         onMouseEnter={() => setHoveredFAQ(index)} // Quand la souris entre
//                                         onMouseLeave={() => setHoveredFAQ(null)} // Quand la souris sort
//                                         style={{
//                                             cursor: 'pointer',
//                                             fontWeight: 'bold',
//                                             paddingBottom: '10px',
//                                             color: hoveredFAQ === index || openFAQ === index ? '#FFA500' : '#333', // Gris/noir normal ou orange selon l'état
//                                         }}
//                                     >
//                                         <span
//                                             className="num"
//                                             style={{
//                                                 color: hoveredFAQ === index || openFAQ === index ? '#FFA500' : '#333', // Numéro orange au survol ou ouvert
//                                             }}
//                                         >
//                                             {index + 1}.
//                                         </span>
//                                         <span
//                                             className={`question-text ${openFAQ === index ? 'opened' : ''}`}
//                                         >
//                                             {item.question}
//                                         </span>
//                                         <i
//                                             className={`faq-toggle bi bi-chevron-right ${openFAQ === index ? 'opened' : ''
//                                                 }`}
//                                             style={{
//                                                 color: '#333',
//                                                 transition: 'transform 0.3s ease',
//                                             }}
//                                         ></i>
//                                     </h3>

//                                     {/* Contenu des réponses */}
//                                     <Collapse in={openFAQ === index}>
//                                         <div className="faq-content" style={{ paddingLeft: '20px' }}>
//                                             <p>
//                                                 {item.answer}
//                                             </p>
//                                         </div>
//                                     </Collapse>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FAQSection;
import React, { useState, useEffect } from 'react';
import { Collapse } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Assurez-vous que les icônes Bootstrap sont disponibles
import AOS from 'aos';
import 'aos/dist/aos.css';
const FAQSection: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [hoveredFAQ, setHoveredFAQ] = useState<number | null>(null); // Suivre quel FAQ est survolé

    // Liste des questions et réponses
    const faqItems = [
        {
            question: " Qu'est-ce que le coaching de vie et comment cela fonctionne-t-il ?",
            answer: " Le coaching de vie est un processus d'accompagnement personnalisé qui vous aide à identifier vos objectifs, surmonter vos obstacles et atteindre votre plein potentiel. En tant que coach, je vous guide à travers des discussions structurées, des exercices pratiques et des stratégies qui favorisent votre croissance personnelle. Contrairement à la thérapie, le coaching de vie est orienté vers l'action et l'avenir, vous permettant de prendre des décisions conscientes et de réaliser des changements durables dans votre vie.",
        },
        {
            question: " Qui peut bénéficier du coaching de vie ?",
            answer: " Le coaching de vie est pour toute personne qui souhaite améliorer un aspect spécifique de sa vie, qu'il s'agisse de sa carrière, de ses relations, de sa gestion du stress, de sa confiance en soi ou de son équilibre personnel. Les individus recherchant une orientation dans leur parcours de vie ou confrontés à des moments de transition (changement de carrière, divorce, etc.) peuvent grandement bénéficier d'un coach de vie. Quel que soit le défi ou l'objectif, le coaching vous aide à aller au-delà des obstacles et à réaliser vos aspirations.",
        },
        {
            question: " Combien de séances faut-il pour obtenir des résultats ?",
            answer: " Le nombre de séances nécessaires dépend de vos objectifs et de la complexité des défis auxquels vous faites face. En général, les clients voient des progrès après quelques séances, mais pour un impact durable, une série de sessions sur plusieurs mois peut être bénéfique. Nous pouvons établir un plan d'action ensemble pour structurer notre travail en fonction de vos besoins. Chaque séance vous apportera des outils et des perspectives qui vous aideront à avancer vers vos objectifs à chaque étape.",
        },
        {
            question: " Quels types de coaching proposez-vous ?",
            answer: " Je propose plusieurs types de coaching en fonction de vos besoins spécifiques. Cela inclut, mais ne se limite pas à :\n- Coaching de carrière : Aide à clarifier vos objectifs professionnels, faire face aux transitions de carrière et améliorer votre équilibre travail-vie personnelle.\n- Coaching personnel : Aide à renforcer la confiance en soi, améliorer les relations, gérer le stress ou atteindre un meilleur équilibre entre la vie professionnelle et personnelle.\n- Coaching pour la gestion du changement : Si vous traversez une période de transition ou de prise de décision importante (déménagement, reconversion professionnelle, etc.), je vous accompagne pour naviguer sereinement.",
        },
        {
            question: " Comment se déroulent les séances de coaching ?",
            answer: " Les séances de coaching se déroulent en ligne ou en personne, selon vos préférences. Chaque séance dure généralement entre 60 et 90 minutes et se concentre sur vos objectifs, vos défis actuels et vos progrès. Nous utiliserons une combinaison de questions ouvertes, de discussions approfondies et d'exercices pratiques pour vous aider à trouver des solutions et à clarifier vos priorités. Avant chaque séance, vous pouvez préparer des points à discuter ou des objectifs spécifiques, et après chaque séance, vous repartirez avec des actions concrètes à mettre en place pour progresser.",
        },
    ];

    // Fonction pour basculer l'affichage des réponses
    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });  // Durée d'animation et une seule fois
    }, []);

    return (
        <section id="faq" className="faq section light-background">
            <div className="container section-title" data-aos="fade-up">
                <h2>FAQ</h2>
                <p style={{ marginBottom: '-60px' }}>
                    Découvrez les réponses aux questions les plus fréquemment posées concernant le coaching de vie.
                </p>
            </div>

            {/* Section FAQ */}
            <div className="container">
                <div className="row gy-4">
                    {/* Section des items FAQ */}
                    <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
                        <div className="faq-container">
                            {faqItems.map((item, index) => (
                                <div key={index} className="faq-item">
                                    <h3
                                        onClick={() => toggleFAQ(index)}
                                        onMouseEnter={() => setHoveredFAQ(index)}
                                        onMouseLeave={() => setHoveredFAQ(null)}
                                        style={{
                                            cursor: 'pointer',
                                            fontWeight: 'bold',
                                            paddingBottom: '10px',
                                            color: hoveredFAQ === index || openFAQ === index ? '#FFA500' : '#333',
                                        }}
                                    >
                                        <span
                                            className="num"
                                            style={{
                                                color: hoveredFAQ === index || openFAQ === index ? '#FFA500' : '#333',
                                            }}
                                        >
                                            {index + 1}.
                                        </span>
                                        <span
                                            className={`question-text ${openFAQ === index ? 'opened' : ''}`}
                                        >
                                            {item.question}
                                        </span>
                                        <i
                                            className={`faq-toggle bi bi-chevron-right ${openFAQ === index ? 'opened' : ''}`}
                                            style={{
                                                color: '#333',
                                                transition: 'transform 0.3s ease',
                                            }}
                                        ></i>
                                    </h3>

                                    {/* Contenu des réponses */}
                                    <Collapse in={openFAQ === index}>
                                        <div className="faq-content" style={{ paddingLeft: '20px' }}>
                                            <p>{item.answer}</p>
                                        </div>
                                    </Collapse>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;