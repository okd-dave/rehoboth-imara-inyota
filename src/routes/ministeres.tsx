import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import worshipImg from "@/assets/worship-band.jpg";
import childrenImg from "@/assets/children.jpg";
import prayerImg from "@/assets/prayer.jpg";
import socialImg from "@/assets/social-action.jpg";
import communityImg from "@/assets/community.jpg";
import bibleImg from "@/assets/bible.jpg";
import heroImg from "@/assets/hero-worship.jpg";

export const Route = createFileRoute("/ministeres")({
  head: () => ({
    meta: [
      { title: "Nos Ministères — Église Rehoboth Imara Inyota Bwiza" },
      { name: "description", content: "Découvrez nos 12 ministères : jeunesse, femmes, hommes, enfants, louange, chorale, médias, intercession, évangélisation, couples, familles, action sociale." },
    ],
  }),
  component: Ministries,
});

const ministries = [
  { name: "Jeunesse", desc: "Une génération enflammée pour Christ.", head: "Sarah I.", time: "Vendredi 19:00", img: communityImg },
  { name: "Femmes", desc: "Filles du Roi affermies et rayonnantes.", head: "Chantal M.", time: "Samedi 15:00", img: communityImg },
  { name: "Hommes", desc: "Serviteurs, pères, guerriers.", head: "David K.", time: "Samedi 06:00", img: communityImg },
  { name: "Enfants", desc: "Éduquer les leaders de demain.", head: "Grâce N.", time: "Dimanche 09:00", img: childrenImg },
  { name: "Louange", desc: "Excellence dans l'adoration prophétique.", head: "Emmanuel B.", time: "Mercredi 18:00", img: worshipImg },
  { name: "Chorale", desc: "Voix unies pour la gloire de Dieu.", head: "Ruth A.", time: "Jeudi 18:30", img: worshipImg },
  { name: "Médias", desc: "Proclamer l'Évangile par tous les canaux.", head: "Josué M.", time: "Sur projets", img: heroImg },
  { name: "Intercession", desc: "Veilleurs sur les murs.", head: "Esther L.", time: "Mardi 05:30", img: prayerImg },
  { name: "Évangélisation", desc: "Sortir gagner les âmes.", head: "Paul T.", time: "Samedi 09:00", img: heroImg },
  { name: "Couples", desc: "Bâtir des mariages selon le cœur de Dieu.", head: "Fam. Ntahomvukiye", time: "Bimensuel", img: bibleImg },
  { name: "Familles", desc: "Restaurer les foyers, transmettre la foi.", head: "Fam. Ndayishimiye", time: "Mensuel", img: bibleImg },
  { name: "Action sociale", desc: "Main tendue vers les plus démunis.", head: "Sœur Marie", time: "Sur projets", img: socialImg },
];

function Ministries() {
  return (
    <>
      <PageHero image={worshipImg} eyebrow="Servir ensemble" title="Nos ministères" subtitle="Douze équipes, une même vision : voir Christ formé, servi et proclamé." />

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 0.08}>
              <article className="group bg-card border border-border overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-deep/70 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 font-serif text-2xl text-white">{m.name}</h3>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
                  <dl className="mt-6 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <dt className="eyebrow text-muted-foreground mb-1">Responsable</dt>
                      <dd className="font-semibold text-foreground">{m.head}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-muted-foreground mb-1">Horaires</dt>
                      <dd className="font-semibold text-foreground">{m.time}</dd>
                    </div>
                  </dl>
                  <button className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-royal dark:text-gold self-start border-b border-gold pb-0.5 hover:gap-4 transition-all">
                    Découvrir <ArrowRight className="size-3" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
