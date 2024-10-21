import { HomeIcon , LoginIcon } from "@/components";

export const Navbar = () => {
    return (
        <nav className="flex h-screen flex-col gap-3 bg-fuchsia-900 border border-fuchsia-300/80 hover:border-fuchsia-300/40 w-64 p-3">
          
          <div className="">
            <h1>
              <img 
                src="https://github.com/fabiosachetto/searchingjobparaty/blob/main/searchingjob/src/app/img/logo.png?raw=true" 
                alt="Searching Job Paraty"
                className="max-w-full p-2"
              />
            </h1>
          </div>

          <ul className="flex-grow my-4 border-t border-fuchsia-300">
            <li className="my-2 rounded-lg p-2 cursor-pointer bg-transparent hover:bg-fuchsia-700 hover:text-slate-950 flex gap-2 items-center">
              <HomeIcon className="w-4 h-4"/> Home
            </li>
            <li className="my-2 rounded-lg p-2 cursor-pointer bg-transparent hover:bg-fuchsia-700 hover:text-slate-950 flex gap-2 items-center">
              <LoginIcon className="w-4 h-4"/> Login
            </li>
            <li className="my-2 rounded-lg p-2 cursor-pointer bg-transparent hover:bg-fuchsia-700 hover:text-slate-950 flex gap-2 items-center">Fale Conosco</li>
            <li className="my-2 rounded-lg p-2 cursor-pointer bg-transparent hover:bg-fuchsia-700 hover:text-slate-950 flex gap-2 items-center">Termos e Condições</li>
          </ul>

          <ul className="my-4 border-t border-fuchsia-300">
            <li className="my-2 rounded-lg p-2 cursor-pointer bg-transparent hover:bg-fuchsia-700  hover:text-slate-950 flex gap-2 items-center">Usuário</li>
          </ul>

        </nav>
    );
}