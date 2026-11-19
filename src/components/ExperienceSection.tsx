import { portfolioData, type ExperienceItem } from "@/data/portfolio";

function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ul className="fade-divide">
      {items.map((item) => (
        <li key={item.organization} className="py-4 first:pt-0">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-medium">{item.title}</h3>
            <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {item.organizationUrl ? (
              <a href={item.organizationUrl} className="underline underline-offset-4 hover:text-foreground">
                {item.organization}
              </a>
            ) : item.organization}
          </p>
          <p className="mt-2 max-w-[62ch] text-sm leading-relaxed">{item.description}</p>
          {item.bulletPoints && (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed">
              {item.bulletPoints.map((point) => <li key={point}>{point}</li>)}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="pt-12 sm:pt-16">
      <h2 id="experience-title" className="mb-5 font-serif text-[2rem] leading-none sm:text-[2.25rem]">Experience</h2>
      <Timeline items={portfolioData.experience} />
    </section>
  );
}

export function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-title" className="pt-12 sm:pt-16">
      <h2 id="education-title" className="mb-5 font-serif text-[2rem] leading-none sm:text-[2.25rem]">Education</h2>
      <Timeline items={portfolioData.education} />
    </section>
  );
}
