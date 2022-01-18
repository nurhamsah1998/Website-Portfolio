import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './nur.css';

function Footer() {
  AOS.init({
    offset: 100,
    duration: 1000,
  });
  return (
    <div id="ini" className="text-center w-full pt-20 pb-20 px-5">
      <p data-aos-delay="160" data-aos="fade-up" className="pb-4 text-[30px]">
        Anda Berminat
      </p>
      <p data-aos-delay="360" data-aos="fade-up" className="pb-4 text-3xl text-teal-400">
        Get In Touch!
      </p>
      <p data-aos-delay="560" data-aos="fade-up" className=" leading-6 font-light pb-4 mx-auto max-w-3xl text-lg">
        Saya akan menjawab semua pertanyaan yang diajukan. Tentunya dengan kapasitas kemampuan saya. Saya akan merasa senang jika kita menjalin hubungan dengan pertanyaan.
      </p>
      <a href="https://wa.me/6281213221343">
        <button
          data-aos-delay="760"
          data-aos="fade-up"
          className="text-teal-500 border mx-auto border-teal-300 justify-center p-3 mt-10 font-bold rounded duration-200 hover:bg-teal-300 shadow-lg hover:shadow-cyan-500/50 hover:text-black flex"
        >
          Hubungi Saya !
        </button>
      </a>

      <div data-aos-delay="960" data-aos="fade-up" data-aos-offset="100" className="mt-20 text-center f pb-20">
        <p>
          Build by
          <span className="text-teal-400 px-2 font-bold cursor-pointer">Nurhamsah</span> inspired by
          <a href="https://brittanychiang.com/">
            <span className="text-teal-400 px-2 font-bold cursor-pointer">Brittany Chiang</span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
