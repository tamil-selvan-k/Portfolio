import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const AnimatedStat = ({ end, suffix = "", decimals = 0, label }: { end: number; suffix?: string; decimals?: number; label: string }) => {
  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness: 60, damping: 18 });
  const display = useTransform(spring, v => decimals > 0 ? v.toFixed(decimals) + suffix : Math.round(v) + suffix);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) count.set(end);
  }, [isInView, count, end]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="text-center p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-default"
    >
      <motion.p className="text-2xl font-bold text-primary">{display}</motion.p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </motion.div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-12">About Me</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">MERN Stack developer</span> with a strong focus on React, Node.js, and backend scalability. I believe in writing clean, maintainable code that solves real problems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                As an <span className="text-foreground font-medium">open-source contributor</span>, I have hands-on experience exploring real-world repositories, understanding production code, and contributing improvements. This has shaped my understanding of software engineering best practices.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Through multiple internships, I've gained practical experience with <span className="text-foreground font-medium">cloud deployment and AWS services</span>. I'm a strong problem solver with competitive programming exposure, having solved 2000+ problems.
              </p>

              <p className="text-lg text-primary font-medium">
                I am eager to learn new technologies, improve continuously, and take ownership of real-world products.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-card border border-border h-full">
                <h3 className="font-semibold mb-6 text-foreground">At a Glance</h3>
                <div className="grid grid-cols-2 gap-4">
                  <AnimatedStat end={3} suffix="+" label="Internships" />
                  <AnimatedStat end={6} label="Projects" />
                  <AnimatedStat end={2000} suffix="+" label="Problems Solved" />
                  <AnimatedStat end={9.03} decimals={2} label="CGPA" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
