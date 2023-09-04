"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = {
    // type: "spring",
    // damping: 20,
    // stiffness: 100,
    duration: 0.4,
  };
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{}}
        transition={config}
        className="h-screen w-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
