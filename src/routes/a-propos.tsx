import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Check } from "lucide-react";
import img from "@/assets/community.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Église Rehoboth Imara Inyota Bwiza" },
      { name: "description", content: "Histoire, vision, mission, valeurs et déclaration de foi de l'Église Rehoboth Imara Inyota Bwiza." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero image={img} eyebrow="Notre histoire" title="Une maison bâtie sur la Roche" subtitle="Depuis plus de deux décennies, une communauté qui aime Dieu, aime son prochain et rayonne son royaume." />

      <Section eyebrow="Origines" title="D'un petit groupe de prière à une famille rayonnante">
        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fondée dans les années 1990 par une poignée de croyants passionnés de la présence de Dieu, l'Église Rehoboth Imara Inyota Bwiza est née d'un désir simple : voir Christ formé dans chaque cœur et voir sa gloire remplir la terre.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aujourd'hui, l'église rassemble des centaines de familles issues de toutes générations et de tous horizons, unies par la même foi vivante et une passion commune pour l'Évangile de Jésus-Christ.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-surface" eyebrow="Fondements" title="Ce qui nous anime" center>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: "Vision", d: "Bâtir une génération de croyants affermis capables d'influencer positivement toutes les sphères de la société." },
            { t: "Mission", d: "Prêcher l'Évangile pur, manifester la compassion du Christ et former des disciples authentiques." },
            { t: "Valeurs", d: "Excellence, intégrité, amour fraternel et soumission à la Parole." },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 0.1}>
              <div className="bg-card p-10 border border-border h-full">
                <h3 className="font-serif text-2xl mb-4 text-royal dark:text-gold">{v.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Déclaration de foi" title="Ce que nous croyons">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl">
          {[
            "La Bible est la Parole inspirée de Dieu, infaillible et inerrante.",
            "Un seul Dieu se révèle en trois personnes : Père, Fils et Saint-Esprit.",
            "Jésus-Christ est le Fils de Dieu, mort, ressuscité et Seigneur de tous.",
            "Le salut est un don gratuit par la foi en Jésus-Christ.",
            "Le baptême du Saint-Esprit et ses dons pour l'édification.",
            "L'Église est le corps de Christ, appelée à faire des disciples.",
            "Le retour glorieux de Jésus-Christ pour son Église.",
            "La vie éternelle promise à tous ceux qui croient.",
          ].map((c, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="flex items-start gap-3">
                <span className="grid place-items-center size-6 rounded-full bg-gold/15 text-gold shrink-0 mt-0.5">
                  <Check className="size-3.5" />
                </span>
                <p className="text-foreground leading-relaxed">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface" eyebrow="Pourquoi nous rejoindre" title="Une famille où grandir" center>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {["Enseignement solide", "Prière puissante", "Adoration authentique", "Amour fraternel"].map((v, i) => (
            <Reveal key={v} delay={i * 0.08}>
              <div className="text-center p-6">
                <div className="font-serif text-4xl text-gold mb-3">0{i + 1}</div>
                <h4 className="font-serif text-xl text-foreground">{v}</h4>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
