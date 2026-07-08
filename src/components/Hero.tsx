import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, CloudDownload } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const heroTooltipClassName =
  "rounded-sm border border-white/10 bg-[#2b2b2b] px-3 py-1.5 text-xs font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 md:py-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center md:text-left flex flex-col items-center md:items-start order-2 md:order-1"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Open to opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="heading-xl mb-4"
            >
              Tamil Selvan K
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-6"
            >
              Full Stack Developer <span className="text-primary">(MERN)</span>
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-muted-foreground/80 max-w-2xl mb-8 leading-relaxed"
            >
              Full Stack Developer passionate about building scalable, accessible, and high-performance web applications. Eager to learn, grow, and solve real-world problems.
            </motion.p>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="text-sm text-muted-foreground mb-8"
            >
              📍 Chennai, Tamil Nadu, India
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center justify-center gap-4 w-full"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com/tamil-selvan-k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top" className={heroTooltipClassName}>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="./TamilSelvan_Resume.pdf" 
                    download={'TamilSelvan_Resume.pdf'}
                    target="_blank"
                    className="icon-link"
                    aria-label="Download Resume"
                  >
                    <CloudDownload className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top" className={heroTooltipClassName}>
                  <p>Download Resume</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.linkedin.com/in/tamilselvan2007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top" className={heroTooltipClassName}>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="#contact"
                    className="icon-link"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top" className={heroTooltipClassName}>
                  <p>Contact</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center order-1 md:order-2"
          >
            <div className="relative group w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Dynamic Glow Effect */}
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-60 group-hover:opacity-100 group-hover:bg-primary/30 transition-all duration-700" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500" />
              
              {/* Image Container */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 bg-card/50 backdrop-blur-sm shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
                <img
                  src="/profile.webp"
                  alt="Tamil Selvan K"
                  className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Accent element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
