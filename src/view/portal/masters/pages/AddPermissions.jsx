import React, { useState } from 'react';
import ModalLayout from "../../../shared/UIElements/ModalLayout";
import { IoIosCloseCircleOutline } from "react-icons/io";

const AddPermissions = ({ isModalOpen, setIsModalOpen }) => {

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            {/* <button onClick={openModal}>Open Modal</button> */}
            {isModalOpen && (
                <ModalLayout onClose={closeModal} width="w-[70%]">
                    <div className='flex justify-between pb-2'>
                        <div className='text-3xl font-extrabold text-sky-700 '>Add Permissions</div>
                        <div onClick={closeModal}><IoIosCloseCircleOutline className='text-xl text-red-300 hover:text-red-700'/></div>
                    </div>
                    <div className='mb-4 flex'>

                    </div>
                </ModalLayout>
            )}
        </div>
    );
};

export default AddPermissions;