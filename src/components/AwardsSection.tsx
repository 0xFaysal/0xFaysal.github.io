import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export function AwardsSection() {
  if (!portfolioData.awards || portfolioData.awards.length === 0) return null;

  return (
    <section id="awards" aria-labelledby="awards-title" className="pt-14 sm:pt-20">
      {/* Section Header */}
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <h2 id="awards-title" className="flex items-baseline gap-3">
          <span className="font-serif text-[2rem] leading-none sm:text-[2.25rem]">
            Achievements
          </span>
        </h2>
      </div>

      {/* List of Awards */}
      <div className="space-y-14">
        {portfolioData.awards.map((award, index) => (
          <article
            key={index}
            className={`space-y-6 ${
              index > 0 ? "border-t border-border/50 pt-12" : ""
            }`}
          >
            {/* Overline & Date */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {award.event}
                </span>
                <span className="font-mono text-xs tabular-nums text-muted-foreground">
                  {award.date}
                </span>
              </div>

              <h3 className="mt-2 font-serif text-[1.65rem] sm:text-[2rem] leading-tight text-foreground">
                {award.title}
              </h3>

              <p className="mt-1.5 text-xs text-muted-foreground">
                {award.projectTitle && award.projectUrl ? (
                  <>
                    Awarded for{" "}
                    <a
                      href={award.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
                    >
                      {award.projectTitle}
                    </a>{" "}
                    · {award.team}
                  </>
                ) : (
                  <>
                    {award.team} · {award.category || award.location}
                  </>
                )}
              </p>
            </div>

            {/* Narrative Copy */}
            <p className="max-w-[66ch] text-sm leading-relaxed text-foreground/85">
              {award.description}
            </p>

            {/* Next Stage Note (if applicable) */}
            {award.nextStage && (
              <div className="border-l border-border pl-3.5 py-0.5 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">Next Stage:</span>{" "}
                <span>{award.nextStage}</span>
                {award.nextStageDates && (
                  <span className="ml-1.5 font-mono text-muted-foreground/80">
                    ({award.nextStageDates})
                  </span>
                )}
              </div>
            )}

            {/* Minimalist Editorial Links */}
            {award.links && award.links.length > 0 && (
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-xs text-muted-foreground">
                {award.links.map((link, linkIdx) => (
                  <a
                    key={linkIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}

            {/* Curated 2-Column Editorial Photography */}
            {award.images && award.images.length > 0 && (
              <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                {award.images.map((img, i) => (
                  <figure key={i} className="group space-y-2">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-sm border border-border/80 bg-card">
                      <Image
                        src={img.src}
                        alt={img.alt || img.caption}
                        width={640}
                        height={480}
                        className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-90"
                      />
                    </div>
                    <figcaption className="text-xs leading-relaxed text-muted-foreground">
                      {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
