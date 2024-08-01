import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom';
import AddStudents from './AddStudents';
import { DeleteModal } from '../../../shared/UIElements/DeleteModal';
import axios from 'axios';
import AuthService from '../../../../services/auth.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";



import { FaHome } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";

import Table from '../../../shared/UIElements/Tables.jsx'; // Import the Table component
import './Students.css'

const Students = () => {
    const [studentList, setStudentList] = useState([]);
    const [editId, setEditId] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const [studentData, setStudentData] = useState({
        created_by: '',
        updated_by: '',
        aadhaar_no: '',
        enroll_no: '',
        not_applied: '',
        name_aadhaar: '',
        id_name: '',
        dob: '',
        gender: '',
        bloodgroup: '',
        religion: '',
        social_cat: '',
        community: '',
        mother_tongue: '',
        disadv_groupname: '',
        disable_groupname: '',
        mother_name: '',
        father_name: '',
        gaurdian_name: '',
        father_occup: '',
        mother_occup: '',
        parent_annual_income: '',
        mobile: '',
        email: '',
        door_no: '',
        street: '',
        city: '',
        district: '',
        pincode: '',
        class_studying: '',
        section: '',
        prev_class: '',
        admission_no: '',
        doj: '',
        med_of_instruction: '',
        updatestatus: ''

    });

    useEffect(() => {
        const currentUser = AuthService.getCurrentUser();
        setStudentData(prevState => ({
            ...prevState,
            created_by: currentUser.id
        }));
    }, []);

    const currentUser = AuthService.getCurrentUser()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

    const openModal = () => {
        setIsModalOpen(true);
        setEditId(null);
        setStudentData({ 
            created_by: currentUser.id,
        });

    };

    const openDeleteModal = (index) => {
        setIsDeleteModalOpen(true);
        setDeleteId(index);

    }

    const closeModal = () => {
        const currentUser = AuthService.getCurrentUser();
        setIsModalOpen(false);
        setEditId(null);
        setStudentData({
            created_by: currentUser.id,
            updated_by: '',
            aadhaar_no: '',
            enroll_no: '',
            not_applied: '',
            name_aadhaar: '',
            id_name: '',
            dob: '',
            gender: '',
            bloodgroup: '',
            religion: '',
            social_cat: '',
            community: '',
            mother_tongue: '',
            disadv_groupname: '',
            disable_groupname: '',
            mother_name: '',
            father_name: '',
            gaurdian_name: '',
            father_occup: '',
            mother_occup: '',
            parent_annual_income: '',
            mobile: '',
            email: '',
            door_no: '',
            street: '',
            city: '',
            district: '',
            pincode: '',
            class_studying: '',
            section: '',
            prev_class: '',
            admission_no: '',
            doj: '',
            med_of_instruction: '',
            updatestatus: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    const validateUser = () => {
        const { aadhaar_no, enroll_no, not_applied, name_aadhaar, id_name, mother_tongue, community, mobile, door_no, street, city, district, pincode, class_studying, section,prev_class, admission_no, med_of_instruction} = studentData;
        if (!aadhaar_no) {
            toast.error('Aadhaar No. Is Required');
            return false;
        } 
        else if (aadhaar_no.length !== 12) {
            toast.error('Aadhaar No. Should be 12 digits');
            return false;
        } else if (!enroll_no) {
            toast.error('Enrollment Number Is Required');
            return false;
        } 
        else if (!not_applied) {
            toast.error('Not Applied Is Required');
            return false;
        } else if (!name_aadhaar) {
            toast.error('Name On Aadhaar Card Is Required');
            return false;
        } else if (!id_name) {
            toast.error('Name On ID Card Is Required');
            return false;
        } else if (!community) {
            toast.error('Community Is Required');
            return false;
        } else if (!mother_tongue) {
            toast.error('Mother Tongue Is Required');
            return false;
        } else if (!mobile) {
            toast.error('Mobile Number Is Required');
            return false;
        } else if (!door_no || !street || !city || !district || !pincode){
            toast.error('Please Enter The Complete Address');
            return false;
        } else if (!class_studying || !section || !prev_class) {
            toast.error('Please Enter Class Details');
            return false;
        } else if (!admission_no) {
            toast.error('Please Enter Admission No.');
            return false;
        } else if (!med_of_instruction) {
            toast.error('Please Enter Medium of Instructions.');
            return false;
        }
        return true;
    };

    const handleStudentInsert = async () => {

        try {
            if (editId) {
                // console.log(userData);
                // console.log(userData.username);
                await axios.put(`${apiUrl}/students/update/${editId}`, studentData);
                toast.success('User Updated Successfully');
            } else {
                if (!validateUser()) return;
                await axios.post(`${apiUrl}/students/insert`, studentData);
                toast.success('User Created Successfully');
            }
            closeModal();
            const response = await axios.get(`${apiUrl}/students/get`);
            setStudentList(response.data);
        } catch (error) {
            console.error('Error saving user:', error);
            if (editId) {
                toast.error('Error In Updating User');
            } else {
                toast.error('Error In Creating User');
            }
        }
    };

    // function isoToDdMmYyyy(isoString) {
    //     const date = new Date(isoString);
    //     const day = String(date.getDate()).padStart(2, '0');
    //     const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    //     const year = date.getFullYear();
    //     return `${day}-${month}-${year}`;
    //   }

    const handleStudentUpdate = async (index) => {
        
        try {
            const response = await axios.get(`${apiUrl}/students/getbyid/${index}`);
            // const formattedDate = new Date(response.data[0].dob).toISOString().split('T')[0];
            console.log(response.data);
            if(response.data[0].updatestatus == 0){
                setIsModalOpen(true);
            }else{
                toast.warning('Edit Access Denied, Please Contact Your Admin');
            }
            
            if(currentUser.usergroup_id === '1'){
                setStudentData({
                    ...response.data[0],
                    // doj: new Date(response.data[0].doj).toISOString().split('T')[0],
                    updated_by: AuthService.getCurrentUser().id,
                  });

            }else{
                setStudentData({
                    ...response.data[0],
                    // doj: new Date(response.data[0].doj).toISOString().split('T')[0],
                    updated_by: AuthService.getCurrentUser().id,
                    updatestatus: '1'
                  });

            }

            //   console.log(studentData);
            setEditId(index);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };




    const handleDelete = async (fileId) => {
        try {
          await axios.put(`${apiUrl}/students/delete/${fileId}`);
          setStudentList(studentList.filter(file => file.id !== fileId));
          toast.success('User deleted successfully');
        } catch (error) {
          console.error('Error deleting file:', error);
          toast.error('Error deleting file');
        }
    
        // console.log(fileId);
        setIsDeleteModalOpen(false)
      };

      const deleteContent = 'Do You Want to Delete This Student?';

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get(`${apiUrl}/students/get`);
                setStudentList(response.data);
            } catch (error) {
                console.error('Error fetching files:', error);
            }
        }

        fetchUsers();
    }, []);

    const columns = [
        { key: 'enrollno', title: 'Enroll No.', class: 'bg-sky-50 text-left ', sort: 'enrollno' },
        { key: 'id_name', title: 'Name', class: 'bg-sky-50 text-left ', sort: 'id_name' },
        { key: 'father_name', title: 'Father Name', class: 'bg-sky-50 text-left ', sort: 'father_name' },
        { key: 'class', title: 'Class / Section', class: 'bg-sky-50 text-left ', sort: 'class' },
        { key: 'doj', title: 'Date of joining', class: 'bg-sky-50 text-left ', sort: 'doj' },
        { key: 'bloodgroup', title: 'Blood Group', class: 'bg-sky-50 text-left ', sort: 'bloodgroup' },
        { key: 'dob', title: 'DOB', class: 'bg-sky-50 text-left ', sort: 'dob' },
        { key: 'status', title: 'Status', class: 'w-[10%] bg-sky-50 text-left ', sort: 'status' },
        { key: 'action', title: 'Action', class: 'w-[1%] bg-sky-50 text-right', sort: '' },
        // Add more columns as needed
    ];

    // Concatenate 'firstname' and 'lastname' keys into 'fullname' key
    const columnsDatas = studentList.map((student) => ({
        ...student,
        enrollno: `${student.enroll_no}`,
        id_name: `${student.id_name}`,
        class: `${student.class_studying} / ${student.section.toUpperCase()}`,
        doj: `${student.doj}`,
        bloodgroup: `${student.bloodgroup}`,
        dob: `${student.dob}`,
        status: `${student.blockstatus}` == 0 ? <div className='bg-green-700 text-center text-white p-1 rounded-full'>Active</div> : <div className='bg-red-600 text-center text-white p-1 rounded-full'>Inactive</div>,
        action: <div className='flex gap-2 items-center text-lg text-gray-400'>
        <Link className='hover:text-sky-700' to={`${student.id}`}><FaRegEye /></Link>
        <button className='hover:text-sky-700' onClick={()=>(handleStudentUpdate(student.id))}><BiSolidEdit /></button>
        <button className='hover:text-sky-700' onClick={()=>(openDeleteModal(student.id))}><RiDeleteBin6Line /></button>
    </div>

    }));

    const filteredCustomers = columnsDatas.filter((student) =>
        student.id_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <main>
            <AddStudents isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleStudentInsert={handleStudentInsert} studentData={studentData} handleChange={handleChange} editId={editId}/>

            <DeleteModal isDeleteModalOpen={isDeleteModalOpen} setIsDeleteModalOpen={setIsDeleteModalOpen} deleteId={deleteId} handleDelete={handleDelete} deleteContent={deleteContent}/>

            {/* ----------------------- Header and Add Button --------------------- */}
            <div className='flex justify-between pb-4 py-3 '>
                <h1 className='text-3xl px-3 font-bold text-sky-700'>Students List</h1>
                <Link onClick={openModal} className="btn2 flex flex-row items-center mx-3 text-md invisible md:visible">Add Students<span><BiPlus className='icon'></BiPlus></span></Link>
                <Link onClick={openModal} className="md:hidden mx-3"><span className="border border-sky-600 hover:bg-sky-600 hover:text-white text-2xl font-thin text-sky-600 rounded-md px-2 py-0">+</span></Link>
            </div>

            <div className='layout-box mx-3'>

                {/* Use the Table component with pagination props */}
                <Table
                    datas={studentList}
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

export default Students