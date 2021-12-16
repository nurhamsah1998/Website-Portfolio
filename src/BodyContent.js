import React from 'react';

function BodyContent() {
  return (
    <div className="bg-slate-900 lg:flex text-white font-tahoma grid justify-evenly">
      <div className="max-w-xl order-2 lg:order-1 p-9">
        <p className="font-bold font-mono">Tentang Saya, </p>
        <p className="mt-9 font-mono font-bold tracking-tighter">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga iure,
          qui ipsam architecto expedita quas incidunt, cumque, consequuntur ipsa
          error eligendi illum saepe quos! Consectetur nobis dolor neque
          doloribus in! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Fuga iure, qui ipsam architecto expedita quas incidunt, cumque,
          consequuntur ipsa error eligendi illum saepe quos! Consectetur nobis
          dolor neque doloribus in!
        </p>
        <p className="mt-2 font-mono font-bold tracking-tighter">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga iure,
          qui ipsam architecto expedita quas incidunt, cumque, consequuntur ipsa
          error eligendi illum saepe quos! Consectetur nobis dolor neque
        </p>
        <p className="mt-2 font-mono font-bold tracking-tighter">
          Berikut Keahlian Saya :
        </p>
        <div className="grid lg:flex">
          <ul>
            <li className="mt-6 font-bold flex items-center">
              <img
                className="w-5 mr-3"
                src="https://www.svgrepo.com/show/44093/right-arrow.svg"
              />
              Membuat strucktur dasar HTML
            </li>
            <li className="mt-3 font-bold flex items-center">
              <img
                className="w-5 mr-3"
                src="https://www.svgrepo.com/show/44093/right-arrow.svg"
              />
              Styling CSS
            </li>
            <li className="mt-3 font-bold flex items-center">
              <img
                className="w-5 mr-3"
                src="https://www.svgrepo.com/show/44093/right-arrow.svg"
              />
              Mahir dasar-dasar Framework
            </li>
            <li className="mt-3 font-bold flex items-center">
              <img
                className="w-5 mr-3"
                src="https://www.svgrepo.com/show/44093/right-arrow.svg"
              />
              Memahami dasar-dasar JavaScript
            </li>
            <li className="mt-6 font-bold lg:hidden flex items-center">
              <img
                className="w-5 mr-3"
                src="https://www.svgrepo.com/show/44093/right-arrow.svg"
              />
              Bisa menggunkan framework tailwind
            </li>
            <li className="mt-3 font-bold lg:hidden flex items-center">
              <img
                className="w-5 mr-3"
                src="https://www.svgrepo.com/show/44093/right-arrow.svg"
              />
              Menguasai dasar-dasar ReactJS
            </li>
            <li className="mt-3 font-bold lg:hidden flex items-center">
              <img
                className="w-5 mr-3"
                src="https://www.svgrepo.com/show/44093/right-arrow.svg"
              />
              Bisa membuat component ReactJS
            </li>
            <li className="mt-3 font-bold lg:hidden flex items-center">
              <img
                className="w-5 mr-3"
                src="https://www.svgrepo.com/show/44093/right-arrow.svg"
              />
              ...dan lain lain
            </li>
          </ul>
          {/* ------------------------- */}
          <div className="ml-20 lg:block hidden">
            <li className="mt-6 font-bold flex items-center">
              <img
                className="w-5 mr-3"
                src="https://www.svgrepo.com/show/44093/right-arrow.svg"
              />
              Bisa menggunkan framework tailwind
            </li>
            <li className="mt-3 font-bold flex items-center">
              <img
                className="w-5 mr-3"
                src="https://www.svgrepo.com/show/44093/right-arrow.svg"
              />
              Menguasai dasar-dasar ReactJS
            </li>
            <li className="mt-3 font-bold flex items-center">
              <img
                className="w-5 mr-3"
                src="https://www.svgrepo.com/show/44093/right-arrow.svg"
              />
              Bisa membuat component ReactJS
            </li>
            <li className="mt-3 font-bold flex items-center">
              <img
                className="w-5 mr-3"
                src="https://www.svgrepo.com/show/44093/right-arrow.svg"
              />
              ...dan lain lain
            </li>
          </div>
        </div>
      </div>
      <img
        className=" p-9 lg:w-1/3 order-1 lg:order-2"
        src="https://www.svgrepo.com/show/217753/github.svg"
      />
    </div>
  );
}

export default BodyContent;
