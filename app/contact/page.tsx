export default function ContactPage() {
  return (
    <div className="w-full">

      <section className="mt-16">
        <h1 className="text-6xl font-bold text-zinc-900 dark:text-zinc-50">
          Contact
        </h1>

        <p className="mt-4 whitespace-nowrap text-zinc-600 dark:text-zinc-400">
          Feel free to reach out for research collaboration, coursework
          projects, or graduate applications.
        </p>

        <div className="mt-10 space-y-4">
          {/* Email card */}
          <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
            <div className="text-sm text-zinc-500 dark:text-zinc-400">Email</div>

            <div className="mt-2 space-y-1">
              <a
                className="block text-base font-medium text-zinc-900 hover:underline dark:text-zinc-50"
                href="mailto:lianggy23@mails.tsinghua.edu.cn"
              >
                lianggy23@mails.tsinghua.edu.cn
              </a>

              <a
                className="block text-base font-medium text-zinc-900 hover:underline dark:text-zinc-50"
                href="mailto:gl585@cornell.edu"
              >
                gl585@cornell.edu
              </a>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
}