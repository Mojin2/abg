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

export default function BottomNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden">
      {/* bottom nav */}
      <div className="flex w-full justify-center shadow relative">
        <div className=" bg-[#20d274] h-20 fixed bottom-0 w-full md:w-[90%] md:rounded-t-[30px]">
          <div className="w-full flex flex-row items-center">
            <div className="w-40 flex text-white font-extrabold h-20 rounded-t-[30px] items-center justify-center flex-col text-sm">
              <Bot stroke="white" fill="#20d274" size="40px" />
              <div>MOKOKO</div>
            </div>
            <div className="bg-[#1cbd68] h-20 bottom-0 w-full md:rounded-t-[30px] flex items-center">
              <div className="w-full flex justify-end md:justify-between px-6">
                <div className="p-3 rounded-md hover:bg-emerald-400 hidden md:flex">
                  <BellIcon stroke="white" fill="#20d274" size="32px" />
                </div>
                <div className=" flex-row space-x-2 hidden md:flex">
                  <Link href="/">
                    <TooltipInfo label="Home">
                      <div
                        className={cls(
                          "hover:bg-emerald-400 p-3 rounded-md",
                          pathname === "/" ? "bg-emerald-400" : ""
                        )}
                      >
                        <Newspaper stroke="white" fill="#20d274" size="32px" />
                      </div>
                    </TooltipInfo>
                  </Link>
                  <Link href="/charinfo">
                    <TooltipInfo label="Mokoko">
                      <div
                        className={cls(
                          "hover:bg-emerald-400 p-3 rounded-md",
                          pathname === "/charinfo" ? "bg-emerald-400" : ""
                        )}
                      >
                        <Laugh stroke="white" fill="#20d274" size="32px" />
                      </div>
                    </TooltipInfo>
                  </Link>
                  <Link href="/info">
                    <TooltipInfo label="Info">
                      <div
                        className={cls(
                          "hover:bg-emerald-400 p-3 rounded-md",
                          pathname === "/info" ? "bg-emerald-400" : ""
                        )}
                      >
                        <Info stroke="white" fill="#20d274" size="32px" />
                      </div>
                    </TooltipInfo>
                  </Link>
                  <Link href="/setting">
                    <TooltipInfo label="Setting">
                      <div
                        className={cls(
                          "hover:bg-emerald-400 p-3 rounded-md",
                          pathname === "/setting" ? "bg-emerald-400" : ""
                        )}
                      >
                        <Settings stroke="white" fill="#20d274" size="32px" />
                      </div>
                    </TooltipInfo>
                  </Link>
                </div>
                <div className="flex flex-row space-x-1">
                  <div className="hover:bg-emerald-400 p-3 rounded-md">
                    <Globe stroke="white" fill="#20d274" size="32px" />
                  </div>
                  <div className="hover:bg-emerald-400 p-3 rounded-md">
                    <AvatarLogo />
                  </div>
                  {open ? (
                    <div className="hover:bg-emerald-400 p-3 rounded-md md:hidden">
                      <X
                        stroke="white"
                        fill="#20d274"
                        size="32px"
                        onClick={() => setOpen(true)}
                      />
                    </div>
                  ) : (
                    <div className="hover:bg-emerald-400 p-3 rounded-md md:hidden">
                      <AlignJustify
                        stroke="white"
                        fill="#20d274"
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
      <>
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
          <MobileNav />
        </div>
      </>
    </div>
  );
}
