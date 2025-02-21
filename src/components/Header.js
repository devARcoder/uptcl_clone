import React from 'react'
import bell from './Assets/header_icons/bell.svg'
import search from './Assets/header_icons/search.svg'
import group from './Assets/header_icons/group.svg'
import profile from './Assets/images/profile.png'
const Header = () => {
  return (
    <>
    <div className="flex justify-between items-center border-b border-gray-200 p-3">
        <div className="">
            <img className='realtive w-8 h-8' src={bell} alt="" />
            <span className='absolute top-2 left-6 bg-orange-500 text-white rounded-full px-1.5 text-[14px]'>3</span>
        </div>
        <div className="">
            <h1 className='text-green-500 font-semibold text-2xl'><span className='text-orange-500 font-extrabold text-[34px]'>u</span>ptcl</h1>
        </div>
        <div className="">
            <img className='w-8 h-8' src={search} alt="" />
        </div>
    </div>

    <div className="flex space-x-4">
        <div className="border border-orange-500 p-2 rounded-full bg-orange-200">
            <img className='h-8 w-8 bg-orange-500 rounded-full' src={group} alt="" />
        </div>
        <div className="">
            <img className='rounded-full w-14 h-14' src={profile} alt="" />
        </div>
    </div>
    </>
  )
}

export default Header
