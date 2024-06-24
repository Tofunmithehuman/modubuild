import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);    

  const handleToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className="Navigation">
      <header className="fixed top-0 left-0 right-0 z-20">
        <div className="max-w-screen-2xl m-auto pt-4 pb-4 ps-6 pe-6 md:ps-20 md:pe-20 md:pt-10 md:pb-5">
          <div className="flex items-center justify-between">
            <h1 className="font text-2xl text-[#f6a13c] font-bold"><Link to='/'>ModuBuild</Link></h1>
            <ul className="hidden md:flex items-center justify-between gap-10 font font-semibold">
                <li><Link to='/' className="hover:text-gray-600 duration-300 ease-in-out">Home</Link></li>
                <li><Link to='/' className="hover:text-gray-600 duration-300 ease-in-out">About</Link></li>
                <li><Link to='/' className="hover:text-gray-600 duration-300 ease-in-out">Services</Link></li>
                <li><Link to='/' className="hover:text-gray-600 duration-300 ease-in-out">Projects</Link></li>
            </ul>
            <i className={`fa-solid  ${isMenuOpen ? "fa-x" : "fa-bars"} md:hidden text-xl `}  onClick={handleToggle}></i>
          </div>
        </div>
      </header>
        <ul className={`dropdown text-gray-700 bg-white flex flex-col gap-14 font absolute top-14 p-10  z-20 ${isMenuOpen ? "dropdown-slide-in" : "dropdown-slide-out"}`} style={{width:'100%', height:"90vh"}}>
            <li className="border-stone-500 border-b-2"><Link to='/' className="font-semibold">Home</Link></li>
            <li className="border-stone-500 border-b-2"><Link to='/' className="font-semibold">About</Link></li>
            <li className="border-stone-500 border-b-2"><Link to='/' className="font-semibold">Services</Link></li>
            <li className="border-stone-500 border-b-2"><Link to='/' className="font-semibold">Projects</Link></li>
        </ul>
    </div>
  );
}

export default Navigation;
