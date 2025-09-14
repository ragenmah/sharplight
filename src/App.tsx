import "./App.css";
import ConsentForm from "./pages/ConsentForm";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SkinCareProfileForm from "./pages/SkinCareProfileForm";
function App() {
  return (
    <Router>
      <nav
        style={{
          marginBottom: "20px",
          padding: "10px",
          backgroundColor: "#f4f4f4",
        }}
      >
        <Link
          to="/consent"
          style={{ marginRight: "15px", textDecoration: "none", color: "#333" }}
        >
          Consent Form
        </Link>
        <Link
          to="/medical-history"
          style={{ textDecoration: "none", color: "#333" }}
        >
          Medical History Form
        </Link>
      </nav>
      <Routes>
        <Route path="/consent" element={<ConsentForm />} />
        <Route path="/medical-history" element={<SkinCareProfileForm />} />
        <Route path="/" element={<ConsentForm />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;
