import { JSX } from "react";
import Card from "../components/card/Card";
import About from "../components/about/About";

export interface GridCard {
  id: string;
  label: string;
  route?: string;
  focusedContent?: JSX.Element;
}

export const gridCards: GridCard[] = [
  {
    id: "about",
    label: "Sobre mí",
    focusedContent: <About />
  },
  {
    id: "timeline",
    label: "Timeline",
    focusedContent: <div>Here goes the detailed Timeline content.</div>
  },
  {
    id: "blog",
    label: "Blog",
    route: "/blog"
  },
  {
    id: "stack",
    label: "Stack",
    focusedContent: (
      <div className="flex flex-col gap-4">
        <Card className="bg-blue-400 hover:bg-blue-500">Nested Card 1</Card>
        <Card className="bg-blue-400 hover:bg-blue-500">Nested Card 2</Card>
        <Card className="bg-blue-400 hover:bg-blue-500">Nested Card 3</Card>
      </div>
    )
  },
  {
    id: "setup",
    label: "Setup",
    focusedContent: <div>Detalles sobre Setup.</div>
  },
  {
    id: "band",
    label: "¡Escucha a mi banda!",
    focusedContent: <div>Contenido sobre tu banda.</div>
  },
  {
    id: "proyectos",
    label: "Proyectos",
    focusedContent: <div>Información sobre Proyectos.</div>
  },
  {
    id: "contacto",
    label: "Contacto",
    focusedContent: <div>Datos de Contacto.</div>
  },
  {
    id: "final",
    label: "Final",
    focusedContent: <div>Contenido final.</div>
  }
];

