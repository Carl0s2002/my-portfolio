"use client";

import { motion } from "framer-motion";

const experiences = [
  { year: "2022-2024", title: "Codespring Mentorship Program", description: "I signed up for the mentorship programme to gain insight into how the technologies I learned about at university can be applied into well thought out projects. I also learned about the essentials of teamwork, communication and perseverency." },
  { year: "2024", title: "Codespring Internship", description: "I got the chance to join as an intern during the summer. In 10 weeks I learned to use React-Native, Firebase as a backend, git for project management, and my collegue and I followed the Agile workflow. It was a short, but effective insight into the life of a programmer. " },
  { year: "2024", title: "Scientific Student Conference", description: "I didn’t miss the opportunity to present my work at this conference. Thanks to all the other times I held a presentation, I feel like I’ve gotten better at it. It paid off because my collegue and I won a special prize for the presentation afterwards." },
  { year: "2024", title: "Reea Internship", description: "In the two weeks, I had available, I created a weather app project using Flutter and Dart programming language. It was a great learning experience, thanks to the two mentors I had during this time." }
];

const Timeline = () => {
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
            <h3 className="text-lg font-semibold">{exp.title}</h3>
            <p className="text-gray-600">{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
