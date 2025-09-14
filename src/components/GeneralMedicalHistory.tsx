// src/components/GeneralMedicalHistory.tsx
import React from "react";

const GeneralMedicalHistory: React.FC = () => {
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
        GENERAL MEDICAL HISTORY
      </div>
      <label>Do you have or ever had skin cancer?</label>
      <div className="checkbox-group">
        <div className="checkbox-item">
          <input type="radio" name="skin-cancer" />
          <label>Yes</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="skin-cancer" />
          <label>No</label>
        </div>
      </div>

      <div className="form-group">
        <label>Where:</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Type:</label>
        <input type="text" />
      </div>

      <label>Please list all current medications:</label>
      <input type="text" />

      <label>Please list all relevant surgeries and when:</label>
      <input type="text" />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        className="multi-column"
      >
        <div className="checkbox-group">
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Anxiety depression</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Cancer</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Constipation</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Contact lenses</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Crohn’s/IBS</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Diabetes</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Epilepsy</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Pacemaker</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Arrhythmia or Dysrhythmia</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Hearing Aids</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Heart Disease</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Hepatitis B or C</label>
          </div>
        </div>
        <div className="checkbox-group">
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>HIV</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Lupus</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Arthritis</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Asthma</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Implants (metal, silicone)</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Thyroid disorder</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Birth control</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>IUD</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Menopause</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Pregnant</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Breastfeeding</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralMedicalHistory;
