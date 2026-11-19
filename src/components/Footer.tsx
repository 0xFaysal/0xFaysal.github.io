import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-10 pt-14 sm:pt-20">
      <div className="mx-auto w-full max-w-[720px] px-5 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border/50 pt-6 text-xs text-muted-foreground">
          <p>© {currentYear} {portfolioData.name}</p>
          <p>{portfolioData.location}</p>
        </div>
      </div>
    </footer>
  );
}
