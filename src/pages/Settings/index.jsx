import React from 'react';
import { Card, Typography } from 'antd';
const { Title } = Typography;

const Settings = () => {
  return (
    <div className="p-6">
      <Title level={2}>Settings</Title>
      <Card>
        <p>Settings page content goes here.</p>
      </Card>
    </div>
  );
};
export default Settings;