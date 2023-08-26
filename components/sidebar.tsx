"use client";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
  MdOutlineLogin,
} from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiGame, BiMessageSquareDots, BiSolidContact } from "react-icons/bi";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { signIn, signOut, useSession } from "next-auth/react";
import { sign } from "crypto";
import { usePathname } from "next/navigation";
import { cls } from "@/libs/client/utils";
function SideNavbar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="text-slate-600 z-20 absolute top-3 right-3 inline-flex items-center peer justify-center rounded-md p-2  hover:bg-cyan-600 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 h-screen bg-slate-100 z-20 fixed top-0 -left-96 md:left-0 w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-500 border-r-2 border-slate-300">
          <div className="flex flex-col justify-start item-center">
            <Link href="/">
              <h1 className=" text-base text-center cursor-pointer font-bold text-slate-600 border-b border-gray-100 pb-4 w-full">
                Virtual Dashboard
              </h1>
            </Link>
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="text-slate-400 text-xs pl-2 py-1 pt-2">MAIN</div>
              <Link href="/">
                <div
                  className={cls(
                    "flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-cyan-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto",
                    pathname === "/" ? "bg-cyan-600" : ""
                  )}
                >
                  <MdOutlineSpaceDashboard
                    className={cls(
                      "text-2xl group-hover:text-slate-100",
                      pathname === "/" ? "text-slate-100" : "text-slate-600"
                    )}
                  />
                  <h3
                    className={cls(
                      "text-base group-hover:text-slate-100 font-semibold sm:",
                      pathname === "/" ? "text-slate-100" : "text-slate-600"
                    )}
                  >
                    Home
                  </h3>
                </div>
              </Link>
              <Link href="/profile">
                <div
                  className={cls(
                    "flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-cyan-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto",
                    pathname === "/profile" ? "bg-cyan-600" : ""
                  )}
                >
                  <CgProfile
                    className={cls(
                      "text-2xl group-hover:text-slate-100",
                      pathname === "/profile"
                        ? "text-slate-100"
                        : "text-slate-600"
                    )}
                  />
                  <h3
                    className={cls(
                      "text-base  group-hover:text-slate-100 font-semibold ",
                      pathname === "/profile"
                        ? "text-slate-100"
                        : "text-slate-600"
                    )}
                  >
                    Profile
                  </h3>
                </div>
              </Link>
              <div className="text-slate-400 text-xs pl-2 py-1 pt-2">LISTS</div>
              <Link href="/charinfo">
                <div
                  className={cls(
                    "flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-cyan-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto",
                    pathname === "/charinfo" ? "bg-cyan-600" : ""
                  )}
                >
                  <BiGame
                    className={cls(
                      "text-2xl group-hover:text-slate-100",
                      pathname === "/charinfo"
                        ? "text-slate-100"
                        : "text-slate-600"
                    )}
                  />
                  <h3
                    className={cls(
                      "text-base  group-hover:text-slate-100 font-semibold ",
                      pathname === "/charinfo"
                        ? "text-slate-100"
                        : "text-slate-600"
                    )}
                  >
                    Game
                  </h3>
                </div>
              </Link>

              {/* <div className="text-slate-400 text-xs pl-2 py-1 pt-2">
                MAINTENANCE
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-cyan-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineIntegrationInstructions className="text-2xl text-slate-600 group-hover:text-slate-100 " />
                <h3 className="text-base text-slate-600 group-hover:text-slate-100 font-semibold ">
                  Integration
                </h3>
              </div> */}
            </div>
            {/* setting  */}
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-cyan-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-slate-600 group-hover:text-slate-100 " />
                <h3 className="text-base text-slate-600 group-hover:text-slate-100 font-semibold ">
                  Settings
                </h3>
              </div>
              <Link href="/contact">
                <div
                  className={cls(
                    "flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-cyan-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto",
                    pathname === "/contact" ? "bg-cyan-600" : ""
                  )}
                >
                  <BiSolidContact
                    className={cls(
                      "text-2xl group-hover:text-slate-100",
                      pathname === "/contact"
                        ? "text-slate-100"
                        : "text-slate-600"
                    )}
                  />
                  <h3
                    className={cls(
                      "text-base  group-hover:text-slate-100 font-semibold ",
                      pathname === "/contact"
                        ? "text-slate-100"
                        : "text-slate-600"
                    )}
                  >
                    Contact
                  </h3>
                </div>
              </Link>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-cyan-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineMoreHoriz className="text-2xl text-slate-600 group-hover:text-slate-100 " />
                <h3 className="text-base text-slate-600 group-hover:text-slate-100 font-semibold ">
                  More
                </h3>
              </div>
            </div>
            {/* Login & Logout */}
            <div className=" my-4">
              {session ? (
                <div
                  onClick={() => signOut()}
                  className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-cyan-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
                >
                  <MdOutlineLogout className="text-2xl text-slate-600 group-hover:text-slate-100 " />
                  <h3 className="text-base text-slate-600 group-hover:text-slate-100 font-semibold ">
                    Logout
                  </h3>
                </div>
              ) : (
                <div
                  onClick={() => signIn()}
                  className="flex mb-2 justify-start items-center gap-4 pl-5 border border-slate-300  hover:bg-cyan-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
                >
                  <MdOutlineLogin className="text-2xl text-slate-600 group-hover:text-slate-100 " />
                  <h3 className="text-base text-slate-600 group-hover:text-slate-100 font-semibold ">
                    Login
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
