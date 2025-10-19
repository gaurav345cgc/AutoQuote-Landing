import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Dock = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : 100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
    >
      <div className="pointer-events-auto bg-card/95 backdrop-blur-lg border border-border rounded-full shadow-2xl px-6 py-3 flex items-center gap-4">
        <p className="text-sm font-medium hidden sm:block">Ready to quote smarter?</p>
        <Button 
          variant="hero" 
          size="sm" 
          className="group cursor-pointer"
          onClick={() => window.open('https://auto-quote-frontend.vercel.app/', '_blank')}
        >
          <span>Request Demo</span>
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  );
};

export default Dock;
