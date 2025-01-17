"use client";

import React from "react";
import "../styles/globals.css";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-y-4">
      <p className="text-3xl font-bold">Next.Js</p>
      <p className="text-xl font-bold">Home Page</p>

      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4">
        {/* <a href="/counter">Counter APP</a> */}
        <Link href={"/counter"}>Counter</Link>
      </button>

      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        <Link href="/fetchData">Fetch</Link>
      </button>
    </div>
  );
};

export default Home;
