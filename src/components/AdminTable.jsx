import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FileText,
  Download,
  Mail,
  Phone,
  MoreHorizontal,
  Clock,
  CheckCircle,
  File
} from 'lucide-react';

const AdminTable = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      address: "Karnataka",
      regNo: "12345677",
      regFile: "nikhilsharma.pdf",
      email: "vaishanavi.sharma1812@gmail.com",
      contact: "9616480968",
      status: "Pending",
    },
    {
      id: 2,
      address: "Bengaluru",
      regNo: "12345678",
      regFile: "KAS103T_Maths_I_...",
      email: "nikhil.sharma@cloudingenious.co.in",
      contact: "8564801028",
      status: "Pending",
    },
    {
      id: 3,
      address: "103,Novel",
      regNo: "12345678",
      regFile: "Invitation for 9th A...",
      email: "555jyotis@gmail.com",
      contact: "91973916406",
      status: "Pending",
    },
    {
      id: 4,
      address: "Gorakhpur",
      regNo: "22303336",
      regFile: "2242012891.pdf",
      email: "nikhilsharmanik2000@gmail.com",
      contact: "9999999999",
      status: "Pending",
    },
    {
      id: 5,
      address: "2hj",
      regNo: "61725",
      regFile: null,
      email: "bhanuprakash.sh7@gmail.com",
      contact: "8019752589",
      status: "Accepted",
    },
  ];

  return (
    <div className="table-container">
      
      {/* Search Bar */}
      <div className="table-header-actions" style={{ justifyContent: 'flex-end' }}>
        <input type="text" placeholder={t("searchBusinessNameOrRegNo")} className="search-bar" />
        <button style={{ 
            marginLeft: '10px', background: '#0056b3', color: 'white', border: 'none', 
            width: '40px', borderRadius: '4px', cursor: 'pointer', fontSize: '18px' 
        }}>⋮</button>
      </div>

      {/* TABLE START */}
      <table className="custom-table">
        <thead>
          <tr>
            <th style={{ width: '15%' }}>Business Address</th>
            <th style={{ width: '15%' }}>Company Reg No</th>
            <th style={{ width: '20%' }}>Business Registration</th>
            <th style={{ width: '20%' }}>Business Email</th>
            <th style={{ width: '15%' }}>Business Contact</th>
            <th style={{ width: '10%' }}>Status</th>
            <th style={{ width: '5%' }}></th>
          </tr>
        </thead>
        
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {/* Col 1: Address */}
              <td>{row.address}</td>
              
              {/* Col 2: Reg No */}
              <td>
                <div className="icon-cell">
                  <FileText size={16} className="icon-gray" />
                  <span>{row.regNo}</span>
                </div>
              </td>

              {/* Col 3: File */}
              <td>
                {row.regFile ? (
                  <div className="file-cell">
                    <File size={16} className="icon-gray" />
                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '120px' }}>
                      {row.regFile}
                    </span>
                    <Download size={16} className="icon-download" />
                  </div>
                ) : (
                  <span style={{ color: '#ccc' }}>-</span>
                )}
              </td>

              {/* Col 4: Email */}
              <td>
                <div className="icon-cell">
                  <Mail size={16} className="icon-gray" />
                  <span style={{ fontSize: '13px' }}>{row.email}</span>
                </div>
              </td>

              {/* Col 5: Phone */}
              <td>
                <div className="icon-cell">
                  <Phone size={16} className="icon-gray" />
                  <span>{row.contact}</span>
                </div>
              </td>

              {/* Col 6: Status */}
              <td>
                <span className={`status-badge ${row.status.toLowerCase()}`}>
                  {row.status === 'Pending' ? <Clock size={14} /> : <CheckCircle size={14} />}
                  {row.status}
                </span>
              </td>

              {/* Col 7: Actions */}
              <td>
                <MoreHorizontal size={20} className="icon-gray" style={{ cursor: 'pointer' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;