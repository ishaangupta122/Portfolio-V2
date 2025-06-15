import { motion } from "framer-motion";

const ScrollAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: -20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}>
      {children}
    </motion.div>
  );
};

export { ScrollAnimation };
