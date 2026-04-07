import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">

      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/background1.png')" }}
      ></div>

          <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Guangyu Liang
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Biomedical Engineering / Neuroscience • Neuroengineering • 
        <br />
        AI for Science • Computational Neuroscience
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href="/projects"
          className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          View Projects
        </a>

        <a
          href="/CV"
          className="rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
        >
          CV
        </a>

        {/* <a
          href="#"
          className="rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
        >
          Research
        </a> */}

        <a
          href="/contact"
          className="rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
        >
          Contact
        </a>
      </div>
    </section>

    </div>
  );
}
