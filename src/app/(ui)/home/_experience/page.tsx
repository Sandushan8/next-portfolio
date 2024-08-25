import { Timeline } from '@/components/animated-ui/timeline/timeline';
import { motion } from 'framer-motion';
export default function Experience() {
  const data = [
    {
      title: '2024 August',
      content: (
        <div>
          <p className="mb-8 text-[18px] font-normal text-white md:text-[18px]">
            Software Engineer
          </p>
        </div>
      ),
    },
    {
      title: '2023 March',
      content: (
        <div>
          <p className="mb-8 text-[18px] font-normal text-white md:text-[18px]">
            Associate Software Engineer
          </p>
        </div>
      ),
    },
    {
      title: '2022 September',
      content: (
        <div>
          <p className="mb-8 text-[18px] font-normal text-white md:text-[18px]">
            Intern Software Engineer
          </p>
        </div>
      ),
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="experience"
      className="flex min-h-screen w-full flex-col px-5 pb-[200px] pt-[50px] md:px-[90px] lg:px-[160px]"
    >
      <Timeline data={data} />
    </motion.div>
  );
}
