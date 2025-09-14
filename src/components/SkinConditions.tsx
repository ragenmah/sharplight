// src/components/SkinConditions.tsx
import React from "react";

const SkinConditions: React.FC = () => {
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
        SKIN CONDITIONS (select all that apply)
      </div>
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
            <label>Acne: □ Mild □ Moderate □ Cystic (please check)</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Rosacea</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Acne scars</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Aging Skin</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Back/Chest Acne</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Blackheads</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Whiteheads</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Blistering Sunburns (past/present)</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Burn</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Cosmetic Product Reaction</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Dark under-eye circles</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Dermatitis</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Dry skin</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Eczema</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Elastosis (Sagging skin)</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Enlarged pores</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Freckles</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Herpes Simplex (cold sores)</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Hyperkeratinisation</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Hyperpigmentation (age spots)</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Hypopigmentation (white spots)</label>
          </div>
        </div>
        <div className="checkbox-group">
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Keratosis Pilaris (skin bumps)</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Lines/wrinkles</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Moles</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Pseudo Folliculitis Barbae (Ingrown hairs)</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Psoriasis</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Salicylic/Aspirin Allergy</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Scarring (Raised, depressed or flat)</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Keloid scarring</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Seborrhea (excessive oiliness)</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Sensitive skin</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Aloe Allergy</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Skin cancer (past/present)</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Skin discoloration</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Tattoos</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Cherry Haemangiomas</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Stretch marks</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Sun Damage</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Telangiectasia</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Uneven Texture</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" />
            <label>Vitiligo</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkinConditions;
