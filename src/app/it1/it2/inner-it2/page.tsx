import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Inner page 2</h1>
      <Link href="/it5">intercept route 5</Link>
    </div>
  );
};

export default page;
