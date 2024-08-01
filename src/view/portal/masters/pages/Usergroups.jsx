import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom';
import AddUsergroups from './AddUsergroups';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import { FaHome } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";

import Table from '../../../shared/UIElements/Tables.jsx'; // Import the Table component

const Usergroups = () => {
    const [usergroupList, setUsergroupList] = useState([]);
    const [usergroupData, setUsergroupData] = useState({
        name: '',
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setUsergroupData({
            name: '',
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsergroupData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateUser = () => {
        const { name } = usergroupData;
        if (!name) {
            toast.error('Usergroup Name Is Required');
            return false;
        }
        return true;
    };

    const handleUsergroupInsert = async () => {
        if (!validateUser()) return;

        try {
            await axios.post(`${apiUrl}/usergroups/insert`, usergroupData);
            toast.success('Usergroup Created Successfully');
            closeModal();

            const response = await axios.get(`${apiUrl}/usergroups/get`);
            setUsergroupList(response.data);
        } catch (error) {
            console.error('Error Inserting Usergroup:', error);
            toast.error('Error In Creating Usergroup');
        }
    };

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get(`${apiUrl}/usergroups/get`);
                setUsergroupList(response.data);
            } catch (error) {
                console.error('Error fetching files:', error);
            }
        }

        fetchUsers();
    }, []);

    const columns = [
        { key: 'name', title: 'Usergroup Name', class: 'bg-sky-50 text-left ', sort: 'name' },
        { key: 'status', title: 'Status', class: 'w-[10%] bg-sky-50 text-left ', sort: 'blockstatus' },
        { key: 'action', title: 'Action', class: 'w-[1%] bg-sky-50 text-right', sort: '' },
        // Add more columns as needed
    ];

    // Concatenate 'firstname' and 'lastname' keys into 'fullname' key
    const columnsDatas = usergroupList.map((usergroup) => ({
        ...usergroup,
        name: `${usergroup.name}`,
        status: `${usergroup.blockstatus}` == 0 ? <div className='bg-green-700 text-center text-white p-1 rounded-full'>Active</div> : <div className='bg-red-600 text-center text-white p-1 rounded-full'>Inactive</div>,
        action: ''

    }));

    const filteredCustomers = columnsDatas.filter((usergroup) =>
        usergroup.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <main>
            <AddUsergroups isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} usergroupData={usergroupData} handleChange={handleChange} handleUsergroupInsert={handleUsergroupInsert} />

            {/* ----------------------- Header and Add Button --------------------- */}
            <div className='flex justify-between pb-4 py-3 '>
                <h1 className='text-3xl px-3 font-bold text-sky-700'>Usergroups List</h1>
                <Link onClick={openModal} className="btn2 flex flex-row items-center mx-3 text-md invisible md:visible">Add Usergroup<span><BiPlus className='icon'></BiPlus></span></Link>
                <Link onClick={openModal} className="md:hidden mx-3"><span className="border border-sky-600 hover:bg-sky-600 hover:text-white text-2xl font-thin text-sky-600 rounded-md px-2 py-0">+</span></Link>
            </div>

            <div className='layout-box mx-3'>

                {/* Use the Table component with pagination props */}
                <Table
                    datas={usergroupList}
                    data={filteredCustomers}
                    columns={columns}
                    setSearchTerm={(e) => setSearchTerm(e.target.value)}
                    searchTerm={searchTerm}

                />
            </div>
            {/* Toast container to display notifications */}
            <ToastContainer />
        </main>
    )
}

export default Usergroups