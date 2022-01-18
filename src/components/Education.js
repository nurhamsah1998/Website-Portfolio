import { Tab } from '@headlessui/react';
import CodeArt from './CodeArt';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../nur.css';
import Pendidikan from '../Pendidikan';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
function Education() {
  AOS.init({
    offset: 100,
    duration: 1000,
  });
  return (
    <div id="pedidikan" className=" py-[230px]">
      <p data-aos-delay="160" data-aos="fade-up" className="text-[30px] font-light text-center">
        Pendidikan
      </p>
      <div className="y md:w-[500px] md:mx-auto block lg:hidden">
        <div data-aos-delay="50" data-aos="fade-up" className=" m mt-10 mx-auto">
          <Pendidikan />
        </div>
      </div>
      <div className="x px-[200px]">
        <div className=" mt-10 mx-auto">
          <Tab.Group data-aos-delay="400" data-aos="fade-up">
            <div className="tab flex">
              <Tab.List className="tab2 grid ">
                <div className="w-[300px]">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        'px-1 py-1 lg:block hidden text-[20px] leading-5 font-medium text-teal-500 rounded-md',
                        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                        selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12]'
                      )
                    }
                  >
                    SMK PGRI kras
                  </Tab>
                  <p className="text-sm lg:block hidden">Kras Kediri</p>
                  <p className="text-sm lg:block hidden">2014 - 2017</p>
                </div>
              </Tab.List>
              <Tab.Panels className="">
                <Tab.Panel data-aos-delay="50" data-aos="fade-up" className=" lg:block hidden">
                  <Pendidikan />
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}
export default Education;
