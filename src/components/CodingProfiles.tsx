import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, ExternalLink } from "lucide-react";

const profiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/tamil_123",
    color: "#FFA116",
  },
  {
    name: "AtCoder",
    url: "https://atcoder.jp/users/tamildev",
    color: "#A0A0A0",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/Tamil_Selvan_K",
    color: "#1F8ACB",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/tamilselvan7",
    color: "#00EA64",
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/profile/tamil2007",
    color: "#2F8D46",
  },
];

const CodingProfiles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="coding" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4">Competitive Programming</h2>
          <p className="text-muted-foreground mb-12">
            Active problem solver with 2000+ problems solved across platforms
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {profiles.map((profile, index) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                style={{ borderLeftColor: profile.color, borderLeftWidth: '3px' }}
                className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <Code className="w-5 h-5" style={{ color: profile.color }} />
                <span className="font-medium">{profile.name}</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;