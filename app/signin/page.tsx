"use client";
import { cls } from "@/libs/client/utils";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SignIn() {
  // Login method choose
  const [method, setMethod] = useState<"login" | "guest">("login");
  const onLoginClick = () => {
    setMethod("login");
  };
  const onGuestClick = () => {
    setMethod("guest");
  };
  const { data: session, status } = useSession();
  console.log(session?.user);
  console.log(`Status : ${status}`);

  return (
    <div className="mt-16 p-4">
      {/* tmp signout */}
      <div className="flex space-x-3">
        <button onClick={() => signIn()}>Signin</button>
        <button onClick={() => signOut()}>Signout</button>
        <pre>{JSON.stringify(session)}</pre>
      </div>
      <div className="space-y-10">
        <h3 className="text-3xl font-bold text-center">Enter to ABGame</h3>
        <h5 className="text-sm text-gray-500 font-medium text-center">
          Enter using:
        </h5>
      </div>
      {/* Method Select */}
      <div className="flex flex-row justify-center space-x-8 mt-10">
        <button
          className={cls(
            "w-full pb-2 border-b-2 font-medium",
            method === "login" ? "border-b-2 border-teal-500" : "text-gray-500"
          )}
          onClick={onLoginClick}
        >
          Login
        </button>
        <button
          className={cls(
            "w-full pb-2 border-b-2 font-medium",
            method !== "login" ? "border-b-2 border-teal-500" : "text-gray-500"
          )}
          onClick={onGuestClick}
        >
          Guest
        </button>
      </div>
      {/* Login Form */}
      <div className="mt-6">
        {method === "login" ? (
          <>
            <form className="flex flex-col justify-center space-y-1 rounded-md relative items-center shadow-sm">
              <div className="w-full space-y-1">
                <label className="flex justify-start items-start">
                  Email :
                </label>
                <input
                  type="text"
                  className="w-full appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div className="w-full space-y-1">
                <label className="flex justify-start items-start">
                  Password :
                </label>
                <input
                  type="password"
                  className="w-full appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full mt-3 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 focus:outline-none"
                >
                  Login
                </button>
              </div>
            </form>
          </>
        ) : (
          <form className="flex flex-col justify-center space-y-1 rounded-md relative items-center shadow-sm">
            <div className="w-full space-y-1">
              <label className="flex justify-start items-start">
                Guest ID :
              </label>
              <input
                type="text"
                className="w-full appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="w-full mt-3 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 focus:outline-none"
              >
                Login
              </button>
            </div>
          </form>
        )}
      </div>
      {/* Other Method with Next Auth */}
      <div className="mt-8">
        <div className="relative">
          <div className="absolute w-full border-t border-gray-300" />
          <div className="relative -top-3 text-center">
            <span className="bg-white px-2 text-sm text-gray-500">
              Or enter with
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-6 gap-3">
          {/* naver */}
          <button
            onClick={() => signIn("naver")}
            className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm bg-white font-medium text-gray-500 hover:bg-gray-50"
          >
            naver
          </button>
          {/* github */}
          <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm bg-white font-medium text-gray-500 hover:bg-gray-50">
            github
          </button>
        </div>
      </div>
    </div>
  );
}
