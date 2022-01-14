import React, { Component } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyWork() {
  AOS.init({
    offset: 100,
    duration: 1000,
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/6152797/pexels-photo-6152797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      judul: 'TODO LIST',
      title: 'Aplikasi TODO LIST. disertai dengan update list dan delete list secara complex dan mudah. bisa anda lihat dilink bawah ini.',
      btn: 'View On GitHub',
      btn1: 'view DEMO',
    },
    {
      id: 1,
      img: 'https://images.pexels.com/photos/7933471/pexels-photo-7933471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      judul: 'CHAT APP',
      title: 'Aute elit quis ea ipsum laborum enim.Aute elit quis ea ipsum laborum enim.',
      btn: 'View On GitHub',
      btn1: 'view DEMO',
    },
    {
      id: 1,
      img: 'https://images.pexels.com/photos/9322198/pexels-photo-9322198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      judul: 'PORTFOLIO',
      title: 'Aute elit quis ea ipsum laborum enim.Aute elit quis ea ipsum laborum enim.',
      btn: 'View On GitHub',
      btn1: 'view DEMO',
    },
    {
      id: 1,
      img: 'https://images.pexels.com/photos/7852009/pexels-photo-7852009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      judul: 'SERVER NODE.JS',
      title: 'Aute el enim.Aute elit quis ea ipsum Aut is ea ipsum laborum enim.Autorum enim.Aute elit quis ea ipsum l laborum enim.',
      btn: 'View On GitHub',
      btn1: 'view DEMO',
    },
    {
      id: 1,
      img: 'https://images.pexels.com/photos/9334968/pexels-photo-9334968.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      judul: 'COMMING SOON',
      title: 'Aute elit quis ea ipsum laborum enim.Aute elit quis ea ipsum laborum enim.',
      btn: 'View On GitHub',
      btn1: 'view DEMO',
    },
  ];
  return (
    <div id="work" className=" bg-teal-700 pt-[100px] pb-[15px] px-10 ">
      <Slider className="p-5" {...settings}>
        {data.map((i) => {
          return (
            <div className="">
              <div data-aos-delay="500" data-aos="fade-up" className="w-[400px] items-center h-[490px] bg-slate-800 p-5" key={i.id}>
                <img className="rounded rounded-md" src={i.img} />
                <p className="text-white font-bold mt-5">{i.judul}</p>
                <p className="text-white mt-2 h-[70px] font-light text-md">{i.title}</p>
                <div className="flex justify-between ">
                  <button className="text-teal-100 bottom-0 mb-5 border border-teal-300 justify-center p-3 mt-10 font-bold rounded ease-in duration-300 hover:bg-teal-300 shadow-lg hover:shadow-cyan-500/50 hover:text-black flex">
                    {i.btn}
                  </button>
                  <button className="text-teal-100 bottom-0 mb-5 border border-teal-300 justify-center p-3 mt-10 font-bold rounded ease-in duration-300 hover:bg-teal-300 shadow-lg hover:shadow-cyan-500/50 hover:text-black flex">
                    {i.btn1}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <p data-aos-delay="250" data-aos="fade-down" className="text-[40px] font-light text-center text-white pt-5">
        ALL MY WORK
      </p>
    </div>
  );
}

export default MyWork;
