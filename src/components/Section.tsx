import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  intro,
  children,
  center = false,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className="container-page">
        {(eyebrow || title || intro) && (
          <div className={`mb-14 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {title && <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">{title}</h2>}
            {intro && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
