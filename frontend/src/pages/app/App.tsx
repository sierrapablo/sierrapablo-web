import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import { gridCards, GridCard } from "../../data/gridCards";
import { appStyles } from "./App.styles";
import CloseIcon from '@mui/icons-material/Close';

const App: React.FC = () => {

  const [focusedContent, setFocusedContent] = useState<React.ReactNode | null>(null);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");
  const navigate = useNavigate();

  const handleCardClick = (card: GridCard) => {
    if (card.route) {
      navigate(card.route);
    } else {
      setFadeState("out");
      setFocusedContent(card.focusedContent || <h2>{card.label}</h2>);
      setTimeout(() => setFadeState("in"), 0);
    }
  }

  const closeFocusedView = () => {
    setFadeState("out");
    setTimeout(() => {
      setFocusedContent(null);
      setFadeState("in");
    }, 500);
  };

  return (
    <div className={appStyles.layout}>

      <div className="w-full flex flex-col md:flex-row justify-center items-center mt-8">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-8 pb-2">
          <h1 className="text-5xl font-extrabold mb-4">Pablo Sierra</h1>
          <p className="text-lg max-w-3xl mb-6 text-center leading-relaxed">Soy un desarrollador Fullstack apasionado por crear soluciones innovadoras y escalables. Explora mis proyectos y descubre cómo puedo ayudarte a alcanzar tus objetivos.</p>
        </div>
        {/* Galería */}
        < div className={appStyles.grid}>
          {gridCards.map((card) => (
            <Card
              key={card.id}
              className={appStyles.card}
              onClick={() => handleCardClick(card)}
            >
              <span className={appStyles.label}>{card.label}</span>
            </Card>
          ))}
        </div>
      </div>

      {/* Vista enfocada */}
      {focusedContent && (
        <div
          className={`${appStyles.overlay} ${fadeState === "in" ? "opacity-100" : "opacity-0"
            }`}
          onClick={closeFocusedView}
        >
          <div
            className={`${appStyles.modal} ${fadeState === "in" ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-right">
              <button
                className={appStyles.closeButton}
                onClick={closeFocusedView}
              >
                <CloseIcon fontSize="large" />
              </button>
            </div>
            <div className="mt-4">{focusedContent}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

