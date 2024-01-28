import React from 'react'

function MenuOverlay() {
  return (
    <ul className="flex flex-col py-4 items-center">
        <li><a href={"#about"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>About</a></li>
        <li><a href={"#projects"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Projects</a></li>
        <li><a href={"#contact"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Contact</a></li>
    </ul>
  )
}

export default MenuOverlay