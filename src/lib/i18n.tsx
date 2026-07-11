import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en" | "rn" | "sw";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "rn", label: "RN" },
  { code: "sw", label: "SW" },
];

type Dict = Record<string, string>;

const dict: Record<Lang, Dict> = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.pastor": "Le Pasteur",
    "nav.ministries": "Ministères",
    "nav.sermons": "Prédications",
    "nav.events": "Événements",
    "nav.gallery": "Galerie",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.donate": "Faire un don",
    "nav.prayer": "Demande de prière",
    "cta.join": "Nous rejoindre",
    "cta.live": "Culte en direct",
    "cta.give": "Donner",
    "cta.discover": "Découvrir",
    "cta.subscribe": "S'abonner",
    "cta.send": "Envoyer",
    "hero.welcome": "Bienvenue à la maison",
    "hero.title": "Rehoboth Imara Inyota Bwiza",
    "hero.subtitle": "Un lieu où la présence de Dieu transforme les vies, restaure les familles et révèle les destinées.",
    "verse.eyebrow": "Verset du jour",
    "stats.members": "Membres actifs",
    "stats.ministries": "Ministères",
    "stats.years": "Années d'impact",
    "stats.services": "Cultes hebdomadaires",
    "section.vision": "Notre vision",
    "section.mission": "Notre mission",
    "section.values": "Nos valeurs",
    "section.events": "Événements à venir",
    "section.sermons": "Dernières prédications",
    "section.ministries": "Nos ministères",
    "section.testimonials": "Témoignages",
    "section.gallery": "Instants partagés",
    "section.donate": "Soutenir la vision",
    "section.newsletter": "Restez inspirés",
    "footer.stayInspired": "Recevez nos enseignements et annonces chaque semaine.",
    "footer.rights": "Tous droits réservés.",
    "theme.toggle": "Changer de thème",
    "lang.toggle": "Changer de langue",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.pastor": "The Pastor",
    "nav.ministries": "Ministries",
    "nav.sermons": "Sermons",
    "nav.events": "Events",
    "nav.gallery": "Gallery",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.donate": "Give",
    "nav.prayer": "Prayer request",
    "cta.join": "Join us",
    "cta.live": "Watch live",
    "cta.give": "Give",
    "cta.discover": "Discover",
    "cta.subscribe": "Subscribe",
    "cta.send": "Send",
    "hero.welcome": "Welcome home",
    "hero.title": "Rehoboth Imara Inyota Bwiza",
    "hero.subtitle": "A place where God's presence transforms lives, restores families and reveals destinies.",
    "verse.eyebrow": "Verse of the day",
    "stats.members": "Active members",
    "stats.ministries": "Ministries",
    "stats.years": "Years of impact",
    "stats.services": "Weekly services",
    "section.vision": "Our vision",
    "section.mission": "Our mission",
    "section.values": "Our values",
    "section.events": "Upcoming events",
    "section.sermons": "Latest sermons",
    "section.ministries": "Our ministries",
    "section.testimonials": "Testimonies",
    "section.gallery": "Shared moments",
    "section.donate": "Support the vision",
    "section.newsletter": "Stay inspired",
    "footer.stayInspired": "Get our weekly teachings and announcements.",
    "footer.rights": "All rights reserved.",
    "theme.toggle": "Toggle theme",
    "lang.toggle": "Change language",
  },
  rn: {
    "nav.home": "Akaganuke",
    "nav.about": "Turi bande",
    "nav.pastor": "Umushumba",
    "nav.ministries": "Ubusuku",
    "nav.sermons": "Inyigisho",
    "nav.events": "Ibiraba",
    "nav.gallery": "Amasanamu",
    "nav.blog": "Inkuru",
    "nav.contact": "Twandikire",
    "nav.donate": "Tanga",
    "nav.prayer": "Sengera",
    "cta.join": "Twifatanye",
    "cta.live": "Raba ubu",
    "cta.give": "Tanga",
    "cta.discover": "Menya",
    "cta.subscribe": "Iyandikishe",
    "cta.send": "Rungika",
    "hero.welcome": "Ikaze i muhira",
    "hero.title": "Rehoboth Imara Inyota Bwiza",
    "hero.subtitle": "Ahantu ukuboneka kw'Imana guhindura ubuzima, kugarukana imiryango no gushira ku mugaragaro imigambi.",
    "verse.eyebrow": "Ijambo ry'uyu munsi",
    "stats.members": "Abanywanyi",
    "stats.ministries": "Ubusuku",
    "stats.years": "Imyaka",
    "stats.services": "Amateraniro",
    "section.vision": "Ivyo twipfuza",
    "section.mission": "Ubutumwa bwacu",
    "section.values": "Indangagaciro",
    "section.events": "Ibiraba biraje",
    "section.sermons": "Inyigisho zisha",
    "section.ministries": "Ubusuku bwacu",
    "section.testimonials": "Intahe",
    "section.gallery": "Ivyacu",
    "section.donate": "Shigikira",
    "section.newsletter": "Guma witeguye",
    "footer.stayInspired": "Ronka inyigisho n'amakuru buri ndwi.",
    "footer.rights": "Uburenganzira bwose burakingiwe.",
    "theme.toggle": "Hindura ibara",
    "lang.toggle": "Hindura ururimi",
  },
  sw: {
    "nav.home": "Nyumbani",
    "nav.about": "Kuhusu",
    "nav.pastor": "Mchungaji",
    "nav.ministries": "Huduma",
    "nav.sermons": "Mahubiri",
    "nav.events": "Matukio",
    "nav.gallery": "Picha",
    "nav.blog": "Blogu",
    "nav.contact": "Wasiliana",
    "nav.donate": "Toa",
    "nav.prayer": "Ombi la maombi",
    "cta.join": "Jiunge nasi",
    "cta.live": "Tazama moja kwa moja",
    "cta.give": "Toa",
    "cta.discover": "Gundua",
    "cta.subscribe": "Jiandikishe",
    "cta.send": "Tuma",
    "hero.welcome": "Karibu nyumbani",
    "hero.title": "Rehoboth Imara Inyota Bwiza",
    "hero.subtitle": "Mahali ambapo uwepo wa Mungu unabadilisha maisha, unarejesha familia na kufunua hatima.",
    "verse.eyebrow": "Mstari wa siku",
    "stats.members": "Wanachama",
    "stats.ministries": "Huduma",
    "stats.years": "Miaka",
    "stats.services": "Ibada",
    "section.vision": "Maono yetu",
    "section.mission": "Utume wetu",
    "section.values": "Maadili yetu",
    "section.events": "Matukio yajayo",
    "section.sermons": "Mahubiri mapya",
    "section.ministries": "Huduma zetu",
    "section.testimonials": "Ushuhuda",
    "section.gallery": "Nyakati zetu",
    "section.donate": "Unga mkono maono",
    "section.newsletter": "Endelea kuvutiwa",
    "footer.stayInspired": "Pokea mafundisho na matangazo yetu ya kila wiki.",
    "footer.rights": "Haki zote zimehifadhiwa.",
    "theme.toggle": "Badilisha mandhari",
    "lang.toggle": "Badilisha lugha",
  },
};

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (saved && dict[saved]) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
  };

  const t = (key: string) => dict[lang][key] ?? dict.fr[key] ?? key;

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function useT() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useT must be used within I18nProvider");
  return ctx;
}
