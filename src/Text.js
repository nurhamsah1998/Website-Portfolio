import React from 'react';

function Text() {
  return (
    <div className="grid lg:flex pt-9 bg-slate-900 content-center justify-center items-center">
      <p className="text-white pt-0 pr-3 font-bold text-2xl">Saat ini</p>
      <img
        className="w-5 "
        src="https://www.svgrepo.com/show/44093/right-arrow.svg"
      />
      <div className="mt-0">
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
