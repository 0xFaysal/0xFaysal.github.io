import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  return (
    <section aria-labelledby="intro-title" className="pt-10 sm:pt-16">
      <div className="grid grid-cols-[minmax(0,1fr)_clamp(6rem,31vw,11.5rem)] items-center gap-4 sm:gap-8">
        <div>
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            {portfolioData.title} <span aria-hidden="true">·</span> {portfolioData.location}
          </p>
          <h1 id="intro-title" className="font-serif text-[clamp(2.25rem,7.5vw,4.5rem)] leading-[0.98] tracking-tight">
            {portfolioData.name}
          </h1>
        </div>
        <div className="rounded-md border border-border bg-card p-1 sm:p-1.5">
          <Image
            src="/ascii-portrait-closeup.svg"
            alt="ASCII portrait of Faysal Ahmed Fahim"
            width={448}
            height={480}
            className="block h-auto w-full rounded-sm"
            priority
          />
        </div>
      </div>
      <div className="mt-5 max-w-[62ch] space-y-3 leading-relaxed text-foreground/90 sm:text-[17px]">
        <p>
          I’m a frontend developer in Dhaka and a Computer Science and Engineering
          student at United International University. I work mostly with React,
          Next.js, and TypeScript, and I enjoy building interfaces for products
          where the UI has to keep up with changing data.
        </p>
        <p>
          I interned at <a href="#experience" className="underline underline-offset-4">Algoel</a>,
          where I helped build an e-commerce storefront. My work covered responsive
          UI components, API integrations for accounts, products, and orders,
          and testing how those features behaved across browsers.
        </p>
        <p>
          On <a href="#parkease-bd" className="underline underline-offset-4">ParkEase BD</a>,
          I built map-based search and booking so drivers can find and reserve
          shared residential parking in Dhaka. I also led Team XEN’s technical work on{" "}
          <a href="#heliobay" className="underline underline-offset-4">HelioBay</a>,
          a solar EV charging project that won a national gold medal at FIRSO Bangladesh.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a href="#work" className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-85">
          View projects <ArrowDown aria-hidden="true" size={15} />
        </a>
        <a href={portfolioData.cvUrl} download="Faysal_Ahmed_Fahim_CV.pdf" className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-border px-4 py-2 text-sm font-medium hover:border-muted-foreground">
          Download CV <Download aria-hidden="true" size={15} />
        </a>
      </div>

      <nav aria-label="Professional profiles" className="mt-4 flex flex-wrap items-center gap-x-5 text-sm text-muted-foreground">
        <a className="py-2 underline underline-offset-4 hover:text-foreground" href={portfolioData.socials.github}>GitHub</a>
        <a className="py-2 underline underline-offset-4 hover:text-foreground" href={portfolioData.socials.linkedin}>LinkedIn</a>
        <a className="py-2 underline underline-offset-4 hover:text-foreground" href={portfolioData.socials.email}>Email</a>
      </nav>
    </section>
  );
}
