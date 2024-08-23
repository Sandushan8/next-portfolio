'use client';
import Header from '@/components/header/header';
import { motion, useAnimate } from 'framer-motion';
import { useEffect } from 'react';
export default function Home() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="flex min-h-screen w-full flex-col"
    >
      <Header />
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-1 items-center px-20"
      >
        <div>
          <h1 className="text-[100px] text-white">Full-Stack Developer</h1>
          <h1 className="pt--10 text-[30px] text-white">
            Turning coffee into code since 2021 ☕
          </h1>
        </div>
      </motion.div>
    </motion.div>
  );
}
