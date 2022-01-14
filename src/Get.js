import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  AOS.init({
    offset: 100,
    duration: 1000,
  });
  return (
    <div id="ini" className="text-center bg-teal-900 text-white pt-40 p-20">
      <p data-aos-delay="160" data-aos="fade-up" className="pb-4 text-[30px]">
        Anda berminat
      </p>
      <p data-aos-delay="160" data-aos="fade-up" className="pb-4 text-3xl text-teal-400">
        Get In Touch!
      </p>
      <p data-aos-delay="160" data-aos="fade-up" className=" leading-6 font-light pb-4 mx-auto max-w-3xl text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde qui vitae adipisci iusto suscipit eligendi dolorum ipsam corrupti laborum sunt officiis quaerat, illo
        provident non blanditiis sit tempora enim alias.
      </p>
      <a href="https://wa.me/6281213221343">
        <button
          data-aos-delay="160"
          data-aos="fade-up"
          className="text-teal-100 border mx-auto border-teal-300 justify-center p-3 mt-10 font-bold rounded ease-in duration-300 hover:bg-teal-300 shadow-lg hover:shadow-cyan-500/50 hover:text-black flex"
        >
          Hubungi Saya !
        </button>
      </a>

      <div data-aos-delay="160" data-aos="fade-up" data-aos-offset="100" className="mt-20 pb-20">
        <p>
          Build by
          <span className="text-teal-400 px-2 font-bold cursor-pointer">Nurhamsah</span> Inspiration by
          <a href="https://brittanychiang.com/">
            <span className="text-teal-400 px-2 font-bold cursor-pointer">Brittany Chiang</span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
