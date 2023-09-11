import { Settings } from "lucide-react";

interface Props {
  title: string;
  detail: string;
}

export default function Header(props: Props) {
  return (
    <div className="flex w-full justify-center bg-slate-200 pt-5">
      <div className="w-[80%] h-28 sm:h-20 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3">
        {/* left side */}
        <div className="flex flex-row space-x-4">
          <div className="w-14 h-14 bg-slate-50 shadow-md rounded-md"></div>
          <div className="flex flex-col">
            <div className="text-slate-900 font-extrabold text-3xl">
              {props.title}
            </div>
            <div className="text-slate-400 font-semibold">{props.detail}</div>
          </div>
        </div>
        {/* right side */}
        <div className="flex flex-row space-x-3">
          <div className="border border-blue-700 rounded-md px-5 py-1 text-blue-800 font-bold cursor-pointer">
            menu
          </div>
          <div className="rounded-md px-5 py-1 text-slate-50 font-bold bg-blue-800 cursor-pointer flex flex-row items-center">
            <Settings size={20} className="mr-1" />
            setting
          </div>
        </div>
      </div>
    </div>
  );
}
