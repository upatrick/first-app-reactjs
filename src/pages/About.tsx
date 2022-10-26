import React from "react";
import { Link } from "react-router-dom";
import RouteLink from "../components/RouteLink";
import TitlePage from "../components/TitlePage";

const About: React.FC = () => {
  return (
    <div>
      <TitlePage title="About" />
      <RouteLink route="/" title="Voltar pra Home" />
      <RouteLink route="/contact" title="Contato" />
    </div>
  );
};

export default About;
