// 1. Import 'useState' from React
import React, { useState } from 'react';
import { Button, Input, Checkbox } from 'antd';
import { useTranslation } from 'react-i18next';
import Assets from './assets'; 

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'kr' : 'en';
    i18n.changeLanguage(newLang);
  };

  // 2. Create state variables for our form
  const [adminId, setAdminId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  // 3. (Optional) Create a function to see the state change
  const handleSignIn = () => {
    alert(`Admin ID: ${adminId}\nPassword: ${adminPassword}`);
    // In the future, we will send this data to an API
  };

  return (
    <div className="grid grid-cols-2 h-screen">

      {/* --- LEFT COLUMN --- */}
      <div 
        className="flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url('${Assets.Images.loginLeftBG}')` }}
      >
        <img src={Assets.Images.logo} alt="KyoSync Logo" className="w-1/2" />
      </div>

      {/* --- RIGHT COLUMN --- */}
      <div className="bg-white flex justify-center items-center relative">

        <Button 
          type="primary" 
          className="absolute top-4 right-4 bg-yellow-500 text-black font-bold hover:bg-yellow-400"
          onClick={changeLanguage}
        >
          {i18n.language === 'en' ? 'EN' : 'KR'}
        </Button>

        <div className="w-96"> 
          <h2 className="text-3xl font-bold mb-8">
            {t('title')}
          </h2>

          <div className="space-y-6">

            {/* 4. Connect the inputs to our state */}
            <Input 
              size="large" 
              placeholder={t('adminId')}
              value={adminId} // Set the value from state
              onChange={(e) => setAdminId(e.target.value)} // Update state on change
            />

            <Input.Password 
              size="large" 
              placeholder={t('password')} 
              value={adminPassword} // Set the value from state
              onChange={(e) => setAdminPassword(e.target.value)} // Update state on change
            />

            <Checkbox>
              {t('rememberMe')}
            </Checkbox>

            {/* 5. Connect the button to our new function */}
            <Button 
              type="primary" 
              size="large" 
              className="bg-blue-600 w-full"
              onClick={handleSignIn} // Call the function on click
            >
              {t('signIn')}
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;