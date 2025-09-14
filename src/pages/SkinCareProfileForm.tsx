import React from "react";
import Allergies from "../components/Allergies";
import Banner from "../components/Banner";
import CosmeticHistory from "../components/CosmeticHistory";
import FooterText from "../components/FooterText";
import GeneralMedicalHistory from "../components/GeneralMedicalHistory";
import IntroText from "../components/IntroText";
import Lifestyle from "../components/Lifestyle";
import PersonalInfo from "../components/PersonalInfo";
import Signature from "../components/Signature";
import SkinConcerns from "../components/SkinConcerns";
import SkinConditions from "../components/SkinConditions";
import SunExposure from "../components/SunExposure";
import TitleBanner from "../components/TitleBanner";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from "react";

const SkinCareProfileForm: React.FC = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = () => {
    if (!captchaValue) {
      alert("Please complete the reCAPTCHA!");
      return;
    }
    // Here you would typically send the captchaValue to your backend for verification
    console.log("Form submitted with CAPTCHA value:", captchaValue);
    // Reset CAPTCHA after submission
    if (recaptchaRef.current) recaptchaRef.current.reset();
    // Add your form submission logic here (e.g., send data to backend)
  };

  return (
    <div
      style={{ maxWidth: "100%", padding: "0px", margin: "0 auto" }}
      className="container"
    >
      <Banner />
      <TitleBanner />
      <div className="form-container">
        <IntroText />
        <PersonalInfo />
        <Allergies />
        <SkinConcerns />
        <SkinConditions />
        <SunExposure />
        <CosmeticHistory />
        <GeneralMedicalHistory />
        <Lifestyle />
        <FooterText />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            flexWrap: "wrap",
            gap: "20px",
          }}
          className="signature"
        >
          <div className="form-group">
            <label>Date:</label>
            <input
              type="text"
              style={{ width: "100%" }}
              value="05:37 PM +0545, Sunday, September 14, 2025"
              readOnly
            />
          </div>
          <Signature />
        </div>
        {/* reCAPTCHA and Submit Button */}
        <div style={{ textAlign: "left", marginTop: "20px" }}>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={handleCaptchaChange}
          />
          <button
            onClick={handleSubmit}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#77276d",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkinCareProfileForm;
