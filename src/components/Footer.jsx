import React from 'react'

function Footer() {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container pt-12 pb-12 pl-10 pr-10 flex justify-between mt-4">
        <span className='text-4xl text-slate-600'>IO</span>
        <div>
        <p className="text-slate-600">Developed by Izzat Omarov</p>
        <p className="text-slate-600">All rights reserved. &copy;2024</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer