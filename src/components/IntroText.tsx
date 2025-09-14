// src/components/IntroText.tsx
import React from "react";

const IntroText: React.FC = () => {
  return (
    <p
      style={{
        fontSize: "clamp(1rem, 2.5vw, 1.125rem)", // Responsive font size (16px min, scales to 18px max)
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      Help us get to know you a little bit better by kindly filling out the
      information below. Should you have any questions, please let us know and
      we would be happy to assist.
    </p>
  );
};

export default IntroText;
