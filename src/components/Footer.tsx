import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useT } from "@/lib/i18n";

export function Footer() {
  const { t } = useT();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="mt-24 bg-royal-deep text-white/85">
      <div className="container-page py-20 grid gap-14 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="grid place-items-center size-10 rounded-full bg-gold text-royal-deep font-serif text-lg">R</span>
            <span className="font-serif text-xl font-bold text-white">Rehoboth</span>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            Une église centrée sur le Christ, rayonnante de vie et de foi, ancrée dans la parole et tournée vers les nations.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Réseau social" className="grid place-items-center size-10 rounded-full border border-white/15 hover:border-gold hover:text-gold transition-colors">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="eyebrow mb-6">Horaires</h5>
          <ul className="space-y-3 text-sm text-white/70">
            <li>Dimanche — 09:00 & 11:30</li>
            <li>Mercredi — 18:30 (Prière)</li>
            <li>Vendredi — 19:00 (Jeunesse)</li>
          </ul>
        </div>

        <div>
          <h5 className="eyebrow mb-6">Contact</h5>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2"><MapPin className="size-4 mt-0.5 shrink-0 text-gold" /><span>Avenue de la Paix, Bujumbura</span></li>
            <li className="flex items-center gap-2"><Phone className="size-4 shrink-0 text-gold" /><span>+257 22 00 00 00</span></li>
            <li className="flex items-center gap-2"><Mail className="size-4 shrink-0 text-gold" /><span>contact@rehoboth-imara.org</span></li>
          </ul>
        </div>

        <div>
          <h5 className="eyebrow mb-6">{t("section.newsletter")}</h5>
          <p className="text-sm text-white/60 mb-4">{t("footer.stayInspired")}</p>
          <form
            onSubmit={(e) => { e.preventDefault(); setDone(true); setEmail(""); }}
            className="flex border-b border-white/20 focus-within:border-gold py-2"
          >
            <input
              type="email"
              required
              maxLength={120}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              className="bg-transparent flex-1 outline-none text-sm text-white placeholder:text-white/40"
            />
            <button type="submit" className="text-gold text-xs font-bold uppercase tracking-widest">
              {t("cta.subscribe")}
            </button>
          </form>
          {done && <p className="mt-3 text-xs text-gold">Merci ! Vous êtes inscrit.</p>}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-widest text-white/40">
          <span>© {new Date().getFullYear()} Église Rehoboth Imara Inyota Bwiza — {t("footer.rights")}</span>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-gold">Contact</Link>
            <Link to="/priere" className="hover:text-gold">{t("nav.prayer")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
