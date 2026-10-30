import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const releaseUrl = "https://github.com/danielchali/DPlayer/releases/download/v0.0.3/DPlayer-Setup-0.0.3-x64.exe";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkCls =
    "inline-flex min-h-11 items-center text-sm text-muted-foreground hover:text-foreground transition-colors";
  return (
    <header className="sticky top-0 z-40 glass shadow-soft">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 md:flex md:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2 group" onClick={() => setMenuOpen(false)}>
          <img
            src={`${import.meta.env.BASE_URL}favicon.png`}
            alt="DPlayer logo"
            className="h-8 w-auto shrink-0"
          />
          <span className="truncate text-lg font-semibold">DPlayer</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }}>Home</Link>
          <Link to="/features" className={linkCls} activeProps={{ className: "text-foreground" }}>Features</Link>
          <Link to="/vision" className={linkCls} activeProps={{ className: "text-foreground" }}>Vision</Link>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Button asChild variant="brand" className="hidden h-10 sm:inline-flex">
            <a href={releaseUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Download DPlayer</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-border bg-background px-4 py-3 sm:px-6 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
            <Link to="/" className={linkCls} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/features" className={linkCls} onClick={() => setMenuOpen(false)}>Features</Link>
            <Link to="/vision" className={linkCls} onClick={() => setMenuOpen(false)}>Vision</Link>
            <Button asChild variant="brand" className="mt-2 h-11 w-full sm:hidden">
              <a href={releaseUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Download DPlayer</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
