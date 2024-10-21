export const Navbar = () => {
    return (
        <nav className="flex flex-col gap-3 bg-fuchsia-900 border border-fuchsia-300/80 hover:border-fuchsia-300/40 w-64 p-3">
          
          <div className="">
            <h1>
              <img 
                src="https://github.com/fabiosachetto/searchingjobparaty/blob/main/searchingjob/src/app/img/logo.png?raw=true" 
                alt="Searching Job Paraty"
                className="max-w-full p-2"
              />
            </h1>
          </div>

          <ul className="my-3 border-t border-fuchsia-300 hover:">
            <li className="">Home</li>
            <li>Login</li>
            <li>Fale Conosco</li>
            <li>Termos e Condições</li>
          </ul>

          <ul className="my-3 border-t border-fuchsia-300 hover:">
            <li>Usuário</li>
          </ul>

        </nav>
    );
}