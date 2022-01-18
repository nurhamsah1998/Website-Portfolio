import { Tab } from '@headlessui/react';
import { useState } from 'react';
import GlobalPrinter from './GlobalPrinter';
import CodeArt from './CodeArt';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './nur.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
function MyTabs() {
  AOS.init({
    offset: 100,
    duration: 1000,
  });
  return (
    <div id="work1" className=" py-[230px]">
      <p data-aos-delay="160" data-aos="fade-up" className="text-[30px] font-light text-center">
        Pengalaman Kerja
      </p>
      <div className="y w-full block lg:hidden">
        <div data-aos-delay="50" data-aos="fade-up" className=" m mt-10 mx-auto">
          <GlobalPrinter />
        </div>
        <div data-aos-delay="50" data-aos="fade-up" className=" n mt-10 mx-auto">
          <CodeArt />
        </div>
      </div>
      <div className="x">
        <div className=" mt-10 mx-auto">
          <Tab.Group data-aos-delay="400" data-aos="fade-up">
            <div className="tab flex">
              <Tab.List className="tab2 grid ">
                <div className="w-[300px]">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        'px-1 py-1 text-[20px] leading-5 font-medium text-blue-700 rounded-md',
                        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                        selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12]'
                      )
                    }
                  >
                    Global Printer
                  </Tab>
                  <p className="text-sm">KedungWaru TulungAgung</p>
                  <p className="text-sm">2016 - 2021</p>
                </div>
                <div className=" mt-28">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        'px-1 py-1 text-[20px] leading-5 font-medium text-red-500 rounded-md',
                        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-red-400 ring-white ring-opacity-60',
                        selected ? 'bg-white shadow' : 'text-red-200 hover:bg-white/[0.12]'
                      )
                    }
                  >
                    CODE ART
                  </Tab>
                  <p className="text-sm">Sembung TulungAgung</p>
                  <p className="text-sm">2021 - Present</p>
                </div>
              </Tab.List>
              <Tab.Panels className="">
                <Tab.Panel data-aos-delay="50" data-aos="fade-up" className="">
                  <GlobalPrinter />
                </Tab.Panel>
                <Tab.Panel data-aos-delay="50" data-aos="fade-up" className="">
                  <CodeArt />
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}
export default MyTabs;
