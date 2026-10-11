"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const PHOTOS = [
  { id: "1516310789627-2ff305829fbb", alt: "Cat portrait" },
  { id: "1636105146585-65a51b472c7e", alt: "Gray cat sleeping" },
  { id: "1728230293543-3d6097917f75", alt: "Two cats playing in grass" },
  { id: "1683051149142-9ca23718cb6c", alt: "Dog with ball on grass" },
  { id: "1711127169047-12f68297c88e", alt: "Black cat" },
  { id: "1725409796872-8b41e8eca929", alt: "Kitten vet checkup" },
  { id: "1648854947054-432af7faca56", alt: "Dog bath time" },
  { id: "1570402383251-9f8a173630da", alt: "Puppy beside pet bowl" },
  { id: "1625794084867-8ddd239946b1", alt: "Golden retriever puppy" },
  { id: "1518791841217-8f162f1e1131", alt: "Tabby cat closeup" },
  { id: "1741230713152-244939ffbd75", alt: "Smiling shaggy dog" },
  { id: "1745252752503-2c5eb22167b6", alt: "Dog enjoying a meal" },
  { id: "1517849845537-4d257902454a", alt: "Dog portrait" },
  { id: "1514888286974-6c03e2ca1dba", alt: "Cat portrait" },
  { id: "1543466835-00a7907e9de1", alt: "Dog resting" },
  { id: "1548199973-03cce0bbc87b", alt: "Dogs playing together" },
  { id: "1537151625747-768eb6cf92b2", alt: "Cat relaxing" },
  { id: "1587300003388-59208cc962cb", alt: "Dog close-up" },
  { id: "1533738363-b7f9aef128ce", alt: "Cat with attitude" },
  { id: "1583511655857-d19b40a7a54e", alt: "Dog outdoors" },
  { id: "1573865526739-10659fec78a5", alt: "Cat looking up" },
  { id: "1561037404-61cd46aa615b", alt: "Happy dog" },
  { id: "1518717758536-85ae29035b6d", alt: "Dog looking at the camera" },
];

const WEIGHTS = [1.1, 1.5, 0.9, 1.3, 1, 1.4, 0.8, 1.2];

const thumb = (id) =>
  `https://images.unsplash.com/photo-${id}?fm=jpg&q=80&w=800&auto=format&fit=crop`;
const full = (id) =>
  `https://images.unsplash.com/photo-${id}?fm=jpg&q=85&w=1800&auto=format&fit=crop`;

const BREAKPOINTS = [
  [1536, 7],
  [1280, 6],
  [1024, 5],
  [768, 4],
  [640, 3],
];

function columnsFor(width) {
  for (const [min, cols] of BREAKPOINTS) {
    if (width >= min) return cols;
  }
  return 2;
}

function useColumnCount() {
  const [cols, setCols] = useState(null);

  useEffect(() => {
    const update = () => setCols(columnsFor(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return cols;
}

export default function GalleryGrid() {
  const [open, setOpen] = useState(null);
  const cols = useColumnCount();
  const touchX = useRef(0);

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(
    () => setOpen((i) => (i === null ? i : (i - 1 + PHOTOS.length) % PHOTOS.length)),
    []
  );
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % PHOTOS.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, prev, next]);

  const colCount = cols ?? 3;

  const columns = Array.from({ length: colCount }, () => []);
  PHOTOS.forEach((photo, index) => {
    columns[index % colCount].push({ photo, index });
  });

  const tallest = Math.ceil(PHOTOS.length / colCount);
  const columnHeight = tallest * 1.1 * 100;

  // PHONE: ilagay ang bawat photo sa mas maikling column (balanced)
  const phoneCols = [
    { items: [], total: 0 },
    { items: [], total: 0 },
  ];
  PHOTOS.forEach((photo, index) => {
    const w = WEIGHTS[index % WEIGHTS.length];
    const target = phoneCols[0].total <= phoneCols[1].total ? phoneCols[0] : phoneCols[1];
    target.items.push({ photo, index, w });
    target.total += w;
  });
  const phoneMaxTotal = Math.max(phoneCols[0].total, phoneCols[1].total);
  const phoneMaxCount = Math.max(phoneCols[0].items.length, phoneCols[1].items.length);
  // gap (12px) ~ 7% ng lapad ng column sa phone
  const phoneHeightPct = phoneMaxTotal * 100 + (phoneMaxCount - 1) * 7;

  return (
    <>
      {/* PHONE ONLY (<640px). <article> ang wrapper para hindi tamaan ng
          "main > nav + section > div:nth-child(2) > div" rules sa globals.css */}
      <article className="block sm:hidden">
        <div className="grid grid-cols-2 items-start gap-3">
          {phoneCols.map((col, c) => (
            <div key={c} className="relative min-w-0">
              <div aria-hidden="true" style={{ paddingBottom: `${phoneHeightPct}%` }} />
              <div className="absolute inset-0 flex flex-col gap-3">
                {col.items.map(({ photo, index, w }) => (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() => setOpen(index)}
                    aria-label={`View photo: ${photo.alt}`}
                    className="relative block min-h-0 w-full overflow-hidden rounded-2xl shadow-md"
                    style={{ flex: `${w} 1 0%` }}
                  >
                    <img
                      src={thumb(photo.id)}
                      alt={photo.alt}
                      loading="eager"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>

      {/* TABLET + DESKTOP (640px pataas): original, walang binago */}
      <div
        className="hidden gap-3 sm:grid md:gap-4"
        style={{ gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))` }}
      >
        {columns.map((items, c) => (
          <div key={c} className="relative">
            <div aria-hidden="true" style={{ paddingBottom: `${columnHeight}%` }} />
            <div className="absolute inset-0 flex flex-col gap-3 md:gap-4">
              {items.map(({ photo, index }) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setOpen(index)}
                  aria-label={`View photo: ${photo.alt}`}
                  className="relative block min-h-0 w-full overflow-hidden rounded-2xl shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414]"
                  style={{ flex: `${WEIGHTS[index % WEIGHTS.length]} 1 0%` }}
                >
                  <img
                    src={thumb(photo.id)}
                    alt={photo.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={PHOTOS[open].alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={close}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) {
              if (dx < 0) next();
              else prev();
            }
          }}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-3xl leading-none text-white transition hover:bg-white/30"
          >
            &times;
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-3xl leading-none text-white transition hover:bg-white/30 md:bottom-auto md:left-6 md:top-1/2 md:-translate-y-1/2"
          >
            &lsaquo;
          </button>

          <figure
            className="flex max-h-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={full(PHOTOS[open].id)}
              alt={PHOTOS[open].alt}
              className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain md:max-h-[82vh]"
            />
            <figcaption className="mt-3 text-center font-fredoka text-base text-white">
              {PHOTOS[open].alt} &middot; {open + 1} / {PHOTOS.length}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-3xl leading-none text-white transition hover:bg-white/30 md:bottom-auto md:right-6 md:top-1/2 md:-translate-y-1/2"
          >
            &rsaquo;
          </button>
        </div>
      )}
    </>
  );
}