import { timeDifference } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="flex min-h-screen w-full flex-col pt-[50px] md:px-[160px]"
    >
      <h1 className="text-center text-[30px] text-white md:text-left md:text-[40px]">
        About Me
      </h1>
      <div className="flex h-full w-full flex-col-reverse md:flex-row">
        <div className="h-full px-5 pt-10 text-[20px] text-slate-200 md:px-0">
          <p className="hidden text-[18px] md:block md:text-[22px]">
            Hi there!
          </p>
          <p className="hidden pt-2 text-[18px] md:block md:text-[22px]">
            I'm Ihill Dewpura
          </p>
          <p className="pt-2 text-[18px] md:hidden">
            Hi there! I'm Ihill Dewpura
          </p>
          <p className="pt-2 text-[18px] md:text-[22px]">
            A curious Full Stack Developer who loves crafting digital wonders
            for the web.
          </p>
          <p className="pt-2 text-[18px] md:text-[22px]">{`I have been working with web technologies for ${timeDifference()}`}</p>
          <div>
            <p className="pt-2 text-[18px] md:pt-5 md:text-[22px]">
              Lately, I’ve been jamming with these cool technologies
            </p>
            <div className="flex flex-row p-2 pt-5 md:p-5">
              <ul className="flex w-1/2 flex-col gap-4 pl-5 md:pl-10">
                <li className="flex flex-row items-center gap-2 text-[16px] md:text-[21px]">
                  <div className="h-[8px] w-[8px] bg-cyan-300" />
                  JavaScript (ES6+)
                </li>
                <li className="flex flex-row items-center gap-2 text-[16px] md:text-[21px]">
                  <div className="h-[8px] w-[8px] bg-cyan-300" />
                  TypeScript
                </li>
                <li className="flex flex-row items-center gap-2 text-[16px] md:text-[21px]">
                  <div className="h-[8px] w-[8px] bg-cyan-300" />
                  React
                </li>
                <li className="flex flex-row items-center gap-2 text-[16px] md:text-[21px]">
                  <div className="h-[8px] w-[8px] bg-cyan-300" />
                  Next.js
                </li>
                <li className="flex flex-row items-center gap-2 text-[16px] md:text-[21px]">
                  <div className="h-[8px] w-[8px] bg-cyan-300" />
                  Angular
                </li>
                <li className="flex flex-row items-center gap-2 text-[16px] md:text-[21px]">
                  <div className="h-[8px] w-[8px] bg-cyan-300" />
                  Wordpress
                </li>
                <li className="flex flex-row items-center gap-2 text-[16px] md:text-[21px]">
                  <div className="h-[8px] w-[8px] bg-cyan-300" />
                  Tailwind CSS
                </li>
              </ul>
              <ul className="flex w-1/2 flex-col gap-4 pl-10">
                <li className="flex flex-row items-center gap-2 text-[16px] md:text-[21px]">
                  <div className="h-[8px] w-[8px] bg-cyan-300" />
                  NodeJs
                </li>
                <li className="flex flex-row items-center gap-2 text-[16px] md:text-[21px]">
                  <div className="h-[8px] w-[8px] bg-cyan-300" />
                  ExpressJs
                </li>
                <li className="flex flex-row items-center gap-2 text-[16px] md:text-[21px]">
                  <div className="h-[8px] w-[8px] bg-cyan-300" />
                  NestJS
                </li>
                <li className="flex flex-row items-center gap-2 text-[16px] md:text-[21px]">
                  <div className="h-[8px] w-[8px] bg-cyan-300" />
                  Postgres
                </li>
                <li className="flex flex-row items-center gap-2 text-[16px] md:text-[21px]">
                  <div className="h-[8px] w-[8px] bg-cyan-300" />
                  MongoDb
                </li>
                <li className="flex flex-row items-center gap-2 text-[16px] md:text-[21px]">
                  <div className="h-[8px] w-[8px] bg-cyan-300" />
                  Git
                </li>
                <li className="flex flex-row items-center gap-2 text-[16px] md:text-[21px]">
                  <div className="h-[8px] w-[8px] bg-cyan-300" />
                  AWS
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full p-[20px] pt-[90px] md:w-1/2 md:p-10">
          <Image
            src={'/profile.jpg'}
            alt="profile"
            width={1000}
            height={1000}
            className="h-[400px] w-full rounded-3xl bg-cyan-200 md:h-[600px]"
          />
        </div>
      </div>
    </motion.div>
  );
}
