import { useEffect } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      onComplete();
    }, 900);

    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background px-6"
    >
      <div className="text-center">
        <div className="mx-auto mb-6 h-12 w-12 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          <span className="text-gradient">internetify</span>
          <span className="text-foreground">.io</span>
        </h1>
        <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Loading experience
        </p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
