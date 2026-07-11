import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { X } from "lucide-react";
import { useState } from "react";
import img1 from "@/assets/hero-worship.jpg";
import img2 from "@/assets/community.jpg";
import img3 from "@/assets/children.jpg";
import img4 from "@/assets/worship-band.jpg";
import img5 from "@/assets/prayer.jpg";
import img6 from "@/assets/social-action.jpg";
import img7 from "@/assets/bible.jpg";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — Église Rehoboth Imara Inyota Bwiza" },
      { name: "description", content: "Photos et vidéos de nos cultes, activités, ministères et actions communautaires." },
    ],
  }),
  component: Gallery,
});

const items = [
  { src: img1, cat: "Cultes", alt: "Assemblée en adoration" },
  { src: img2, cat: "Communion", alt: "Fraternité" },
  { src: img4, cat: "Louange", alt: "Chorale" },
  { src: img3, cat: "Enfants", alt: "École du dimanche" },
  { src: img5, cat: "Prière", alt: "Nuit de prière" },
  { src: img6, cat: "Action sociale", alt: "Distribution" },
  { src: img7, cat: "Enseignement", alt: "La Parole" },
  { src: img1, cat: "Cultes", alt: "Culte du dimanche" },
];

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const [cat, setCat] = useState("Tous");
  const cats = ["Tous", ...Array.from(new Set(items.map((i) => i.cat)))];
  const filtered = cat === "Tous" ? items : items.filter((i) => i.cat === cat);

  return (
    <>
      <PageHero image={img2} eyebrow="Instants partagés" title="Galerie" subtitle="Un aperçu des moments qui façonnent notre vie communautaire." />

      <Section>
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`h-11 px-5 text-xs font-bold uppercase tracking-widest border transition-colors ${cat === c ? "bg-royal text-white border-royal" : "border-border hover:border-gold hover:text-gold"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((it, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <button onClick={() => setOpen(i)} className="group block relative aspect-square overflow-hidden bg-muted">
                <img src={it.src} alt={it.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-royal-deep/0 group-hover:bg-royal-deep/40 transition-colors flex items-end p-4">
                  <span className="eyebrow text-white opacity-0 group-hover:opacity-100 transition-opacity">{it.cat}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      {open !== null && (
        <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setOpen(null)}>
          <button onClick={() => setOpen(null)} aria-label="Fermer" className="absolute top-6 right-6 grid place-items-center size-12 rounded-full bg-white/10 text-white hover:bg-gold hover:text-accent-foreground transition-colors">
            <X className="size-5" />
          </button>
          <img src={filtered[open].src} alt={filtered[open].alt} className="max-w-full max-h-[90vh] object-contain" />
        </div>
      )}
    </>
  );
}
