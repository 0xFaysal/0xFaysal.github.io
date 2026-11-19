import { Linkedin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="pt-14 sm:pt-20">
      <div className="mb-6 flex items-baseline justify-between gap-4">
        <h2 id="contact-title" className="flex items-baseline gap-3">
          <span className="font-serif text-[2rem] leading-none sm:text-[2.25rem]">
            Contact
          </span>
        </h2>
      </div>

      <p className="max-w-[50ch] leading-relaxed text-muted-foreground">
        For frontend internship and junior developer opportunities, reach me by email or on LinkedIn.
      </p>

      <a
        href={portfolioData.socials.email}
        className="mt-4 inline-block max-w-full break-words font-serif text-[1.5rem] leading-tight underline decoration-border decoration-1 underline-offset-[6px] transition-colors duration-300 hover:decoration-foreground sm:text-[2.5rem]"
      >
        {portfolioData.email}
      </a>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <a
          href={portfolioData.socials.cv}
          download="Faysal_Ahmed_Fahim_CV.pdf"
          className="inline-flex items-center gap-2 rounded-sm bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity duration-300 hover:opacity-85"
        >
          Download CV <span aria-hidden="true">↓</span>
        </a>
        <a
          href={portfolioData.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-sm border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-muted-foreground"
        >
          <Linkedin aria-hidden="true" size={15} /> LinkedIn
        </a>
      </div>
    </section>
  );
}
