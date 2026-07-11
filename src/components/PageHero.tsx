import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface Props {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHero({ image, eyebrow, title, subtitle, children }: Props) {
  return (
    <section className="relative pt-32 pb-24 min-h-[70vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          aria-hidden
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-deep/70 via-royal-deep/50 to-royal-deep/95" />
      </div>
      <div className="container-page">
        <Reveal>
          {eyebrow && <p className="eyebrow text-gold mb-4">{eyebrow}</p>}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white max-w-4xl leading-[1.05] text-balance">
            {title}
          </h1>
          {subtitle && <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl italic font-light">{subtitle}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
