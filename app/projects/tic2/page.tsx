"use client";

import { useMemo, useState } from "react";

export default function BME4910ProjectPage() {
  const images = useMemo(
    () => [
      {
        src: "/projects/tic2/tic2figure1.png",
        alt: "Figure 1",
        caption: "Figure 1. Recording overview.",
      },
      {
         src: "/projects/tic2/tic2figure2.png",
         alt: "Figure 2",
         caption: "Figure 2. Recording Overview-2.",
        },
      {
         src: "/projects/bme4910/slide3.png",
         alt: "Figure 3",
         caption: "Figure 3. Recording Overview-3.",
        },
    ],
    []
  );

  const [idx, setIdx] = useState(0);
  const total = images.length;

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <div className="grid grid-cols-3 gap-16">
      <div className="col-span-2">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Neural Signal Recording (BME4910)
        </h1>

        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Laboratory project focusing on extracellular neural recording and spike
          analysis.
        </p>

        <section className="mt-10 space-y-6">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Methods
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            (Paste your Methods text here.)
          </p>
        </section>

        <section className="mt-10 space-y-6">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Results
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            (Paste your Results text here.)
          </p>
        </section>
      </div>

      <div className="col-span-1">
        <div className="sticky top-24">
          <div className="relative rounded-xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-black">
            <img
              src={images[idx].src}
              alt={images[idx].alt}
              className="w-full rounded-lg"
            />

            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-zinc-200 bg-white/90 px-3 py-2 text-sm text-zinc-900 shadow hover:bg-white dark:border-zinc-800 dark:bg-black/80 dark:text-zinc-50"
              aria-label="Previous image"
              disabled={total <= 1}
            >
              ←
            </button>

            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-zinc-200 bg-white/90 px-3 py-2 text-sm text-zinc-900 shadow hover:bg-white dark:border-zinc-800 dark:bg-black/80 dark:text-zinc-50"
              aria-label="Next image"
              disabled={total <= 1}
            >
              →
            </button>

            <div className="mt-3 flex items-start justify-between gap-3">
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                {idx + 1} / {total}
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400">
                {images[idx].caption}
              </div>
            </div>

            <div className="mt-3 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  className={`h-2 w-2 rounded-full ${
                    i === idx
                      ? "bg-zinc-900 dark:bg-zinc-50"
                      : "bg-zinc-300 dark:bg-zinc-700"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}