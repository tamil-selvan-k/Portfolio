import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Server, Database, Cloud, Wrench, Code2 } from "lucide-react";
import type React from "react";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Database,
  Cloud,
  Wrench,
  Code2,
};

const skillCategories = [
  {
    title: "Frontend",
    icon: "Monitor",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Responsive UI", "Accessibility"],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: ["AWS (EC2, S3, Amplify)", "AWS Security (IAM)", "Docker Basics", "Linux Basics"],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    title: "Languages",
    icon: "Code2",
    skills: ["Java", "C++", "TypeScript"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-12">Skills</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category) => {
              const CategoryIcon = iconMap[category.icon];
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <CategoryIcon className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-primary">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
