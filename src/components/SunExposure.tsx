// src/components/SunExposure.tsx
import React from "react";
import shapeImage from "../assets/shape1.png"; // Replace with your image path

const SunExposure: React.FC = () => {
  return (
    <div style={{ position: "relative", paddingBottom: "60px" }}>
      {" "}
      {/* Container for relative positioning */}
      <div
        style={{
          color: "#77276d",
          fontWeight: "bold",
          textAlign: "center",
          margin: "20px 0 0px",
          borderTop: "2px dotted #ccc",
          paddingTop: "5px",
          borderBottom: "2px dotted #ccc",
          paddingBottom: "5px",
        }}
        className="section-title"
      >
        SUN EXPOSURE
      </div>
      <label>How do you react to the sun?</label>
      <div className="checkbox-group">
        <div className="checkbox-item">
          <input type="radio" name="sun-reaction" />
          <label>Always burn, never tan</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="sun-reaction" />
          <label>Burn first, tan with difficulty</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="sun-reaction" />
          <label>Burn first, tan with ease</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="sun-reaction" />
          <label>Seldom burn, tan with ease</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="sun-reaction" />
          <label>Never burn, always tan</label>
        </div>
      </div>
      <label>Do you use sun protection?</label>
      <div className="checkbox-group">
        <div className="checkbox-item">
          <input type="radio" name="sun-protection" />
          <label>Yes</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="sun-protection" />
          <label>No</label>
        </div>
      </div>
      <label>Sun Exposure?</label>
      <div className="checkbox-group">
        <div className="checkbox-item">
          <input type="radio" name="sun-exposure" />
          <label>Occasional</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="sun-exposure" />
          <label>Occupational</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="sun-exposure" />
          <label>Recreational</label>
        </div>
      </div>
      <label>When were you last exposed to the sun?</label>
      <div className="checkbox-group">
        <div className="checkbox-item">
          <input type="radio" name="last-sun" />
          <label>Less than a week</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="last-sun" />
          <label>2 weeks</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="last-sun" />
          <label>1 month</label>
        </div>
      </div>
      <label>Do you use tanning beds?</label>
      <div className="checkbox-group">
        <div className="checkbox-item">
          <input type="radio" name="tanning-beds" />
          <label>Yes</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="tanning-beds" />
          <label>No</label>
        </div>
      </div>
      <label>If yes, how often?</label>
      <div className="checkbox-group">
        <div className="checkbox-item">
          <input type="checkbox" />{" "}
          {/* Changed to checkbox as it fits "how often" context */}
          <label>Weekly</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" />
          <label>Monthly</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" />
          <label>Several times a week</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" />
          <label>A few times per year</label>
        </div>
      </div>
      <label>Do you use self tanner?</label>
      <div className="checkbox-group">
        <div className="checkbox-item">
          <input type="radio" name="self-tanner" />
          <label>Yes</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="self-tanner" />
          <label>No</label>
        </div>
      </div>
      {/* Shape Image in Bottom Right Corner of the Section */}
      <img
        src={shapeImage}
        alt="Decorative Shape"
        style={{
          position: "absolute",
          top: "200px",
          right: "0px",
          width: "100%",
          height: "auto",
          maxWidth: "250px", // Limit max size for responsiveness
          zIndex: 10, // Ensure it stays above other content
        }}
      />
    </div>
  );
};

export default SunExposure;
