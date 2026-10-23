import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  Languages,
  Mic2,
  ListOrdered,
  Cloud,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "DPlayer — The Smart Player for Your Videos" },
    { name: "description", content: "Play, understand, and learn with DPlayer: AI subtitles, translation, dubbing, smart episodes, and Study Mode." },
    { property: "og:title", content: "DPlayer — The Smart Player for Your Videos" },
    { property: "og:description", content: "Make your videos intelligent with AI subtitles, dubbing, and Study Mode." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const highlights = [
  {
    icon: Languages,
    title: "AI Subtitles & Dubbing",
    body: "Auto-fetch, generate, translate, and even voice-match dubbed audio for any video.",
  },
  {
    icon: GraduationCap,
    title: "Study Mode",
    body: "Ask the video. Jump straight to the moment a concept was explained.",
  },
  {
    icon: ListOrdered,
    title: "Smart Episode Detection",
    body: "Seasons and episodes play in the right order — never 1 then 10 again.",
  },
  {
    icon: Cloud,
    title: "Stream from Anywhere",
    body: "YouTube, Drive, FTP, NAS/SMB, and IPTV in one player.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-hero">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 pb-12 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-24 grid gap-10 lg:gap-14 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Now in early development
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              The <span className="text-gradient">smart player</span> for your videos.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Media players are great at playing videos — DPlayer is built to
              <em className="not-italic text-foreground/90"> understand</em> them.
              Subtitles, translation, dubbing, and answers, all inside the player.
            </p>
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <Button asChild className="h-11 bg-brand shadow-glow">
              <a
                href="#download"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-brand px-6 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                Get Early Access <ArrowRight className="h-4 w-4" />
              </a>
              </Button>
              <Button asChild variant="outline" className="h-11">
              <Link
                to="/features"
                className="inline-flex h-11 items-center justify-center rounded-md border border-border px-6 text-sm font-medium hover:bg-secondary transition-colors"
              >
                Explore features
              </Link>
              </Button>
            </div>

            <dl className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-md">
              {[
                ["100+", "Languages"],
                ["1-click", "AI subtitles"],
                ["∞", "Sources"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="text-2xl font-semibold text-gradient">{k}</dt>
                  <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative min-w-0 mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute -inset-6 bg-brand opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-soft">
              <img
                src={heroImg}
                alt="DPlayer visualizing AI subtitles, translation and neural analysis over a film frame"
                width={1024}
                height={1024}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why DPlayer */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Why DPlayer</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            VLC and friends play videos. DPlayer understands them.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            No subtitles? Foreign language? Three-hour lecture with one topic you
            actually care about? DPlayer solves the parts a media player never could.
          </p>
        </div>

        <div className="mt-8 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group rounded-xl glass p-6 hover:-translate-y-1 transition-transform"
              style={{ transition: "var(--transition-smooth)" }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Story block */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-20">
        <div className="rounded-2xl glass p-5 sm:p-8 md:p-12 shadow-soft">
          <Mic2 className="h-6 w-6 text-primary" />
          <blockquote className="mt-6 text-2xl md:text-3xl font-medium leading-snug tracking-tight">
            “Imagine watching a Japanese film with no subtitles and no English audio.
            <span className="text-gradient"> DPlayer transcribes, translates, and
            dubs it </span>
            — while preserving each actor's voice.”
          </blockquote>
          <p className="mt-6 text-muted-foreground">
            One player for any language, any source, any goal.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="mx-auto max-w-4xl px-4 sm:px-6 py-14 sm:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
          Play. <span className="text-gradient">Understand.</span> Learn.
        </h2>
        <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
          Be first to try DPlayer when the early build ships.
        </p>
        <form
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="you@domain.com"
            aria-label="Email address"
            className="min-w-0 w-full flex-1 h-11 rounded-md bg-secondary/60 border border-border px-4 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <Button
            type="submit"
            className="h-11 rounded-md bg-brand px-6 text-sm font-medium text-primary-foreground shadow-glow"
          >
            Notify me
          </Button>
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}
