import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StudentView = () => {
    const { id } = useParams();
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
    const [view, setView] = useState([]);

    const Labels_1 = ['Name in ID Card', 'Enrollment No.', 'Not Applied', 'Name in Aadhaar Card', 'Aadhaar No.', 'DOB', 'Gender', 'Blood Group', 'Religion', 'Social Category', 'Community', 'Mother Tongue', 'Disadvantage Group Name', 'Disability Group Name'];
    const Labels_2 = ["Mother's Name", "Father's Name", "Gaurdian's Name", "Father's Occupation", "Mother's Occupation", "Parent's Annual Income"];
    const Labels_3 = ["Mobile Number", "Email ID", "Door No./Building Name", "Street Name/Area Name", "City Name/Village Name", "District", "Pincode"];
    const Labels_4 = ["Class Studying", "Section", "Previous Class Studied", "Admission Number", "Date Of Joining", "Medium of Instructions"];

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get(`${apiUrl}/students/getbyid/${id}`);
                console.log(response.data);
                setView(response.data);
                // toast.success('Edit Access Denied, Please Contact Your Admin');
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchStudent();
    }, [id, apiUrl]);

    return (
        <main>
            {view.length > 0 ? (
                view.map((item) => (
                    <>
                        <div className='text-3xl font-extrabold text-sky-700 mx-6'>{item.id_name}</div>
                        <div className='font-thin text-sky-700 mx-6'>{item.enroll_no}</div>
                        <div className='flex md:flex-row flex-col justify-between gap-6 p-6 '>

                            <div className='w-[100%] p-7 rounded-lg shadow-xl bg-white'>
                                <div className='text-xl pb-2 font-bold border-b'>Personal Info</div>
                                <div key={item.id} className='flex justify-between pt-4'>

                                    {/* Labels */}
                                    <div className='flex flex-col gap-3 font-bold text-sky-700'>
                                        {
                                            Labels_1.map((item) =>
                                                (<label htmlFor="">{item}</label>))
                                        }
                                    </div>

                                    {/* Values */}
                                    <div className='flex flex-col gap-3 items-end'>
                                        <span>{item.id_name}</span>
                                        <span>{item.enroll_no}</span>
                                        <span>{item.not_applied}</span>
                                        <span>{item.name_aadhaar}</span>
                                        <span>{item.id_name}</span>
                                        <span>{item.dob}</span>
                                        <span>{item.gender === '1' ? 'Male' : 'Female'}</span>
                                        <span>{item.bloodgroup}</span>
                                        <span>{item.religion}</span>
                                        <span>{item.social_cat}</span>
                                        <span>{item.community}</span>
                                        <span>{item.mother_tongue}</span>
                                        <span>{item.disadv_groupname}</span>
                                        <span>{item.disable_groupname}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col w-[100%] gap-6'>
                                <div className='w-[100%] p-7 rounded-lg shadow-xl bg-white h-[100%]'>
                                    <div className='text-xl pb-2 font-bold border-b'>Family Details</div>
                                    <div key={item.id} className='flex justify-between pt-4'>

                                        {/* Labels */}
                                        <div className='flex flex-col gap-3 font-bold text-sky-700'>
                                            {
                                                Labels_2.map((item) =>
                                                    (<label htmlFor="">{item}</label>))
                                            }
                                        </div>

                                        {/* Values */}
                                        <div className='flex flex-col gap-3 items-end'>
                                            <span>{item.mother_name}</span>
                                            <span>{item.father_name}</span>
                                            <span>{item.gaurdian_name}</span>
                                            <span>{item.father_occup}</span>
                                            <span>{item.mother_occup}</span>
                                            <span>{item.parent_annual_income}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[100%] p-7 rounded-lg shadow-xl bg-white h-[100%]'>
                                    <div className='text-xl pb-2 font-bold border-b'>Communication Details</div>
                                    <div key={item.id} className='flex justify-between pt-4'>

                                        {/* Labels */}
                                        <div className='flex flex-col gap-3 font-bold text-sky-700'>
                                            {
                                                Labels_3.map((item) =>
                                                    (<label htmlFor="">{item}</label>))
                                            }
                                        </div>

                                        {/* Values */}
                                        <div className='flex flex-col gap-3 items-end'>
                                            <span>{item.mobile}</span>
                                            <span>{item.email}</span>
                                            <span>{item.door_no}</span>
                                            <span>{item.street}</span>
                                            <span>{item.city}</span>
                                            <span>{item.district}</span>
                                            <span>{item.pincode}</span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className='p-7 rounded-lg shadow-xl bg-white h-[100%] mx-6 mb-6'>
                                    <div className='text-xl pb-2 font-bold border-b'>Academic Details</div>
                                    <div key={item.id} className='flex justify-between pt-4'>

                                        {/* Labels */}
                                        <div className='flex flex-col gap-3 font-bold text-sky-700'>
                                            {
                                                Labels_4.map((item) =>
                                                    (<label htmlFor="">{item}</label>))
                                            }
                                        </div>

                                        {/* Values */}
                                        <div className='flex flex-col gap-3 items-end'>
                                            <span>{item.class_studying}</span>
                                            <span>{item.section}</span>
                                            <span>{item.prev_class}</span>
                                            <span>{item.admission_no}</span>
                                            <span>{item.doj}</span>
                                            <span>{item.med_of_instruction}</span>
                                        </div>
                                    </div>
                                </div>
                    </>
                ))
            ) : (
                <p>No Student Data</p>
            )}
        </main >
    );
};

export default StudentView;
