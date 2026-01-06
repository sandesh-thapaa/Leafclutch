import { motion } from "framer-motion";

interface StartingProps {
  pageName: string;
  srcImage: string;
}

const title = "Leafclutch Technologies Pvt. Ltd.";

export default function Starting({ pageName, srcImage }: StartingProps) {
  const heroBackground: React.CSSProperties = {
    backgroundImage: `linear-gradient(rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)), url(${srcImage})`,
  };

  return (
    <section
      className="w-full h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-center pt-10"
      style={heroBackground}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[#3AE39E] text-4xl md:text-5xl font-bold tracking-wide"
      >
        {title}
      </motion.h2>

      {/* Page Name */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mt-3 text-[#47C6B6] text-lg md:text-xl uppercase tracking-widest"
      >
        {pageName}
      </motion.h2>
    </section>
  );
}
