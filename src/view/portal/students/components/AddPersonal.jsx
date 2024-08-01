import React from 'react'

const AddPersonal = ({studentData, handleChange, editId}) => {
    return (
        <>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="hidden" value={studentData.created_by}/>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="hidden" value={studentData.updated_by} />
                    <input className='w-full p-2 border border-gray-400 text-sm' type="hidden" value={editId}/>
            <div className='flex md:flex-row flex-col justify-between gap-6'>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Aadhaar Number*</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="number" name="aadhaar_no" placeholder='Eg. 234501239876' value={studentData.aadhaar_no} onChange={handleChange}/>
                </div>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Enrollment No*</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="enroll_no" value={studentData.enroll_no} onChange={handleChange} placeholder='Enter Enrollment No.' />
                </div>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Not Applied*</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="not_applied" value={studentData.not_applied} onChange={handleChange}  placeholder='' />
                </div>
            </div>
            <div className='flex md:flex-row flex-col justify-between gap-6'>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Student Name as Per Aadhaar Card*</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="name_aadhaar" value={studentData.name_aadhaar} onChange={handleChange} placeholder='Eg. Muhammed' />
                </div>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Student Name For ID Card*</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="id_name" value={studentData.id_name} onChange={handleChange} placeholder='Eg. Muhammed Saqib' />
                </div>
            </div>
            {/* <div className='flex md:flex-row flex-col justify-between gap-6'>
                            <div className='flex-1'>
                                <label className='block mb-2 text-sky-700'>Student Name In Tamil as Per Aadhaar Card*</label>
                                <input className='w-full p-2 border border-gray-400 text-sm' type="number" name="username" placeholder='Eg. Muhammed' />
                            </div>
                            <div className='flex-1'>
                                <label className='block mb-2 text-sky-700'>Student Name In Tamil For ID Card*</label>
                                <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="phone" placeholder='Eg. Muhammed Saqib'/>
                            </div>
                        </div> */}
            <div className='flex md:flex-row flex-col justify-between gap-6'>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Date Of Birth (DD/MM/YYYY)</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="date" name="dob" value={studentData.dob} onChange={handleChange}/>
                </div>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Gender*</label>
                    <select className='p-[6px] border border-gray-400 bg-white w-full rounded-md' id="" name="gender" value={studentData.gender} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Others</option>
                    </select>
                </div>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Blood Group</label>
                    <select className='p-[6px] border border-gray-400 bg-white w-full rounded-md' id="" name="bloodgroup" value={studentData.bloodgroup} onChange={handleChange}>
                        <option value="">Select Blood Group</option>
                        <option value="a+ve">A+ve</option>
                        <option value="b+ve">B+ve</option>
                        <option value="others">Others</option>
                    </select>
                </div>
            </div>
            <div className='flex md:flex-row flex-col justify-between gap-6'>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Religion*</label>
                    <select name="religion" className='p-[6px] border border-gray-400 bg-white w-full rounded-md' id="" value={studentData.religion} onChange={handleChange}>
                        <option value="hindu">Hindu</option>
                        <option value="christian">Christian</option>
                        <option value="muslim">Muslim</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Social Category*</label>
                    <select name="social_cat" className='p-[6px] border border-gray-400 bg-white w-full rounded-md' id="" value={studentData.social_cat} onChange={handleChange}>
                        <option value="bc">BC-Others</option>
                        <option value="mbc">MBC</option>
                        <option value="st">ST</option>
                        <option value="sc">SC-Others</option>
                        <option value="sc-a">SC-A</option>
                        <option value="oc">OC</option>
                        <option value="dnc">DNC</option>
                    </select>
                </div>
            </div>
            <div className='flex md:flex-row flex-col justify-between gap-6'>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Community*</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="community" placeholder='Eg. Muhammed' value={studentData.community} onChange={handleChange}/>
                </div>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Mother Tongue*</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="mother_tongue" placeholder='Eg. Muhammed Saqib' value={studentData.mother_tongue} onChange={handleChange}/>
                </div>
            </div>
            <div className='flex md:flex-row flex-col justify-between gap-6'>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Disadvantage Group Name</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="disadv_groupname" placeholder='Eg. Muhammed' value={studentData.disadv_groupname} onChange={handleChange}/>
                </div>
                <div className='flex-1'>
                    <label className='block mb-2 text-sky-700'>Disablity Group Name</label>
                    <input className='w-full p-2 border border-gray-400 text-sm' type="text" name="disable_groupname" placeholder='Eg. Muhammed Saqib' value={studentData.disable_groupname} onChange={handleChange}/>
                </div>
            </div>
        </>
    )
}

export default AddPersonal