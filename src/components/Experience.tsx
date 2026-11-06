import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Development Engineer",
    company: "SODAK Technology",
    startDate: "Aug 2026",
    endDate: "Present",
    type: "Full-time",
    bullets: [
      "Architecting and developing sodakedutech.in as a production-grade dynamic full stack web application, built entirely from scratch using Next.js and PostgreSQL.",
      "Deployed on AWS Amplify with automated CI/CD pipelines, driving the full development lifecycle from database schema design through frontend delivery.",
      "Working within an Agile framework, independently owning end-to-end feature delivery on a live production system.",
    ],
    highlights: ["Next.js", "PostgreSQL", "AWS Amplify", "CI/CD", "Agile"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Klickkit",
    startDate: "Jun 2026",
    endDate: "Aug 2026",
    type: "Internship",
    bullets: [
      "Implemented lazy loading and optimized rendering, reducing page load time by 25%.",
      "Enhanced production databases and developed scalable, optimized backend services using Node.js and Express.",
      "Deployed applications to cloud infrastructure, gaining strong practical understanding of cloud environments and performance optimization.",
    ],
    highlights: ["Performance Optimization", "Node.js & Express", "React JS", "Cloud Deployment", "Database Design"],
  },
  {
    title: "Software Developer Intern",
    company: "Vittae Money",
    startDate: "Nov 2025",
    endDate: "Dec 2025",
    type: "Internship",
    bullets: [
      "Developed responsive user interfaces using React and Nuxt.js for a fintech platform.",
      "Built reusable UI components to improve maintainability and development efficiency.",
      "Integrated frontend components with backend APIs for seamless data flow.",
    ],
    highlights: ["React", "Nuxt.js", "Component Architecture", "API Integration", "Fintech"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-12">Experience</h2>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border origin-top"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative pl-12 md:pl-20 group"
                >
                  {/* Timeline dot + glow ring */}
                  <div className="absolute left-2 md:left-6 top-2">
                    <div className="absolute inset-0 rounded-full bg-primary/25 scale-0 group-hover:scale-[2.8] transition-transform duration-300 ease-out" />
                    <motion.div
                      className="relative w-4 h-4 rounded-full bg-primary border-4 border-background group-hover:shadow-[0_0_10px_2px_hsl(217_91%_60%_/_0.5)] transition-shadow duration-300"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: index * 0.15 + 0.4, type: "spring", stiffness: 400, damping: 15 }}
                    />
                  </div>

                  <div className="p-6 rounded-xl bg-card border border-border group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{exp.company}</span>
                      <span className="text-muted-foreground text-xs">·</span>
                      <span className="text-xs text-muted-foreground">{exp.startDate} – {exp.endDate}</span>
                      <span className="ml-auto px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="heading-md mb-3">{exp.title}</h3>

                    <ul className="space-y-1.5 mb-4">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span key={highlight} className="skill-badge text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
