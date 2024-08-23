import { motion } from 'framer-motion';
import { title } from 'process';

export default function Header() {
  const headers = [
    {
      title: 'About',
      route: '/about',
    },
    {
      title: 'Experience',
      route: '/experience',
    },
    {
      title: 'Work',
      route: '/work',
    },
    {
      title: 'Contact',
      route: '/contact',
    },
  ];
  return (
    <div className="flex w-full flex-row justify-between px-20 py-5">
      <h1 className="text-[30px] text-white">Sandushan</h1>
      <div className="flex flex-row items-center gap-5">
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
          >
            {header.title}
          </motion.h1>
        ))}
      </div>
    </div>
  );
}
