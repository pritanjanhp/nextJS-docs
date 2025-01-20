import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>page 1</h1>
      <div>
        <Link href="/it1/it2">itercept route 2</Link>
      </div>
      <div>
        <Link href="/it3">itercept route 3</Link>
      </div>
    </div>
  );
};

export default page;
