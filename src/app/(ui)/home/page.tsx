'use client';
import Header from '@/components/header/header';
import { motion } from 'framer-motion';
import About from './_about/page';
import Entry from './_entry/page';
import { Meteors } from '@/components/animated-ui/meteors/meteors';
import { useEffect } from 'react';
import Experience from './_experience/page';
import Skills from './__skills/page';
export default function Home() {
  return (
    <>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        id={'entry'}
        className="flex min-h-screen w-full flex-col"
      >
        <Header />
        <Entry />
        <About />
        <Experience />
        <Skills />
      </motion.div>
      <Meteors number={20} className="hidden md:flex" />
    </>
  );
}
