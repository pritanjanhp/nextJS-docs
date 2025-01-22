import React from "react";

const SuspenseReview2 = async () => {
  await new Promise(resolve => setTimeout(resolve, 10000));
  return <div>Suspense Review 2</div>;
};

export default SuspenseReview2;
