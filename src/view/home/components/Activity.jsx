import React from 'react'
import ActivityGrid from '../elements/ActivityGrid'

const Activity = () => {
  return (
    <div className='md:p-[3rem] p-[2rem]'>
        <div className='text-6xl md:text-right text-center font-extrabold uppercase text-sky-800'>Our Activities <div>& Facilities</div></div>

        <div class="grid md:grid-cols-3 grid-cols-1 gap-[2rem] my-[50px]">
            <div><ActivityGrid /></div>
            <div><ActivityGrid /></div>
            <div><ActivityGrid /></div>
            <div><ActivityGrid /></div>
            <div><ActivityGrid /></div>
            <div><ActivityGrid /></div>
        </div>
    </div>
  )
}

export default Activity