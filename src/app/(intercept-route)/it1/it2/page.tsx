import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h2>page 2</h2>
      <Link href="/it4">intercept route 4</Link>
    </div>
  );
};

export default page;
