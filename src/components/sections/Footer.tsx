import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>by</span>
            <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CognixAI Labs
            </span>
          </div>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AutoQuote AI. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
