import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="heading-lg mb-12">Education</h2>
          
          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="heading-md mb-2">B.Tech - Information Technology</h3>
            <p className="text-lg text-muted-foreground mb-4">
              St. Joseph's Institute of Technology, Chennai
            </p>
            
            <div className="flex items-center justify-center gap-8 text-sm">
              <div>
                <span className="text-muted-foreground">CGPA</span>
                <p className="text-2xl font-bold text-primary">9.03</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <span className="text-muted-foreground">Duration</span>
                <p className="text-lg font-medium">2024 - 2028</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;