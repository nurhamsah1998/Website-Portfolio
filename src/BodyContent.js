import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imgs from './fococlipping-20220114-85943.png';

function BodyContent() {
  AOS.init({
    offset: 100,
    duration: 1000,
  });
  return (
    <div id="header" className="bg-teal-600 pt-20 lg:flex text-white font-tahoma pb-80 grid justify-evenly">
      <div className="max-w-xl order-2 lg:order-1 p-9">
        <p className="font-bold font-semibold" data-aos="fade-down">
          Tentang Saya,
        </p>
        <p data-aos="fade-left" className="mt-9 font-semibold text-md tracking-tighter">
          Saya adalah manusia yang suka sekali dengan programmer. kenapa saya memilih menjadi programer karena, saya ingin menciptakan sebuah teknologi yang nantinya dapat
          memudahkan pekerjaan manusia dan bisa menyelesaikan problem problem yang ada dinegara kita.
        </p>
        <p data-aos="fade-left" className="font-semibold text-md mt-1 tracking-tighter">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga iure, qui ipsam architecto expedita quas incidunt, cumque, consequuntur ipsa error eligendi illum saepe
          quos! Consectetur nobis dolor neque
        </p>
        <div className="">
          <p className="mt-5 font-semibold text-md tracking-tighter" data-aos="fade-left" data-aos-delay="150">
            Berikut Keahlian Saya :
          </p>
          <div className="grid items-center mt-[-5px] lg:flex">
            <ul>
              <li data-aos-delay="150" data-aos="fade-left" className="mt-6 font-bold flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                Membuat strucktur dasar HTML
              </li>
              <li data-aos-delay="160" data-aos="fade-left" className="mt-3 font-bold flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                Styling CSS
              </li>
              <li data-aos-delay="170" data-aos="fade-left" className="mt-3 font-bold flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                Mahir dasar-dasar Framework
              </li>
              <li data-aos-delay="180" data-aos="fade-left" className="mt-3 font-bold flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                Memahami dasar-dasar JavaScript
              </li>
              <li data-aos-delay="190" data-aos="fade-left" className="mt-6 font-bold lg:hidden flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                Bisa menggunkan framework tailwind
              </li>
              <li data-aos-delay="200" data-aos="fade-left" className="mt-3 font-bold lg:hidden flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                Menguasai dasar-dasar ReactJS
              </li>
              <li data-aos-delay="210" data-aos="fade-left" className="mt-3 font-bold lg:hidden flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                Bisa membuat component ReactJS
              </li>
              <li data-aos-delay="220" data-aos="fade-left" className="mt-3 font-bold lg:hidden flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                ...dan lain lain
              </li>
            </ul>
            {/* ------------------------- */}
            <div className="ml-20 lg:block hidden">
              <li data-aos-delay="220" data-aos="fade-right" className="mt-6 font-bold flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                Bisa menggunkan framework tailwind
              </li>
              <li data-aos-delay="220" data-aos="fade-right" className="mt-3 font-bold flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                Menguasai dasar-dasar ReactJS
              </li>
              <li data-aos-delay="220" data-aos="fade-right" className="mt-3 font-bold flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                Membuat aplikasi TODOLIST
              </li>
            </div>
          </div>
        </div>
      </div>
      <img data-aos="zoom-in-up" data-aos-delay="220" data-aos-offset="400" className=" p-9 lg:w-1/3 order-1 lg:order-2" src="https://www.svgrepo.com/show/194570/qr-code.svg" />
    </div>
  );
}

export default BodyContent;
