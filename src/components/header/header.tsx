import { motion } from 'framer-motion';
import { title } from 'process';

export default function Header() {
  const headers = [
    {
      title: 'About',
      route: '/about',
      handleScroll: () => handleScroll('about'),
    },
    {
      title: 'Experience',
      route: '/experience',
      handleScroll: () => handleScroll('experience'),
    },
    {
      title: 'Skills',
      route: '/skills',
      handleScroll: () => handleScroll('skills'),
    },
    {
      title: 'Contact',
      route: '/contact',
      handleScroll: () => handleScroll('contact'),
    },
  ];
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className="top-0 z-50 flex w-full justify-center bg-black py-5 md:flex-row md:justify-between md:px-[160px]"
      style={{
        position: 'sticky',
      }}
    >
      <motion.h1
        whileHover={{
          color: 'cyan',
          scale: 1.1,
          transition: { duration: 0.5 },
          cursor: 'pointer',
        }}
        className="text-[30px] text-white"
        onClick={() => handleScroll('entry')}
      >
        Ihill Dewpura
      </motion.h1>
      <div className="hidden flex-row items-center gap-5 md:flex">
        {headers.map((header) => (
          <motion.h1
            key={header.title}
            whileHover={{
              scale: 1.1,
              rotate: -2,
              y: -2,
              transition: { duration: 0.3 },
            }}
            className="text-[20px] text-white hover:cursor-pointer hover:text-cyan-300"
            onClick={header.handleScroll}
          >
            {header.title}
          </motion.h1>
        ))}
      </div>
    </div>
  );
}
