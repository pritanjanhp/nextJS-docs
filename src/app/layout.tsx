import Link from "next/link";
import "../styles/globals.css";

export const metadata = {
  title:"Next.js",
  description: "Learning about Next.js",
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-black text-white text-bold px-5 py-5 flex justify-between items-center">
          <h2 className="text-xl">Logo</h2>
          {/* {props.children} */}
          <ul className="flex gap-4">
            <Link
              className="bg-red-200 text-black rounded px-4 py-2 hover:bg-red-300"
              href={"/"}
            >
              Home
            </Link>
            {/* <li>Home</li> */}
            {/* <li>About Us</li>*/}
            {/* <li>Contact us</li> */}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
