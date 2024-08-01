import React, { useState } from 'react';
import ModalLayout from "../../../shared/UIElements/ModalLayout";
import { IoIosCloseCircleOutline } from "react-icons/io";
import AuthService from '../../../../services/auth.service';
import './Users.css';

const AddUsers = ({ isModalOpen, closeModal, handleUserInsert, userData, handleChange, usergroupList, editId }) => {

    return (
        <div>
            {/* <button onClick={openModal}>Open Modal</button> */}
            {isModalOpen && (
                <ModalLayout onClose={closeModal} width="w-[70%]">
                    <div className='flex justify-between pb-2'>
                        <div className='text-3xl font-extrabold text-sky-700 '>Add Users</div>
                        <div onClick={closeModal}><IoIosCloseCircleOutline className='text-xl text-red-300 hover:text-red-700' /></div>
                    </div>
                    <div className='m-4 space-y-4'>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="hidden" value={userData.created_by}/>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="hidden" value={userData.updated_by}/>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="hidden" value={editId}/>
                        <div className='flex md:flex-row flex-col justify-between gap-6'>
                            <div className='flex-1'>
                                <label className='block mb-2 text-sky-700'>Name*</label>
                                <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="username" placeholder='Enter Your Name...' value={userData.username} onChange={handleChange}/>
                            </div>
                            <div className='flex-1'>
                                <label className='block mb-2 text-sky-700'>Phone Number*</label>
                                <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="phone" placeholder='Eg. +919876543210' value={userData.phone} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col justify-between gap-6'>
                            <div className='flex-1'>
                                <label className='block mb-2 text-sky-700'>Email ID</label>
                                <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="email" placeholder='Eg. name@anymail.com' value={userData.email} onChange={handleChange}/>
                            </div>
                            <div className='flex-1'>
                                <label className='block mb-2 text-sky-700'>Designation</label>
                                <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="designation" placeholder='Eg. Staff' value={userData.designation} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col justify-between gap-6'>
                            <div className='flex-1'>
                                <label className='block mb-2 text-sky-700'>Usergroup</label>
                                <select name="usergroup_id" className='p-[6px] border border-gray-400 bg-white w-full rounded-md' value={userData.usergroup_id} onChange={handleChange}>
                                    <option value='0'>Select Usergroup</option>
                                    {usergroupList.map((usergroup) => (
                                        <option key={usergroup.id} value={usergroup.id}>{usergroup.name}</option>
                                    ))}
                                    
                                </select>
                            </div>
                        </div>
                        {/* <hr className='my-6 border-gray-300'/> */}
                        <div className='flex md:flex-row flex-col justify-between gap-6'>
                            <div className='flex-1'>
                                <label className={`block mb-2 text-sky-700`}>Password*</label>
                                <input className='w-full p-2 border border-gray-400 text-sm disabled:bg-gray-100 disabled:border-gray-200' type="password" name="password" placeholder='' value={userData.password} onChange={handleChange} disabled={editId}/>
                            </div>
                            <div className='flex-1'>
                                <label className='block mb-2 text-sky-700'>Confirm Password*</label>
                                <input className='w-full p-2 border border-gray-400 text-sm disabled:bg-gray-100 disabled:border-gray-200' type="password" name="conpassword" placeholder='' value={userData.conpassword} onChange={handleChange} disabled={editId}/>
                            </div>
                        </div>
                        <button className='float-right p-2 px-6 rounded-full bg-sky-700 hover:bg-sky-900 text-white' onClick={handleUserInsert}>{editId ? 'Update' : 'Save'}</button> 
                    </div>

                </ModalLayout>
            )}
        </div>
    );
};

export default AddUsers;