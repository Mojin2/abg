import { Bot } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/charinfo", label: "Mokoko" },
  { href: "/info", label: "Info" },
  { href: "/setting", label: "setting" },
];
export default function MobileNav() {
  return (
    <div className="p-6 w-full relative flex flex-col">
      <div className="flex items-center justify-center flex-col space-y-1">
        <div>
          <Bot stroke="white" size={52} />
        </div>
        <span className="font-extrabold text-3xl text-white text-center">
          MOKOKO WORLD
        </span>
      </div>
      <div className="w-full h-2 border-t-2 border-slate-100 py-3 my-2" />
      <div className="text-white font-bold text-xl space-y-2">
        {links.map((link) => (
          <Link href={link.href}>
            <div className="p-4 hover:bg-blue-[#244287b3] text-2xl py-2 rounded-md">
              <div>{link.label}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
