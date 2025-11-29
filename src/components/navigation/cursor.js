import { motion } from "framer-motion";

export const Cursor = ({ position }) => {
    return (
        <motion.li
            initial={false}
            animate={{
                ...position,
            }}
            transition={{
                type: "spring",
                stiffness: 350,
                damping: 25,
            }}
            className="absolute z-0 h-[calc(100%-16px)] rounded-full cursor-glass-effect"
            style={{
                backdropFilter: "blur(10px)",
            }}
        />
    );
};