import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";
import "../../styles/fonts.css";

import LoginCard from "./components/LoginCard";
import backgroundImg from "../../assets/images/BlurPanel.png";
import logoImg from "../../assets/images/logoImg.png";

import { toast } from "react-toastify";

export default function LoginPage() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("en");

  const toggleLanguage = () =>
    setLang((prev) => (prev === "en" ? "kr" : "en"));

  const t = (key) => {
    const text = {
      en: {
        title: "Hi Administrator",
        adminId: "Admin ID",
        password: "Admin Password",
        remember: "Remember me",
        forgot: "Forgot password?",
        signIn: "Sign In",
      },
      kr: {
        title: "관리자님 환영합니다",
        adminId: "관리자 아이디",
        password: "관리자 비밀번호",
        remember: "기억하기",
        forgot: "비밀번호 찾기",
        signIn: "로그인",
      },
    };
    return text[lang][key];
  };

  const handleLogin = (id, pass) => {
    if (!id || !pass) {
      toast.error("Please enter valid Admin ID & Password");
      return;
    }

    if (id === "admin" && pass === "1234") {
      toast.success("Login successful!");
      setTimeout(() => navigate("/dashboard"), 800);
    } else {
      toast.error("Incorrect credentials!");
    }
  };

  return (
    <div className="login-page">
      <div
        className="left"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <img src={logoImg} alt="logo" className="logo" />
      </div>

      <div className="right">
        <button className="lang-btn" onClick={toggleLanguage}>
          {lang === "en" ? "EN" : "KR"}
        </button>

        <LoginCard t={t} onLogin={handleLogin} />
      </div>
    </div>
  );
}
