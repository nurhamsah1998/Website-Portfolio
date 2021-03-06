import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../nur.css';

function Header() {
  AOS.init({
    offset: 100,
    duration: 1000,
  });
  return (
    <div>
      <div className="a mt-[70px] pb-[270px] grid justify-center">
        <p data-aos-delay="100" data-aos="fade-up" className=" font-light">
          Hallo, Perkenalkan Namaku
        </p>
        <p data-aos-delay="500" data-aos="fade-up" className="mt-5 font-light text-5xl">
          NURHAMSAH.
        </p>
        <p data-aos-delay="900" data-aos="fade-up" className="text1 text-[50px] mt-5 font-bold">
          Junior Programmer
          <span data-aos-delay="900" data-aos="fade-up" className="text-teal-500 ">
            {' '}
            Web APP.
          </span>
        </p>

        <div className="grid s">
          <p data-aos-delay="1300" data-aos="fade-down" className="py-1 text-[50px]  text2 font-extralight">
            Pembuat Aplikasi Berbasis Web dan Android.
          </p>
          <a href="https://wa.me/6281213221343" data-aos-delay="900" data-aos="fade-down" className="py-1 r text-[50px] font-extralight">
            <button className="p-2 bg-teal-500 hover:bg-teal-400 duration-200 font-light text-white">Contact ME</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
