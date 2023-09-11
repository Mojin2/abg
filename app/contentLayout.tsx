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
    duration: 0.3,
  };
  const pathname = usePathname();
  return (
    <div className="flex w-[80%] mx-auto h-full pt-8 items-center">
      <motion.div
        key={pathname}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{}}
        transition={config}
        className=""
      >
        {children}
      </motion.div>
    </div>
  );
}
