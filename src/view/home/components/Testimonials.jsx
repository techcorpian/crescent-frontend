import React from 'react'
import TestiGrid from '../elements/TestiGrid'

const Testimonials = () => {
  return (
    <>
        <div className='bg-sky-950 p-6'>
            <h1 className='text-center text-3xl font-medium text-white'>TESTIMONIALS</h1>

            <div class="my-6 flex md:flex-row flex-col gap-6">
                <div><TestiGrid /></div>
                <div><TestiGrid /></div>
                <div><TestiGrid /></div>
            </div>
        </div>

    </>
  )
}

export default Testimonials