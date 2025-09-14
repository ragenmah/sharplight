// src/components/CosmeticHistory.tsx
import React from "react";

const CosmeticHistory: React.FC = () => {
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
        className="section-title"
      >
        COSMETIC MEDICAL HISTORY
      </div>
      <label>Are you under the care of a dermatologist?</label>
      <div className="checkbox-group">
        <div className="checkbox-item">
          <input type="radio" name="dermatologist" />
          <label>Yes</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="dermatologist" />
          <label>No</label>
        </div>
      </div>

      <label>Reason for treatment?</label>
      <input type="text" />

      <label>Do you currently use, or have you previously used?</label>
      <div className="checkbox-group">
        <div className="checkbox-item">
          <input type="checkbox" />
          <label>Accutane</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" />
          <label>Retinol</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" />
          <label>Hormone replacement therapy</label>
        </div>
      </div>

      <label>If yes, when:</label>
      <input type="text" />

      <label>Have you had plastic surgery?</label>
      <div className="checkbox-group">
        <div className="checkbox-item">
          <input type="radio" name="plastic-surgery" />
          <label>Yes</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="plastic-surgery" />
          <label>No</label>
        </div>
      </div>

      <label>If yes, What:</label>
      <input type="text" />

      <label>Have you had cosmetic injections?</label>
      <div className="checkbox-group">
        <div className="checkbox-item">
          <input type="radio" name="cosmetic-injections" />
          <label>Yes</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="cosmetic-injections" />
          <label>No</label>
        </div>
      </div>

      <div className="form-group">
        <label>If yes, What:</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Body Part:</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>When:</label>
        <input type="text" />
      </div>

      <label>Have you had any of the following cosmetic treatments?</label>
      <div className="checkbox-group">
        <div className="checkbox-item">
          <input type="checkbox" />
          <label>Peels</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" />
          <label>Hair Reduction</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" />
          <label>Photo facial</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" />
          <label>Laser Resurfacing</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" />
          <label>Body/Face Contouring</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" />
          <label>Micro-needling</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" />
          <label>Microblading</label>
        </div>
      </div>
    </>
  );
};

export default CosmeticHistory;
