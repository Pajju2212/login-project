import React from 'react';
import { Card, Typography, Button, Switch } from 'antd';
const { Title } = Typography;

const Settings = ({ onLogout, darkMode, setDarkMode }) => {
  const handleDarkModeToggle = (checked) => {
    setDarkMode(checked);
    localStorage.setItem('darkMode', checked.toString());
  };

  return (
    <div className="p-6">
      <Title level={2}></Title>
      <Card>
        <div style={{ marginBottom: '20px' }}>
          <h3>Dark Mode</h3>
          <Switch checked={darkMode} onChange={handleDarkModeToggle} />
        </div>
        <div>
          <h3>Account</h3>
          <Button type="primary" danger onClick={onLogout}>
            Logout
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default Settings;
