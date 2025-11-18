import React from 'react';
import { Table, Input, Button, Tag, Space, Typography } from 'antd';
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

const { Title } = Typography;

const Admin = () => {
  // Mock Data matching screenshot
  const data = [
    { key: '38', no: '38', name: 'pop cafe', address: 'Karnataka', regNo: '12345677', doc: 'nikhilsharma.pdf', email: 'vaishanavi.sharma1812@gmail.com', contact: '9616480968', status: 'Pending' },
    { key: '37', no: '37', name: 'cage cafe', address: 'Bengaluru', regNo: '12345678', doc: 'KAS103T_Maths_I_OBE_Notes-2020-21.pdf', email: 'nikhil.sharma@cloudingenious.co.in', contact: '8564801028', status: 'Pending' },
    { key: '36', no: '36', name: 'Joy Cafe', address: '103,Novel', regNo: '12345678', doc: 'Invitation for 9th Annual Convocation - Oct\'25.pdf', email: '555jyotis@gmail.com', contact: '91973916406', status: 'Pending' },
    { key: '35', no: '35', name: 'Aerox', address: 'Gorakhpur', regNo: '22303336', doc: '2242012891.pdf', email: 'nikhilsharmanik2000@gmail.com', contact: '9999999999', status: 'Pending' },
    { key: '32', no: '32', name: 'bps', address: '2hj', regNo: '61725', doc: null, email: 'bhanuprakash.sh7@gmail.com', contact: '8019752589', status: 'Accepted' },
  ];

  const columns = [
    { title: 'NO', dataIndex: 'no', key: 'no', width: 60 },
    { title: 'Business Name', dataIndex: 'name', key: 'name', render: (text) => <span className="font-medium">{text}</span> },
    { title: 'Business Address', dataIndex: 'address', key: 'address' },
    { 
      title: 'Company Reg No', 
      dataIndex: 'regNo', 
      key: 'regNo',
      render: (text) => (
        <Space>
          <CopyOutlined className="text-gray-400" />
          <span>{text}</span>
        </Space>
      )
    },
    { 
      title: 'Business Registration', 
      dataIndex: 'doc', 
      key: 'doc',
      render: (text) => text ? (
        <Space>
          <FilePdfOutlined />
          <span className="text-gray-600 truncate w-32 block" title={text}>{text}</span>
          <DownloadOutlined className="text-gray-400 cursor-pointer" />
        </Space>
      ) : <FilePdfOutlined className="text-gray-300" />
    },
    { 
      title: 'Business Email', 
      dataIndex: 'email', 
      key: 'email',
      render: (text) => (
        <Space>
          <MailOutlined className="text-gray-400" />
          <span>{text}</span>
        </Space>
      )
    },
    { 
      title: 'Business Contact', 
      dataIndex: 'contact', 
      key: 'contact',
      render: (text) => (
        <Space>
          <PhoneOutlined className="text-gray-400" />
          <span>{text}</span>
        </Space>
      )
    },
    { 
      title: 'Status', 
      dataIndex: 'status', 
      key: 'status',
      render: (status) => (
        <Space>
          {status === 'Accepted' ? <CheckCircleOutlined className="text-green-500" /> : <ClockCircleOutlined className="text-orange-500" />}
          <span>{status}</span>
        </Space>
      )
    },
    {
      title: '',
      key: 'action',
      render: () => <MoreOutlined className="text-blue-500 text-xl cursor-pointer" rotate={90} />
    }
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <Title level={2}>Admin Management</Title>
      <div className="border-b mb-6"></div> {/* Blue underline separator placeholder */}
      
      <div className="flex justify-between items-center mb-4">
        <span className="text-blue-500 font-medium">Selected : None</span>
        <div className="flex gap-2">
          <Input 
            placeholder="Search Business Name or Registration Number" 
            suffix={<SearchOutlined className="text-gray-400" />} 
            className="w-96 rounded-md"
          />
          <Button type="primary" className="bg-blue-500 flex items-center justify-center w-10 h-10 p-0 rounded-md">
             <MoreOutlined style={{ fontSize: '20px', color: 'white' }} />
          </Button>
        </div>
      </div>

      <Table 
        rowSelection={{ type: 'checkbox', ...rowSelection }}
        columns={columns} 
        dataSource={data} 
        pagination={{ position: ['bottomCenter'] }}
        className="admin-table"
      />
    </div>
  );
};

export default Admin;