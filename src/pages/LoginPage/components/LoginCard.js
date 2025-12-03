import React, { useState } from "react";

export default function LoginCard({ t, onLogin }) {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="login-card">
      <h1 className="title">{t("title")}</h1>

      <input
        type="text"
        placeholder={t("adminId")}
        className="input"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <input
        type="password"
        placeholder={t("password")}
        className="input"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <div className="extra-row">
        <label className="remember">
          <input type="checkbox" />
          {t("remember")}
        </label>

        <span className="forgot">{t("forgot")}</span>
      </div>

      <button className="login-btn" onClick={() => onLogin(id, pass)}>
        {t("signIn")}
      </button>
    </div>
  );
}
