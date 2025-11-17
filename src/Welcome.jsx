import React, { useState } from 'react';
import { Layout, Menu, Typography, Table, Form, Input, Button, Switch, Card, Select } from 'antd';
import { UserOutlined, CreditCardOutlined, SettingOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

function Welcome() {
  const [selectedMenu, setSelectedMenu] = useState('admin');

  const menuItems = [
    {
      key: 'admin',
      icon: <UserOutlined />,
      label: 'Admin Management',
    },
    {
      key: 'payment',
      icon: <CreditCardOutlined />,
      label: 'Payment Management',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
  ];

  const dropdownOptions = [
    { value: 'admin', label: 'Admin Management' },
    { value: 'payment', label: 'Payment Management' },
    { value: 'settings', label: 'Settings' },
  ];

  const renderContent = () => {
    switch (selectedMenu) {
      case 'admin':
        return (
          <div>
            <Title level={2}>Admin Management</Title>
            <Card title="User Management" style={{ marginTop: 16 }}>
              <Table
                columns={[
                  { title: 'ID', dataIndex: 'id', key: 'id' },
                  { title: 'Name', dataIndex: 'name', key: 'name' },
                  { title: 'Role', dataIndex: 'role', key: 'role' },
                  { title: 'Status', dataIndex: 'status', key: 'status' },
                ]}
                dataSource={[
                  { key: 1, id: 1, name: 'John Doe', role: 'Admin', status: 'Active' },
                  { key: 2, id: 2, name: 'Jane Smith', role: 'User', status: 'Active' },
                ]}
                pagination={false}
              />
            </Card>
          </div>
        );
      case 'payment':
        return (
          <div>
            <Title level={2}>Payment Management</Title>
            <Card title="Payment Overview" style={{ marginTop: 16 }}>
              <Table
                columns={[
                  { title: 'Transaction ID', dataIndex: 'id', key: 'id' },
                  { title: 'Amount', dataIndex: 'amount', key: 'amount' },
                  { title: 'Status', dataIndex: 'status', key: 'status' },
                  { title: 'Date', dataIndex: 'date', key: 'date' },
                ]}
                dataSource={[
                  { key: 1, id: 'TXN001', amount: '$100.00', status: 'Completed', date: '2023-10-01' },
                  { key: 2, id: 'TXN002', amount: '$50.00', status: 'Pending', date: '2023-10-02' },
                ]}
                pagination={false}
              />
            </Card>
          </div>
        );
      case 'settings':
        return (
          <div>
            <Title level={2}>Settings</Title>
            <Card title="General Settings" style={{ marginTop: 16 }}>
              <Form layout="vertical">
                <Form.Item label="Site Name">
                  <Input defaultValue="Kyosync" />
                </Form.Item>
                <Form.Item label="Email Notifications">
                  <Switch defaultChecked />
                </Form.Item>
                <Form.Item label="Dark Mode">
                  <Switch />
                </Form.Item>
                <Form.Item>
                  <Button type="primary">Save Settings</Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        );
      default:
        return <div>Select a menu item</div>;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Title level={3} style={{ color: 'white', margin: 0 }}>Kyosync</Title>
        </div>
        <div style={{ padding: '0 16px', marginBottom: 16 }}>
          <Select
            value={selectedMenu}
            onChange={(value) => setSelectedMenu(value)}
            style={{ width: '100%' }}
            placeholder="Select Section"
            options={dropdownOptions}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedMenu]}
          items={menuItems}
          onClick={(e) => setSelectedMenu(e.key)}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
}

export default Welcome;
