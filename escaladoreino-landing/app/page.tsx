import TallyEmbed from "@/components/TallyEmbed";


export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Organize as escalas da sua igreja <span className="text-blue-800">sem dor de cabeça</span>.
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            O <strong>Escala do Reino</strong> cria escalas automaticamente e mantém seus voluntários informados,
            para você liderar com mais tranquilidade.
          </p>
          <a
            href="#form"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition"
          >
            Quero organizar meus voluntários
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold mb-4">Você se identifica?</h3>
          <ul className="space-y-3 text-slate-600">
            <li>❌ Pessoas esquecem o dia de servir</li>
            <li>❌ Escalas refeitas toda semana</li>
            <li>❌ Mensagens perdidas no WhatsApp</li>
            <li>❌ Constrangimento ao cobrar voluntários</li>
          </ul>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que muda na prática
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Menos faltas e confusão",
              "Menos cobrança e retrabalho",
              "Mais tranquilidade para liderar",
            ].map((item) => (
              <div
                key={item}
                className="border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Uma solução simples para cuidar da organização
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Cadastre voluntários, defina disponibilidades e deixe o Escala do Reino
            cuidar das escalas e da comunicação.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <span className="bg-slate-100 px-6 py-3 rounded-full">Escalas automáticas</span>
            <span className="bg-slate-100 px-6 py-3 rounded-full">Comunicação clara</span>
            <span className="bg-slate-100 px-6 py-3 rounded-full">Menos conflitos</span>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section id="form" className="bg-blue-900 text-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Participe do acesso inicial
            </h2>
            
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <TallyEmbed />
            </div>
          </div>
        </section>


      {/* FOOTER */}
      <footer className="text-center text-sm text-slate-500 py-8">
        © {new Date().getFullYear()} Escala do Reino — Organização a serviço do Reino.
      </footer>

    </main>
  );
}


/*import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
*/