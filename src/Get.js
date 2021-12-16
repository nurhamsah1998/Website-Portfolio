import React from 'react';

function Footer() {
  return (
    <div id="ini" className="text-center bg-slate-900 text-white pt-40 p-20">
      <p className="pb-4">Anda berminat</p>
      <p className="pb-4 text-3xl text-teal-400">Get In Touch!</p>
      <p className="font-mono leading-6 font-bold pb-4 mx-auto max-w-3xl text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde qui vitae
        adipisci iusto suscipit eligendi dolorum ipsam corrupti laborum sunt
        officiis quaerat, illo provident non blanditiis sit tempora enim alias.
      </p>
      <a href="https://wa.me/6281213221343">
        <button className="text-teal-100 border mx-auto border-teal-300 justify-center p-3 mt-10 font-bold rounded ease-in duration-300 hover:bg-teal-300 shadow-lg hover:shadow-cyan-500/50 hover:text-black flex">
          Hubungi Saya !
        </button>
      </a>

      <div className="mt-40">
        <p>
          Build by
          <span className="text-teal-400 px-2 font-bold cursor-pointer">
            Nurhamsah
          </span>{' '}
          Inspiration by
          <a href="https://brittanychiang.com/">
            <span className="text-teal-400 px-2 font-bold cursor-pointer">
              Brittany Chiang
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
