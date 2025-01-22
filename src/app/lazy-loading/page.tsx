"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Client Components:
const ComponentA = dynamic(() => import("./A"));
const ComponentB = dynamic(() => import("./B"));
const ComponentC = dynamic(() => import("./C"), { ssr: false });

export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <ComponentA />

      {showMore && <ComponentB />}
      <button onClick={() => setShowMore(!showMore)}>Toggle</button>

      <ComponentC />
    </div>
  );
}
