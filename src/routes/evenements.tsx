import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Calendar, MapPin } from "lucide-react";
import { useState } from "react";
import prayerImg from "@/assets/prayer.jpg";
import communityImg from "@/assets/community.jpg";
import socialImg from "@/assets/social-action.jpg";
import worshipImg from "@/assets/worship-band.jpg";
import heroImg from "@/assets/hero-worship.jpg";

export const Route = createFileRoute("/evenements")({
  head: () => ({
    meta: [
      { title: "Événements — Église Rehoboth Imara Inyota Bwiza" },
      { name: "description", content: "Conférences, veillées, séminaires, baptêmes, mariages et campagnes d'évangélisation. Inscrivez-vous en ligne." },
    ],
  }),
  component: Events,
});

const events = [
  { d: "12", m: "OCT", title: "Nuit de la Traversée", cat: "Veillée", place: "Sanctuaire", img: prayerImg },
  { d: "19", m: "OCT", title: "Impact Jeunesse", cat: "Conférence", place: "Grande salle", img: communityImg },
  { d: "26", m: "OCT", title: "Séminaire des couples", cat: "Séminaire", place: "Annexe", img: communityImg },
  { d: "05", m: "NOV", title: "Action Compassion", cat: "Action sociale", place: "Quartier Buyenzi", img: socialImg },
  { d: "16", m: "NOV", title: "Baptême des nouveaux disciples", cat: "Baptême", place: "Lac Tanganyika", img: worshipImg },
  { d: "30", m: "NOV", title: "Croisade d'évangélisation", cat: "Croisade", place: "Place publique", img: heroImg },
];

function Events() {
  const [form, setForm] = useState({ name: "", email: "", event: "" });
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero image={communityImg} eyebrow="Calendrier" title="Événements à venir" subtitle="Marquez vos calendriers. Chaque rendez-vous est une occasion de croître, servir et rencontrer Dieu." />

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * 0.08}>
              <article className="group bg-card border border-border overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={e.img} alt={e.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-gold text-accent-foreground text-center py-2 px-3">
                    <div className="font-serif text-2xl font-bold leading-none">{e.d}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest">{e.m}</div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="eyebrow text-gold mb-2">{e.cat}</p>
                  <h3 className="font-serif text-xl mb-3">{e.title}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-2 mt-auto">
                    <MapPin className="size-3.5" /> {e.place}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface" eyebrow="Inscription" title="Réservez votre place" center>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="max-w-xl mx-auto grid gap-4"
        >
          <input required maxLength={80} placeholder="Nom complet" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-12 px-4 border border-border bg-card outline-none focus:border-gold text-sm" />
          <input required type="email" maxLength={120} placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-12 px-4 border border-border bg-card outline-none focus:border-gold text-sm" />
          <select required value={form.event} onChange={(e) => setForm({ ...form, event: e.target.value })} className="h-12 px-4 border border-border bg-card outline-none focus:border-gold text-sm">
            <option value="">Choisir un événement</option>
            {events.map((e) => <option key={e.title}>{e.title}</option>)}
          </select>
          <button className="h-14 bg-royal text-white font-bold text-xs uppercase tracking-widest hover:bg-gold hover:text-accent-foreground transition-colors inline-flex items-center justify-center gap-2">
            <Calendar className="size-4" /> S'inscrire
          </button>
          {sent && <p className="text-center text-gold font-semibold">Inscription reçue. Nous vous contacterons rapidement.</p>}
        </form>
      </Section>
    </>
  );
}
