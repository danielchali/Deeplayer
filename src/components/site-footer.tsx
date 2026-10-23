import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-10 sm:mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="min-w-0 text-center md:text-left text-sm text-muted-foreground">
          © {new Date().getFullYear()} DPlayer — Play. Understand. Learn.
        </p>
        <nav aria-label="Footer navigation" className="flex shrink-0 gap-6 text-sm text-muted-foreground">
          <Link to="/" className="inline-flex min-h-11 items-center hover:text-foreground">Home</Link>
          <Link to="/features" className="inline-flex min-h-11 items-center hover:text-foreground">Features</Link>
          <Link to="/vision" className="inline-flex min-h-11 items-center hover:text-foreground">Vision</Link>
        </nav>
      </div>
    </footer>
  );
}