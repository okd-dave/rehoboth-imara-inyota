import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import communityImg from "@/assets/community.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Église Rehoboth Imara Inyota Bwiza" },
      { name: "description", content: "Nous contacter : adresse, téléphone, email, horaires. Formulaire disponible et WhatsApp." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero image={communityImg} eyebrow="Nous contacter" title="Parlons ensemble" subtitle="Une question, une visite, une prière ? Nous serions ravis de vous rencontrer." />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { i: MapPin, t: "Adresse", d: "Avenue de la Paix, Bujumbura, Burundi" },
                { i: Phone, t: "Téléphone", d: "+257 22 00 00 00" },
                { i: Mail, t: "Email", d: "contact@rehoboth-imara.org" },
                { i: Clock, t: "Horaires", d: "Dim 9h & 11h30 · Mer 18h30 · Ven 19h" },
              ].map((c) => (
                <div key={c.t} className="p-6 border border-border bg-card">
                  <c.i className="size-6 text-gold mb-4" />
                  <div className="eyebrow mb-1">{c.t}</div>
                  <div className="text-sm text-foreground leading-relaxed">{c.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="eyebrow mb-4">Suivez-nous</p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Youtube, MessageCircle].map((Icon, i) => (
                  <a key={i} href="#" className="grid place-items-center size-12 rounded-full border border-border hover:border-gold hover:text-gold hover:bg-gold/5 transition-colors">
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>

            <a href="https://wa.me/25722000000" className="mt-6 inline-flex items-center gap-2 h-12 px-6 bg-[#25D366] text-white font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
              <MessageCircle className="size-4" /> WhatsApp
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="bg-card border border-border p-8 md:p-10 grid gap-5">
              <h2 className="font-serif text-3xl mb-2">Écrivez-nous</h2>
              <label className="block">
                <span className="eyebrow block mb-2">Nom</span>
                <input required maxLength={80} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full h-12 px-4 border border-border bg-background outline-none focus:border-gold text-sm" />
              </label>
              <label className="block">
                <span className="eyebrow block mb-2">Email</span>
                <input required type="email" maxLength={120} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full h-12 px-4 border border-border bg-background outline-none focus:border-gold text-sm" />
              </label>
              <label className="block">
                <span className="eyebrow block mb-2">Message</span>
                <textarea required maxLength={2000} rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full p-4 border border-border bg-background outline-none focus:border-gold text-sm resize-none" />
              </label>
              <button className="h-14 bg-royal text-white font-bold text-xs uppercase tracking-widest hover:bg-gold hover:text-accent-foreground transition-colors inline-flex items-center justify-center gap-2">
                <Send className="size-4" /> Envoyer
              </button>
              {sent && <p className="text-center text-gold font-semibold">Merci ! Nous vous répondrons rapidement.</p>}
            </form>
          </Reveal>
        </div>
      </Section>

      <section aria-label="Carte">
        <iframe
          title="Localisation de l'église"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15947.09!2d29.36!3d-3.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBujumbura!5e0!3m2!1sfr!2s!4v1700000000000"
          className="w-full h-[420px] border-0 grayscale hover:grayscale-0 transition-all duration-500"
          loading="lazy"
        />
      </section>
    </>
  );
}
