import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, ArrowRight, Calendar, Heart, Users, Music, Sparkles, Baby, HandHeart, Globe2 } from "lucide-react";
import { useT } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { Section } from "@/components/Section";
import heroImg from "@/assets/hero-worship.jpg";
import bibleImg from "@/assets/bible.jpg";
import worshipImg from "@/assets/worship-band.jpg";
import communityImg from "@/assets/community.jpg";
import childrenImg from "@/assets/children.jpg";
import prayerImg from "@/assets/prayer.jpg";
import socialImg from "@/assets/social-action.jpg";
import pastorImg from "@/assets/pastor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Accueil — Église Rehoboth Imara Inyota Bwiza" },
      { name: "description", content: "Bienvenue à Rehoboth Imara Inyota Bwiza. Cultes, prédications, ministères et communauté vivante." },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useT();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Assemblée en adoration" className="w-full h-full object-cover animate-ken-burns" width={1920} height={1080} />
          <div className="absolute inset-0 bg-royal-deep/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-royal-deep/40 via-transparent to-royal-deep" />
        </div>

        <div className="container-page relative z-10 text-center pt-24">
          <Reveal>
            <p className="eyebrow text-gold mb-6">{t("hero.welcome")}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.02] max-w-5xl mx-auto text-balance">
              Où la grâce rencontre <br />
              <span className="italic text-gold">la transformation</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-white/85 font-light italic">
              {t("hero.subtitle")}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center h-14 px-8 bg-white text-royal-deep font-bold text-xs uppercase tracking-widest hover:bg-gold transition-colors">
                {t("cta.join")}
              </Link>
              <a href="#" className="inline-flex items-center justify-center gap-2 h-14 px-8 border border-white/40 text-white font-bold text-xs uppercase tracking-widest backdrop-blur-sm hover:bg-white/10 transition-all">
                <Play className="size-4 fill-current" /> {t("cta.live")}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-[10px] uppercase tracking-[0.3em] animate-float">
          Défiler
        </div>
      </section>

      {/* VERSET DU JOUR */}
      <section className="bg-royal text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none flex items-center justify-center">
          <span className="font-serif text-[18rem] leading-none select-none">✝</span>
        </div>
        <div className="container-page relative z-10 max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow text-gold mb-6">{t("verse.eyebrow")}</p>
            <blockquote className="font-serif italic text-2xl md:text-4xl leading-relaxed text-balance">
              « Élargis l'espace de ta tente ; qu'on déploie les couvertures de tes demeures : ne retiens pas ! »
            </blockquote>
            <cite className="mt-6 block text-xs font-bold uppercase tracking-[0.3em] text-gold not-italic">
              Ésaïe 54:2
            </cite>
          </Reveal>
        </div>
      </section>

      {/* VISION / MISSION / VALEURS */}
      <Section eyebrow="Notre ADN" title="Ancrés dans la foi, tournés vers l'avenir" center>
        <div className="grid md:grid-cols-3 gap-10 md:gap-6 mt-4">
          {[
            { title: t("section.vision"), body: "Bâtir une génération de croyants affermis, capables d'influencer positivement toutes les sphères de la société." },
            { title: t("section.mission"), body: "Prêcher l'Évangile pur, manifester la compassion du Christ et former des disciples authentiques." },
            { title: t("section.values"), body: "Excellence dans le service, intégrité de vie, amour fraternel et soumission à la Parole de Dieu." },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1} className="group text-center px-4">
              <div className="mx-auto grid place-items-center size-16 rounded-full bg-royal/5 text-gold mb-6 group-hover:bg-gold group-hover:text-royal-deep transition-all">
                <Sparkles className="size-6" />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-foreground">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* STATS */}
      <section className="bg-surface py-20 border-y border-border">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { n: 1200, s: "+", k: "stats.members" },
            { n: 15, s: "", k: "stats.ministries" },
            { n: 25, s: "", k: "stats.years" },
            { n: 3, s: "", k: "stats.services" },
          ].map((it, i) => (
            <Reveal key={it.k} delay={i * 0.08}>
              <div className="font-serif text-5xl md:text-6xl font-bold text-gold mb-3">
                <Counter to={it.n} suffix={it.s} />
              </div>
              <div className="eyebrow text-muted-foreground">{t(it.k)}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MINISTÈRES */}
      <Section eyebrow="Servir ensemble" title={t("section.ministries")}
        intro="Chaque don a sa place. Trouvez un ministère où grandir, servir et rayonner."
        center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            { icon: Music, name: "Louange", img: worshipImg },
            { icon: Baby, name: "Enfants", img: childrenImg },
            { icon: Users, name: "Jeunesse", img: communityImg },
            { icon: HandHeart, name: "Action sociale", img: socialImg },
          ].map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <Link to="/ministeres" className="group block relative aspect-[3/4] overflow-hidden">
                <img src={m.img} alt={m.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-deep via-royal-deep/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <m.icon className="size-6 text-gold mb-3" />
                  <h3 className="font-serif text-2xl text-white">{m.name}</h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-widest text-gold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {t("cta.discover")} <ArrowRight className="size-3" />
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/ministeres" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-royal dark:text-gold border-b-2 border-gold pb-1 hover:gap-4 transition-all">
            Voir tous les ministères <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* ÉVÉNEMENTS */}
      <Section eyebrow="Agenda" title={t("section.events")} className="bg-surface">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { date: "12 OCT", title: "Nuit de la Traversée", desc: "Une nuit intense de prière et d'intercession pour les nations.", img: prayerImg },
            { date: "19 OCT", title: "Impact Jeunesse", desc: "Conférence spéciale pour la nouvelle génération de leaders.", img: communityImg },
            { date: "05 NOV", title: "Action Compassion", desc: "Distribution de vivres et soins aux familles nécessiteuses.", img: socialImg },
          ].map((e, i) => (
            <Reveal key={e.title} delay={i * 0.1}>
              <article className="group bg-card border border-border overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={e.img} alt={e.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-gold text-accent-foreground px-3 py-2 text-xs font-bold tracking-widest">
                    {e.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-foreground group-hover:text-gold transition-colors">{e.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{e.desc}</p>
                  <Link to="/evenements" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-royal dark:text-gold">
                    <Calendar className="size-3" /> S'inscrire
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PRÉDICATIONS */}
      <Section eyebrow="Enseignement pastoral" title={t("section.sermons")}>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { serie: "Fondations", title: "L'architecture de la foi", desc: "Explorer les racines profondes de notre marche spirituelle.", img: bibleImg },
            { serie: "Nouveaux départs", title: "Marcher dans une vie nouvelle", desc: "Un message puissant sur la rédemption et le courage.", img: heroImg },
            { serie: "Message spécial", title: "Le rythme de la grâce", desc: "Comprendre comment se reposer dans les promesses de Dieu.", img: worshipImg },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-royal-deep/20 group-hover:bg-royal-deep/40 transition-colors" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid place-items-center size-16 rounded-full bg-gold/90 text-royal-deep opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
                      <Play className="size-6 fill-current ml-1" />
                    </div>
                  </div>
                </div>
                <p className="eyebrow text-gold mb-2">Série : {s.serie}</p>
                <h3 className="font-serif text-2xl text-foreground group-hover:text-gold transition-colors">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* TÉMOIGNAGES */}
      <Section eyebrow="Ils témoignent" title="Des vies transformées" className="bg-surface" center>
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-5xl mx-auto">
          {[
            { q: "J'ai trouvé à Rehoboth non seulement une église, mais une famille et un but. Ma vie a été radicalement transformée.", n: "Jean-Paul M." },
            { q: "L'enseignement solide et l'amour authentique de cette communauté m'ont aidée à retrouver la paix.", n: "Aline N." },
          ].map((t, i) => (
            <Reveal key={t.n} delay={i * 0.1}>
              <blockquote className="bg-card border border-border p-8 md:p-10 relative">
                <span className="absolute -top-4 left-8 font-serif text-6xl text-gold leading-none">"</span>
                <p className="font-serif italic text-lg md:text-xl text-foreground/90 leading-relaxed">
                  {t.q}
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gold" />
                  <cite className="not-italic text-sm font-bold uppercase tracking-widest text-royal dark:text-gold">{t.n}</cite>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PASTEUR */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={pastorImg} alt="Pasteur de l'Église Rehoboth" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute -bottom-4 -right-4 hidden md:block bg-gold text-accent-foreground px-6 py-4 font-serif italic">
                « Il vous appelle par votre nom »
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="eyebrow mb-4">Notre pasteur</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Un cœur de berger pour cette génération
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Homme de prière, enseignant fidèle et père spirituel, notre pasteur consacre sa vie à voir Christ formé dans chaque croyant. Sa passion : voir les âmes gagnées, les familles restaurées et les nations touchées par l'Évangile.
            </p>
            <Link to="/pasteur" className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-royal dark:text-gold border-b-2 border-gold pb-1 hover:gap-4 transition-all">
              Découvrir son parcours <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* DON CTA */}
      <section className="py-24 bg-royal-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={worshipImg} alt="" aria-hidden className="w-full h-full object-cover" />
        </div>
        <div className="container-page max-w-4xl text-center relative z-10">
          <Reveal>
            <Heart className="size-10 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">{t("section.donate")}</h2>
            <p className="text-white/75 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Votre générosité permet de propager l'Évangile, de soutenir nos actions sociales et de bâtir la maison de Dieu.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {["Dîmes", "Missions", "Construction"].map((c) => (
                <div key={c} className="p-6 border border-white/15 hover:border-gold/60 transition-colors">
                  <div className="font-serif text-xl">{c}</div>
                </div>
              ))}
            </div>
            <Link to="/don" className="inline-flex items-center h-14 px-10 bg-gold text-accent-foreground font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">
              Faire un don sécurisé
            </Link>
          </Reveal>
        </div>
      </section>

      {/* NEWSLETTER LIGHT */}
      <Section center>
        <Reveal>
          <Globe2 className="size-8 text-gold mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl mb-4">{t("section.newsletter")}</h2>
          <p className="text-muted-foreground mb-8">{t("footer.stayInspired")}</p>
          <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto flex">
            <input type="email" required maxLength={120} placeholder="votre@email.com" className="flex-1 h-12 px-4 border border-border bg-card outline-none focus:border-gold text-sm" />
            <button className="h-12 px-6 bg-royal text-white font-bold text-xs uppercase tracking-widest hover:bg-gold hover:text-accent-foreground transition-colors">
              {t("cta.subscribe")}
            </button>
          </form>
        </Reveal>
      </Section>
    </>
  );
}
