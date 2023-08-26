"use client";
import { cls } from "@/libs/client/utils";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { Alert } from "@/components/ui/alert";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function SignIn() {
  // Login method choose
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [method, setMethod] = useState<"login" | "guest">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");
  const onLoginClick = () => {
    setMethod("login");
  };
  const onGuestClick = () => {
    setMethod("guest");
  };
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl,
      });
      console.log(`Res: `, { res });
      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("Invalid email or password");
      }
    } catch (err: any) {}
    console.log("Login!");
  };

  return (
    <div className="bg-slate-100 w-screen h-screen flex justify-center items-center">
      <div className="sm:shadow-xl px-12 pb-8 pt-12 sm:bg-white rounded-xl w-full sm:w-[500px]">
        <div className="space-y-10">
          <h3 className="text-3xl font-bold text-center">Enter to Service</h3>
          <h5 className="text-sm text-gray-500 font-medium text-center">
            Enter using:
          </h5>
        </div>
        {/* Method Select */}
        <div className="flex flex-row justify-center space-x-8 mt-10">
          <button
            className={cls(
              "w-full pb-2 border-b-2 font-medium",
              method === "login"
                ? "border-b-2 border-teal-500"
                : "text-gray-500"
            )}
            onClick={onLoginClick}
          >
            Login
          </button>
          <button
            className={cls(
              "w-full pb-2 border-b-2 font-medium",
              method !== "login"
                ? "border-b-2 border-teal-500"
                : "text-gray-500"
            )}
            onClick={onGuestClick}
          >
            Guest
          </button>
        </div>
        {/* Login Form */}
        <div className="mt-6 ">
          {method === "login" ? (
            <>
              <form className="w-full" onSubmit={onSubmit}>
                <div className="grid w-full items-center gap-1.5">
                  <label htmlFor="email" className="">
                    Email :
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    value={email}
                    id="email"
                    type="email"
                    className="w-full appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div className="w-full space-y-1">
                  <label
                    htmlFor="password"
                    className="flex justify-start items-start"
                  >
                    Password :
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    value={password}
                    id="password"
                    type="password"
                    className="w-full appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                {error ? <Alert>{error}</Alert> : null}
                <div className="w-full">
                  <button
                    type="submit"
                    className="w-full mt-3 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 focus:outline-none"
                  >
                    Sign In
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
        <p className="text-center pt-6 text-sm">
          Don't have an account?{" "}
          <Link href="/register" className="text-teal-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
