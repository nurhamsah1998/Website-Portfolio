import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function BodyContent() {
  AOS.init({
    offset: 100,
    duration: 1000,
  });
  return (
    <div id="header" className=" pt-20 lg:flex font-light pb-20 grid justify-evenly">
      <div className="max-w-xl order-2 lg:order-1 p-9">
        <p className="font-light text-[20px]" data-aos="fade-down">
          Tentang Saya,
        </p>
        <p data-aos="fade-down" className="mt-9 font-light text-md tracking-tighter">
          Saya adalah manusia yang suka sekali dengan programmer. kenapa saya memilih menjadi programer karena, saya ingin menciptakan sebuah teknologi yang nantinya dapat
          memudahkan pekerjaan manusia dan bisa menyelesaikan problem problem yang ada dinegara kita.
        </p>
        <p data-aos="fade-down" className="font-light text-md mt-1 tracking-tighter">
          Dengan berbekal pengalaman membuat website portfolio, mungkin kita bisa mengadakan negosiasi tentang pembuatan wesite portfolio secara proffesional
        </p>
        <div className="">
          <p className="mt-5 font-light text-md tracking-tighter" data-aos="fade-down" data-aos-delay="150">
            Berikut Keahlian Saya :
          </p>
          <div className="grid items-center mt-[-5px] lg:flex">
            <ul>
              <li data-aos-delay="150" data-aos="fade-down" className="mt-6 font-light text-[16px] flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                Membuat strucktur dasar HTML
              </li>
              <li data-aos-delay="160" data-aos="fade-down" className="mt-3 font-light text-[16px] flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                Styling CSS
              </li>
              <li data-aos-delay="170" data-aos="fade-down" className="mt-3 font-light text-[16px] flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                Mahir dasar-dasar Framework
              </li>
              <li data-aos-delay="180" data-aos="fade-down" className="mt-3 font-light text-[16px] flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                Memahami dasar-dasar JavaScript
              </li>
              <li data-aos-delay="190" data-aos="fade-down" className="mt-6 font-light text-[16px] lg:hidden flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                Bisa menggunkan framework tailwind
              </li>
              <li data-aos-delay="200" data-aos="fade-down" className="mt-3 font-light text-[16px] lg:hidden flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                Menguasai dasar-dasar ReactJS
              </li>
              <li data-aos-delay="210" data-aos="fade-down" className="mt-3 font-light text-[16px] lg:hidden flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                Bisa membuat component ReactJS
              </li>
              <li data-aos-delay="220" data-aos="fade-down" className="mt-3 font-light text-[16px] lg:hidden flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                ...dan lain lain
              </li>
            </ul>
            {/* ------------------------- */}
            <div className="ml-20 lg:block hidden">
              <li data-aos-delay="220" data-aos="fade-right" className="mt-6 font-light text-[16px] flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                Bisa menggunkan framework tailwind
              </li>
              <li data-aos-delay="220" data-aos="fade-right" className="mt-3 font-light text-[16px] flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                Menguasai dasar-dasar ReactJS
              </li>
              <li data-aos-delay="220" data-aos="fade-right" className="mt-3 font-light text-[16px] flex items-center">
                <img className="w-5 mr-3" src="https://www.svgrepo.com/show/44093/right-arrow.svg" />
                Membuat aplikasi TODOLIST
              </li>
            </div>
          </div>
        </div>
      </div>
      <img
        data-aos="zoom-in-up"
        data-aos-delay="220"
        data-aos-offset="400"
        className=" p-9 lg:w-1/3 w-[75%] order-1 lg:order-2"
        src="https://www.svgrepo.com/show/194570/qr-code.svg"
      />
    </div>
  );
}

export default BodyContent;
