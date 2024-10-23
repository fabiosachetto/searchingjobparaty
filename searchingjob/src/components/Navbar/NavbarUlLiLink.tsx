import { classname } from "@/helpers/classname";
import { NavbarUlLiLinkProps } from "./type";
import { NavbarUlLi } from "./NavbarUlLi";
import Link from "next/link";

export const NavbarUlLiLink = ( { href , children , className, ...props } : NavbarUlLiLinkProps ) => {
    return (
      <NavbarUlLi className={classname("p-0" , className)}>
        <Link href={href} className="flex gap-2 items-center rounded-lg p-2 w-full" {...props}>
          { children }
        </Link>
      </NavbarUlLi>
    );
  };