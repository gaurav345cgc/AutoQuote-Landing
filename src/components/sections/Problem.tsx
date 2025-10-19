import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileX, DollarSign, TrendingDown, Clock, AlertCircle } from "lucide-react";

const painPoints = [
  { icon: FileX, text: "Manual catalog lookups", color: "text-muted-foreground" },
  { icon: DollarSign, text: "Inconsistent pricing across systems", color: "text-muted-foreground" },
  { icon: TrendingDown, text: "Copy-paste errors", color: "text-muted-foreground" },
  { icon: Clock, text: "Slow responses lose deals", color: "text-muted-foreground" },
  { icon: AlertCircle, text: "No single source of truth", color: "text-muted-foreground" },
];

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Manual quoting slows teams down.
          </h2>
          <p className="text-xl text-muted-foreground">
            Your sales engineers aren't slow — your tools are.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                  <Icon className={`w-6 h-6 ${point.color}`} />
                </div>
                <p className="text-lg font-medium">{point.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problem;
