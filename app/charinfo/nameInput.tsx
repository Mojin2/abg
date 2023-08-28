"use client";
import { useEffect, useState } from "react";

export default function NameInput() {
  const [name, setName] = useState("");
  const [nameList, setNameList] = useState<string[]>([]);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNameList((cur) => {
      const oldnameList = nameList;
      const newname = name;
      cur = [...oldnameList, newname];
      return cur;
    });
    console.log("Added!");
    setName("");
  };
  return (
    <form onSubmit={onSubmit} className="px-3 space-x-2">
      <input
        onChange={(e) => setName(e.target.value)}
        required
        value={name}
        id="name"
        type="text"
        className=" appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
      />
      <button
        type="submit"
        className=" mt-3 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 focus:outline-none"
      >
        추가
      </button>
      {nameList}
    </form>
  );
}
