import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Send, Heart } from "lucide-react";
import { useState } from "react";
import prayerImg from "@/assets/prayer.jpg";

export const Route = createFileRoute("/priere")({
  head: () => ({
    meta: [
      { title: "Demande de prière — Église Rehoboth Imara Inyota Bwiza" },
      { name: "description", content: "Confiez-nous vos sujets de prière. Notre équipe d'intercession portera votre requête avec foi et discrétion." },
    ],
  }),
  component: Prayer,
});

function Prayer() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero image={prayerImg} eyebrow="Nous prions avec vous" title="Demande de prière" subtitle="Il n'y a rien de trop grand ni de trop petit pour Dieu. Confiez-nous votre sujet en toute discrétion." />

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <Heart className="size-10 text-gold mb-6" />
              <h2 className="font-serif text-3xl mb-4">Un cœur qui écoute</h2>
              <p className="text-muted-foreground leading-relaxed">
                Chaque requête est traitée avec confidentialité par notre équipe d'intercession. Nous croyons que Dieu répond, guérit et restaure.
              </p>
              <blockquote className="mt-8 pl-6 border-l-2 border-gold font-serif italic text-lg text-foreground">
                « Approchons-nous donc avec assurance du trône de la grâce. »
                <cite className="mt-2 block text-xs eyebrow text-gold not-italic">Hébreux 4:16</cite>
              </blockquote>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
              className="bg-card border border-border p-8 md:p-10 grid gap-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <label className="block">
                  <span className="eyebrow block mb-2">Nom</span>
                  <input required maxLength={80} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full h-12 px-4 border border-border bg-background outline-none focus:border-gold text-sm" />
                </label>
                <label className="block">
                  <span className="eyebrow block mb-2">Email</span>
                  <input required type="email" maxLength={120} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full h-12 px-4 border border-border bg-background outline-none focus:border-gold text-sm" />
                </label>
              </div>
              <label className="block">
                <span className="eyebrow block mb-2">Téléphone (facultatif)</span>
                <input maxLength={30} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full h-12 px-4 border border-border bg-background outline-none focus:border-gold text-sm" />
              </label>
              <label className="block">
                <span className="eyebrow block mb-2">Sujet</span>
                <input required maxLength={120} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full h-12 px-4 border border-border bg-background outline-none focus:border-gold text-sm" />
              </label>
              <label className="block">
                <span className="eyebrow block mb-2">Votre requête</span>
                <textarea required maxLength={2000} rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full p-4 border border-border bg-background outline-none focus:border-gold text-sm resize-none" />
              </label>
              <button className="h-14 bg-royal text-white font-bold text-xs uppercase tracking-widest hover:bg-gold hover:text-accent-foreground transition-colors inline-flex items-center justify-center gap-2">
                <Send className="size-4" /> Envoyer la demande
              </button>
              {sent && <p className="text-center text-gold font-semibold">Merci. Votre requête a été reçue. Nous prions dès aujourd'hui.</p>}
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
