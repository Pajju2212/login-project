// src/pages/Admin/index.jsx
import React from 'react';
import { Table, Input, Button, Space, Typography } from 'antd';
import {
  SearchOutlined,
  MoreOutlined,
  CopyOutlined,
  FilePdfOutlined,
  DownloadOutlined,
  MailOutlined,
  PhoneOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';
import './admin.css';

const { Title } = Typography;

const Admin = () => {
  // --- Mock data (matches screenshot) ---
  const data = [
    { key: '38', no: '38', name: 'pop cafe', address: 'Karnataka', regNo: '12345677', doc: 'nikhilsharma.pdf', email: 'vaishanavi.sharma1812@gmail.com', contact: '9616480968', status: 'Pending' },
    { key: '37', no: '37', name: 'cage cafe', address: 'Bengaluru', regNo: '12345678', doc: 'KAS103T_Maths_I_OBE_Notes-2020-21.pdf', email: 'nikhil.sharma@cloudingenious.co.in', contact: '8564801028', status: 'Pending' },
    { key: '36', no: '36', name: 'Joy Cafe', address: '103,Novel', regNo: '12345678', doc: "Invitation for 9th Annual Convocation - Oct'25.pdf", email: '555jyotis@gmail.com', contact: '91973916406', status: 'Pending' },
    { key: '35', no: '35', name: 'Aerox', address: 'Gorakhpur', regNo: '22303336', doc: '2242012891.pdf', email: 'nikhilsharmanik2000@gmail.com', contact: '9999999999', status: 'Pending' },
    { key: '32', no: '32', name: 'bps', address: '2hj', regNo: '61725', doc: null, email: 'bhanuprakash.sh7@gmail.com', contact: '8019752589', status: 'Accepted' },
  ];

  // --- Table columns ---
  const columns = [
    { title: 'NO', dataIndex: 'no', key: 'no', width: 80 },
    {
      title: 'Business Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <span className="font-medium">{text}</span>,
    },
    { title: 'Business Address', dataIndex: 'address', key: 'address' },
    {
      title: 'Company Reg No',
      dataIndex: 'regNo',
      key: 'regNo',
      width: 150,
      render: (text) => (
        <Space size="middle">
          <CopyOutlined className="text-gray-400" />
          <span>{text}</span>
        </Space>
      )
    },
    {
      title: 'Business Registration',
      dataIndex: 'doc',
      key: 'doc',
      width: 360,
      render: (text) => text ? (
        <Space size="middle" align="center">
          <FilePdfOutlined style={{ color: '#333' }} />
          <span className="truncate" title={text}>{text}</span>
          <DownloadOutlined className="text-gray-400 cursor-pointer" />
        </Space>
      ) : <FilePdfOutlined className="text-gray-300" />
    },
    {
      title: 'Business Email',
      dataIndex: 'email',
      key: 'email',
      width: 260,
      render: (text) => (
        <Space size="middle">
          <MailOutlined className="text-gray-400" />
          <span className="truncate" title={text}>{text}</span>
        </Space>
      )
    },
    {
      title: 'Business Contact',
      dataIndex: 'contact',
      key: 'contact',
      width: 160,
      render: (text) => (
        <Space size="middle">
          <PhoneOutlined className="text-gray-400" />
          <span>{text}</span>
        </Space>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 120,
      render: (status) => (
        <Space size="middle">
          {status === 'Accepted' ? <CheckCircleOutlined style={{ color: '#16a34a' }} /> : <ClockCircleOutlined style={{ color: '#f59e0b' }} />}
          <span>{status}</span>
        </Space>
      )
    },
    {
      title: '',
      key: 'action',
      width: 80,
      render: () => <MoreOutlined style={{ color: '#0ea5e9', fontSize: 18, cursor: 'pointer' }} rotate={90} />
    }
  ];

  // --- Row selection handler ---
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log('selectedRowKeys: ', selectedRowKeys, 'selectedRows: ', selectedRows);
    }
  };

  return (
    <div className="admin-page">
      <Title level={2}>Admin Management</Title>
      <div className="separator" /> {/* Blue underline */}

      <div className="admin-actions">
        <span className="selected">Selected : None</span>

        <div className="search-wrapper">
          <Input
            placeholder="Search Business Name or Registration Number"
            suffix={<SearchOutlined />}
            className="search-input"
            allowClear
          />
          <Button type="primary" className="more-btn">
            <MoreOutlined style={{ fontSize: 18, color: '#fff' }} />
          </Button>
        </div>
      </div>

      <Table
        rowSelection={{ type: 'checkbox', ...rowSelection }}
        columns={columns}
        dataSource={data}
        pagination={{ position: ['bottomCenter'], pageSize: 10 }}
        className="admin-table"
        rowClassName={() => 'admin-table-row'}
        scroll={{ x: 1300 }}
      />
    </div>
  );
};

export default Admin;
