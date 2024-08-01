import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../../shared/UIElements/Tables';
import { FaSpinner } from 'react-icons/fa'; // Importing a spinner icon

const Dashboard = () => {
  const [logList, setLogList] = useState([]);
  const [activeList, setActiveList] = useState(null);
  const [inactiveList, setInactiveList] = useState(null);
  const [totalList, setTotalList] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  useEffect(() => {
    async function fetchData() {
      try {
        const [activeRes, inactiveRes, totalRes, logsRes] = await Promise.all([
          axios.get(`${apiUrl}/dashboard/getactive`),
          axios.get(`${apiUrl}/dashboard/getinactive`),
          axios.get(`${apiUrl}/dashboard/gettotal`),
          axios.get(`${apiUrl}/dashboard/getactivitylog`),
        ]);

        setActiveList(activeRes.data[0]);
        setInactiveList(inactiveRes.data[0]);
        setTotalList(totalRes.data[0]);
        setLogList(logsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [apiUrl]);

  const columns = [
    { key: 'activity', title: 'Activity Name', class: 'bg-sky-50 text-left', sort: 'activity' },
    { key: 'created_by', title: 'Created By', class: 'bg-sky-50 text-left', sort: 'created_by' },
    { key: 'created_at', title: 'Created At', class: 'bg-sky-50 text-left', sort: 'created_at' },
  ];

  const columnsDatas = logList.map((log) => ({
    ...log,
    activity: `${log.activity}`,
    created_by: `${log.username}`,
    created_at: new Date(log.created_at).toISOString().split('T')[0],
  }));

  const filteredCustomers = columnsDatas.filter((log) =>
    log.activity.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <FaSpinner className="animate-spin text-4xl text-sky-700" />
        </div>
      ) : (
        <>
          <div className='pb-6 pt-3 text-4xl font-bold text-sky-700'>Dashboard</div>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
            <div className='bg-cyan-700 text-black p-6 rounded-xl shadow-lg'>
              <span className='text-2xl text-white font-bold'>Active Students</span>
              <div className='text-6xl text-sky-200 font-bold'>
                {activeList ? activeList.count : '0'}
              </div>
            </div>
            <div className='border p-6 rounded-xl shadow-lg'>
              <span className='text-2xl text-sky-900 font-bold'>Inactive Students</span>
              <div className='text-6xl text-sky-700 font-bold'>
                {inactiveList ? inactiveList.count : '0'}
              </div>
            </div>
            <div className='border p-6 rounded-xl shadow-lg'>
              <span className='text-2xl text-sky-900 font-bold'>Total Students</span>
              <div className='text-6xl text-sky-700 font-bold'>
                {totalList ? totalList.count : '0'}
              </div>
            </div>
          </div>
          <div className='layout-box mt-6 shadow-lg'>
            <div className='pb-3 text-2xl font-medium text-sky-700'>Activity Log</div>
            <Table
              datas={logList}
              data={filteredCustomers}
              columns={columns}
              setSearchTerm={(e) => setSearchTerm(e.target.value)}
              searchTerm={searchTerm}
            />
          </div>
        </>
      )}
    </main>
  );
};

export default Dashboard;
