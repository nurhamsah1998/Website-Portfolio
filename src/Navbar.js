import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
  AOS.init();
  return (
    <div className="shadow-lg z-50 top-0 shadow-gray-500/20 sticky flex justify-between p-5 items-center bg-teal-700">
      <div className="">
        <span className="font-bold tracking-wide text-white text-2xl duration-200 ">
          NUR
          <span className="text-teal-500 ">HAMSAH</span>
        </span>
      </div>

      <div className="flex items-center">
        <ul className="hidden lg:flex md:grid mr-10">
          <li>
            <a className="hover:bg-teal-300 p-2 duration-300 hover:text-black font-semibold text-teal-100 mr-10" href="#header">
              About
            </a>
          </li>
          <li>
            <a className="hover:bg-teal-300 p-2 duration-300 hover:text-black font-semibold text-teal-100 mr-10" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="hover:bg-teal-300 p-2 duration-300 hover:text-black font-semibold text-teal-100 mr-10" href="#work1">
              Pekerjaan
            </a>
          </li>
          <li>
            <a className="hover:bg-teal-300 p-2 duration-300 hover:text-black font-semibold text-teal-100 mr-10" href="#pedidikan">
              Pendidikan
            </a>
          </li>
          <li>
            <a className="hover:bg-teal-300 p-2 duration-300 hover:text-black font-semibold text-teal-100 mr-100" href="#ini">
              Contact
            </a>
          </li>
        </ul>
        <a href="https://brittanychiang.com/">
          <button className="text-teal-100 border border-teal-300 px-5 py-3 font-bold rounded ease-in duration-300 hover:bg-teal-300 shadow-lg hover:shadow-cyan-500/50 hover:text-black">
            Hire Me
          </button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
