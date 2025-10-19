import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, DollarSign, FileJson, Lock } from "lucide-react";

const capabilities = [
  {
    icon: Search,
    title: "ShapeSearch Engine",
    description: "Smart SKU discovery via geometry & context",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: DollarSign,
    title: "ERP-Linked Pricing",
    description: "Always current rates from your system",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: FileJson,
    title: "JSON/PDF Output",
    description: "Instant formatted quotes in any format",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "Run on your own infrastructure",
    color: "bg-accent/10 text-accent",
  },
];

const Capabilities = () => {
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
            Built for precision.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Powered by intelligence.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-xl group"
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${capability.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                    <p className="text-muted-foreground">{capability.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-lg font-medium text-muted-foreground">
            Every quote, consistent. Every number, verified.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;
