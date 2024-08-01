import React from 'react'

const AddFamilyDetails = ({studentData, handleChange}) => {
    return (
        <>
            <div className='flex md:flex-row flex-col justify-between gap-6'>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Mother's Name</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="mother_name" value={studentData.mother_name} onChange={handleChange}  placeholder='Enter Mothers Name' />
                </div>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Father's Name</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="father_name" value={studentData.father_name} onChange={handleChange}  placeholder='Enter Fathers Name' />
                </div>
            </div>
            <div className='flex md:flex-row flex-col justify-between gap-6'>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Gaurdian Name</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="gaurdian_name" value={studentData.gaurdian_name} onChange={handleChange}  placeholder='Gaurdians Name' />
                </div>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Father's Occupation</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="father_occup" value={studentData.father_occup} onChange={handleChange}  placeholder='Fathers Occupation' />
                </div>
            </div>
            <div className='flex md:flex-row flex-col justify-between gap-6'>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Mother's Occupation</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="mother_occup" value={studentData.mother_occup} onChange={handleChange}  placeholder='Mothers Occupation' />
                </div>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Parent's Annual Income</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="parent_annual_income" value={studentData.parent_annual_income} onChange={handleChange}  placeholder='Enter Here...' />
                </div>
            </div>
        </>
    )
}

export default AddFamilyDetails