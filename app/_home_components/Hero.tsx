import Image from 'next/image';
import Heading from '../_reusable-components/Heading';

const Hero = () => {
  return (
    <div style={{ backgroundImage: `url('/assets/app-process/1.png')` }} className="relative  bg-black  bg-opacity-50 w-full max-w-[1440px] h-[300px] mx-auto    gap-2  object-cover bg-cover bg-center bg-no-repeat overflow-hidden ">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="absolute top-0 flex justify-between items-center w-full h-full px-4 md:px-20 ">
        {/* Left Text */}
        <div className="flex-1">
          <Heading parts={[{ text: <span className='text-white font-extrabold text-3xl sm:text-6xl tracking-wider'>Study In USA</span> }]} />
        </div>
        {/* Right Text */}
        <div className="flex-1 text-right prose">
          <h1 className="text-sm sm:text-2xl font-bold text-gray-300">Home /Study Distention/USA</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
