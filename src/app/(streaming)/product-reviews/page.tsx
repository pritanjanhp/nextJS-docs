import SuspenseReview1 from "@/components/SuspenseReview1";
import SuspenseReview2 from "@/components/SuspenseReview2";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <h1>page</h1>
      <Suspense fallback={<h2>Loading Suspense 1....</h2>}>
        <SuspenseReview1 />
      </Suspense>

      <Suspense fallback={<h2>Loading Suspense 2....</h2>}>
        <SuspenseReview2 />
      </Suspense>
    </div>
  );
};

export default page;
