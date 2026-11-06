import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy } from "lucide-react";

const certifications = [
  { title: "Redis Certified Developer Associate", issuer: "Redis", year: "2025" },
  { title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", issuer: "Oracle", year: "2025" },
];

const achievements = [
  { title: "Academic Excellence Award", description: "12th grade topper" },
  { title: "1st Place Coding Competition", description: "University-level, 1000+ participants" },
  { title: "GSSoC Mentor & Ambassador", description: "GirlScript Summer of Code — open source mentorship" },
  { title: "OSCI Campus Lead", description: "Open Source Connect India — campus community lead" },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2 className="heading-lg mb-4">Certifications & Achievements</h2>
            <p className="text-muted-foreground">Verified credentials and recognized accomplishments.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h3 className="heading-md mb-8">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    whileHover={{ y: -2 }}
                    transition={{ delay: index * 0.1, duration: 0.4, type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors duration-300"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer} · {cert.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="heading-md mb-8">Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    whileHover={{ y: -2 }}
                    transition={{ delay: index * 0.1, duration: 0.4, type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors duration-300"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Trophy className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
