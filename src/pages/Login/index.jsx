// src/pages/Login/index.jsx
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import LogoImg from "../../assets/images/Logo.png";
import BlurPanel from "../../assets/images/BlurPanel.png";
import "./index.css"; // optional local styles if you have them

const Login = ({ onSuccess, language, toggleLanguage, t }) => {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      width: "100%",
      overflow: "hidden",
      fontFamily: "'Inter', 'Segoe UI', Roboto, Arial, sans-serif"
    }}>

      {/* LEFT: blur image + logo */}
      <div style={{
        width: "50%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0ea5e9"
      }}>
        <img
          src={BlurPanel}
          alt="bg"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "blur(0.6px)" }}
        />

        <div style={{ position: "relative", zIndex: 2, textAlign: "left", color: "white", paddingLeft: 80 }}>
          <img
            src={LogoImg}
            alt="KyoSync logo"
            style={{ width: 180, display: "block", marginBottom: 8, filter: "drop-shadow(0 6px 20px rgba(0,0,0,0.25))" }}
          />
          <div style={{ fontSize: 44, fontWeight: 700, marginTop: 8 }}>KyoSync</div>
        </div>
      </div>

      {/* RIGHT: form */}
      <div style={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 80px",
        background: "#ffffff",
        position: "relative",
        boxSizing: "border-box"
      }}>

        {/* Language badge */}
        <button
          onClick={toggleLanguage}
          style={{
            position: "absolute",
            top: 28,
            right: 28,
            background: "#FFD500",
            border: "none",
            padding: "10px 12px",
            borderRadius: 10,
            fontWeight: 800,
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.12)"
          }}
        >
          {language ? language.toUpperCase() : "EN"}
        </button>

        {/* Title */}
        <h1 style={{ fontSize: 48, margin: "0 0 28px 0", fontWeight: 800, color: "#0f172a" }}>
          {t ? t("title") : "Hi Administrator"}
        </h1>

        {/* Inputs container: keep it at ~65% width of right panel */}
        <div style={{ width: "65%", maxWidth: 520 }}>
          {/* Admin ID */}
          <input
            type="text"
            placeholder={t ? t("adminId") : "Admin ID"}
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            style={{
              width: "100%",
              padding: "16px 18px",
              borderRadius: 14,
              border: "1px solid #e6e6e6",
              marginBottom: 18,
              fontSize: 16,
              color: "#111827",
              boxSizing: "border-box"
            }}
          />

          {/* Password (with eye) */}
          <div style={{ position: "relative", marginBottom: 18 }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder={t ? t("password") : "Admin Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "16px 48px 16px 18px",
                borderRadius: 14,
                border: "1px solid #e6e6e6",
                fontSize: 16,
                boxSizing: "border-box",
                color: "#111827"
              }}
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", cursor: "pointer", color: "#6b7280" }}
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          {/* Remember + spacer */}
          <label style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 26, color: "#111827", fontWeight: 600 }}>
            <input type="checkbox" style={{ width: 16, height: 16, cursor: "pointer" }} />
            <span style={{ fontSize: 16 }}>{t ? t("rememberMe") : "Remember me"}</span>
          </label>

          {/* Sign In button (full width of this input container, roomy) */}
          <button
            onClick={() => {
              if (adminId === "Admin" && password === "Password") {
                if (typeof onSuccess === "function") onSuccess();
              } else {
                // small shake + alert could be added later
                alert("Invalid admin ID or password");
              }
            }}
            style={{
              width: "100%",
              padding: "16px 20px",
              background: "#0078FF",
              color: "#fff",
              border: "none",
              borderRadius: 14,
              fontSize: 18,
              fontWeight: 800,
              cursor: "pointer",
              boxShadow: "0 12px 24px rgba(3,102,214,0.16)"
            }}
          >
            {t ? t("signIn") : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
