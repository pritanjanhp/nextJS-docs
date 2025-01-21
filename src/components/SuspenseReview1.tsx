import React from "react";

const SuspenseReview1 = async () => {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return (
    <div>
      <h1>Suspense Review 1</h1>
    </div>
  );
};

export default SuspenseReview1;
