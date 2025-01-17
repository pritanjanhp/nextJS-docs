"use client";

import Counter from "@/components/Counter";
import { NextPage } from "next";

const CounterPage: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl mt-5 font-bold">Counter Page</h1>
      <Counter />

      {/* <button className="px-4 py-2 m-3 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        <Link href="/">CLick here to go to Home Page</Link>
      </button> */}
    </div>
  );
};

export default CounterPage;
