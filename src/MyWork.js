import React, { Component } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from './image/1.png';
import img2 from './image/2.png';
import img3 from './image/3.png';
import img4 from './image/4.png';
import img5 from './image/5.png';

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
      img: img3,
      judul: 'TODO LIST',
      title: 'Aplikasi TODO LIST. disertai dengan update list dan delete list secara complex dan mudah. bisa anda lihat dilink bawah ini.',
      btn: 'View On GitHub',
      btn1: 'view DEMO',
      link: 'https://github.com/nurhamsah1998/kompex-todo-list.git',
    },
    {
      id: 1,
      img: img2,
      judul: 'CHAT APP',
      title: 'Aute elit quis ea ipsum laborum enim.Aute elit quis ea ipsum laborum enim.',
      btn: 'View On GitHub',
      btn1: 'view DEMO',
      link: 'https://github.com/nurhamsah1998/chat-app.git',
    },
    {
      id: 1,
      img: img4,
      judul: 'PORTFOLIO',
      title: 'Aute elit quis ea ipsum laborum enim.Aute elit quis ea ipsum laborum enim.',
      btn: 'View On GitHub',
      btn1: 'view DEMO',
    },
    {
      id: 1,
      img: img1,
      judul: 'SERVER NODE.JS',
      title: 'Aute el enim.Aute elit quis ea ipsum Aut is ea ipsum laborum enim.Autorum enim.Aute elit quis ea ipsum l laborum enim.',
      btn: 'View On GitHub',
      btn1: 'view DEMO',
      link: 'https://github.com/nurhamsah1998/server-satabase.git',
    },
    {
      id: 1,
      img: img5,
      judul: 'LIST APP',
      title: 'Aute elit quis ea ipsum laborum enim.Aute elit quis ea ipsum laborum enim.',
      btn: 'View On GitHub',
      btn1: 'view DEMO',
      link: 'https://github.com/nurhamsah1998/ListApp.git',
    },
  ];
  return (
    <div id="work" className="w-full pt-[140px] pb-[70px] px-10 ">
      <Slider className=" mx-auto w-[1000px] h-[480px]" {...settings}>
        {data.map((i) => {
          return (
            <div className="w-full">
              <div data-aos-delay="500" data-aos="fade-up" className="w-[300px] mx-auto rounded-xl items-center h-[450px] border-[2px] border-slate-300 p-2" key={i.id}>
                <div className="h-[210px] w-[280px] mx-auto">
                  <img className=" h-full w-full rounded-md" src={i.img} />
                </div>
                <p className=" font-bold mt-5">{i.judul}</p>
                <p className=" mt-2 h-[70px] font-light text-md">{i.title}</p>
                <div className="flex justify-between ">
                  <a href={i.link}>
                    <button className="text-teal-500 bottom-0 mb-5 border border-teal-300 justify-center p-3 mt-10 font-medium rounded  hover:bg-teal-300 bg-white hover:shadow-cyan-500/50 hover:text-black flex">
                      {i.btn}
                    </button>
                  </a>
                  <button className="text-teal-500 bottom-0 mb-5 border border-teal-300 justify-center p-3 mt-10 font-medium rounded  hover:bg-teal-300 bg-white hover:shadow-cyan-500/50 hover:text-black flex">
                    {i.btn1}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <p data-aos-delay="100" data-aos="fade-down" className="text-[40px] font-light text-center  pt-5">
        ALL MY WORK
      </p>
    </div>
  );
}

export default MyWork;
