import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg pb-4">La página que buscas no existe.</p>
      <button onClick={handleGoHome} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Volver al inicio
      </button>
    </div>
  );
};

export default NotFound;
