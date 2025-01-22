"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div>
      {/* <h1>Error in review</h1> */}
      <h1>
        {error.message}
      </h1>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
