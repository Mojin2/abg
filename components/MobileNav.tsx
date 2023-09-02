import { Bot } from "lucide-react";
import Link from "next/link";

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
        <Link href="/">
          <div className="p-4 hover:bg-emerald-400 text-2xl py-2 rounded-md">
            <div>Home</div>
          </div>
        </Link>
        <Link href="/charinfo">
          <div className="p-4 hover:bg-emerald-400 text-2xl py-2 rounded-md">
            <div>Mokoko</div>
          </div>
        </Link>
        <Link href="/info">
          <div className="p-4 hover:bg-emerald-400 text-2xl py-2 rounded-md">
            <div>Info</div>
          </div>
        </Link>
        <Link href="/setting">
          <div className="p-4 hover:bg-emerald-400 text-2xl py-2 rounded-md">
            <div>Setting</div>
          </div>
        </Link>
        <Link href="/">
          <div className="p-4 hover:bg-emerald-400 text-2xl py-2 rounded-md">
            <div>Profile</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
