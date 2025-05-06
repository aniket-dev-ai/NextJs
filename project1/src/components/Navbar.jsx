import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-lg font-bold">MyWebsite</div>
        <ul className="flex space-x-6">
          <Link href="/" className="cursor-pointer">Home</Link>
          <Link  href="/performance" className="cursor-pointer">Login</Link>
          {/* <Link  href="/" className="cursor-pointer">Sign Up</Link> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
