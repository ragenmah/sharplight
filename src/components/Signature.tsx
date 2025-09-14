// src/components/Signature.tsx
import React, { useRef, useEffect } from "react";
import SignaturePad from "signature_pad";

const Signature: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const signaturePadRef = useRef<SignaturePad | null>(null);
  const dataRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      signaturePadRef.current = new SignaturePad(canvasRef.current, {
        backgroundColor: "rgb(255, 255, 255)",
        penColor: "rgb(0, 0, 0)",
      });

      const resizeCanvas = () => {
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        if (canvasRef.current) {
          canvasRef.current.width = canvasRef.current.offsetWidth * ratio;
          canvasRef.current.height = canvasRef.current.offsetHeight * ratio;
          canvasRef.current.getContext("2d")?.scale(ratio, ratio);
          signaturePadRef.current?.clear();
        }
      };

      window.addEventListener("resize", resizeCanvas);
      resizeCanvas();

      return () => window.removeEventListener("resize", resizeCanvas);
    }
  }, []);

  const clearSignature = () => {
    signaturePadRef.current?.clear();
    if (dataRef.current) dataRef.current.value = "";
  };

  //   const saveSignature = () => {
  //     if (signaturePadRef.current?.isEmpty()) {
  //       alert("Please provide a signature first.");
  //       return;
  //     }
  //     const dataUrl = signaturePadRef.current?.toDataURL("image/png");
  //     if (dataRef.current) dataRef.current.value = dataUrl || "";
  //     alert("Signature saved!");
  //   };

  return (
    <div className="signature-section">
      <label className="signature-label">Signature</label>

      <div className="signature-pad-container">
        <canvas ref={canvasRef} />
        <button
          type="button"
          onClick={clearSignature}
          className="clear-btn"
          aria-label="Clear signature"
        >
          ✕
        </button>
      </div>

      <input type="hidden" ref={dataRef} name="signature_image" />
    </div>
    // <div className="signature-section">
    //   <label className="signature-label">Signature</label>

    //   <div className="signature-pad-container">
    //     <canvas ref={canvasRef} />
    //   </div>

    //   <div className="signature-controls">
    //     <button
    //       type="button"
    //       onClick={clearSignature}
    //       className="clear-btn"
    //       aria-label="Clear signature"
    //     >
    //       ✕
    //     </button>

    //     {/* <button
    //       type="button"
    //       onClick={saveSignature}
    //       className="btn btn-primary"
    //       aria-label="Save signature"
    //     >
    //       Save
    //     </button> */}
    //   </div>

    //   <input type="hidden" ref={dataRef} name="signature_image" />
    // </div>
  );
};

export default Signature;
