import { HoverEffect } from '@/components/animated-ui/hover-card/hover-card';
import { motion } from 'framer-motion';
export default function Skills() {
  const projects = [
    {
      title: 'Stripe',
      description:
        'A technology company that builds economic infrastructure for the internet.',
      link: 'https://stripe.com',
    },
    {
      title: 'Netflix',
      description:
        'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
      link: 'https://netflix.com',
    },
    {
      title: 'Google',
      description:
        'A multinational technology company that specializes in Internet-related services and products.',
      link: 'https://google.com',
    },
    {
      title: 'Meta',
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: 'https://meta.com',
    },
    {
      title: 'Amazon',
      description:
        'A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
      link: 'https://amazon.com',
    },
    {
      title: 'Microsoft',
      description:
        'A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
      link: 'https://microsoft.com',
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="skills"
      className="flex min-h-screen w-full flex-col px-5 pt-[50px] md:px-[90px] lg:px-[160px]"
    >
      <h1 className="text-center text-[30px] text-white md:text-left md:text-[40px]">
        Skills
      </h1>
      <div className="pt-[150px]">
        <HoverEffect items={projects} />
      </div>
    </motion.div>
  );
}
