import { classname } from "@/helpers/classname";
import { NavbarUlLiProps } from "./type";

export const NavbarUlLi = ( { children , className, ...props } : NavbarUlLiProps ) => {
    return (
      <li className={classname('my-2 rounded-lg p-2 cursor-pointer bg-transparent hover:bg-fuchsia-700 hover:text-slate-950 flex gap-2 items-center', className)} {...props}>
        { children }
      </li>
    );
  };
  