type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-pink dark:text-pink-strong">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl dark:text-cream">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-foreground-soft dark:text-slate-300">{description}</p> : null}
    </div>
  );
}
