import { HomeIcon , LoginIcon , FaleConoscoIcon , UsuarioIcon } from "@/components";

const NavbarUl = ( { children , className} ) => {
  return <ul className={`my-4 border-t border-fuchsia-300 ${className}`}>{ children }</ul>;
};

const NavbarUlLi = ( { children , className} ) => {
  return (<li className={`my-2 rounded-lg p-2 cursor-pointer bg-transparent hover:bg-fuchsia-700 hover:text-slate-950 flex gap-2 items-center ${className}`}>
    { children }
  </li>);
};

export const Navbar = () => {
    return (
        <nav className="flex h-screen flex-col bg-fuchsia-900 border border-fuchsia-300 hover:border-fuchsia-700 w-64 p-3">
          
          <div className="flex items-center justify-center">
            <h1>
              <img 
                src="https://github.com/fabiosachetto/searchingjobparaty/blob/main/searchingjob/src/app/img/logo.png?raw=true" 
                alt="Searching Job Paraty"
                className="w-auto h-40 p-2"
              />
            </h1>
          </div>

          <NavbarUl className={"flex-grow"}>
            <NavbarUlLi>
              <HomeIcon className="w-4 h-4"/> Home
            </NavbarUlLi>
            <NavbarUlLi>
              <LoginIcon className="w-4 h-4"/> Login
            </NavbarUlLi>
            <NavbarUlLi>
              <FaleConoscoIcon className="w-4 h-4"/> Fale Conosco
            </NavbarUlLi>
          </NavbarUl>

          <NavbarUl>
            <NavbarUlLi>
              <UsuarioIcon className="w-5 h-5"/> Usuário
            </NavbarUlLi>
          </NavbarUl>
        </nav>
    );
}