import React from 'react'
import bell from './Assets/header_icons/bell.svg'
import search from './Assets/header_icons/search.svg'
import group from './Assets/header_icons/group.svg'
import add from './Assets/header_icons/add.svg'
import profile from './Assets/images/profile.png'
const Header = () => {
  return (
    <>
    <div className="flex justify-between items-center border-b border-gray-200 p-4">
        <div className="">
            <img className='realtive w-8 h-8' src={bell} alt="" />
            <span className='absolute top-3 left-7 bg-orange-500 text-white rounded-full px-1.5 text-[14px]'>3</span>
        </div>
        <div className="">
            <h1 className='text-green-500 font-semibold text-2xl'><span className='text-orange-500 font-extrabold text-[34px]'>u</span>ptcl</h1>
        </div>
        <div className="">
            <img className='w-8 h-8' src={search} alt="" />
        </div>
    </div>

    <div className="flex space-x-6 justify-start items-center p-3 border-b border-orange-600">
        <div className="border border-orange-500 p-2 rounded-full bg-orange-200 flex items-center">
            <img className='h-8 w-8 bg-orange-500 rounded-full' src={group} alt="" />
        </div>
        <div className="relative ">
            <img className=' rounded-full w-14 h-14' src={profile} alt="" />
            <span className='absolute w-8 h-8 text-center bottom-[-10px] left-8 bg-orange-500 font-bold text-white rounded-full border-2 border-white px-1.5 text-[20px]'>u</span>
        </div>
        <div className="">
            <img className='h-16 w-16' src={add} alt="" />
        </div>
    </div>
    </>
  )
}

export default Header
