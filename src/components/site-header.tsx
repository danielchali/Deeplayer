import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/dplayer-logo.png.asset.json";

export function SiteHeader() {
  const linkCls =
    "text-sm text-muted-foreground hover:text-foreground transition-colors";
  return (
    <header className="sticky top-0 z-40 glass">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand shadow-glow">
            <Play className="h-4 w-4 text-primary-foreground" fill="currentColor" />
          </span>
          <span className="text-lg font-semibold tracking-tight">DPlayer</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }}>Home</Link>
          <Link to="/features" className={linkCls} activeProps={{ className: "text-foreground" }}>Features</Link>
          <Link to="/vision" className={linkCls} activeProps={{ className: "text-foreground" }}>Vision</Link>
        </nav>
        <a
          href="#download"
          className="inline-flex h-9 items-center rounded-md bg-brand px-4 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
        >
          Get Early Access
        </a>
      </div>
    </header>
  );
}