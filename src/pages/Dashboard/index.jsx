import React, { useState } from 'react';
import { Card, Button, Radio } from 'antd';
import { PlusOutlined, FilterOutlined } from '@ant-design/icons';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('today');

  // Mock Data for different ranges
  const stats = {
    today: { revenue: '$8,800', revenueChange: '$1023', points: '62000 RP', pointsChange: '1233RP', referral: '542', referralChange: '22' },
    week:  { revenue: '$42,500', revenueChange: '$5100', points: '310000 RP', pointsChange: '4500RP', referral: '2100', referralChange: '150' },
    month: { revenue: '$150,000', revenueChange: '$12000', points: '950000 RP', pointsChange: '15000RP', referral: '8500', referralChange: '600' },
  };

  const current = stats[timeRange];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Top Stats Row */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        {/* Total Revenue */}
        <Card className="shadow-sm rounded-xl border-none">
          <div className="flex flex-col">
            <span className="text-gray-400 text-sm mb-2">💰 Total Revenue</span>
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-bold m-0">{current.revenue}</h2>
                <span className="text-green-500 text-sm">↑ {current.revenueChange}</span>
              </div>
              <div className="h-10 w-16 bg-gray-50 rounded"></div>
            </div>
          </div>
        </Card>

        {/* Rewards Points */}
        <Card className="shadow-sm rounded-xl border-none">
          <div className="flex flex-col">
            <span className="text-gray-400 text-sm mb-2">⭐ Rewards Points</span>
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-bold m-0">{current.points}</h2>
                <span className="text-green-500 text-sm">↑ {current.pointsChange}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Referrals */}
        <Card className="shadow-sm rounded-xl border-none">
          <div className="flex flex-col">
            <span className="text-gray-400 text-sm mb-2">👥 Referrals</span>
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-bold m-0">{current.referral}</h2>
                <span className="text-green-500 text-sm">↑ {current.referralChange}</span>
              </div>
              <div className="h-10 w-16 bg-gray-50 rounded"></div>
            </div>
          </div>
        </Card>

        {/* Add Button Card */}
        <Card className="shadow-sm rounded-xl border-none flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="h-12 w-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
            <PlusOutlined className="text-xl text-gray-400" />
          </div>
        </Card>
      </div>

      {/* Filter Row - FUNCTIONAL */}
      <div className="flex gap-4 mb-6">
        <div className="bg-white p-1 rounded-lg inline-flex">
          <button 
            className={`px-4 py-1 rounded-md text-sm font-medium transition-colors ${timeRange === 'today' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setTimeRange('today')}
          >
            Today
          </button>
          <button 
            className={`px-4 py-1 rounded-md text-sm font-medium transition-colors ${timeRange === 'week' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setTimeRange('week')}
          >
            Last 7 Days
          </button>
          <button 
            className={`px-4 py-1 rounded-md text-sm font-medium transition-colors ${timeRange === 'month' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setTimeRange('month')}
          >
            Monthly
          </button>
        </div>
        <Button icon={<FilterOutlined />} type="primary" className="rounded-lg bg-blue-500" />
      </div>

      {/* Bottom Content Row */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="h-96 shadow-sm rounded-xl border-none" />
        <Card className="h-96 shadow-sm rounded-xl border-none" />
      </div>
    </div>
  );
};

export default Dashboard;