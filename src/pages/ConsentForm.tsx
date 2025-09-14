// src/components/ConsentForm.tsx
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Banner from "../components/Banner";

const ConsentForm: React.FC = () => {
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

  // Separate date variables for each date field
  const basicInfoDate = new Date().toISOString().split("T")[0]; // e.g., "2025-09-14"
  const clientSignatureDate = new Date().toISOString().split("T")[0]; // e.g., "2025-09-14"
  const practitionerSignatureDate = new Date().toISOString().split("T")[0]; // e.g., "2025-09-14"

  return (
    <div
      style={{ maxWidth: "100%", padding: "0px", margin: "0 auto" }}
      className="container"
    >
      {/* Banner */}
      <Banner />
      {/* Title Banner */}
      <div
        style={{
          backgroundColor: "#77276d",
          color: "#fff",
          padding: "10px",
          textAlign: "center",
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)", // Responsive font size
          marginBottom: "15px",
          fontWeight: "bold",
          width: "100%", // Ensure full width
          boxSizing: "border-box", // Include padding in width
        }}
      >
        Informed DPC Consent Form
      </div>

      {/* Note */}
      <p
        style={{
          fontSize: "14px",
          textAlign: "center",
          marginBottom: "20px",
          fontStyle: "italic",
        }}
      >
        *All patients must sign a consent form before commencing any Sharplight
        treatment.
      </p>

      {/* Form Container */}
      <div className="form-container">
        {/* Basic Info */}
        <div className="personal-info-grid">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" className="full-width-input" />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              className="full-width-input"
              defaultValue={basicInfoDate} // Sets initial date to today
              min="2020-01-01" // Optional: Restrict to reasonable range
              max="2030-12-31" // Optional: Restrict to reasonable range
            />
          </div>
        </div>

        {/* Authorization Section */}
        <p
          style={{
            fontSize: "14px",
            textAlign: "justify",
            marginBottom: "20px",
          }}
        >
          I{" "}
          <input
            type="text"
            style={{
              width: "200px",
              border: "none",
              borderBottom: "1px solid #ccc",
              background: "transparent",
            }}
          />{" "}
          authorize{" "}
          <input
            type="text"
            style={{
              width: "200px",
              border: "none",
              borderBottom: "1px solid #ccc",
              background: "transparent",
            }}
          />{" "}
          to perform an Intense Pulsed Light System procedure. I am aware that
          these treatments are used for hair reduction and skin rejuvenation
          thus intended to reduce and improve the appearance of pigmented
          lesions, vascular lesions, skin’s texture and/ or mild to moderate
          acne.
        </p>

        {/* Treatment Understanding */}
        <p
          style={{
            fontSize: "14px",
            textAlign: "justify",
            marginBottom: "20px",
          }}
        >
          I understand and accept that it is necessary to conduct more than one
          treatment in order to achieve results and that a treatment series will
          be necessary, and that the treatment series/program may need to be
          extended or changed by the Sharplight Technician at any time to create
          the appropriate long-term plan best suited for the area intended. I
          also accept that it may be necessary to use other manners of
          treatments, including skin care products, that may be needed to blend
          the skin tone and skin color while reducing the potential of sun
          damage during and post treatment.
        </p>

        {/* Skin Reaction */}
        <p
          style={{
            fontSize: "14px",
            textAlign: "justify",
            marginBottom: "20px",
          }}
        >
          The skin treated may be red and swollen for a period of time, with the
          forming of fine, thin scabs. Keep the treated areas covered with aloe
          vera gel and soothing creams until the thin scabs fall off. This
          process may take between 1- 4 weeks. It could take as long as 3-6
          months in some rare cases. Do not scratch the scabs, as scarring may
          result.
        </p>

        {/* No Treatment */}
        <p
          style={{
            fontSize: "14px",
            textAlign: "justify",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          We are unable to treat clients who are taking ACCUTANE and
          PHOTOSENSITIZING medications.
        </p>

        {/* Medical History */}
        <p
          style={{
            fontSize: "14px",
            textAlign: "justify",
            marginBottom: "20px",
          }}
        >
          I{" "}
          <input
            type="text"
            style={{
              width: "200px",
              border: "none",
              borderBottom: "1px solid #ccc",
              background: "transparent",
            }}
          />{" "}
          understand that I must complete a Medical History Form, which must be
          updated if any changes occur during the treatment period. I certify
          the information on my Medical History Form to be true and correct. I
          also certify that I have not withheld or omitted any medical
          information.
        </p>

        {/* Risks Section */}
        <div
          style={{
            fontSize: "14px",
            textAlign: "justify",
            marginBottom: "20px",
          }}
        >
          <p>The following problems may occur with treatment:</p>
          <ol>
            <li>
              Scarring: The pulsed light system can create bruising and a
              moderate burn or blister to the skin. For an effective treatment,
              the intensity (joules) must be just below the blistering point
              which means that the skin will be red (erythema). There is a risk
              of scarring in burned skin cases.
            </li>
            <li>
              Hyperpigmentation and Hypopigmentation: These have been noted to
              occur after treatments, especially with a darker complexion. This
              usually resolves within weeks, but it can take as long as 3-6
              months in some cases. There is a rare risk of permanent color
              change. If you have dark skin, a skin lightening cream may be
              advised as a treatment to reduce the melanin in your skin before
              and after treatment and must be regulated by a physician. Avoiding
              sun exposure before and after the treatment is crucial to reduce
              the risk of color change and burns.
            </li>
            <li>
              Infection: Although infection following pulsed light treatment is
              unusual, bacterial, fungal, and viral infections can occur. Herpes
              simplex virus infections around the mouth can occur following a
              treatment. This applies to individuals with a past history of
              Herpes simplex virus infections in the area. Should any type of
              skin infection occur, additional treatment including antibiotics
              will be necessary. If you have a history of Herpes simplex virus
              in the treated area, we recommend preventive therapy.
            </li>
            <li>
              Bleeding: Pinpoint bleeding is rare but can occur following
              pigmented and vascular lesion treatment procedures. Should
              bleeding occur, additional treatment might be necessary.
            </li>
            <li>
              Skin tissue pathology: Energy directed at skin lesions may
              potentially vaporize the lesion. Laboratory examination of the
              tissue specimen may not be possible. Only clearly benign pigmented
              lesions can be treated. A physicians approval may be requested in
              order to proceed with the treatment of certain pigmented and
              vascular lesions.
            </li>
            <li>
              Allergic reactions: In rare cases, local allergies to tape,
              preservatives used in cosmetics or topical preparations have been
              reported. Systemic reactions (which are more serious) may result
              from prescription medicines. Allergic reactions may require
              additional treatment.
            </li>
            <li>
              Sunscreen: Wear sunscreen of SPF 50 or higher before and after
              treatment to protect your skin. We highly recommend you use
              sunscreen at all times. Compliance with the after-care guidelines
              is crucial for healing, prevention of scaring, hyper-pigmentation,
              and hypopigmentation.
            </li>
            <li>
              I understand that exposure of my eyes to light could harm my
              vision. I will keep the eye protection on at all times during the
              treatment session.
            </li>
          </ol>
          <p>
            Occasionally, unforeseen mechanical problems may occur, and the
            appointment will need to be rescheduled. Our Clinic will make every
            effort to notify the client prior to his/her arrival should this
            occur prior to the scheduled treatment time; However, it may not be
            possible if the circumstance occurs while the treatment is in
            progress, thus the scheduled treatment will be interrupted and
            rescheduled once the issue is resolved. Please be understanding if
            any inconveniences occur.
          </p>
        </div>

        {/* Acknowledgment Section */}
        <div
          style={{
            fontSize: "14px",
            textAlign: "justify",
            marginBottom: "20px",
          }}
        >
          <p style={{ fontWeight: "bold", textAlign: "center" }}>
            ACKNOWLEDGMENT
          </p>
          <p>
            My questions regarding the procedure have been answered
            satisfactorily. I understand the procedure and accept the risks. I
            hereby release (Clinician:{" "}
            <input
              type="text"
              style={{
                width: "200px",
                border: "none",
                borderBottom: "1px solid #ccc",
                background: "transparent",
              }}
            />
            ) and (Facility:{" "}
            <input
              type="text"
              style={{
                width: "200px",
                border: "none",
                borderBottom: "1px solid #ccc",
                background: "transparent",
              }}
            />
            ) and (Doctor:{" "}
            <input
              type="text"
              style={{
                width: "200px",
                border: "none",
                borderBottom: "1px solid #ccc",
                background: "transparent",
              }}
            />
            ) from all liabilities associated with the above indicated
            procedure.
          </p>
        </div>

        {/* Signatures */}
        <div className="signature">
          <div className="form-group">
            <label>Client/Guardian Signature:</label>
            <input type="text" className="full-width-input" />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              className="full-width-input"
              defaultValue={clientSignatureDate} // Sets initial date to today
              min="2020-01-01" // Optional: Restrict to reasonable range
              max="2030-12-31" // Optional: Restrict to reasonable range
            />
          </div>
        </div>
        <div className="signature">
          <div className="form-group">
            <label>Practitioner Signature:</label>
            <input type="text" className="full-width-input" />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              className="full-width-input"
              defaultValue={practitionerSignatureDate} // Sets initial date to today
              min="2020-01-01" // Optional: Restrict to reasonable range
              max="2030-12-31" // Optional: Restrict to reasonable range
            />
          </div>
        </div>

        {/* reCAPTCHA and Submit Button */}
        <div style={{ textAlign: "left", marginTop: "20px" }}>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="YOUR_SITE_KEY_HERE" // Replace with your Site Key
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

export default ConsentForm;
