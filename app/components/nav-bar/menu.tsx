import clsx from "clsx";
import React from "react";

const NavMenu = () => {
  return (
    <div className="w-full flex gap-2 flex-nowrap overflow-x-scroll scrollbar-hide mt-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <span
          key={index}
          className={clsx(
            " text-text-white px-4 py-1 rounded-full font-medium transition-all duration-300",
            index === 0 ? "bg-primary" : "bg-primary/75"
          )}
        >
          Burgers
        </span>
      ))}
    </div>
  );
};

export default NavMenu;
