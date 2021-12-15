import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between p-5 items-center bg-slate-900">
      <div className="">
        <span className="font-bold tracking-wide text-white text-2xl duration-200 ">
          NUR
          <span className="text-teal-500 ">HAMSAH</span>
        </span>
      </div>

      <div className="flex items-center">
        <ul className="hidden lg:flex md:grid mr-10">
          <li>
            <a className="hover:bg-teal-300 p-2 duration-300 hover:text-black font-mono text-teal-100 mr-10" href="">
              Tentang
            </a>
          </li>
          <li>
            <a className="hover:bg-teal-300 p-2 duration-300 hover:text-black font-mono text-teal-100 mr-10" href="">
              Pengalaman
            </a>
          </li>
          <li>
            <a className="hover:bg-teal-300 p-2 duration-300 hover:text-black font-mono text-teal-100 mr-10" href="">
              Pekerjaan
            </a>
          </li>
          <li>
            <a className="hover:bg-teal-300 p-2 duration-300 hover:text-black font-mono text-teal-100 mr-100" href="">
              Contact
            </a>
          </li>
        </ul>

        <button className="text-teal-100 border border-teal-300 px-5 py-3 font-bold rounded ease-in duration-300 hover:bg-teal-300 shadow-lg hover:shadow-cyan-500/50 hover:text-black">resume</button>
      </div>
    </div>
  );
}

export default Navbar;
