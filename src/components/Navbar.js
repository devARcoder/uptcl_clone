import React from 'react'
import home from './Assets/navbar_icons/home.svg'
import payment from './Assets/navbar_icons/payment.svg'
import shop from './Assets/navbar_icons/shop.svg'
import help from './Assets/navbar_icons/help.svg'
import menu from './Assets/navbar_icons/menu.svg'
const Navbar = () => {
    
  return (
    <>
    <div className="flex justify-between items-center border border-gray-500 px-2 pt-3 pb-6 fixed bottom-0 w-full mb-1">
        <div className='flex flex-col items-center space-y-1 p-2 hover:transition hover:duration-700 hover:-translate-y-14  hover:bg-gray-100 hover:rounded-full hover:border hover:border-black hover:px-2'>
            <img className='w-9 h-9' src={home} alt="" />
            <a className='text-md text-gray-800' href="/">Home</a>
        </div>
        <div className='flex flex-col items-center space-y-1 p-2 hover:transition hover:duration-700 hover:-translate-y-14  hover:bg-gray-100 hover:rounded-full hover:border hover:border-black hover:px-1'>
            <img className='w-9 h-9' src={payment} alt="" />
            <a className='text-md text-gray-800' href="/">Payments</a>
        </div>
        <div className='flex flex-col items-center space-y-1 p-2 hover:transition hover:duration-700 hover:-translate-y-14  hover:bg-gray-100 hover:rounded-full hover:border hover:border-black hover:px-4'>
            <img className='w-9 h-9' src={shop} alt="" />
            <a className='text-md text-gray-800' href="/">Shop</a>
        </div>
        <div className='flex flex-col items-center space-y-1 p-2 hover:transition hover:duration-700 hover:-translate-y-14  hover:bg-gray-100 hover:rounded-full hover:border hover:border-black hover:px-2'>
            <img className='w-9 h-9' src={help} alt="" />
            <a className='text-md text-gray-800' href="/">Help</a>
        </div>
        <div className='flex flex-col items-center space-y-1 p-2 hover:transition hover:duration-700 hover:-translate-y-14  hover:bg-gray-100 hover:rounded-full hover:border hover:border-black hover:px-2'>
            <img className='w-9 h-9' src={menu} alt="" />
            <a className='text-md text-gray-800' href="/">Menu</a>
        </div>
    </div>
    </>
  )
}

export default Navbar
