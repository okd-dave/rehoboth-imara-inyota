import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import bibleImg from "@/assets/bible.jpg";
import heroImg from "@/assets/hero-worship.jpg";
import communityImg from "@/assets/community.jpg";
import worshipImg from "@/assets/worship-band.jpg";
import prayerImg from "@/assets/prayer.jpg";
import childrenImg from "@/assets/children.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Église Rehoboth Imara Inyota Bwiza" },
      { name: "description", content: "Enseignements, actualités, témoignages, méditations et études bibliques." },
    ],
  }),
  component: Blog,
});

const posts = [
  { cat: "Enseignement", title: "Vivre par la foi et non par la vue", author: "Pasteur principal", date: "02 Oct 2025", img: bibleImg },
  { cat: "Méditation", title: "Le silence, terre fertile de la prière", author: "Sœur Esther", date: "28 Sept 2025", img: prayerImg },
  { cat: "Actualités", title: "Retour sur la campagne d'évangélisation", author: "Équipe Médias", date: "20 Sept 2025", img: heroImg },
  { cat: "Témoignage", title: "Dieu a restauré mon mariage", author: "Anonyme", date: "15 Sept 2025", img: communityImg },
  { cat: "Étude", title: "Ésaïe 54 : élargir sa tente", author: "Pasteur adjoint", date: "10 Sept 2025", img: bibleImg },
  { cat: "Enseignement", title: "Éduquer ses enfants dans la crainte de Dieu", author: "Fam. K.", date: "01 Sept 2025", img: childrenImg },
];

function Blog() {
  return (
    <>
      <PageHero image={bibleImg} eyebrow="Le blog" title="Enseignements & Inspirations" subtitle="Des mots qui affermissent la foi, éclairent la marche et nourrissent l'âme." />

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <article className="group cursor-pointer h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
                  <span className="absolute top-4 left-4 bg-gold text-accent-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-widest">{p.cat}</span>
                </div>
                <p className="eyebrow text-muted-foreground mb-2">{p.author} · {p.date}</p>
                <h3 className="font-serif text-2xl text-foreground group-hover:text-gold transition-colors">{p.title}</h3>
                <button className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-royal dark:text-gold self-start hover:gap-4 transition-all">
                  Lire <ArrowRight className="size-3" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Worship band image intentionally referenced elsewhere; keep import cohesion */}
      <div hidden><img src={worshipImg} alt="" /></div>
    </>
  );
}
