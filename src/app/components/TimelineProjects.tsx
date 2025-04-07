"use client";

import { motion } from "framer-motion";
import { ProjectsType } from "../types/ProjectExp";



type Props = {
  content: ProjectsType[] ;
}

const TimelineProjects = ({content: experiences}:Props) => {
  return (
    <div className="flex flex-col items-center">
      {experiences.map((exp, index) => (
       
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="flex items-center w-full max-w-2xl mb-6"
        >
          <div className="w-1/3 text-right pr-4">
            <h2 className="text-xl font-bold">{exp.year}</h2>
          </div>
          <div className="w-1 bg-gray-400 h-16 mx-4"></div>
          <div className="w-2/3">
          <a href={exp.link}><h3 className="text-lg font-semibold">{exp.title}</h3>        </a>
            <p className="text-gray-600">{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TimelineProjects;
