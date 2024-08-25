'use client';
import { BackgroundBeamsWithCollision } from '@/components/animated-ui/background-beams/bg-beams-with-collision';
import { TextGenerateEffect } from '@/components/animated-ui/text-generate/text-generate';
import { motion, useAnimate } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Providers from './providers';

export default function Home() {
  const router = useRouter();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    setTimeout(() => {
      animate(
        'div',
        {
          opacity: 0,
          y: -100,
          filter: 'blur(0px)',
        },
        {
          duration: 3,
        }
      );
    }, 3000);
    setTimeout(() => {
      router.push('/home');
    }, 4500);
  }, [scope.current]);

  const words = 'Hello! I am Ihill Dewpura';
  return (
    <main className="min-h-screen w-full">
      <Providers>
        <motion.div ref={scope}>
          <div>
            <BackgroundBeamsWithCollision className="min-h-screen">
              <div className="flex flex-col-reverse text-center md:block">
                <h1 className="text-[20px] md:text-[80px]">
                  Welcome to my portfolio
                </h1>
                <TextGenerateEffect
                  words={words}
                  className="text-[35px] md:text-[40px]"
                />
              </div>
            </BackgroundBeamsWithCollision>
          </div>
        </motion.div>
      </Providers>
    </main>
  );
}
