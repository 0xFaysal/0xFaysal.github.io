import { portfolioData } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="pt-14 sm:pt-20">
      <div className="mb-6 flex items-baseline justify-between gap-4">
        <h2 id="skills-title" className="flex items-baseline gap-3">
          <span className="font-serif text-[2rem] leading-none sm:text-[2.25rem]">
            Skills
          </span>
        </h2>
      </div>

      <div className="space-y-6">
        {portfolioData.skills.map((category, index) => (
          <div key={index} className="space-y-2.5">
            <h3 className="text-sm font-medium text-foreground/90">
              {category.name}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="rounded-sm border border-border bg-card/50 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground hover:border-muted-foreground/40"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
