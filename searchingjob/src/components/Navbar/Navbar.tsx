import { HomeIcon , LoginIcon , FaleConoscoIcon , UsuarioIcon } from "@/components";
import { classname } from "@/helpers/classname";
// import Link from "next/link";
import React from "react";
import { NavbarProps } from "./type";
import { NavbarUl } from "./NavbarUl";
import { NavbarUlLiLink } from "./NavbarUlLiLink";
import Image from "next/image";
// import { NavbarUlLiButton } from "./NavbarUlLiButton";

export const Navbar = ({className , ...props}: NavbarProps) => {
    return (
        <nav className={classname("flex h-screen flex-col bg-fuchsia-900 border border-fuchsia-300 hover:border-fuchsia-700 w-64 p-3",
          className
        )}
        {...props}
        >
          
          <div className="flex items-center justify-center">
            <h1>
              <Image 
                src="https://github.com/fabiosachetto/searchingjobparaty/blob/navbar/searchingjob/src/app/img/logo.png"
                alt="Searching Job Paraty"
                className="w-auto h-40 p-2"
                width={214}
                height={144}
              />
            </h1>
          </div>

          <NavbarUl className={"flex-grow"}>
            <NavbarUlLiLink href="/">
                <HomeIcon className="w-4 h-4"/> Home
            </NavbarUlLiLink>
            <NavbarUlLiLink href="/login">
              <LoginIcon className="w-4 h-4"/> Login
            </NavbarUlLiLink>
            <NavbarUlLiLink href="/fale-conosco">
              <FaleConoscoIcon className="w-4 h-4"/> Fale Conosco
            </NavbarUlLiLink>
            
            {/* Criado para entender client server */}
            {/* <NavbarUlLiButton>
              <FaleConoscoIcon className="w-4 h-4"/> Teste Botão
            </NavbarUlLiButton> */}
          </NavbarUl>

          <NavbarUl>
            <NavbarUlLiLink href="/usuario">
              <UsuarioIcon className="w-5 h-5"/> Usuário
            </NavbarUlLiLink>
          </NavbarUl>
        </nav>
    );
}