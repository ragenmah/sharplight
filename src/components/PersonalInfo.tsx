// src/components/PersonalInfo.tsx
import React, { useState } from "react";

const PersonalInfo: React.FC = () => {
  const [title, setTitle] = useState<string>("");

  return (
    <div className="personal-info-grid">
      <div className="form-group full-width" style={{ gridColumn: "span 2" }}>
        <label>Title:</label>
        <div
          style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}
        >
          <input
            type="checkbox"
            checked={title === "Mr"}
            onChange={() => setTitle(title === "Mr" ? "" : "Mr")}
          />
          <label>Mr.</label>
          <input
            type="checkbox"
            checked={title === "Mrs"}
            onChange={() => setTitle(title === "Mrs" ? "" : "Mrs")}
          />
          <label>Mrs.</label>
          <input
            type="checkbox"
            checked={title === "Ms"}
            onChange={() => setTitle(title === "Ms" ? "" : "Ms")}
          />
          <label>Ms.</label>
        </div>
      </div>
      <div className="form-group full-width" style={{ gridColumn: "span 2" }}>
        <label style={{ marginLeft: "00px" }}>First & Last Name:</label>
        <input type="text" style={{ display: "inline-block", width: "100%" }} />
      </div>
      <div className="form-group full-width" style={{ gridColumn: "span 2" }}>
        <label>Clinic Name:</label>
        <input type="text" />
      </div>
      <div className="form-group full-width" style={{ gridColumn: "span 2" }}>
        <label>Email Address:</label>
        <input type="email" />
      </div>
      <div style={{ display: "flex", gap: "10px", gridColumn: "span 2" }}>
        <div style={{ flex: 4 }}>
          <label>Address:</label>
          <input type="text" />
        </div>
        <div style={{ flex: 3 }}>
          <label>City:</label>
          <input type="text" />
        </div>
        <div style={{ flex: 3 }}>
          <label>Province:</label>
          <input type="text" />
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px", gridColumn: "span 2" }}>
        <div style={{ flex: 3 }}>
          <label>Postal/Zip Code:</label>
          <input type="text" />
        </div>
        <div style={{ flex: 3.5 }}>
          <label>Telephone Number:</label>
          <input type="tel" />
        </div>
        <div style={{ flex: 3.5 }}>
          <label>Birthday:</label>
          <input type="text" />
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px", gridColumn: "span 2" }}>
        <div style={{ flex: 1 }}>
          <label>Occupation:</label>
          <input type="text" />
        </div>
        <div style={{ flex: 1 }}>
          <label>Emergency Contact Name:</label>
          <input type="text" />
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px", gridColumn: "span 2" }}>
        <div style={{ flex: 1 }}>
          <label>Emergency Contact Number:</label>
          <input type="tel" />
        </div>
        <div style={{ flex: 1 }}>
          <label>Relationship:</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
