import { HoverEffect } from '@/components/animated-ui/hover-card/hover-card';
import { motion } from 'framer-motion';
export default function Skills() {
  const projects = [
    {
      title: 'React JS',
      description:
        'Developed and maintained dynamic, responsive web applications with an emphasis on performance and user experience.',
      link: 'https://react.dev/',
    },
    {
      title: 'Next JS',
      description:
        'Built server-side rendered applications with enhanced SEO and improved loading times, leveraging static site generation.',
      link: 'https://nextjs.org/',
    },
    {
      title: 'React Native',
      description:
        'Created cross-platform mobile applications with shared codebases, ensuring consistency across iOS and Android devices.',
      link: 'https://reactnative.dev/',
    },
    {
      title: 'Node JS',
      description:
        'Implemented server-side logic and APIs for scalable, high-performance web applications.',
      link: 'https://nodejs.org/en',
    },
    {
      title: 'Typescript',
      description:
        'Enhanced code quality and maintainability by introducing static typing in JavaScript projects.',
      link: 'https://www.typescriptlang.org/',
    },
    {
      title: 'Redux',
      description:
        'Managed complex state logic in large-scale applications, ensuring predictable behavior and easier debugging.',
      link: 'https://redux.js.org/',
    },
    {
      title: 'Socket.io',
      description:
        'Built real-time, bidirectional communication between clients and servers for chat applications and live updates.',
      link: 'https://socket.io/',
    },
    {
      title: 'CSS',
      description:
        'Styled web applications with custom layouts, animations, and responsive designs, ensuring a polished user interface.',
      link: 'https://devdocs.io/css/',
    },
    {
      title: 'Material UI',
      description:
        'Integrated Material Design components to create consistent, modern, and user-friendly interfaces.',
      link: 'https://mui.com/material-ui/',
    },
    {
      title: 'Tailwind CSS',
      description:
        'Utilized utility-first CSS to rapidly build custom designs without writing traditional CSS.',
      link: 'https://tailwindcss.com/',
    },
    {
      title: 'SQL',
      description:
        'Designed and managed relational databases, writing optimized queries for data retrieval and manipulation.',
      link: 'https://www.postgresql.org/docs/current/sql.html',
    },
    {
      title: 'NoSQL',
      description:
        'Worked with NoSQL databases to handle large volumes of unstructured data and provide high availability.',
      link: 'https://www.mongodb.com/docs/',
    },
    {
      title: 'Git',
      description:
        'Utilized Git for version control, managing code changes, and collaborating effectively with team members.',
      link: 'https://docs.github.com/en',
    },
    {
      title: 'Nest JS',
      description:
        'Developed robust, maintainable backend services with Nest JS, following a modular and testable architecture.',
      link: 'https://docs.nestjs.com/',
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
      <div>
        <HoverEffect items={projects} />
      </div>
    </motion.div>
  );
}
