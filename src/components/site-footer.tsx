import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} DPlayer — Play. Understand. Learn.
        </p>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <Link to="/features" className="hover:text-foreground">Features</Link>
          <Link to="/vision" className="hover:text-foreground">Vision</Link>
        </nav>
      </div>
    </footer>
  );
}