// import Image from "next/image";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <section className="ml-64 flex flex-col h-screen justify-between">
      <header className="w-full flex justify-center font-[family-name:var(--font-geist-sans)]">
        <h1 className="">Searching Job Paraty</h1>
      </header>

      <main className="bg-orange-400 text-center">
        <section className="">
            <form className="" id="form-login">
                <h2>Digite seu E-mail e Senha para acessar.</h2>
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" placeholder="Digite seu e-mail." autocomplete="current-password" />
                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha" placeholder="Digite sua senha." autocomplete="current-password" />
                <button type="submit">Entrar</button>
            </form>

            <a href="cadastro.html">Ainda não se cadastrou? Clique aqui e preencha o formulário!</a>

            <a href="recuperar-senha.html">Esqueceu a senha? Clique aqui!!!</a>
        </section>
      </main>

      <footer className="bg-amber-400 w-full static bottom-0 text-center">
          <p>2024 - Brain Tech Paraty. Todos os direitos reservados.</p>
          <section>
              <span>
                  Clique no link abaixo para entrar em contato com a gente!
              </span>

              <a title="braintechparaty@braintechparaty.com.br" href="mailto:braintechparaty@braintechparaty.com.br">
                  braintechparaty@braintechparaty.com.br
              </a>
          </section>
      </footer>
    </section>
  );
}
