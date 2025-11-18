import React from 'react';
import { Table, Input, Button, Card, Space, Typography } from 'antd';
import { 
  SearchOutlined, 
  MoreOutlined, 
  CopyOutlined, 
  MailOutlined,
  PhoneOutlined,
  BarChartOutlined 
} from '@ant-design/icons';

const { Title } = Typography;

const Payment = () => {
  const data = [
    { key: '1', no: '1', name: 'CaravanFresh', address: 'Dalugama,Kelaniya', regNo: '123654789q', email: 'Caravan@example.com', contact: '0722323341', category: 'café', payouts: '234', earnings: '$4321.00', release: '$4021.42' },
    { key: '2', no: '2', name: 'Boon Food', address: 'Rajagiriya Colombo', regNo: '123654789q', email: 'boon@gmail.com', contact: '07161758373', category: 'Restaurent', payouts: '500', earnings: '$5340.00', release: '$5000.42' },
    { key: '3', no: '3', name: 'Newnop Cafe', address: 'Astoria towers Colpetty', regNo: '123654789q', email: 'newnop@hunger.com', contact: '0722323341', category: 'café', payouts: '170', earnings: '$1080098.00', release: '$1080098.42' },
  ];

  const columns = [
    { title: 'NO', dataIndex: 'no', key: 'no' },
    { title: 'Business Name', dataIndex: 'name', key: 'name' },
    { title: 'Business Address', dataIndex: 'address', key: 'address' },
    { 
      title: 'Company Reg No', 
      dataIndex: 'regNo', 
      key: 'regNo',
      render: (text) => <Space><CopyOutlined className="text-gray-400" />{text}</Space>
    },
    { 
      title: 'Business Email', 
      dataIndex: 'email', 
      key: 'email',
      render: (text) => <Space><CopyOutlined className="text-gray-400" />{text}</Space>
    },
    { 
      title: 'Business Contact', 
      dataIndex: 'contact', 
      key: 'contact',
      render: (text) => <Space><MailOutlined className="text-gray-400" />{text}</Space>
    },
    { 
      title: 'Category', 
      dataIndex: 'category', 
      key: 'category',
      render: (text) => (
        <Space>
           <PhoneOutlined className="text-gray-400 rotate-90" /> {/* Placeholder icon */}
           {text}
        </Space>
      )
    },
    { title: 'Total Payouts', dataIndex: 'payouts', key: 'payouts' },
    { title: 'Today Earnings', dataIndex: 'earnings', key: 'earnings' },
    { title: 'Ready to release', dataIndex: 'release', key: 'release' },
    {
      title: '',
      key: 'action',
      render: () => (
        <Button type="primary" className="bg-blue-500 text-xs h-auto py-1 px-3 rounded">
          More<br/>Details
        </Button>
      )
    }
  ];

  return (
    <div className="p-6 bg-white min-h-screen">
      <Space align="center" className="mb-6">
        {/* Optional Icon if needed next to title */}
        <Title level={2} style={{ margin: 0 }}>Payment Management</Title>
      </Space>
      <div className="border-b border-blue-400 mb-6"></div>

      {/* Summary Cards */}
      <div className="flex gap-4 mb-6">
        <Card className="border border-gray-200 rounded-lg shadow-sm w-64">
          <div className="font-semibold">Today Total Payout : <span className="text-blue-500">$1092</span></div>
        </Card>
        <Card className="border border-gray-200 rounded-lg shadow-sm w-64">
          <div className="font-semibold">Today Revenue : <span className="text-blue-500">$703</span></div>
        </Card>
        <Card className="border border-gray-200 rounded-lg shadow-sm w-64">
          <div className="font-semibold">Next Release In : <span className="text-blue-500">2 hours</span></div>
        </Card>

        <div className="ml-auto flex gap-2">
          <Input 
            placeholder="Search Business Name or Registration Number" 
            suffix={<SearchOutlined className="text-gray-400" />} 
            className="w-80 rounded-md"
          />
          <Button type="primary" className="bg-blue-500 flex items-center justify-center w-10 h-10 p-0 rounded-md">
             <MoreOutlined style={{ fontSize: '20px', color: 'white' }} />
          </Button>
        </div>
      </div>

      <Table columns={columns} dataSource={data} pagination={false} />
      
      {/* Simple pagination placeholder at bottom */}
      <div className="flex justify-center mt-6 gap-2">
          <Button size="small" disabled>&lt;</Button>
          <Button size="small" type="primary" className="bg-yellow-400 text-black border-none">1</Button>
          <Button size="small" disabled>&gt;</Button>
          <Button size="small" disabled>&gt;&gt;</Button>
      </div>
    </div>
  );
};

export default Payment;