import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";


const projects = [
  {
    title: "Placement Readiness Platform",
    subtitle: "Voice-First AI Mock Interview System",
    screenshot: "/screenshots/placement-readiness-platform.png",
    bullets: [
      "Engineered an AI-powered interview platform that assesses student proficiency, identifies skill gaps, and provides structured placement pathways for 2,000–3,000 engineering candidates.",
      "Architected ultra-low latency interviews with real-time voice streaming and LLM-generated technical questions, reducing response latency by 85.7%.",
      "Implemented agentic workflows with Librosa-based communication analysis to generate personalized placement roadmaps with curated learning resources.",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "Groq AI", "Agentic AI"],
    github: "https://github.com/tamil-selvan-k/communication-readiness-platform",
    liveUrl: null,
    featured: true,
  },
  {
    title: "DocGen",
    subtitle: "AI-Powered Documentation Generator",
    screenshot: "/screenshots/docgen.png",
    bullets: [
      "Built a documentation automation SaaS that analyzes GitHub code changes and generates documentation updates using LLM.",
      "Established secure GitHub OAuth and GitHub App integration with repository-level authorization, webhook processing, and automated synchronization.",
      "Implemented an asynchronous documentation pipeline using Redis and BullMQ for code analysis, validation, and automated pull request generation.",
    ],
    tech: ["React 19", "TypeScript", "Node.js", "PostgreSQL", "Redis", "BullMQ", "Google Gemini"],
    github: "https://github.com/tamil-selvan-k/DocGen",
    liveUrl: "https://docgen-6.vercel.app",
    featured: false,
  },
  {
    title: "API Rate Limiter",
    subtitle: "Production-Ready API Gateway with Rate Limiting",
    screenshot: "/screenshots/api-rate-limiter.png",
    bullets: [
      "Built a production-grade API access control system on the Token Bucket algorithm with atomic Redis Lua scripting for race-condition-free rate enforcement.",
      "Designed a modular layered backend (repository/service/controller) with a dark-themed React dashboard for real-time usage visualization.",
      "Integrated a k6 load testing suite and stateless architecture to validate horizontal scalability under high-concurrency traffic.",
    ],
    tech: ["TypeScript", "Node.js", "Express", "Prisma", "Redis", "React"],
    github: "https://github.com/tamil-selvan-k/API-Gateway-Rate-Limiter",
    liveUrl: "https://gatezentry.vercel.app",
    featured: false,
  },
  {
    title: "QuiZz",
    subtitle: "Online Assessment Platform",
    screenshot: "/screenshots/quizz.png",
    bullets: [
      "Built a scalable quiz platform designed for schools and universities to conduct online assessments for any number of concurrent candidates.",
      "Implemented high-concurrency API design validated through stress testing and high-level system design (HLD) principles.",
      "Delivered a full MERN stack solution with real-time result tracking and session management.",
    ],
    tech: ["Stress-testing", "HLD", "React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/tamil-selvan-k/Quizz",
    liveUrl: "https://quizz-6.netlify.app/",
    featured: false,
  },
  {
    title: "Tekh-bot",
    subtitle: "AI-Powered Technical Learning Assistant",
    screenshot: "/screenshots/tekh-bot.png",
    bullets: [
      "Built an intelligent chatbot for technical education using advanced search, fuzzy matching, and Levenshtein distance algorithms for accurate query resolution.",
      "Architected a Flask backend with an API layer for retrieval, web search, and LLM orchestration.",
      "Delivered a responsive chat interface supporting learning, problem-solving, and career guidance across desktop and mobile.",
    ],
    tech: ["JavaScript", "Python", "Flask"],
    github: "https://github.com/tamil-selvan-k/Tekh-bot",
    liveUrl: "https://tamil-selvan-k.github.io/Tekh-bot/client",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-12">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                {/* Screenshot / placeholder */}
                {project.screenshot ? (
                  <div className={`overflow-hidden border-b border-border ${project.featured ? "h-72" : "h-44"}`}>
                    <img
                      src={project.screenshot}
                      alt={`${project.title} screenshot`}
                      className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${project.featured ? "object-contain object-top" : "object-cover object-top"}`}
                    />
                  </div>
                ) : (
                  <div className="h-44 border-b border-border bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/20 tracking-tight select-none">
                      {project.title.split(" ").map(w => w[0]).join("").slice(0, 3)}
                    </span>
                  </div>
                )}

                <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="heading-md group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-primary">{project.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`View ${project.title} live`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <ul className="space-y-1.5 mb-4">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
