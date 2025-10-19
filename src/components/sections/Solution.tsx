import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, Brain, CheckCircle2, FileText } from "lucide-react";

const steps = [
  { icon: Upload, title: "Input", description: "Enter specs or upload BOM" },
  { icon: Brain, title: "AI Reasoning", description: "Context-aware matching" },
  { icon: CheckCircle2, title: "Validation", description: "ERP-linked pricing" },
  { icon: FileText, title: "Quote Ready", description: "PDF/JSON output" },
];

const Solution = () => {
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
            Turn your product data into a{" "}
            <span className="text-primary">digital sales engineer</span>.
          </h2>
          <p className="text-xl text-muted-foreground">
            AutoQuote AI understands specs, validates options, and builds quotes instantly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solution;
