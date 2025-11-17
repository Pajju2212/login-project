// 1. Import 'useState' from React
import React, { useState } from 'react';
import { Button, Input, Checkbox, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Assets from './assets';
function App() {
  const {
    t,
    i18n
  } = useTranslation();
  const navigate = useNavigate();
  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'kr' : 'en';
    i18n.changeLanguage(newLang);
  };

  // 2. Create state variables for our form
  const [adminId, setAdminId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  // 3. (Optional) Create a function to see the state change
  const handleSignIn = () => {
    if (adminId === "Admin" && adminPassword === "Password") {
      navigate('/welcome');
    } else {
      alert("Wrong ID or password");
    }
    // In the future, we will send this data to an API
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center items-center bg-cover bg-center",
    style: {
      backgroundImage: `url('${Assets.Images.loginLeftBG}')`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: Assets.Images.logo,
    alt: "KyoSync Logo",
    className: "w-1/2"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-white flex justify-center items-center relative"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    className: "absolute top-4 right-4 bg-yellow-500 text-black font-bold hover:bg-yellow-400",
    onClick: changeLanguage
  }, i18n.language === 'en' ? 'EN' : 'KR'), /*#__PURE__*/React.createElement("div", {
    className: "w-96"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold mb-8"
  }, t('title')), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement(Input, {
    size: "large",
    placeholder: t('adminId'),
    value: adminId // Set the value from state
    ,
    onChange: e => setAdminId(e.target.value) // Update state on change
  }), /*#__PURE__*/React.createElement(Input.Password, {
    size: "large",
    placeholder: t('password'),
    value: adminPassword // Set the value from state
    ,
    onChange: e => setAdminPassword(e.target.value) // Update state on change
  }), /*#__PURE__*/React.createElement(Checkbox, null, t('rememberMe')), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    size: "large",
    className: "bg-blue-600 w-full",
    onClick: handleSignIn // Call the function on click
  }, t('signIn'))))));
}
export default App;
