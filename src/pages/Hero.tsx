import Image from 'next/image';
// import TextLoop from 'react-text-loop';
import logo from '../assets/profile.jpg';

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="mx-24 grid grid-cols-2 gap-4 ">
      <div className="mt-24">
        <h4>Welcome, I&apos;m</h4>
        <h1 className="text-4xl font-bold">Samuel Hadush</h1>
        <div className="text-sm">Full stack engineer</div>
        {/* <TextLoop>
          <span> Web Developer.</span>
          <span> Engineer.</span>
          <span> Designer.</span>
        </TextLoop> */}
        {/* Add Space between  introduction and bio */}
        <div className="my-12">
          {/* good bio  */}
          <p>
            {' '}
            I&apos;m Senior Full Stack Engineer with passion for web app. add
            something more with break line for aesthetics.{' '}
          </p>
        </div>
        <div>{/* May be Add Resume Downloader here. */}</div>
        <div>
          <button className=" h-12 rounded-md bg-sky-700 px-6 hover:cursor-pointer hover:bg-sky-600">
            <span className="font-medium">Hire Me!</span>
          </button>
        </div>
        {/* Call to action / Hire me */}
        {/* Social media [github, linkedin, twitter, etc] */}
        <div className="my-4 flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 hover:cursor-pointer hover:bg-gray-700 ">
            <span className="text-xs text-gray-400">GitHub</span>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 hover:cursor-pointer hover:bg-gray-700 ">
            <span className="text-xs text-gray-400">LinkedIn</span>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 hover:cursor-pointer hover:bg-gray-700 ">
            <span className="text-xs text-gray-400">Twitter</span>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 hover:cursor-pointer hover:bg-gray-700 ">
            <span className="text-xs text-gray-400">Other</span>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center ">
        <div className="flex h-96 w-96 items-center justify-center rounded-full bg-[#1a1c23a0]">
          <div className="flex h-64 w-64 items-center justify-center rounded-full bg-[#1A1C23]">
            <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gray-600 ">
              {/* profile */}
              {/* <Image src={logo} alt="my logo" height={120} width={120} /> */}
              {/* <div className="relative mt-3 h-36 w-36 rounded-full"> */}
              <Image
                src={logo}
                alt="profile"
                layout="fill"
                objectFit="cover"
                className=" rounded-full"
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
