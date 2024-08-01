import React, { useState } from 'react';
import ModalLayout from "../../../shared/UIElements/ModalLayout";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import AddPersonal from '../components/AddPersonal';
import AddFamilyDetails from '../components/AddFamilyDetails';
import AddCommunication from '../components/AddCommunication';
import AcademicInfo from '../components/AcademicInfo';
import { ViewItemsTabs } from '../../../../lang/en/TabHeadersDatas';
import TabsLayout from '../../../shared/UIElements/TabLayout';
import 'react-toastify/dist/ReactToastify.css';

const AddUsers = ({ isModalOpen, setIsModalOpen, handleStudentInsert, studentData, handleChange, editId }) => {
    const [activeTab, setActiveTab] = useState(ViewItemsTabs[0]);
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            {/* <button onClick={openModal}>Open Modal</button> */}
            {isModalOpen && (
                <ModalLayout onClose={closeModal} width="w-[70%]">
                    <div className='flex justify-between pb-4'>
                        <div className='text-3xl font-extrabold text-sky-700'>Add Students</div>
                        <div onClick={closeModal}><IoIosCloseCircleOutline className='text-xl text-red-300 hover:text-red-700' /></div>
                    </div>
                    
                        {/* <div className='text-xl font-bold border-b border-gray-300'>Personal Info</div> */}
                        <TabsLayout ViewItemsTabs={ViewItemsTabs} activeTab={activeTab} setActiveTab={setActiveTab}>
                        <div className='m-4 space-y-4'>
                            {activeTab === ViewItemsTabs[0] && <AddPersonal studentData={studentData} handleChange={handleChange} editId={editId}/>}
                            {activeTab === ViewItemsTabs[1] && <AddFamilyDetails studentData={studentData} handleChange={handleChange}/>}
                            {activeTab === ViewItemsTabs[2] && <AddCommunication studentData={studentData} handleChange={handleChange}/>}
                            {activeTab === ViewItemsTabs[3] && <AcademicInfo studentData={studentData} handleChange={handleChange}/>}
                            </div>
                        </TabsLayout>

                        <button className='float-right p-2 px-6 rounded-full bg-sky-700 hover:bg-sky-900 text-white' onClick={handleStudentInsert}>{editId ? 'Update' : 'Save'}</button> 

                        {/* <div className='text-xl font-bold border-b border-gray-300'>Family Details</div> */}
                    
                </ModalLayout>
            )}
        </div>
    );
};

export default AddUsers;