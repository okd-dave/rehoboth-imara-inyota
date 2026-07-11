import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Play, Search, FileText, Headphones, Video } from "lucide-react";
import { useState } from "react";
import bibleImg from "@/assets/bible.jpg";
import worshipImg from "@/assets/worship-band.jpg";
import heroImg from "@/assets/hero-worship.jpg";

export const Route = createFileRoute("/predications")({
  head: () => ({
    meta: [
      { title: "Prédications — Église Rehoboth Imara Inyota Bwiza" },
      { name: "description", content: "Médiathèque de prédications : vidéos, audios, podcasts et documents. Filtrez par thème, date et prédicateur." },
    ],
  }),
  component: Sermons,
});

const sermons = [
  { serie: "Fondations", title: "L'architecture de la foi", pred: "Pasteur principal", date: "05 Oct 2025", theme: "Foi", type: "video", img: bibleImg },
  { serie: "Nouveaux départs", title: "Marcher dans une vie nouvelle", pred: "Pasteur principal", date: "28 Sept 2025", theme: "Rédemption", type: "video", img: heroImg },
  { serie: "Grâce", title: "Le rythme de la grâce", pred: "Pasteur adjoint", date: "21 Sept 2025", theme: "Grâce", type: "audio", img: worshipImg },
  { serie: "Famille", title: "Bâtir sur le roc", pred: "Pasteur principal", date: "14 Sept 2025", theme: "Famille", type: "video", img: bibleImg },
  { serie: "Prière", title: "L'école de la prière", pred: "Sœur Esther", date: "07 Sept 2025", theme: "Prière", type: "podcast", img: worshipImg },
  { serie: "Vision", title: "Élargir la tente", pred: "Pasteur principal", date: "31 Août 2025", theme: "Vision", type: "video", img: heroImg },
];

const typeIcon = { video: Video, audio: Headphones, podcast: Headphones, pdf: FileText };

function Sermons() {
  const [q, setQ] = useState("");
  const [theme, setTheme] = useState("Tous");
  const themes = ["Tous", ...Array.from(new Set(sermons.map((s) => s.theme)))];

  const filtered = sermons.filter((s) =>
    (theme === "Tous" || s.theme === theme) &&
    (q === "" || s.title.toLowerCase().includes(q.toLowerCase()) || s.pred.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <>
      <PageHero image={bibleImg} eyebrow="Médiathèque" title="Prédications" subtitle="Nourrissez votre foi. Écoutez, regardez et méditez la Parole partagée dans notre maison." />

      <Section>
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Rechercher un titre, un prédicateur..."
              className="w-full h-12 pl-12 pr-4 border border-border bg-card outline-none focus:border-gold text-sm"
              maxLength={100}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {themes.map((th) => (
              <button
                key={th}
                onClick={() => setTheme(th)}
                className={`h-12 px-5 text-xs font-bold uppercase tracking-widest whitespace-nowrap border transition-colors ${theme === th ? "bg-royal text-white border-royal" : "border-border hover:border-gold hover:text-gold"}`}
              >
                {th}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((s, i) => {
            const Icon = typeIcon[s.type as keyof typeof typeIcon] ?? Video;
            return (
              <Reveal key={s.title + i} delay={(i % 3) * 0.06}>
                <article className="group cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden mb-5">
                    <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-royal-deep/25 group-hover:bg-royal-deep/50 transition-colors" />
                    <div className="absolute top-4 left-4 bg-gold text-accent-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-widest inline-flex items-center gap-1.5">
                      <Icon className="size-3" /> {s.type}
                    </div>
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="grid place-items-center size-16 rounded-full bg-white/90 text-royal-deep scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all">
                        <Play className="size-6 fill-current ml-1" />
                      </div>
                    </div>
                  </div>
                  <p className="eyebrow text-gold mb-2">{s.serie}</p>
                  <h3 className="font-serif text-xl text-foreground group-hover:text-gold transition-colors">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.pred} · {s.date}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16">Aucune prédication ne correspond à votre recherche.</p>
        )}
      </Section>
    </>
  );
}
