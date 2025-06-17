import React from "react";
import Image from "next/image";
import NavMenu from "./menu";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="mb-8">
      <div className="flex justify-between items-center h-10">
        <Image
          src="/images/logo/logo.png"
          alt="logo"
          width={80}
          height={80}
          className="h-full w-auto"
        />
        <div className="relative flex items-center justify-end ">
          <ShoppingCart size={24} className="text-primary" />
          <div className="absolute -top-1 -right-2 bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center">
            <span className="text-xs text-text">1</span>
          </div>
        </div>
      </div>
      <NavMenu />
    </nav>
  );
};

export default Navbar;
