import React from "react";
import Card from "../../components/card/Card";

const App: React.FC = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center overflow-hidden">
      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(24, 40px)",
          gridTemplateRows: "repeat(24, 30px)",
        }}
      >
        {/* TIMELINE */}
        <Card
          title="Timeline"
          content="Contenido de Timeline"
          variant="secondary"
          className="row-start-2 row-end-5 col-start-3 col-end-18"
        />

        {/* BLOG */}
        <Card
          title="Blog"
          content="Contenido de Blog"
          variant="tertiary"
          className="row-start-2 row-end-5 col-start-19 col-end-22"
        />

        {/* STACK */}
        <Card
          title="Stack"
          content="Contenido de Stack"
          variant="primary"
          className="row-start-6 row-end-15 col-start-2 col-end-7"
        />

        {/* HERO: F6,C8 a F14,C15 */}
        <Card
          title="HERO"
          content="Contenido de HERO"
          variant="primary"
          className="row-start-6 row-end-15 col-start-8 col-end-16"
        />

        {/* SETUP */}
        <Card
          title="Setup"
          content="Contenido de Setup"
          variant="secondary"
          className="row-start-6 row-end-13 col-start-17 col-end-22"
        />

        {/* MUSIC: F14,C17 a F16,C23 */}
        <Card
          title="Music"
          content="Contenido de Music"
          variant="primary"
          className="row-start-14 row-end-17 col-start-17 col-end-24"
        />

        {/* PROJECTS */}
        <Card
          title="Projects"
          content="Contenido de Projects"
          variant="tertiary"
          className="row-start-16 row-end-24 col-start-3 col-end-16"
        />

        {/* CONTACT */}
        <Card
          title="Contact"
          content="Contenido de Contact"
          variant="tertiary"
          className="row-start-18 row-end-23 col-start-17 col-end-23"
        />
      </div>
    </div>
  );
};

export default App;

