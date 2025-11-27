import React, { useState } from "react";
import "../styles/login.css";
import LoginCard from "../components/LoginCard";
import BlurPanel from "../assets/images/BlurPanel.png";
import logoImg from "../assets/images/logoImg.png";

function LoginPage() {
  const [lang, setLang] = useState("en");

  return (
    <div className="login-page">
      
      {/* LEFT SIDE */}
      <div
        className="left"
        style={{ backgroundImage: `url(${BlurPanel})` }}
      >
        <div className="logo-container">
          <img src={logoImg} alt="logo" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="lang-btn" onClick={() => setLang(lang === "en" ? "kr" : "en")}>
          {lang === "en" ? "EN" : "KR"}
        </div>

        <LoginCard lang={lang} />
      </div>

    </div>
  );
}

export default LoginPage;