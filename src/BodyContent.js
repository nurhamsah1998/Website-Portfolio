import React from 'react';

function BodyContent() {
  return (
    <div className="bg-slate-900 md:flex text-white font-tahoma grid justify-evenly">
      <div className="max-w-xl md:border border-transparent border border-teal-400 md:border-teal-400 p-9">
        <p>Tentang Saya, </p>
        <p className="mt-9">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga iure,
          qui ipsam architecto expedita quas incidunt, cumque, consequuntur ipsa
          error eligendi illum saepe quos! Consectetur nobis dolor neque
          doloribus in! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Fuga iure, qui ipsam architecto expedita quas incidunt, cumque,
          consequuntur ipsa error eligendi illum saepe quos! Consectetur nobis
          dolor neque doloribus in!
        </p>
        <p className="mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga iure,
          qui ipsam architecto expedita quas incidunt, cumque, consequuntur ipsa
          error eligendi illum saepe quos! Consectetur nobis dolor neque
          doloribus in!
        </p>
        <p className="mt-2">berikut Keahlian Saya :</p>
        <div className="grid lg:flex">
          <ul>
            <li className="mt-6 flex items-center">
              <img
                className="w-5 mr-3"
                src="https://www.svgrepo.com/show/44093/right-arrow.svg"
              />
              Membuat strucktur dasar HTML
            </li>
            <li className="mt-3 flex items-center">
              <img
                className="w-5 mr-3"
                src="https://www.svgrepo.com/show/44093/right-arrow.svg"
              />
              Styling CSS
            </li>
            <li className="mt-3 flex items-center">
              <img
                className="w-5 mr-3"
                src="https://www.svgrepo.com/show/44093/right-arrow.svg"
              />
              Mahir dasar-dasar Framework
            </li>
            <li className="mt-3 flex items-center">
              <img
                className="w-5 mr-3"
                src="https://www.svgrepo.com/show/44093/right-arrow.svg"
              />
              Memahami dasar-dasar JavaScript
            </li>
          </ul>

          <div className="ml-20">
            <li className="mt-6 flex items-center">
              <img
                className="w-5 mr-3"
                src="https://www.svgrepo.com/show/44093/right-arrow.svg"
              />
              Bisa menggunkan framework tailwind
            </li>
            <li className="mt-3 flex items-center">
              <img
                className="w-5 mr-3"
                src="https://www.svgrepo.com/show/44093/right-arrow.svg"
              />
              Menguasai dasar-dasar ReactJS
            </li>
            <li className="mt-3 flex items-center">
              <img
                className="w-5 mr-3"
                src="https://www.svgrepo.com/show/44093/right-arrow.svg"
              />
              Bisa membuat component ReactJS
            </li>
            <li className="mt-3 flex items-center">
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
        className="w-1/4"
        src="https://www.svgrepo.com/show/217753/github.svg"
      />
    </div>
  );
}

export default BodyContent;
