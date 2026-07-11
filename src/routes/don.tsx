import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Heart, CreditCard, Smartphone, Landmark, Wallet, Lock } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-worship.jpg";

export const Route = createFileRoute("/don")({
  head: () => ({
    meta: [
      { title: "Faire un don — Église Rehoboth Imara Inyota Bwiza" },
      { name: "description", content: "Soutenez la vision : dîmes, offrandes, missions, construction et projets sociaux. Paiement sécurisé." },
    ],
  }),
  component: Donate,
});

const causes = [
  { title: "Dîmes", desc: "L'obéissance qui active la promesse.", icon: Heart },
  { title: "Offrandes", desc: "Un cœur reconnaissant pour la maison.", icon: Wallet },
  { title: "Missions", desc: "L'Évangile porté aux nations.", icon: Landmark },
  { title: "Construction", desc: "Bâtir la maison de Dieu.", icon: Landmark },
  { title: "Action sociale", desc: "Restaurer les vies brisées.", icon: Heart },
];

const methods = [
  { icon: CreditCard, name: "Carte bancaire" },
  { icon: Wallet, name: "PayPal" },
  { icon: Smartphone, name: "Mobile Money" },
  { icon: Landmark, name: "Virement bancaire" },
];

function Donate() {
  const [amount, setAmount] = useState<number | "">(50);
  const [cause, setCause] = useState("Dîmes");
  const [method, setMethod] = useState("Carte bancaire");
  const [done, setDone] = useState(false);

  return (
    <>
      <PageHero image={heroImg} eyebrow="Soutenir la vision" title="Faire un don" subtitle="Chaque contribution alimente une œuvre éternelle. Merci de bâtir avec nous." />

      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal>
            <h2 className="font-serif text-3xl mb-6">Choisissez votre cause</h2>
            <div className="space-y-3">
              {causes.map((c) => (
                <button
                  key={c.title}
                  onClick={() => setCause(c.title)}
                  className={`w-full text-left flex items-start gap-4 p-5 border transition-all ${cause === c.title ? "border-gold bg-gold/5" : "border-border hover:border-gold/60"}`}
                >
                  <span className="grid place-items-center size-11 rounded-full bg-royal/5 text-gold shrink-0">
                    <c.icon className="size-5" />
                  </span>
                  <div>
                    <div className="font-serif text-lg">{c.title}</div>
                    <p className="text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="bg-card border border-border p-8 md:p-10">
              <h2 className="font-serif text-3xl mb-6">Votre don</h2>

              <label className="eyebrow block mb-3">Montant</label>
              <div className="flex flex-wrap gap-2 mb-4">
                {[20, 50, 100, 250].map((v) => (
                  <button
                    type="button"
                    key={v}
                    onClick={() => setAmount(v)}
                    className={`h-12 px-5 font-bold border transition-colors ${amount === v ? "bg-royal text-white border-royal" : "border-border hover:border-gold"}`}
                  >
                    {v} €
                  </button>
                ))}
              </div>
              <input
                type="number"
                min={1}
                max={1000000}
                value={amount}
                onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
                placeholder="Autre montant"
                className="w-full h-12 px-4 border border-border bg-background outline-none focus:border-gold text-sm mb-6"
              />

              <label className="eyebrow block mb-3">Moyen de paiement</label>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {methods.map((m) => (
                  <button
                    type="button"
                    key={m.name}
                    onClick={() => setMethod(m.name)}
                    className={`flex items-center gap-2 h-12 px-4 border text-sm transition-colors ${method === m.name ? "bg-royal text-white border-royal" : "border-border hover:border-gold"}`}
                  >
                    <m.icon className="size-4" /> {m.name}
                  </button>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex justify-between text-sm mb-2"><span className="text-muted-foreground">Cause</span><span className="font-semibold">{cause}</span></div>
                <div className="flex justify-between text-sm mb-6"><span className="text-muted-foreground">Moyen</span><span className="font-semibold">{method}</span></div>
                <button className="w-full h-14 bg-gold text-accent-foreground font-bold text-xs uppercase tracking-widest hover:bg-royal hover:text-white transition-colors inline-flex items-center justify-center gap-2">
                  <Lock className="size-4" /> Donner {typeof amount === "number" ? `${amount} €` : ""}
                </button>
                <p className="mt-4 text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
                  <Lock className="size-3" /> Paiement 100% sécurisé
                </p>
                {done && <p className="mt-4 text-center text-gold font-semibold">Merci pour votre générosité ! Vous serez redirigé.</p>}
              </div>
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
