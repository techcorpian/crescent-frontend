import  React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom';
import AddPermissions from './AddPermissions';

import { FaHome } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";

const Users = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    return (
        <main>
            <AddPermissions isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

            {/* ----------------------- Header and Add Button --------------------- */}
            <div className='flex justify-between pb-4 py-3 '>
                <h1 className='text-3xl px-3 font-bold text-sky-700'>Permissions</h1>
                <Link onClick={openModal} className="btn2 flex flex-row items-center mx-3 text-md invisible md:visible">Add Permissions<span><BiPlus className='icon'></BiPlus></span></Link>
                <Link onClick={openModal} className="md:hidden mx-3"><span className="border border-sky-600 hover:bg-sky-600 hover:text-white text-2xl font-thin text-sky-600 rounded-md px-2 py-0">+</span></Link>
            </div>
        </main>
    )
}

export default Users