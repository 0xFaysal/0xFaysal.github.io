import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { portfolioData } from "@/data/portfolio";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-14 w-full max-w-[720px] items-center justify-between gap-2 px-5 sm:gap-4 sm:px-6">
        <Link
          href="/"
          className="font-serif text-[1.65rem] tracking-tight leading-none transition-opacity hover:opacity-80"
        >
          {portfolioData.shortName}
        </Link>
        <nav aria-label="Main" className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground sm:gap-6">
          <a className="flex min-h-10 items-center hover:text-foreground" href="#experience">
            Experience
          </a>
          <a className="flex min-h-10 items-center hover:text-foreground" href="#work">
            Projects
          </a>
          <a className="flex min-h-10 items-center hover:text-foreground" href="#contact">
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
