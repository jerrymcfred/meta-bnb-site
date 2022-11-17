import React from 'react'

export default function Header() {
  return (
    <div className="navbar sm:px-[100px] justify-between">
      <div>
        <a href='/'>
          <img src="metabnb.png" alt="logo" className='h-auto w-[120px] sm:w-auto px-4 sm:px-0' />
        </a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="p-0 menu menu-horizontal gap-x-12">
          <li><a href='/' className='link link-hover hover:bg-white focus:bg-white'>Home</a></li>
          <li><a href='/place-to-stay' className='link link-hover hover:bg-white focus:bg-white'>Place to stay</a></li>
          <li><a href='/' className='link link-hover hover:bg-white focus:bg-white'>NFTs</a></li>
          <li><a href='/' className='link link-hover hover:bg-white focus:bg-white'>Community</a></li>
        </ul>
      </div>
      <div>
        <label htmlFor="my-modal-3" className="btn bg-[#A02279] text-white btn-sm sm:btn-md hover:bg-[#A02279] hover:opacity-90">Connect wallet</label>
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="bg-white btn-ghost btn lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li><a href='/' className='link link-hover hover:bg-white focus:bg-white'>Home</a></li>
            <li><a href='/place-to-stay' className='link link-hover hover:bg-white focus:bg-white'>Place to stay</a></li>
            <li><a href='/' className='link link-hover hover:bg-white focus:bg-white'>NFTs</a></li>
            <li><a href='/' className='link link-hover hover:bg-white focus:bg-white'>Community</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
