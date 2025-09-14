// src/components/Lifestyle.tsx
import React from "react";

const Lifestyle: React.FC = () => {
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
        LIFESTYLE
      </div>
      <label>Have you had children?</label>
      <div className="checkbox-group">
        <div className="checkbox-item">
          <input type="radio" name="children" />
          <label>Yes</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="children" />
          <label>No</label>
        </div>
      </div>

      <label>How would you rate your stress level?</label>
      <div className="checkbox-group">
        <div className="checkbox-item">
          <input type="radio" name="stress" />
          <label>High</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="stress" />
          <label>Moderate</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="stress" />
          <label>Low</label>
        </div>
      </div>

      <label>On average how much sleep do you get per night?</label>
      <div className="checkbox-group">
        <div className="checkbox-item">
          <input type="radio" name="sleep" />
          <label>More than 8 hours</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="sleep" />
          <label>6-8 hours</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="sleep" />
          <label>Less than 6 hours</label>
        </div>
      </div>

      <label>How would you rate your diet?</label>
      <div className="checkbox-group">
        <div className="checkbox-item">
          <input type="radio" name="diet" />
          <label>Healthy</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="diet" />
          <label>Poor</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="diet" />
          <label>Vegetarian/Vegan</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="diet" />
          <label>Restricted</label>
        </div>
      </div>

      <label>
        Please list any dietary supplements or vitamins you are currently
        taking:
      </label>
      <input type="text" />

      <div className="form-group">
        <label>Coffee:</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Water:</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Alcohol:</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Cigarettes:</label>
        <input type="text" />
      </div>

      <label>How often do you exercise?</label>
      <div className="checkbox-group">
        <div className="checkbox-item">
          <input type="radio" name="exercise" />
          <label>Less than 2 days a week</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="exercise" />
          <label>3 days a week</label>
        </div>
        <div className="checkbox-item">
          <input type="radio" name="exercise" />
          <label>More than 5 days a week</label>
        </div>
      </div>
    </>
  );
};

export default Lifestyle;
