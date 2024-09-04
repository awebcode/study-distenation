import Image from 'next/image';

const Hero = () => {
  return (
    <div className='py-8 my-2'>
     <Image height={1000} width={1000} src="/assets/hero/Banner.png" alt="Hero"  className="h-full w-full object-cover" />
    </div>
  );
};

export default Hero;
