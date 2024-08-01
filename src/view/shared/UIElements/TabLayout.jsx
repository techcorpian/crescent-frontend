import React, { useState, useEffect } from 'react';

const TabsLayout = ({children, ViewItemsTabs, activeTab, setActiveTab}) => {
  return (
    <>    
        <div className=" mb-0 flex flex-row gap-3 items-center text-xs md:text-base border-b border-sky-100">
            <ul className="flex">
                {ViewItemsTabs.map((tab) => (
                <span
                    key={tab}
                    className={`grow md:grow-0 p-2 md:px-5 md:py-1 text-[1rem] ${activeTab === tab ? ' text-sky-700 rounded-t-[10px] bg-sky-100 font-bold' : 'hover:bg-sky-100 hover:border-sky-200 rounded-t-[10px] cursor-pointer text-sky-600'}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </span>
                ))}
            </ul>
        </div>

        <div className="mt-4">
            {children}
        </div>
    </>
  )
}

export default TabsLayout