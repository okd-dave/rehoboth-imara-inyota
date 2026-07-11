import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Moon, Sun, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useT, LANGS, type Lang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

const NAV_KEYS = [
  { to: "/", key: "nav.home" },
  { to: "/a-propos", key: "nav.about" },
  { to: "/pasteur", key: "nav.pastor" },
  { to: "/ministeres", key: "nav.ministries" },
  { to: "/predications", key: "nav.sermons" },
  { to: "/evenements", key: "nav.events" },
  { to: "/galerie", key: "nav.gallery" },
  { to: "/blog", key: "nav.blog" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function Nav() {
  const { t, lang, setLang } = useT();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/60">
      <div className="container-page h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <span className="grid place-items-center size-10 rounded-full bg-royal text-white font-serif text-lg group-hover:bg-gold transition-colors">R</span>
          <span className="hidden sm:block font-serif text-lg font-bold tracking-tight text-foreground">Rehoboth</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-semibold uppercase tracking-wider">
          {NAV_KEYS.map(({ to, key }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`relative py-1 transition-colors hover:text-gold ${active ? "text-gold" : "text-muted-foreground"}`}
              >
                {t(key)}
                {active && <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              aria-label={t("lang.toggle")}
              className="hidden sm:flex items-center gap-1 h-11 px-3 rounded-full border border-border text-xs font-bold uppercase tracking-widest hover:border-gold transition-colors"
            >
              <Globe className="size-3.5" aria-hidden />
              {lang.toUpperCase()}
              <ChevronDown className="size-3" aria-hidden />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 min-w-[140px] rounded-lg border border-border bg-popover shadow-xl overflow-hidden">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code as Lang); setLangOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-secondary ${lang === l.code ? "text-gold font-semibold" : ""}`}
                  >
                    {l.label} — {langName(l.code as Lang)}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={toggle}
            aria-label={t("theme.toggle")}
            className="grid place-items-center size-11 rounded-full border border-border hover:border-gold hover:text-gold transition-colors"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          <Link
            to="/don"
            className="hidden md:inline-flex items-center h-11 px-5 rounded-full bg-gold text-accent-foreground text-xs font-bold uppercase tracking-widest hover:bg-royal hover:text-white transition-all"
          >
            {t("cta.give")}
          </Link>

          <button
            onClick={() => setOpen(true)}
            aria-label="Menu"
            className="lg:hidden grid place-items-center size-11 rounded-full border border-border"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden overflow-y-auto">
          <div className="container-page h-20 flex items-center justify-between">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
              <span className="grid place-items-center size-10 rounded-full bg-royal text-white font-serif text-lg">R</span>
              <span className="font-serif text-lg font-bold">Rehoboth</span>
            </Link>
            <button onClick={() => setOpen(false)} aria-label="Fermer" className="grid place-items-center size-11 rounded-full border border-border">
              <X className="size-5" />
            </button>
          </div>
          <nav className="container-page py-10 flex flex-col gap-1">
            {NAV_KEYS.map(({ to, key }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="py-4 border-b border-border font-serif text-2xl hover:text-gold transition-colors"
              >
                {t(key)}
              </Link>
            ))}
            <Link
              to="/don"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center h-14 rounded-full bg-gold text-accent-foreground text-sm font-bold uppercase tracking-widest"
            >
              {t("cta.give")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function langName(code: Lang) {
  return { fr: "Français", en: "English", rn: "Kirundi", sw: "Swahili" }[code];
}
