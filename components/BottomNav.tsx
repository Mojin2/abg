"use client";
import { cls } from "@/libs/client/utils";
import {
  AlignJustify,
  BellIcon,
  Bot,
  Globe,
  Info,
  Laugh,
  Newspaper,
  Settings,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AvatarLogo from "./AvatarLogo";
import MobileNav from "./MobileNav";
import TooltipInfo from "./Tooltip";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/todos", label: "Mokoko" },
  { href: "/info", label: "Info" },
  { href: "/setting", label: "setting" },
];
export default function BottomNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* bottom nav */}
      <div className="flex w-full justify-center bottom-0 bg-slate-200 h-20 fixed">
        <div className=" bg-[#244287b3] h-20 bottom-0 w-full md:w-[90%] md:rounded-t-[30px]">
          <div className="w-full flex flex-row items-center">
            <div className="w-40 flex text-white font-extrabold h-20 rounded-t-[30px] items-center justify-center flex-col text-sm">
              <Bot stroke="white" fill="#244287b3" size="40px" />
              <div>MOKOKO</div>
            </div>
            <div className="bg-[#244287d9] h-20 bottom-0 w-full md:rounded-t-[30px] flex items-center">
              <div className="w-full flex justify-end md:justify-between px-6">
                <div className="p-3 rounded-md hover:bg-blue-[#244287b3] hidden md:flex">
                  <BellIcon stroke="white" fill="#244287b3" size="32px" />
                </div>
                <div className=" flex-row space-x-2 hidden md:flex">
                  {links.map((link, idx) => (
                    <Link className="relative" href={link.href} key={link.href}>
                      {link.href === pathname && (
                        <motion.div
                          layoutId="select"
                          className="absolute m-auto left-0 bottom-0 w-full h-[4px] bg-emerald-600 rounded-md"
                        />
                      )}
                      <TooltipInfo label={link.label}>
                        <div
                          className={cls(
                            "hover:bg-blue-[#244287b3] p-3 rounded-md"
                          )}
                        >
                          {idx === 0 ? (
                            <Newspaper
                              stroke="white"
                              fill="#244287b3"
                              size="32px"
                            />
                          ) : idx === 1 ? (
                            <Laugh
                              stroke="white"
                              fill="#244287b3"
                              size="32px"
                            />
                          ) : idx === 2 ? (
                            <Info stroke="white" fill="#244287b3" size="32px" />
                          ) : idx === 3 ? (
                            <Settings
                              stroke="white"
                              fill="#244287b3"
                              size="32px"
                            />
                          ) : null}
                        </div>
                      </TooltipInfo>
                    </Link>
                  ))}
                </div>
                <div className="flex flex-row space-x-1">
                  <div className="hover:bg-blue-[#244287b3] p-3 rounded-md">
                    <Globe stroke="white" fill="#244287b3" size="32px" />
                  </div>
                  <div className="hover:bg-blue-[#244287b3] p-3 rounded-md">
                    <AvatarLogo />
                  </div>
                  {open ? (
                    <div className="hover:bg-blue-[#244287b3] p-3 rounded-md md:hidden">
                      <X
                        stroke="white"
                        fill="#244287b3"
                        size="32px"
                        onClick={() => setOpen(true)}
                      />
                    </div>
                  ) : (
                    <div className="hover:bg-blue-[#244287b3] p-3 rounded-md md:hidden">
                      <AlignJustify
                        stroke="white"
                        fill="#244287b3"
                        size="32px"
                        onClick={() => setOpen(true)}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile side nav */}
      <div>
        {open ? (
          <div
            className="absolute w-full h-full bg-slate-700 top-0 left-0 opacity-50"
            onClick={() => setOpen(false)}
          />
        ) : null}
        <div
          className={cls(
            "flex absolute top-0 w-64 h-full bg-[#1cbd68] opacity-100 transition ease-out duration-500",
            open ? "translate-x-0" : "translate-x-[-110%]"
          )}
        >
          {open ? <MobileNav /> : null}
        </div>
      </div>
    </>
  );
}

// pathname === link.href ? "bg-emerald-400" : ""
