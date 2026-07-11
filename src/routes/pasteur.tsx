import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Facebook, Instagram, Youtube, Quote } from "lucide-react";
import pastorImg from "@/assets/pastor.jpg";

export const Route = createFileRoute("/pasteur")({
  head: () => ({
    meta: [
      { title: "Le Pasteur — Église Rehoboth Imara Inyota Bwiza" },
      { name: "description", content: "Découvrez le pasteur de l'Église Rehoboth : biographie, appel, parcours et message." },
    ],
  }),
  component: Pastor,
});

function Pastor() {
  return (
    <>
      <section className="relative pt-32 pb-24 bg-surface overflow-hidden">
        <div className="container-page grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden max-w-md mx-auto">
              <img src={pastorImg} alt="Portrait du pasteur" className="w-full h-full object-cover" width={1200} height={1500} />
              <div className="absolute -bottom-6 -left-6 hidden md:block bg-royal text-white px-6 py-4 shadow-elegant">
                <div className="eyebrow text-gold">Depuis 1998</div>
                <div className="font-serif text-lg mt-1">Serviteur de Dieu</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="eyebrow mb-4">Le pasteur</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Un père spirituel <span className="italic text-gold">pour son temps</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Homme de prière, prédicateur oint et bâtisseur d'hommes, notre pasteur porte à cœur la formation de disciples solides et l'établissement du royaume de Dieu dans les nations.
            </p>
            <div className="mt-8 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="grid place-items-center size-11 rounded-full border border-border hover:border-gold hover:text-gold transition-colors">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Section eyebrow="Son parcours" title="Un appel façonné dans la prière">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl">
          {[
            { t: "L'appel", d: "Saisi jeune par la présence de Dieu, il répond à l'appel du ministère au milieu des années 90, après une rencontre décisive avec le Seigneur." },
            { t: "La formation", d: "Formé au sein d'écoles bibliques reconnues et affermi par des mentors, il consacre ces années à l'étude de la Parole et à la prière." },
            { t: "Le ministère", d: "Il fonde l'Église Rehoboth avec une poignée de fidèles et voit Dieu bâtir une communauté vibrante impactant familles, jeunesse et nations." },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 0.1}>
              <div className="border-t-2 border-gold pt-6">
                <div className="font-serif text-4xl text-gold mb-2">0{i + 1}</div>
                <h3 className="font-serif text-2xl mb-3">{s.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="py-24 bg-royal text-white">
        <div className="container-page max-w-4xl text-center">
          <Reveal>
            <Quote className="size-12 text-gold mx-auto mb-6" />
            <blockquote className="font-serif italic text-3xl md:text-4xl leading-relaxed text-balance">
              « Dieu ne cherche pas des hommes parfaits, il cherche des cœurs disponibles. Quand tu réponds oui, il fait toujours plus que tu ne peux demander. »
            </blockquote>
            <cite className="mt-6 block eyebrow text-gold not-italic">— Message du pasteur</cite>
          </Reveal>
        </div>
      </section>

      <Section eyebrow="Son message" title="Vivre l'Évangile avec puissance et amour">
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
          <Reveal>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Le cœur du pasteur est de voir l'Église exercer une foi vivante, prier avec puissance, servir avec compassion et proclamer avec audace l'espérance de Jésus-Christ à ce monde.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Il enseigne une spiritualité incarnée : marchée dans la maison, exprimée dans le travail, prouvée dans l'épreuve et couronnée dans la mission.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
