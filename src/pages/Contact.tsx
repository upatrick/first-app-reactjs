import React from "react";
import TitlePage from "../components/TitlePage";

const Contact: React.FC = () => {
  return (
    <div>
      <TitlePage title="Contact" />
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "30px",
          color: "black",
        }}
      >
        <h5>+55 51 99584-8923</h5>
      </div>
    </div>
  );
};

export default Contact;
