"use client";

import { use, useState } from "react";
import { auth } from "@/firebase";
// import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";

const Signin1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // let email = e.currentTarget.email.value;
    // let password = e.currentTarget.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });

    // try {
    //   await signInWithEmailAndPassword(auth, email, password);
    //   // router.push("/tasks");
    //   <Link href="/">click here</Link>;
    // } catch (err) {
    //   setError(err.message);
    // }
  };

  return (
    <div className="m-3 p-3 text-xl">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-black rounded-md p-2 m-2"
        />
        <input
          className="border border-black rounded-md p-2 m-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          type="submit"
          onSubmit={handleSubmit}
        >
          click here
          {/* <Link href="/fetchData">Fetch</Link> */}
        </button>

      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Signin1;
