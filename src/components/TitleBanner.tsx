// src/components/TitleBanner.tsx
import React from "react";

const TitleBanner: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#77276d",
        color: "#fff",
        padding: "10px",
        textAlign: "center",
        fontSize: "clamp(1.5rem, 4vw, 2.5rem)", // Responsive font size
        marginBottom: "15px",
        fontWeight: "bold",
        width: "100%", // Ensure full width
        boxSizing: "border-box", // Include padding in width
      }}
    >
      Medical Health History and
      <br />
      Skin Care Profile
    </div>
  );
};

export default TitleBanner;
