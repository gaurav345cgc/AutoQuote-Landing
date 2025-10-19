import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const metrics = [
  {
    category: "Quote Time",
    before: "25-30 min",
    after: "10 seconds",
  },
  {
    category: "Error Rate",
    before: "15% manual errors",
    after: "0 errors",
  },
  {
    category: "Tools Used",
    before: "5-6 tools",
    after: "1 platform",
  },
];

const Impact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Before & After AutoQuote AI
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center p-6 rounded-xl bg-card border border-border"
            >
              <div className="text-center md:text-left">
                <p className="text-sm font-medium text-muted-foreground mb-1">Category</p>
                <p className="text-lg font-bold">{metric.category}</p>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Before</p>
                  <p className="text-lg font-medium text-destructive line-through">{metric.before}</p>
                </div>
                <ArrowRight className="w-6 h-6 text-primary flex-shrink-0" />
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">After</p>
                  <p className="text-lg font-bold text-accent">{metric.after}</p>
                </div>
              </div>

              <div className="hidden md:block" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-block px-8 py-4 rounded-xl bg-accent/10 border border-accent/20">
            <p className="text-2xl font-bold text-accent">
              Time-to-Quote &lt; 10 Seconds
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
