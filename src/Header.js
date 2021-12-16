import React from 'react';

function Header() {
  return (
    <div className="bg-slate-900 p-20">
      <p className="text-white font-mono">Hallo, Perkenalkan Namaku</p>
      <p className="text-white font-bold text-5xl">NURHAMSAH.</p>
      <p className="text-white font-bold text-8xl mb-5">
        i Build Things For <span className="text-teal-500 ">The Web.</span>
      </p>
      <p className="text-white max-w-3xl font-mono">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa debitis
        aliquam, perferendis porro magnam officiis id numquam quidem laborum
        nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        debitis aliquam, perferendis porro magnam officiis id numquam quidem
        laborum nobis.
      </p>
      <button className="text-teal-100 border border-teal-300 justify-center p-3 mt-10 font-bold rounded ease-in duration-300 hover:bg-teal-300 shadow-lg hover:shadow-cyan-500/50 hover:text-black flex">
        Get in Touch{' '}
        <img
          className="ml-3"
          src="https://www.svgrepo.com/show/354560/whatsapp.svg"
          width="7%"
        />
      </button>
    </div>
  );
}

export default Header;
