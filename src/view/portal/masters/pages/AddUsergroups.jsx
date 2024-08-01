import React, { useState } from 'react';
import ModalLayout from "../../../shared/UIElements/ModalLayout";
import { IoIosCloseCircleOutline } from "react-icons/io";

const AddUsergroups = ({ isModalOpen, setIsModalOpen, usergroupData, handleChange,handleUsergroupInsert }) => {

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            {/* <button onClick={openModal}>Open Modal</button> */}
            {isModalOpen && (
                <ModalLayout onClose={closeModal} width="w-[70%]">
                    <div className='flex justify-between pb-2'>
                        <div className='text-3xl font-extrabold text-sky-700 '>Add User Groups</div>
                        <div onClick={closeModal}><IoIosCloseCircleOutline className='text-xl text-red-300 hover:text-red-700' /></div>
                    </div>
                    <div className='m-4 space-y-4'>
                        <div className='flex md:flex-row flex-col justify-between gap-6'>
                            <div className='flex-1'>
                                <label className='block mb-2 text-sky-700'>Usergroup Name*</label>
                                <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="name" value={usergroupData.name} placeholder='Eg. Superadmin' onChange={handleChange}/>
                            </div>
                        </div>
                        <button className='float-right p-2 px-6 rounded-full bg-sky-700 hover:bg-sky-900 text-white' onClick={handleUsergroupInsert}>Save</button>

                    </div>
                </ModalLayout>
            )}
        </div>
    );
};

export default AddUsergroups;