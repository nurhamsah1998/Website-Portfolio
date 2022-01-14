import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Text() {
  AOS.init({
    offset: 100,
    duration: 1000,
  });
  return (
    <div id="1" className="grid lg:flex pt-80 bg-teal-800 content-center justify-center pb-40 px-10 h-[800px] items-center">
      <div className="grid lg:flex mr-5">
        <p data-aos-delay="160" data-aos="fade-right" className="text-white pt-0 pr-3 font-light text-2xl">
          Pekerjaan saat ini
        </p>
        <img data-aos-delay="160" data-aos="fade-righ" className="w-5 rotate-90 lg:rotate-0" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
      </div>
      <div className="pt-5 lg:pt-0">
        <p data-aos-delay="160" data-aos="fade-down" className="text-white font-bold font-light text-xl">
          Code Art
        </p>
        <p data-aos-delay="160" data-aos="fade-left" className="font-light leading-5 mt-2 max-w-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quos architecto nulla at facere, consectetur error amet voluptatibus laborum eligendi?
        </p>
      </div>
    </div>
  );
}

export default Text;
