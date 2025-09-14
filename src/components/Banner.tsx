import React from "react";
import bannerImage from "../assets/header.png";

const Banner: React.FC = () => {
  return (
    <>
      <img
        src={bannerImage}
        alt="Sharplight Banner"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </>
  );
};

export default Banner;
