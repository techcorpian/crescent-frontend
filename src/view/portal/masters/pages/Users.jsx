import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddUsers from './AddUsers';
import axios from 'axios';
import AuthService from '../../../../services/auth.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiPlus } from "react-icons/bi";
import Table from '../../../shared/UIElements/Tables.jsx'; // Import the Table component
import { DeleteModal } from '../../../shared/UIElements/DeleteModal';
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import './Users.css';

const Users = () => {
    const [userList, setUserList] = useState([]);
    const [usergroupList, setUsergroupList] = useState([]);
    const [editId, setEditId] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    useEffect(() => {
        const currentUser = AuthService.getCurrentUser();
        setUserData(prevState => ({
            ...prevState,
            created_by: currentUser.id
        }));
    }, []);

    const currentUser = AuthService.getCurrentUser()
    const [userData, setUserData] = useState({
        username: '',
        phone: '',
        email: '',
        usergroup_id: '',
        designation: '',
        password: '',
        conpassword: '',
        created_by: '',
        updated_by: ''
    });



    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

    const openModal = () => {
        setIsModalOpen(true);
        setEditId(null);
        setUserData({
            created_by: currentUser.id,
        });
    };

    const openDeleteModal = (index) => {
        setIsDeleteModalOpen(true);
        setDeleteId(index);

    }

    const closeModal = () => {

        setIsModalOpen(false);
        setEditId(null);
        setUserData({
            username: '',
            phone: '',
            email: '',
            usergroup_id: '',
            designation: '',
            password: '',
            conpassword: '',
            created_by: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateUser = () => {
        const { username, usergroup_id, phone, password, conpassword } = userData;
        if (!username) {
            toast.error('User Name Is Required');
            return false;
        }
        if (!phone) {
            toast.error('Phone Number Is Required');
            return false;
        }
        if (phone.length < 10) {
            toast.error('Phone Number Should be 10 digits');
            return false;
        }
        if (!usergroup_id) {
            toast.error('Usergroup is Required');
            return false;
        }
        if (!password) {
            toast.error('Please Enter The Password');
            return false;
        }
        if (password.length < 10) {
            toast.error('Password Should be at least 10 characters');
            return false;
        }
        if (password !== conpassword) {
            toast.error('Password Mismatch!');
            return false;
        }
        return true;
    };

    const handleUserUpdate = async (index) => {
        setIsModalOpen(true);
        setUserData({
            created_by: '',
        });
        try {
            const response = await axios.get(`${apiUrl}/users/getbyid/${index}`);
            setUserData({
                username: response.data[0].username,
                phone: response.data[0].phone,
                email: response.data[0].email,
                usergroup_id: response.data[0].usergroup_id,
                designation: response.data[0].designation,
                updated_by: AuthService.getCurrentUser().id
            });
            setEditId(index);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    const handleDelete = async (fileId) => {
        try {
            await axios.put(`${apiUrl}/users/delete/${fileId}`);
            setUserList(userList.filter(file => file.id !== fileId));
            toast.success('User deleted successfully');
        } catch (error) {
            console.error('Error deleting file:', error);
            toast.error('Error deleting file');
        }

        // console.log(fileId);
        setIsDeleteModalOpen(false)
    };

    const deleteContent = 'Do You Want to Delete This User?';

    const handleUserInsert = async () => {

        try {
            if (editId) {
                // console.log(userData);
                // console.log(userData.username);
                await axios.put(`${apiUrl}/users/update/${editId}`, userData);
                toast.success('User Updated Successfully');
            } else {
                if (!validateUser()) return;
                await axios.post(`${apiUrl}/users/insert`, userData);
                toast.success('User Created Successfully');
            }
            closeModal();
            const response = await axios.get(`${apiUrl}/users/get`);
            setUserList(response.data);
        } catch (error) {
            console.error('Error saving user:', error);
            if (editId) {
                toast.error('Error In Updating User');
            } else {
                toast.error('Error In Creating User');
            }
        }
    };

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get(`${apiUrl}/users/get`);
                setUserList(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }

        async function fetchUsergroups() {
            try {
                const response = await axios.get(`${apiUrl}/users/getug`);
                setUsergroupList(response.data);
            } catch (error) {
                console.error('Error fetching user groups:', error);
            }
        }

        fetchUsers();
        fetchUsergroups();
    }, [apiUrl]);

    const columns = [
        { key: 'name', title: 'Name', class: 'bg-sky-50 text-left ', sort: 'name' },
        { key: 'usergroup', title: 'Usergroup', class: 'bg-sky-50 text-left ', sort: 'usergroup' },
        { key: 'phone', title: 'Phone Number', class: 'bg-sky-50 text-left ', sort: 'phone' },
        { key: 'designation', title: 'Designation', class: 'bg-sky-50 text-left ', sort: 'designation' },
        { key: 'status', title: 'Status', class: 'w-[10%] bg-sky-50 text-left ', sort: 'blockstatus' },
        { key: 'action', title: 'Action', class: 'w-[1%] bg-sky-50 text-right', sort: '' },
    ];

    const columnsDatas = userList.map((user) => ({
        ...user,
        name: `${user.username}`,
        usergroup: `${user.name}`,
        phone: `${user.phone}`,
        designation: `${user.designation}`,
        status: `${user.blockstatus}` == 0 ? <div className='bg-green-700 text-center text-white p-1 rounded-full'>Active</div> : <div className='bg-red-600 text-center text-white p-1 rounded-full'>Inactive</div>,
        action: <div className='flex gap-3 items-center text-lg text-gray-400'>
            <button onClick={() => handleUserUpdate(user.id)}><BiSolidEdit /></button>
            <button onClick={()=>(openDeleteModal(user.id))}><RiDeleteBin6Line /></button>
        </div>
    }));

    const filteredCustomers = columnsDatas.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main>
            <AddUsers
                isModalOpen={isModalOpen}
                closeModal={closeModal}
                handleUserInsert={handleUserInsert}
                handleChange={handleChange}
                userData={userData}
                usergroupList={usergroupList}
                editId={editId}
            />

            <DeleteModal isDeleteModalOpen={isDeleteModalOpen} setIsDeleteModalOpen={setIsDeleteModalOpen} deleteId={deleteId} handleDelete={handleDelete} deleteContent={deleteContent}/>

            <div className='flex justify-between pb-4 py-3 '>
                <h1 className='text-3xl px-3 font-bold text-sky-700'>Users List</h1>
                <Link onClick={openModal} className="btn2 flex flex-row items-center mx-3 text-md invisible md:visible">Add Users<span><BiPlus className='icon'></BiPlus></span></Link>
                <Link onClick={openModal} className="md:hidden mx-3"><span className="border border-sky-600 hover:bg-sky-600 hover:text-white text-2xl font-thin text-sky-600 rounded-md px-2 py-0">+</span></Link>
            </div>

            <div className='layout-box mx-3'>
                <Table
                    datas={userList}
                    data={filteredCustomers}
                    columns={columns}
                    setSearchTerm={(e) => setSearchTerm(e.target.value)}
                    searchTerm={searchTerm}
                />
            </div>
            <ToastContainer />
        </main>
    );
};

export default Users;
