"use client";

import { redirect } from "next/dist/server/api-utils";
import React, { useEffect, useState } from "react";

interface Data {
  id: number;
  title: string;
  body: string;
}

const FetchAPI: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      // const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      // const res = await resp.json();
      // setData(res.slice(0, 5));

      // if (!res.ok) {
      //   return { message: "please enter correct URL" };
      // }

      // redirect("/");
      // setLoading(false);

      try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        const res = await resp.json();
        setData(res.slice(0, 5));
      } catch (error) {
        console.log("error ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full max-w-3xl gap-3">
      <ul className="bg-gray-200 shadow-md rounded-lg">
        {data.map(item =>
          <li
            key={item.id}
            className="border-b border-dotted border-gray-500 p-4 pb-4 pt-2 "
          >
            <div className="flex flex-col">
              <p className="text-sm text-gray-500">
                {item.id}
              </p>
              <div className="mt-3">
                <h3 className="text-sm font-semibold text-gray-800 hover:text-gray-600">
                  {item.title}
                </h3>
                <p className="italic text-gray-600 mt-2">
                  {item.body}
                </p>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FetchAPI;
