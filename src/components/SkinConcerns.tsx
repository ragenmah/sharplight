// src/components/SkinConcerns.tsx
import React from "react";

const SkinConcerns: React.FC = () => {
  return (
    <div style={{ marginBottom: "20px" }} className="skin-concerns">
      <label>
        Please list your top 3 skin care concerns in order of priority:
      </label>
      <label>1.</label>
      <input type="text" />
      <label>2.</label>
      <input type="text" />
      <label>3.</label>
      <input type="text" />
    </div>
  );
};

export default SkinConcerns;
