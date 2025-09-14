// src/components/Allergies.tsx
import React from "react";

const Allergies: React.FC = () => {
  return (
    <>
      <div
        style={{
          color: "#77276d",

          fontWeight: "bold",
          textAlign: "center",
          margin: "20px 0 10px",
          borderTop: "2px dotted #ccc",
          paddingTop: "5px",
          borderBottom: "2px dotted #ccc",
          paddingBottom: "5px",
        }}
        className="section-title allergies-sensitivities"
      >
        ALLERGIES and SENSITIVITIES (please list):
      </div>
      <input
        type="text"
        style={{
          width: "100%",
          border: "none",
          marginBottom: "15px",
        }}
      />
    </>
  );
};

export default Allergies;
