import React from "react";

function LoginCard({ lang }) {
  const t = {
    en: {
      title: "Hi Administrator",
      adminId: "Admin ID",
      adminPass: "Admin Password",
      remember: "Remember me",
      forgot: "Forgot password?",
      signIn: "Sign In"
    },
    kr: {
      title: "안녕하세요 관리자님",
      adminId: "관리자 아이디",
      adminPass: "관리자 비밀번호",
      remember: "기억하기",
      forgot: "비밀번호 찾기?",
      signIn: "로그인"
    }
  };

  const tr = t[lang];

  return (
    <div className="login-card">
      <h1 className="login-title">{tr.title}</h1>

      <input type="text" className="input-field" placeholder={tr.adminId} />

      <input type="password" className="input-field" placeholder={tr.adminPass} />

      <div className="row-remember">
        <label className="remember-text">
          <input type="checkbox" /> {tr.remember}
        </label>

        <span className="forgot-text">{tr.forgot}</span>
      </div>

      <button className="sign-btn">{tr.signIn}</button>
    </div>
  );
}

export default LoginCard;
