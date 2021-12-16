import React from 'react';

function Text() {
  return (
    <div
      id="1"
      className="grid lg:flex pt-80 bg-slate-900 content-center justify-center pb-40 px-10 items-center"
    >
      <div className="grid lg:flex mr-5">
        <p className="text-white pt-0 pr-3 font-bold text-2xl">Saat ini</p>
        <img
          className="w-5 rotate-90 lg:rotate-0"
          src="https://www.svgrepo.com/show/44093/right-arrow.svg"
        />
      </div>
      <div className="pt-5 lg:pt-0">
        <p className="text-white font-bold font-mono text-xl">Code Art</p>
        <p className="font-mono leading-5 mt-2 max-w-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quos
          architecto nulla at facere, consectetur error amet voluptatibus
          laborum eligendi?
        </p>
      </div>
    </div>
  );
}

export default Text;
