import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-50">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <a href={"/"}className="text-2xl md:text-5xl text-white font-semibold">IO</a>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        <li><a href={"#about"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>About</a></li>
                        <li><a href={"#projects"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Projects</a></li>
                        <li><a href={"#contact"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Contact</a></li>
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay /> : null}
        </nav>
    )
}

export default Navbar