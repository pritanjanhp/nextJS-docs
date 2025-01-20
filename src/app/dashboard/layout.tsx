import React from "react";

export const metadata = {
  title: "dashboard",
  description: "Learning about Next.js"
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = props => {
  return (
    <div>
      {/* <nav className="bg-black text-white text-bold px-5 py-5 flex justify-between items-center">
        <h2 className="text-xl ">Logo</h2>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
        </ul>
      </nav> */}

      <div className="flex">
        <div className="h-screen bg-black w-[25vw] text-white text-2xl">
          <ul className="pt-5 flex flex-col px-3 gap-5">
            <li>Dashboard</li>
            <li>Dashboard</li>
            <li>Dashboard</li>
          </ul>
        </div>
        <div className="p-4 text-bold">
          {props.children}{" "}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
