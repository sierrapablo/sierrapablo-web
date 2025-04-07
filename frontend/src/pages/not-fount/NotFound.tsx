import { useNavigate } from "react-router-dom";
import { tv } from "tailwind-variants";

const containerStyles = tv({
  base: "min-h-screen flex flex-col items-center justify-center text-center"
});

const titleStyles = tv({
  base: "text-4xl font-bold mb-4"
});

const subtitleStyles = tv({
  base: "text-lg"
});

const buttonStyles = tv({
  base: "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
});

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className={containerStyles()}>
      <h1 className={titleStyles()}>404</h1>
      <p className={subtitleStyles()}>La página que buscas no existe.</p>
      <button onClick={handleGoHome} className={buttonStyles()}>
        Volver al inicio
      </button>
    </div>
  );
};

export default NotFound;
