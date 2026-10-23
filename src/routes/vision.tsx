import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "DPlayer Vision — A Smarter Media Player for Any Video" },
      {
        name: "description",
        content:
          "DPlayer isn't trying to replace VLC. It's making media intelligent — so you can play, understand, and learn from any video.",
      },
      {
        name: "keywords",
        content: "intelligent media player, video understanding, AI video, DPlayer vision",
      },
      { property: "og:title", content: "DPlayer Vision — A Smarter Media Player for Any Video" },
      {
        property: "og:description",
        content:
          "Why DPlayer exists and where it is going. Play. Understand. Learn.",
      },
      { property: "og:url", content: "https://deeplayer.vercel.app/vision" },
      { name: "twitter:title", content: "DPlayer Vision — A Smarter Media Player for Any Video" },
      {
        name: "twitter:description",
        content:
          "DPlayer makes media intelligent — so you can play, understand, and learn from any video.",
      },
    ],
    links: [{ rel: "canonical", href: "https://deeplayer.vercel.app/vision" }],
  }),
  component: VisionPage,
});

function VisionPage() {
  return (
    <div className="min-h-screen bg-hero">
      <SiteHeader />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pt-10 sm:pt-20 pb-10 sm:pb-16">
        <p className="text-sm font-medium text-primary">Vision</p>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-normal leading-[1.05]">
          More than a <span className="text-gradient">media player</span>.
        </h1>
        <p className="mt-8 text-lg text-muted-foreground">
          Today's media players are excellent at playing videos, but they aren't
          very good at understanding them. DPlayer starts from the opposite
          direction: understanding first, playback everywhere.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-12 sm:pb-16 space-y-10 text-lg leading-relaxed text-foreground/90">
        <div>
          <h2 className="text-2xl font-semibold tracking-normal">The moment it clicked</h2>
          <p className="mt-4 text-muted-foreground">
            As someone who rarely watches a movie without subtitles — even in
            English — I got tired of chasing subtitle files across the internet,
            hoping one was in sync. Existing players make you leave the app to
            solve the problem. DPlayer keeps the problem inside the player, and
            solves it with AI.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-normal">Not another play button</h2>
          <p className="mt-4 text-muted-foreground">
            DPlayer isn't trying to replace VLC by adding one more toolbar icon.
            It's trying to make media intelligent. Whether you're watching a
            movie, learning from an online course, or streaming from the cloud,
            DPlayer helps you understand, search, translate, summarize, and
            interact with your videos in ways traditional players simply can't.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-normal">Principles</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Understand first", "Every feature starts from what the video means, not just how it plays."],
              ["One player, any source", "Local, cloud, network, or streaming — same interface, same intelligence."],
              ["Respect the original", "Voice, tone, and intent are preserved when we translate or dub."],
              ["Save your time", "If a moment isn't in the video, we tell you fast."],
            ].map(([t, d]) => (
              <li key={t} className="rounded-lg surface-soft p-6">
                <p className="font-semibold">{t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-14 sm:pb-24">
        <div className="border-t border-border pt-10 sm:pt-14 text-center">
          <p className="text-sm font-medium text-primary">Vision</p>
          <p className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-normal">
            <span className="text-gradient">DPlayer</span> — The Smart Player for Your Videos.
          </p>
          <p className="mt-6 text-xl text-muted-foreground">Play. Understand. Learn.</p>
          <Button asChild variant="brand" className="mt-8 h-11 w-full sm:w-auto">
          <Link
            to="/features"
            className="px-6"
          >
            See what it does <ArrowRight className="h-4 w-4" />
          </Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
