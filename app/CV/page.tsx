export default function CVPage() {
  return (
    <div className="grid grid-cols-12 gap-12">
      {/* Left sidebar */}
      <aside className="col-span-12 lg:col-span-4">
        <div className="sticky top-24">
          <div className="flex flex-col items-start">
            <img
              src="\profile.jpg"
              alt="Profile"
              className="h-48 w-48 rounded-2xl object-cover shadow-sm"
            />

            <h1 className="mt-6 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              Guangyu Liang
            </h1>

            <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Biomedical Engineering / Neuroscience student interested in neural
              signal recording, neuroengineering, and neuroimaging.
            </p>

            <a
              href="/Kevin_Liang_English_Resume.pdf"
              className="mt-6 rounded-full bg-zinc-900 px-7 py-3 text-sm font-semibold text-white hover:bg-zinc-700"
            >
              Download PDF
            </a>

            <nav className="mt-10 space-y-4 text-sm">
              <a
                href="#bio"
                className="block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                Bio
              </a>
              <a
                href="#education"
                className="block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                Education
              </a>
              <a
                href="#research"
                className="block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                Research Experience
              </a>
              <a
                href="#honors"
                className="block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                Honors & Awards
              </a>
            </nav>
          </div>
        </div>
      </aside>

      {/* Right content */}
      <main className="col-span-12 lg:col-span-8">
        {/* Bio */}
        <section id="bio" className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Bio
          </h2>

          <div className="mt-6 flex gap-4">
            <div className="w-1 rounded bg-sky-300 dark:bg-sky-700" />
            <div>
              <div className="leading-7 text-zinc-600 dark:text-zinc-400">
                <p>I am an undergraduate student at Tsinghua University, Beijing, and a passionate biomedical engineer who wants to understand, interact with, and unlock the mysteries of the brain.</p>
                <p>Thanks to various courses provided by THU and CU, I gained comprehensive skills in my undergraduate, from hardware to software, and biology --- but I have always been eager to learn more!</p>
                <p>Currently an exchange student at Cornell University, Ithaca, NY, where I am taking courses and doing research.</p>
                <p>Also, I will describe myself as a Rock & Roll fan, a drummer, a basketball player, and a film lover.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mt-16 scroll-mt-24">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Education
          </h2>

          <div className="mt-6 space-y-6">
            <div className="flex gap-4">
              <div className="w-1 rounded bg-violet-300 dark:bg-violet-700" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-violet-500 dark:text-violet-400">
                  Beijing, China · 2023–now
                </div>
                <div className="mt-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Tsinghua University
                </div>
                <div className="mt-2 text-zinc-600 dark:text-zinc-400">
                  B.S. / Undergraduate, Weixian College, Biomedical Engineering
                </div>
                <div className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                  <p>Main Courses : Basic Mathematics, Physics, Computer Science, and Engineering Principles, Signal Processing, Electronics, Organic Chemistry, Human Anatomy</p>
                  <p>GPA / 3.9/4.0 · National Scholarship of China</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 rounded bg-violet-300 dark:bg-violet-700" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-violet-500 dark:text-violet-400">
                  Ithaca, NY · 2026
                </div>
                <div className="mt-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Cornell University
                </div>
                <div className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Exchange Student, Meinig School of Biomedical Engineering
                </div>
                <div className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                  <p>Main Courses : Neurobiology, Electrophysiology, Machine Learning, Deep Learning.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Experience */}
        <section id="research" className="mt-16 scroll-mt-24">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Research Experience
          </h2>

          <div className="mt-6 space-y-6">
            <div className="flex gap-4">
              <div className="w-1 rounded bg-emerald-300 dark:bg-emerald-700" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-emerald-500 dark:text-emerald-400">
                  2024–now
                </div>
                <div className="mt-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Xiaochuan Dai Group — Undergraduate Research Assistant,
                  Tsinghua University
                </div>

                <div className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Research Areas: brain-machine interface, bioelectronics,
                  tissue engineering, organoids.
                </div>

                <div className="mt-2 text-zinc-600 dark:text-zinc-400">
                  <p> We are the first to develop a large-scale 3D neural organoid scaffold with <strong>bidirectional brain-machine interface</strong>, effectively addressing the critical issue of core necrosis and establishing a robust foundation for future neural organoid research.</p>
                  <p> In this research group, under the mentorship of Professor Dai and doctoral senior, I gained expertise in <strong>material synthesis, bioelectronic device fabrication, and advanced data analysis</strong>. I successfully completed a research project supported by the Beijing Natural Science Foundation, which also led to <strong>a filed patent</strong>. </p>
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href="#"
                    className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
                  >
                    Selected Project — Large-scale, high-complexity Neural cyborg tissues based on bioelectronic scaffolds and artificial vascular networks
                  </a>
                </div>
                
                <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
                  <li>
                    Project Summary: Development of scalable mesh-like scaffolds for neural organoids.
                  </li>
                  <li>Key result: 1 Patent under review, Founded by Beijing Natural Science Foundation.</li>
                  <li>
                    Tools: MATLAB / Python / electrophysiology / microscopy / …
                  </li>
                </ul>


              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 rounded bg-emerald-300 dark:bg-emerald-700" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-emerald-500 dark:text-emerald-400">
                  2026 Spring
                </div>
                <div className="mt-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Chris Xu Group — visiting undergraduate researcher, Cornell
                  University
                </div>
                <div className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Research Areas: Neuroimaging, optics, neuroelectronics, optogenetics.
                </div>

                <div className="mt-2 text-zinc-600 dark:text-zinc-400">
                  In this research group, under the supervision of Professor Xu and Chi Liu, I gained a foundational understanding of two-photon and brain tissue imaging. My work on the project <strong>'Multi-functional Neural Biosensor based on double-clad fiber fabrication'</strong> allowed me to develop expertise in in vivo biological analysis, optical system alignment, and advanced data analysis.
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
                  <li>Our project is still in progress, so only limited information is shown in this page.</li>
                </ul>

              </div>
            </div>
          </div>
        </section>

        {/* Honors */}
        <section id="honors" className="mt-16 pb-8 scroll-mt-24">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Honors & Awards
          </h2>

          <div className="mt-6 space-y-6">
            <div className="flex gap-4">
              <div className="w-1 rounded bg-amber-300 dark:bg-amber-700" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-amber-500 dark:text-amber-400">
                  2025
                </div>
                <div className="mt-1 text-zinc-800 dark:text-zinc-200">
                  National Scholarship of China — 2025, the highest prize for
                  domestic students in China.
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 rounded bg-amber-300 dark:bg-amber-700" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-amber-500 dark:text-amber-400">
                  2025 and 2026
                </div>
                <div className="mt-1 text-zinc-800 dark:text-zinc-200">
                  Tsinghua University Comprehensive Outstanding Student Award —
                  2025 and 2026
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 rounded bg-amber-300 dark:bg-amber-700" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-amber-500 dark:text-amber-400">
                  2026
                </div>
                <div className="mt-1 text-zinc-800 dark:text-zinc-200">
                  Tsinghua University Alumni Scholarship — 2026
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 rounded bg-amber-300 dark:bg-amber-700" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-amber-500 dark:text-amber-400">
                  2026
                </div>
                <div className="mt-1 text-zinc-800 dark:text-zinc-200">
                  Tsinghua University Weixian College Undergraduate Contribution Award — 2026
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}