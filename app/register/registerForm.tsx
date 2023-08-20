"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        //redirect
      }
    } catch (error) {
      console.log(error);
    }

    console.log("Register!");
  };
  return (
    <form
      className="flex flex-col justify-center space-y-1 rounded-md relative items-center shadow-sm"
      onSubmit={onSubmit}
    >
      <div className="w-full space-y-1">
        <label htmlFor="email" className="flex justify-start items-start">
          Email :
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          type="email"
          className="w-full appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
        />
      </div>
      <div className="w-full space-y-1">
        <label htmlFor="password" className="flex justify-start items-start">
          Password :
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          type="password"
          className="w-full appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
        />
      </div>
      <div className="w-full">
        <button
          type="submit"
          className="w-full mt-3 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 focus:outline-none"
        >
          SignUp
        </button>
      </div>
    </form>
  );
}
