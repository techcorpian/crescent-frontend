import React from 'react'

const AcademicInfo = ({studentData, handleChange}) => {
    return (
        <>
            <div className='flex md:flex-row flex-col justify-between gap-6'>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Class Studying*</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="class_studying" value={studentData.class_studying} onChange={handleChange}  placeholder='Eg. 5' />
                </div>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Section*</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="section" value={studentData.section} onChange={handleChange}  placeholder='Eg. B' />
                </div>
            </div>
            <div className='flex md:flex-row flex-col justify-between gap-6'>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Previous Class Studied*</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="prev_class" value={studentData.prev_class} onChange={handleChange}  placeholder='Enter Previorus class' />
                </div>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Admission Number*</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="admission_no" value={studentData.admission_no} onChange={handleChange}  placeholder='Eg. 8000120001' />
                </div>
            </div>
            <div className='flex md:flex-row flex-col justify-between gap-6'>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Date Of Joining</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="date" name="doj" value={studentData.doj} onChange={handleChange} />
                </div>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Medium Of Instruction*</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="med_of_instruction" value={studentData.med_of_instruction} onChange={handleChange}  placeholder='Enter Here...' />
                </div>
            </div>
        </>
    )
}

export default AcademicInfo