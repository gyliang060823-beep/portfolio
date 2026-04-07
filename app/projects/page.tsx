export default function ProjectsPage() {
  return (
    <div className="w-full">

      <section className="mt-16">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Projects
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Selected coursework and independent research work.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {/* Coursework */}
          
          <div>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Coursework
            </h2>
            {/* 4910 */}
            <div className="mt-4 space-y-4">
              <a
                href="#"
                className="flex items-center justify-between gap-6 rounded-xl border border-zinc-200 p-6 overflow-hidden hover:bg-zinc-50 ..."
              >

                <div className="flex-1">

                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    Neuron Signal Recording and Analysis Series
                  </h3>

                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    Coursework at Cornell University, BME 4910.
                    <br />
                    Acknowledgement to Dr. Bruce R. Johnson.
                  </p>

                  <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                    Wet Lab Experience · Signal Processing · Dissection
                  </p>

                </div>

                <img
                  src="/projects/bme4910/project-1-header.png"
                  alt="Neural recording"
                  className="w-48 aspect-video flex-none rounded-lg object-cover"
                />

              </a>
            </div>

            {/* tic2 */}
            <div className="mt-4 space-y-4">
              <a
                href="#"
                className="flex items-center justify-between gap-6 rounded-xl border border-zinc-200 p-6 overflow-hidden hover:bg-zinc-50 ..."
              >

                <div className="flex-1">

                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    Intraoperative Near-Infrared Imaging of Tumors Using Folate Receptor-Targeted Silica Nanoparticles
                  </h3>

                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    Coursework at Tsinghua University, Technology Innovation and Challenge 2C.
                    <br />
                    Acknowledgement to Prof.Kai Ma.
                  </p>

                  <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                    Molecular Synthesis · Cell Experiments · Data Analysis
                  </p>

                </div>

                <img
                  src="/projects/tic2/tic2.jpg"
                  alt="Neural recording"
                  className="w-48 aspect-video flex-none rounded-lg object-cover"
                />

              </a>
            </div>
          </div>

          {/* Extracurricular */}
          {/* extra1 */}
          <div>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Extracurricular
            </h2>
            <div className="mt-4 space-y-4">
              <a
                href="#"
                className="flex items-center justify-between gap-6 rounded-xl border border-zinc-200 p-6 overflow-hidden hover:bg-zinc-50 ..."
              >

                <div className="flex-1">

                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    Large-scale, high-complexity Neural cyborg tissues based on bioelectronic scaffolds and artificial vascular networks
                  </h3>

                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    Extracurricular research experience at Dai Lab @ Tsinghua University.
                    <br />
                    Acknowledgement to Prof. Xiaochuan Dai and lab members.
                  </p>

                  <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                    This project is mainly about construction of multi-layer scaffolds for neural organoids, from fabrication to data analysis.
                  </p>

                </div>

                <img
                  src="/projects/extra1/extra1.jpg"
                  alt="Neural recording"
                  className="w-48 aspect-video flex-none rounded-lg object-cover"
                />

              </a>
            </div>

{/* extra2 */}
            <div className="mt-4 space-y-4">
              <a
                href="#"
                className="flex items-center justify-between gap-6 rounded-xl border border-zinc-200 p-6 overflow-hidden hover:bg-zinc-50 ..."
              >

                <div className="flex-1">

                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    Multi-functional Neural Biosensor based on double-clad fiber fabrication
                  </h3>

                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    Extracurricular research experience at Xu Lab @ Cornell University.
                    <br />
                    Acknowledgement to Prof. Chris Xu and lab members.
                  </p>

                  <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                    A neural biosensor approach based on double-clad fiber fabrication, which enables simultaneous electrophysiological recording and optical imaging in vivo.
                  </p>

                </div>

                <img
                  src="/projects/extra2/doubleclad.png"
                  alt="Neural recording"
                  className="w-48 aspect-video flex-none rounded-lg object-cover"
                />

              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}