"use client";

import { classname } from "@/helpers/classname";
import { NavbarUlLi } from "./NavbarUlLi";
import { NavbarUlLiButtonProps } from "./type";

export const NavbarUlLiButton = ( { children , className, ...props } : NavbarUlLiButtonProps ) => {
    return (
      <NavbarUlLi className={classname("p-0" , className)}>
        <button onClick={() => alert("Testando Button")} className="flex gap-2 items-center rounded-lg p-2 w-full" {...props}>
          { children }
        </button>
      </NavbarUlLi>
    );
  };