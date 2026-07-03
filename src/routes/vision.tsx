import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Vision — DPlayer" },
      {
        name: "description",
        content:
          "DPlayer isn't trying to replace VLC. It's making media intelligent — so you can play, understand, and learn from any video.",
      },
      { property: "og:title", content: "Vision — DPlayer" },
      {
        property: "og:description",
        content:
          "Why DPlayer exists and where it is going. Play. Understand. Learn.",
      },
    ],
  }),
  component: VisionPage,
});

function VisionPage() {
  return (
    <div className="min-h-screen bg-hero">
      <SiteHeader />

      <section className="mx-auto max-w-3xl px-6 pt-24 pb-16">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Vision</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          More than a <span className="text-gradient">media player</span>.
        </h1>
        <p className="mt-8 text-lg text-muted-foreground">
          Today's media players are excellent at playing videos, but they aren't
          very good at understanding them. DPlayer starts from the opposite
          direction: understanding first, playback everywhere.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16 space-y-10 text-lg leading-relaxed text-foreground/90">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">The moment it clicked</h2>
          <p className="mt-4 text-muted-foreground">
            As someone who rarely watches a movie without subtitles — even in
            English — I got tired of chasing subtitle files across the internet,
            hoping one was in sync. Existing players make you leave the app to
            solve the problem. DPlayer keeps the problem inside the player, and
            solves it with AI.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Not another play button</h2>
          <p className="mt-4 text-muted-foreground">
            DPlayer isn't trying to replace VLC by adding one more toolbar icon.
            It's trying to make media intelligent. Whether you're watching a
            movie, learning from an online course, or streaming from the cloud,
            DPlayer helps you understand, search, translate, summarize, and
            interact with your videos in ways traditional players simply can't.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Principles</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Understand first", "Every feature starts from what the video means, not just how it plays."],
              ["One player, any source", "Local, cloud, network, or streaming — same interface, same intelligence."],
              ["Respect the original", "Voice, tone, and intent are preserved when we translate or dub."],
              ["Save your time", "If a moment isn't in the video, we tell you fast."],
            ].map(([t, d]) => (
              <li key={t} className="rounded-xl glass p-5">
                <p className="font-semibold">{t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="rounded-2xl glass p-10 md:p-14 text-center shadow-soft">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Vision</p>
          <p className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight">
            <span className="text-gradient">DPlayer</span> — The Smart Player for Your Videos.
          </p>
          <p className="mt-6 text-xl text-muted-foreground">Play. Understand. Learn.</p>
          <Link
            to="/features"
            className="mt-10 inline-flex h-11 items-center gap-2 rounded-md bg-brand px-6 text-sm font-medium text-primary-foreground shadow-glow"
          >
            See what it does <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}