import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function AvailabilityStatus() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const IST = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata"
      });
      setCurrentTime(IST);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 text-sm font-body text-[#b3b3b3] whitespace-nowrap">
      <div className="relative">
        <motion.div
          className="w-2 h-2 bg-green-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="flex items-center gap-2 md:hidden text-xs font-light">
        <span>India Based</span>
        <span>•</span>
        <span>Available everywhere</span>
        <span>•</span>
        <span>{currentTime}</span>
      </div>

      <div className="hidden md:flex items-center gap-2">
        <span>Available now</span>
        <span>•</span>
        <span>India</span>
        <span>•</span>
        <span>{currentTime}</span>
        <span>•</span>
        <span>Global projects welcome</span>
      </div>
    </div>
  );
}
