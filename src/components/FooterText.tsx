// src/components/FooterText.tsx
import React from "react";

const FooterText: React.FC = () => {
  return (
    <p
      style={{
        fontSize: "12px",
        textAlign: "justify",
        marginTop: "20px",
      }}
      className="footer-text"
    >
      A complete and accurate health history is important to ensure that it is
      safe for you to receive treatment and to determine the treatment and
      products that are most beneficial. Treatment protocol is based solely on
      the information provided. By signing below, you understand that the
      information that you have provided above is the most accurate to your
      knowledge and will be confidential retained exclusively by Sharplight.
    </p>
  );
};

export default FooterText;
