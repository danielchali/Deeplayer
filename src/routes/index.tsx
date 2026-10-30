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

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "DPlayer — AI Subtitles, Translation & Smart Video Player" },
    { name: "description", content: "Play, understand, and learn from any video with DPlayer. Get AI subtitles, translation, voice-matched dubbing, smart episode detection, and Study Mode." },
    { name: "keywords", content: "AI video player, AI subtitles, video translation, AI dubbing, media player, study mode" },
    { property: "og:title", content: "DPlayer — AI Subtitles, Translation & Smart Video Player" },
    { property: "og:description", content: "Play, understand, and learn from any video with AI subtitles, translation, voice-matched dubbing, and Study Mode." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://deeplayer.vercel.app/" },
    { name: "twitter:title", content: "DPlayer — AI Subtitles, Translation & Smart Video Player" },
    { name: "twitter:description", content: "Play, understand, and learn from any video with AI subtitles, translation, voice-matched dubbing, and Study Mode." },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "https://deeplayer.vercel.app/" }] }),
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

const releaseUrl = "https://github.com/danielchali/DPlayer/releases/tag/v0.0.1";

function Index() {
  return (
    <div className="min-h-screen bg-hero">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-6 sm:pt-9 pb-7 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Now in early development
          </span>
          <div className="mt-5 flex items-center justify-center gap-3 sm:gap-4">
            <img src="/favicon.png" alt="" className="h-12 sm:h-14 w-auto shrink-0" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">DPlayer</h1>
          </div>
          <p className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight">
            The <span className="text-gradient">smart player</span> for your videos.
          </p>
          <p className="mt-4 mx-auto max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Media players are great at playing videos — DPlayer is built to understand them.
            Subtitles, translation, dubbing, and answers, all inside the player.
          </p>
          <div className="mt-5 grid gap-3 max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
            <Button asChild variant="brand" className="h-11 px-6">
              <a href={releaseUrl} target="_blank" rel="noreferrer">
                Download DPlayer <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="link" className="h-11 px-4">
              <Link to="/features">Explore features <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="mx-auto mt-7 flex justify-center">
            <img src="/favicon.png" alt="DPlayer logo" className="h-20 w-20 sm:h-24 sm:w-24" />
          </div>
          <dl className="mt-6 mx-auto grid grid-cols-3 gap-3 max-w-md">
            {[["100+", "Languages"], ["1-click", "AI subtitles"], ["∞", "Sources"]].map(([k, v]) => (
              <div key={v} className="min-w-0">
                <dt className="text-2xl font-semibold">{k}</dt>
                <dd className="text-xs text-muted-foreground mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Why DPlayer */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-primary">Why DPlayer</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-normal">
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
              className="group rounded-lg surface-soft p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
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
        <div className="border-y border-border py-10 sm:py-14 text-center">
          <Mic2 className="mx-auto h-6 w-6 text-primary" />
          <blockquote className="mt-6 text-2xl md:text-3xl font-medium leading-snug tracking-normal">
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-normal">
          Play. <span className="text-gradient">Understand.</span> Learn.
        </h2>
        <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
          Download the latest DPlayer release and start playing today.
        </p>
        <Button asChild variant="brand" className="mt-8 h-11 px-6">
          <a href={releaseUrl} target="_blank" rel="noreferrer">
            Download DPlayer <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </section>

      <SiteFooter />
    </div>
  );
}
