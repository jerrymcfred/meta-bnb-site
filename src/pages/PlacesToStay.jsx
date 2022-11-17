import React from "react";
import CardGrid from "../components/CardGrid";
import Footer from "../components/Footer";

export default function PlacesToStay() {
  return (
    <div>
      <section className="sm:px-[100px] px-4 pt-12 lg:pt-24 pb-8 flex justify-between items-center">
        <div className="hidden lg:flex w-max">
          <ul className="p-0 menu menu-horizontal gap-x-12">
            <li><a href='/place-to-stay' className='link link-hover hover:bg-white focus:bg-white'>Restaurant</a></li>
            <li><a href='/place-to-stay' className='link link-hover hover:bg-white focus:bg-white'>Cottage</a></li>
            <li><a href='/place-to-stay' className='link link-hover hover:bg-white focus:bg-white'>Castle</a></li>
            <li><a href='/place-to-stay' className='link link-hover hover:bg-white focus:bg-white'>Fantast city</a></li>
            <li><a href='/place-to-stay' className='link link-hover hover:bg-white focus:bg-white'>Off grid</a></li>
            <li><a href='/place-to-stay' className='link link-hover hover:bg-white focus:bg-white'>Farm</a></li>
          </ul>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="bg-white btn-ghost btn lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li><a href='/place-to-stay' className='link link-hover hover:bg-white focus:bg-white'>Restaurant</a></li>
            <li><a href='/place-to-stay' className='link link-hover hover:bg-white focus:bg-white'>Cottage</a></li>
            <li><a href='/place-to-stay' className='link link-hover hover:bg-white focus:bg-white'>Castle</a></li>
            <li><a href='/place-to-stay' className='link link-hover hover:bg-white focus:bg-white'>Fantast city</a></li>
            <li><a href='/place-to-stay' className='link link-hover hover:bg-white focus:bg-white'>Off grid</a></li>
            <li><a href='/place-to-stay' className='link link-hover hover:bg-white focus:bg-white'>Farm</a></li>
          </ul>
        </div>
        <div className="bg-white border w-max border-[#B4B4B4] rounded-lg p-2 flex gap-8">
          <button type="button" className="">Location</button>
          <img src="filter-icon.png" alt="filter" />
        </div>
      </section>
      <section className="hero sm:px-[100px] px-4 sm:pt-10 pt-5 sm:pb-14 pb-8">
        <CardGrid size={16} />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}