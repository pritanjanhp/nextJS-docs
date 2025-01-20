"use client";

import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("placking your oreder");
    // router.push("/student");
    router.replace("/student");
  };

  return (
    <div>
      <h1>Oreder Product</h1>
      <button onClick={handleClick}>place order </button>
    </div>
  );
};

export default OrderProduct;
