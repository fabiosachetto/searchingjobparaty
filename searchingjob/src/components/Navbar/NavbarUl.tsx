import { classname } from "@/helpers/classname";
import { NavbarUlProps } from "./type";

export const NavbarUl = ( { children , className, ...props } : NavbarUlProps ) => {
    return (
      <ul className={classname('my-4 border-t border-fuchsia-300', className )} {...props} >
        { children }
      </ul>
    );
  };