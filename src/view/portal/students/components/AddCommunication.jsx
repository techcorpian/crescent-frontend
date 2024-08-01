import React from 'react'

const AddCommunication = ({studentData, handleChange}) => {
    return (
        <>
            <div className='flex md:flex-row flex-col justify-between gap-6'>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Mobile Number*</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="mobile" value={studentData.mobile} onChange={handleChange} placeholder='Enter Mobile Number' />
                </div>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Email ID</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="email" value={studentData.email} onChange={handleChange} placeholder='Enter Email ID' />
                </div>
            </div>
            <div className='flex md:flex-row flex-col justify-between gap-6'>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Door No. / Building Name*</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="door_no" value={studentData.door_no} onChange={handleChange} placeholder='Enter Door No.' />
                </div>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Street Name / Area Name*</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="street" value={studentData.street} onChange={handleChange} placeholder='Enter Street Name' />
                </div>
            </div>
            <div className='flex md:flex-row flex-col justify-between gap-6'>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>City Name / Village Name*</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="city" value={studentData.city} onChange={handleChange} placeholder='Enter City Name' />
                </div>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>District*</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="district" value={studentData.district} onChange={handleChange} placeholder='Enter Here...' />
                </div>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Pincode*</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="pincode" value={studentData.pincode} onChange={handleChange} placeholder='Enter Here...' />
                </div>
            </div>
        </>
    )
}

export default AddCommunication