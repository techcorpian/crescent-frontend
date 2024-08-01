import React from 'react'
import Modal from './ModalLayout'
import { IoWarningOutline } from "react-icons/io5";


export const DeleteModal = ({isDeleteModalOpen, setIsDeleteModalOpen, deleteId, handleDelete, deleteContent}) => {
    const closeModal = () => {
        setIsDeleteModalOpen(false);
    };
  return (
    <div>
    {isDeleteModalOpen && (
    <Modal onClose={closeModal} width="w-[40%]">
        {/* <input type="text" value={deleteId}/> */}
        <div className='flex flex-col justify-center align-items items-center gap-6 py-6'>
        <div className='text-8xl text-red-700'><IoWarningOutline /></div>
        <div className='text-xl'>{deleteContent}</div>
        <div className='flex justify-between gap-6'>
            <button onClick={() => (handleDelete(deleteId))} className='border bg-red-700 border-red-700 text-white p-1 px-9 rounded-full'>Delete</button>
            <button onClick={closeModal} className='border border-gray-400 hover:bg-gray-400 p-1 px-9 rounded-full'>Cancel</button>
        </div>
        </div>
    </Modal>
    )}
    </div>
  )
}
